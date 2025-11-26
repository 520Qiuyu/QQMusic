import { getAlbumPicUrl } from '@/apis/album';
import { CopyText } from '@/components';
import type { Option as SearchFormOption } from '@/components/SearchForm';
import SearchForm from '@/components/SearchForm';
import { FileType } from '@/constants';
import { usePlayMusic } from '@/hooks/usePlayMusic';
import { promiseLimit, uniqueArrayByKey } from '@/utils';
import { downloadAsJson } from '@/utils/download';
import { msgLoading, msgWarning } from '@/utils/modal';
import {
  DownloadOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Image, Modal, Space, Table, Typography } from 'antd';
import type { ColumnType } from 'antd/es/table';
import type { TableProps } from 'antd/lib';
import { groupBy } from 'lodash';
import { forwardRef, useState, type ForwardedRef } from 'react';
import { getSingerAllHotSong } from '../../apis/singer';
import { useFilter, useGetData, useVisible } from '../../hooks';
import type { Ref } from '../../hooks/useVisible';
import type { SingerHotSongExtra, SongInfo } from '../../types/singer';
import styles from './index.module.scss';

interface SearchParams {}
interface IOpenParams {
  singerId: number;
  singerMid: string;
  singerName: string;
  singerPic?: string;
}

const { Text, Title } = Typography;

const defaultLoadingData = {
  total: 0,
  loadedSong: 0,
  songList: [] as SongInfo[],
  totalSong: 0,
  totalAlbum: 0,
  totalMV: 0,
  extras: [] as SingerHotSongExtra[],
};

