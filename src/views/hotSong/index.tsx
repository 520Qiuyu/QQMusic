import { getAlbumPicUrl } from '@/apis/album';
import { CopyText, MyButton } from '@/components';
import type { Option as SearchFormOption } from '@/components/SearchForm';
import SearchForm from '@/components/SearchForm';
import { FileType } from '@/constants';
import { usePlayMusic } from '@/hooks/usePlayMusic';
import { getFile_qualityList, promiseLimit, uniqueArrayByKey } from '@/utils';
import { downloadAsJson } from '@/utils/download';
import { msgError, msgSuccess, msgWarning } from '@/utils/modal';
import {
  CloudDownloadOutlined,
  DownloadOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Image, message, Modal, Select, Space, Table, Tag, Typography } from 'antd';
import type { ColumnType } from 'antd/es/table';
import type { TableProps } from 'antd/lib';
import { groupBy } from 'lodash';
import { forwardRef, useState, type ForwardedRef } from 'react';
import { getSingerAllHotSong } from '../../apis/singer';
import { useConfig, useFilter, useGetData, useVisible } from '../../hooks';
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
  const { downloadConfig } = useConfig();
  const { quality: defaultQuality } = downloadConfig;
  const { play, pause, stop, isPlaying, download, getUrl, getLyric, convertToNeteaseMusic } =
    usePlayMusic();

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
  const { filteredList, setFilteredList, handleFilter } = useFilter(songList, {
    fields: {
      name: {
        getValue: (item) => item.name,
      },
      albumName: {
        getValue: (item) => item.album?.name,
      },
    },
  });

  const handleChooseQuality = (record: SongInfo, quality: keyof typeof FileType) => {
    setFilteredList(
      filteredList.map((item) => {
        if (item.mid === record.mid) {
          return {
            ...item,
            quality,
          };
        }
        return item;
      }),
    );
  };
  const handlePlay = (record: SongInfo & { quality?: keyof typeof FileType }) => {
    console.log('record', record);
    const { mid, quality, file } = record;
    const finalQuality = getQuality(file, defaultQuality, quality);
    console.log('当前播放歌曲:', record.name, '音质:', finalQuality);
    play(mid, finalQuality);
  };

  const handleDownload = async (record: SongInfo & { quality?: keyof typeof FileType }) => {
    try {
      const { mid, name, quality, file } = record;
      const finalQuality = getQuality(file, defaultQuality, quality);
      console.log('当前下载歌曲:', name, '音质:', finalQuality);
      await download(mid, finalQuality);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleConvertToNeteaseMusic = async (
    record: SongInfo & { quality?: keyof typeof FileType },
  ) => {
    try {
      const { mid, name, quality, file } = record;
      const finalQuality = getQuality(file, defaultQuality, quality);
      console.log('当前转存网易云歌曲:', name, '音质:', finalQuality);
      await convertToNeteaseMusic(mid, { quality: finalQuality });
    } catch (error) {
      console.log('error', error);
      msgError('转存网易云失败');
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
      title: '音质',
      dataIndex: 'file',
      key: 'file',
      width: 100,
      align: 'center',
      render: (file: SongInfo['file'], record: SongInfo) => {
        const qualityList = getFile_qualityList(file);
        const defaultValue = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
        return (
          <Select
            options={qualityList.map((quality) => ({
              label: quality,
              value: quality,
            }))}
            defaultValue={defaultValue}
            style={{ width: '100%' }}
            onChange={(value) => {
              handleChooseQuality(record, value as keyof typeof FileType);
            }}
          />
        );
      },
    },
    // 格式
    {
      title: '格式',
      dataIndex: 'format',
      key: 'format',
      width: 150,
      align: 'center',
      render: (_, record: SongInfo) => {
        const qualityList = getFile_qualityList(record.file);
        // 定义不同音质对应的颜色
        const qualityColorMap = {
          flac: 'green',
          ape: 'volcano',
          320: 'blue',
          m4a: 'orange',
          128: 'gray',
        };
        // 音质tag文本映射
        const qualityTextMap = {
          flac: 'FLAC',
          ape: 'APE',
          320: '320k',
          m4a: 'M4A',
          128: '128k',
        };
        return (
          <Space wrap>
            {qualityList.map((quality) => (
              <Tag key={quality} color={qualityColorMap[quality]}>
                {qualityTextMap[quality] || quality}
              </Tag>
            ))}
          </Space>
        );
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
        return (
          <Space size='small' wrap>
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
              }}>
              播放
            </Button>
            <MyButton
              type='link'
              size='small'
              icon={<DownloadOutlined />}
              onClick={() => handleDownload(record)}>
              下载
            </MyButton>
            <MyButton
              type='link'
              size='small'
              icon={<CloudDownloadOutlined />}
              onClick={() => handleConvertToNeteaseMusic(record)}>
              转存网易云
            </MyButton>
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

  /** 批量转存网易云选中歌曲 */
  const handleBatchConvertToNeteaseMusic = async () => {
    try {
      if (selectedRows.length === 0) {
        msgWarning('请先选择要转存网易云的歌曲');
        return;
      }
      const loadingKey = 'convert-to-netease-music';
      message.loading({
        key: loadingKey,
        content: `正在准备转存网易云 ${selectedRows.length} 首歌曲`,
        duration: 0,
      });
      let songIndex = 1;
      for (const song of selectedRows) {
        const record = song as SongInfo & { quality?: keyof typeof FileType };
        const finalQuality = getQuality(record.file, defaultQuality, record.quality);
        message.loading({
          key: loadingKey,
          content: `第 ${songIndex++} / ${selectedRows.length} 首歌曲：《${song.name}》 开始转存！`,
          duration: 0,
        });
        await convertToNeteaseMusic(song.mid, { quality: finalQuality });
      }
      message.success({
        key: loadingKey,
        content: `成功转存 ${selectedRows.length} 首歌曲！`,
        duration: 0,
      });
      message.destroy(loadingKey);
    } catch (error) {
      console.error('批量转存网易云失败:', error);
    }
  };

  /** 批量下载选中歌曲的JSON */
  const handleBatchDownloadJson = async () => {
    try {
      if (selectedRows.length === 0) {
        msgWarning('请先选择要下载的歌曲');
        return;
      }
      console.log('selectedRows', selectedRows);
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
      const loadingKey = 'download-json';
      message.loading({
        key: loadingKey,
        content: `正在准备下载 ${selectedRows.length} 首歌曲，其中包括 ${Object.keys(groupData).length} 个专辑`,
        duration: 0,
      });
      let albumIndex = 1;
      let songIndex = 1;
      for (const albumMid in groupData) {
        const album = groupData[albumMid];
        const albumName = album[0].album.name;
        const albumCover = getAlbumPicUrl(albumMid);
        message.loading({
          key: loadingKey,
          content: `开始下载第 ${albumIndex} / ${Object.keys(groupData).length} 个专辑 ：《${albumName}》`,
          duration: 0,
        });
        const promiseArr = album.map((song) => async () => {
          const lrcContent = await getLyric(song.mid);
          const finalQuality = getQuality(song.file, defaultQuality);
          const url = await getUrl(song.mid, finalQuality);
          message.loading({
            key: loadingKey,
            content: `第 ${songIndex++} / ${album.length} 首歌曲：《${song.name}》 下载完成！`,
            duration: 0,
          });
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
        message.success({
          key: loadingKey,
          content: `第 ${albumIndex++} / ${Object.keys(groupData).length} 个专辑：《${albumName}》下载完成！`,
          duration: 0,
        });
      }
      message.destroy(loadingKey);
      downloadAsJson(result, `${singerInfo.singerName}-专辑`);
    } catch (error) {
      console.error('批量下载JSON失败:', error);
    }
  };

  /** 批量下载歌曲 */
  const handleBatchDownload = async () => {
    try {
      if (selectedRows.length === 0) {
        msgWarning('请先选择要下载的歌曲');
        return;
      }
      const loadingKey = 'download-song';
      message.loading({
        key: loadingKey,
        content: `正在准备下载 ${selectedRows.length} 首歌曲`,
        duration: 0,
      });
      let songIndex = 1;
      for (const song of selectedRows) {
        const finalQuality = getQuality(song.file, defaultQuality);
        message.loading({
          key: loadingKey,
          content: `第 ${songIndex++} / ${selectedRows.length} 首歌曲：《${song.name}》 开始下载！`,
          duration: 0,
        });
        await download(song.mid, finalQuality);
        message.success({
          key: loadingKey,
          content: `第 ${songIndex++} / ${selectedRows.length} 首歌曲：《${song.name}》 下载完成！`,
          duration: 0,
        });
      }
      msgSuccess(`成功下载 ${selectedRows.length} 首歌曲！`);
      message.destroy(loadingKey);
    } catch (error) {
      console.error('批量下载失败:', error);
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

          {/* 转存网易云选中歌曲 */}
          <MyButton
            type='primary'
            onClick={handleBatchConvertToNeteaseMusic}
            disabled={!selectedRows?.length}>
            转存网易云{selectedRows?.length ? `(${selectedRows?.length})` : ''}
          </MyButton>
          {/* 下载JSON选中歌曲 */}
          <MyButton
            type='primary'
            onClick={handleBatchDownloadJson}
            disabled={!selectedRows?.length}>
            下载JSON{selectedRows?.length ? `(${selectedRows?.length})` : ''}
          </MyButton>
          <MyButton type='primary' onClick={handleBatchDownload} disabled={!selectedRows?.length}>
            下载选中歌曲{selectedRows?.length ? `(${selectedRows?.length})` : ''}
          </MyButton>
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

const getQuality = (
  file: SongInfo['file'],
  defaultQuality: keyof typeof FileType,
  chooseQuality?: keyof typeof FileType,
) => {
  const qualityList = getFile_qualityList(file);
  const songDefaultQuality = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
  const finalQuality = chooseQuality || songDefaultQuality;
  return finalQuality;
};
