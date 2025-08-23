import { CopyText } from '@/components';
import {
  DownloadOutlined,
  HeartOutlined,
  LoadingOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Image, Modal, Pagination, Space, Table, Typography } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { forwardRef, useMemo, useState, type ForwardedRef } from 'react';
import { getSingerHotSong } from '../../apis/singer';
import { useGetData, useVisible } from '../../hooks';
import type { Ref } from '../../hooks/useVisible';
import type { SingerInfo, SongInfo } from '../../types/singer';
import styles from './index.module.scss';
import { getAlbumPicUrl } from '@/apis/album';
import { usePlayMusic } from '@/hooks/usePlayMusic';
import { FileType } from '@/constants';
import type { TableProps } from 'antd/lib';

interface SearchParams {
  pageNum: number;
  pageSize: number;
}
interface IOpenParams {
  singerId: number;
  singerMid: string;
  singerName: string;
  singerPic?: string;
}

const { Text, Title } = Typography;

const HotSongModal = forwardRef((props, ref: ForwardedRef<Ref<any, IOpenParams>>) => {
  const { visible, open, close } = useVisible(
    {
      onOpen: (params: IOpenParams) => {
        console.log('params', params);
        setSingerInfo(params);
      },
      onReset: () => {
        setSingerInfo({} as IOpenParams);
      },
    },
    ref,
  );

  const [searchParams, setSearchParams] = useState<SearchParams>({
    pageNum: 1,
    pageSize: 10,
  });
  const [singerInfo, setSingerInfo] = useState<IOpenParams>({} as IOpenParams);

  // 获取热门歌曲数据
  const { data, loading } = useGetData(
    (p) => getSingerHotSong(singerInfo.singerMid, p),
    {
      sin: (searchParams.pageNum - 1) * searchParams.pageSize,
      num: searchParams.pageSize,
    },
    {
      monitors: [singerInfo.singerMid, searchParams],
      returnFunction: () => !visible || !singerInfo.singerMid,
    },
  );

  const { play, pause, stop, isPlaying, download } = usePlayMusic();

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

  const [downloading, setDownloading] = useState(false);
  const handleDownload = async (record: SongInfo) => {
    try {
      setDownloading(true);
      const { mid, name, file } = record;
      const quality = getHighestQuality(file);
      await download(mid, name, quality);
    } catch (error) {
      console.log('error', error);
    } finally {
      setDownloading(false);
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
        const extra = data?.extras?.[index];
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
              icon={downloading ? <LoadingOutlined /> : <DownloadOutlined />}
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
              <span className={styles['stat-value']}>
                {loading ? '...' : data?.total_song || 0}
              </span>
            </span>
            <span className={`${styles['stat-item']} ${loading ? styles['loading'] : ''}`}>
              <span className={styles['stat-label']}>专辑</span>
              <span className={styles['stat-value']}>
                {loading ? '...' : data?.total_album || 0}
              </span>
            </span>
            <span className={`${styles['stat-item']} ${loading ? styles['loading'] : ''}`}>
              <span className={styles['stat-label']}>MV</span>
              <span className={styles['stat-value']}>{loading ? '...' : data?.total_mv || 0}</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderFooter = () => {
    return (
      <div className={styles['footer']}>
        {/* 已选择数目 */}
        <div className={styles['selected-count']}>已选择 {selectedRows.length} 首歌曲</div>
        <Button type='primary' onClick={() => {}}>
          下载全部
        </Button>
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
      {/* 歌曲列表 */}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data?.songlist || []}
        rowKey='mid'
        loading={loading}
        pagination={false}
        scroll={{ y: 500, x: 1100 }}
        className={styles['song-table']}
      />

      {/* 分页器 */}
      <Pagination
        current={searchParams.pageNum}
        total={data?.total_song || 0}
        showSizeChanger={true}
        showQuickJumper={true}
        align='end'
        showTotal={(total) => `共 ${total} 首歌曲`}
        onChange={(page, pageSize) => {
          setSearchParams({ ...searchParams, pageNum: page, pageSize });
        }}
      />
    </Modal>
  );
});

export default HotSongModal;