const HotSongModal = (props, ref: ForwardedRef<Ref<any, IOpenParams>>) => {
  const { visible, open, close } = useVisible(
    {
      onOpen: (params: IOpenParams) => {
        console.log('params', params);
        setSingerInfo(params);
      },
      onReset: () => {
        setSingerInfo({} as IOpenParams);
        setSelectedRowKeys([]);
        setSelectedRows([]);
        setLoadingData({
          ...defaultLoadingData,
        });
      },
    },
    ref,
  );

  const { play, pause, stop, isPlaying, download, getUrl, getLyric } = usePlayMusic();

  const [singerInfo, setSingerInfo] = useState<IOpenParams>({} as IOpenParams);
  const [loadingData, setLoadingData] = useState(defaultLoadingData);
  // 获取热门歌曲数据
  const { loading } = useGetData(
    () =>
      getSingerAllHotSong(singerInfo.singerMid, {
        onChange: (result) => {
          setLoadingData({
            total: result.total,
            loadedSong: result.songList.length,
            songList: result.songList,
            totalSong: result.total,
            totalAlbum: result.totalAlbum,
            totalMV: result.totalMV,
            extras: result.extras,
          });
        },
      }),
    undefined,
    {
      monitors: [singerInfo.singerMid, visible],
      returnFunction: () => !visible || !singerInfo.singerMid,
    },
  );
  const { songList = [], totalSong, totalAlbum, totalMV, extras } = loadingData;

  const [searchParams, setSearchParams] = useState<SearchParams>({
    keyword: '',
  });
  const searchFormOptions: SearchFormOption[] = [
    {
      label: '歌曲名称',
      name: 'name',
      type: 'select',
      options: uniqueArrayByKey(songList, 'name').map((item) => ({
        label: item.name,
        value: item.name,
      })),
      inputProps: {
        mode: 'multiple',
      },
    },
    {
      label: '专辑名称',
      name: 'albumName',
      type: 'select',
      options: uniqueArrayByKey(
        songList.map((item) => item.album),
        'name',
      ).map((item) => ({
        label: item.name,
        value: item.name,
      })),
      inputProps: {
        mode: 'multiple',
      },
    },
  ];
  const { filteredList, handleFilter } = useFilter(songList, {
    fields: {
      name: {
        getValue: (item) => item.name,
      },
      albumName: {
        getValue: (item) => item.album?.name,
      },
    },
  });

  /**
   * 根据文件大小信息判断最高音质
   * @param file 文件信息
   * @returns 最高音质类型
   */
  const getHighestQuality = (file: SongInfo['file']): keyof typeof FileType => {
    // 按音质从高到低排序检查
    if (file.size_flac > 0) return 'flac';
    if (file.size_ape > 0) return 'ape';
    if (file.size_320mp3 > 0) return 320;
    if (file.size_192aac > 0) return 'm4a';
    if (file.size_128mp3 > 0) return 128;

    // 默认返回128kbps
    return 128;
  };

  const handlePlay = (record: SongInfo) => {
    console.log('record', record);
    const { mid, file } = record;
    const quality = getHighestQuality(file);
    console.log('选择音质:', quality);
    play(mid, quality);
  };

  const [downloading, setDownloading] = useState<string | undefined>();
  const handleDownload = async (record: SongInfo) => {
    try {
      setDownloading(record.mid);
      const { mid, name, file } = record;
      const quality = getHighestQuality(file);
      await download(mid, name, quality);
    } catch (error) {
      console.log('error', error);
    } finally {
      setDownloading(undefined);
    }
  };

  // 表格列配置
  const columns: ColumnType<SongInfo>[] = [
    {
      title: '歌曲信息',
      dataIndex: 'name',
      key: 'name',
      width: 250,
      render: (text, record) => (
        <Space size='middle' className={styles['song-info']}>
          <div className={styles['album-cover']}>
            <Image
              width={40}
              height={40}
              src={record.album?.mid ? getAlbumPicUrl(record.album.mid) : ''}
              alt={record.album?.name || '专辑封面'}
            />
          </div>
          <div className={styles['song-details']}>
            <div className={styles['song-name']} title={text}>
              {text}
            </div>
            <div className={styles['song-album']} title={record.album?.name || '未知专辑'}>
              {record.album?.name || '未知专辑'}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: '歌手',
      dataIndex: 'singer',
      key: 'singer',
      width: 200,
      render: (singer: SongInfo['singer']) => (
        <Space size='small'>
          <Avatar icon={<UserOutlined />} src={singerInfo?.singerPic} size={40} />
          <div className={styles['singer-info']}>
            <div className={styles['singer-name']} title={singer?.[0]?.name || '未知歌手'}>
              {singer?.[0]?.name || '未知歌手'}
            </div>
            <div className={styles['singer-id']} title={singer?.[0]?.id?.toString() || ''}>
              {singer?.[0]?.id || ''}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: '时长',
      dataIndex: 'interval',
      key: 'interval',
      width: 100,
      align: 'center',
      render: (interval: number) => {
        const minutes = Math.floor(interval / 60);
        const seconds = interval % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      },
    },
    {
      title: '发布时间',
      dataIndex: 'time_public',
      key: 'time_public',
      width: 150,
      align: 'center',
      render: (_, __, index: number) => {
        const extra = extras?.[index];
        const uploadTime = extra?.upload_time || '';
        return (
          <Text className={styles['upload-time']} title={uploadTime}>
            {uploadTime}
          </Text>
        );
      },
    },
    {
      title: '歌曲ID',
      dataIndex: 'id',
      key: 'id',
      width: 120,
      align: 'center',
      render: (id: number) => <CopyText className={styles['song-id-text']} text={id + ''} />,
    },
    {
      title: '歌曲MID',
      dataIndex: 'mid',
      key: 'mid',
      width: 200,
      align: 'center',
      render: (mid: string) => <CopyText className={styles['song-mid-text']} text={mid} />,
    },
    {
      title: '操作',
      key: 'action',
      width: 250,
      align: 'center',
      fixed: 'right',
      render: (_, record: SongInfo) => {
        const quality = getHighestQuality(record.file);
        const qualityText =
          quality === 'ape'
            ? 'APE'
            : quality === 'flac'
              ? 'FLAC'
              : quality === 320
                ? '320k'
                : quality === 'm4a'
                  ? 'AAC'
                  : '128k';

        return (
          <Space size='middle'>
            <Button
              type='link'
              size='small'
              icon={isPlaying === record.mid ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              onClick={() => {
                if (isPlaying === record.mid) {
                  pause();
                } else {
                  handlePlay(record);
                }
              }}
              title={`播放 (${qualityText})`}>
              播放
            </Button>
            {/* <Button type='link' size='small' icon={<HeartOutlined />}>
              收藏
            </Button> */}
            <Button
              type='link'
              size='small'
              loading={downloading === record.mid}
              icon={<DownloadOutlined />}
              onClick={() => {
                handleDownload(record);
              }}>
              下载
            </Button>
          </Space>
        );
      },
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [selectedRows, setSelectedRows] = useState<SongInfo[]>([]);
  const rowSelection: TableProps<SongInfo>['rowSelection'] = {
    preserveSelectedRowKeys: true,
    selectedRowKeys: selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys as string[]);
      setSelectedRows(selectedRows as SongInfo[]);
      console.log('selectedRowKeys', selectedRowKeys);
      console.log('selectedRows', selectedRows);
    },
  };

  const renderTitle = () => {
    return (
      <div className={styles['modal-title']}>
        <div className={styles['title-content']}>
          <Title level={4} style={{ margin: 0 }}>
            {singerInfo.singerName} - 热门歌曲
          </Title>
          <div className={styles['title-stats']}>
            <span className={`${styles['stat-item']} ${loading ? styles['loading'] : ''}`}>
              <span className={styles['stat-label']}>歌曲</span>
              <span className={styles['stat-value']}>{loading ? '...' : totalSong || 0}</span>
            </span>
            <span className={`${styles['stat-item']} ${loading ? styles['loading'] : ''}`}>
              <span className={styles['stat-label']}>专辑</span>
              <span className={styles['stat-value']}>{loading ? '...' : totalAlbum || 0}</span>
            </span>
            <span className={`${styles['stat-item']} ${loading ? styles['loading'] : ''}`}>
              <span className={styles['stat-label']}>MV</span>
              <span className={styles['stat-value']}>{loading ? '...' : totalMV || 0}</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  /** 批量下载选中歌曲的JSON */
  const [downloadingBatchJson, setDownloadingBatchJson] = useState(false);
  const handleBatchDownloadJson = async () => {
    try {
      if (selectedRows.length === 0) {
        msgWarning('请先选择要下载的歌曲');
        return;
      }
      console.log('selectedRows', selectedRows);
      setDownloadingBatchJson(true);
      // 首先按照专辑groupBy
      const groupData = groupBy(selectedRows, 'album.mid');
      console.log('groupData', groupData);
      const result = [] as {
        albumName: string;
        albumCover: string;
        list: {
          songName: string;
          url: string;
          lrcContent: string;
        }[];
      }[];
      const hide = msgLoading(`正在准备下载 ${selectedRows.length} 首歌曲...`);
      for (const albumMid in groupData) {
        const album = groupData[albumMid];
        const albumName = album[0].album.name;
        const albumCover = getAlbumPicUrl(albumMid);
        const promiseArr = album.map((song) => async () => {
          const lrcContent = await getLyric(song.mid);
          const url = await getUrl(song.mid, getHighestQuality(song.file));
          return {
            songName: song.name,
            url,
            lrcContent,
          };
        });
        const albumSongs = await promiseLimit(promiseArr, 6);
        result.push({
          albumName: albumName,
          albumCover: albumCover,
          list: albumSongs,
        });
      }
      downloadAsJson(result, `${singerInfo.singerName}-专辑`);
      hide();
    } catch (error) {
      console.error('批量下载JSON失败:', error);
    } finally {
      setDownloadingBatchJson(false);
    }
  };

  /** 批量下载歌曲 */
  const [downloadingBatch, setDownloadingBatch] = useState(false);
  const handleBatchDownload = async () => {
    try {
      if (selectedRows.length === 0) {
        msgWarning('请先选择要下载的歌曲');
        return;
      }
      console.log('selectedRows', selectedRows);
      setDownloadingBatch(true);
      for (const song of selectedRows) {
        await download(song.mid, song.name, getHighestQuality(song.file));
      }
    } catch (error) {
      console.error('批量下载失败:', error);
    } finally {
      setDownloadingBatch(false);
    }
  };

  const renderFooter = () => {
    return (
      <div className={styles['footer']}>
        {/* 已选择数目 */}
        <div className={styles['selected-count']}>已选择 {selectedRows.length} 首歌曲</div>
        <Space>
          {/* 全部选择 */}
          {selectedRowKeys?.length < songList?.length ? (
            <Button
              onClick={() => {
                setSelectedRowKeys(songList?.map((item) => item.mid) || []);
                setSelectedRows(songList || []);
              }}>
              全部选择
            </Button>
          ) : (
            <Button
              onClick={() => {
                setSelectedRowKeys([]);
                setSelectedRows([]);
              }}>
              清空选择
            </Button>
          )}

          {/* 下载JSON选中歌曲 */}
          <Button
            type='primary'
            onClick={handleBatchDownloadJson}
            loading={downloadingBatchJson}
            disabled={!selectedRows?.length}>
            下载JSON{selectedRows?.length ? `(${selectedRows?.length})` : ''}
          </Button>
          <Button
            type='primary'
            onClick={handleBatchDownload}
            loading={downloadingBatch}
            disabled={!selectedRows?.length}>
            下载选中歌曲{selectedRows?.length ? `(${selectedRows?.length})` : ''}
          </Button>
        </Space>
      </div>
    );
  };

  return (
    <Modal
      title={renderTitle()}
      open={visible}
      onCancel={close}
      footer={renderFooter()}
      width={1200}
      centered
      className={styles['hot-song-modal']}>
      {/* 搜索表单 */}
      <SearchForm
        options={searchFormOptions}
        searchParams={searchParams}
        onSearch={handleFilter}
        style={{ marginBottom: 16 }}
      />

      {/* 歌曲列表 */}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={filteredList || []}
        rowKey='mid'
        loading={loading && !loadingData.loadedSong}
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total) => `共 ${total} 首歌曲`,
        }}
        scroll={{ y: 500, x: 1100 }}
        className={styles['song-table']}
      />
    </Modal>
  );
};

export default forwardRef(HotSongModal);
