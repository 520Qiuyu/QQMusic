import { getAlbumPicUrl } from '@/apis/album';
import { CopyText } from '@/components';
import { useCompRef, useGetAlbumDetail, usePlayMusic } from '@/hooks';
import type { AlbumItem } from '@/types/search';
import { downloadAsJson } from '@/utils/download';
import { msgError, msgLoading, msgSuccess } from '@/utils/modal';
import AlbumDetail from '@/views/albumDetail';
import {
  DownloadOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import { Button, Image, message, Space, Table } from 'antd';
import type { ColumnType } from 'antd/es/table';
import styles from '../index.module.scss';

interface AlbumTabProps {
  data: AlbumItem[];
  loading: boolean;
}

const AlbumTab = ({ data, loading }: AlbumTabProps) => {
  const albumDetailRef = useCompRef(AlbumDetail);

  const { play, pause, stop, isPlaying, download } = usePlayMusic();
  const {
    albumInfo,
    isLoading,
    getAlbumDetail,
    getAlbumSongList,
    playAlbum,
    downloadAlbumSong,
    getDownLoadJson,
  } = useGetAlbumDetail();

  /** 处理专辑播放 */
  const [playing, setPlaying] = useState<string | undefined>();
  const handlePlay = async (record: AlbumItem) => {
    try {
      setPlaying(record.albumMID);
      const { albumMID, albumName } = record;
      // 使用 msgLoading 的 Promise 形式，让它自动处理成功和失败
      const hide = msgLoading(`正在加载《${albumName}》...`);

      await playAlbum(albumMID);

      hide();
      msgSuccess(`《${albumName}》开始播放`);
    } catch (error) {
      console.error('播放失败:', error);
    } finally {
      setPlaying(undefined);
    }
  };

  const [downloading, setDownloading] = useState<string | undefined>();
  /**
   * 处理专辑下载
   * @param record 专辑信息
   */
  const handleDownload = async (record: AlbumItem) => {
    const loadingKey = 'download-album-song';
    try {
      setDownloading(record.albumMID);
      const { albumMID, albumName } = record;
      message.loading({
        key: loadingKey,
        content: `正在下载专辑歌曲《${albumName}》...`,
        duration: 0,
      });
      await downloadAlbumSong(albumMID, {
        onChange: (options) => {
          message.loading({
            key: loadingKey,
            content: `正在下载第${options.index}首歌曲《${options.songList[options.index - 1].songname}》...`,
            duration: 0,
          });
        },
      });
      message.destroy(loadingKey);
      msgSuccess(`《${albumName}》下载成功！`);
    } catch (error) {
      console.error('下载失败:', error);
    } finally {
      setDownloading(undefined);
      message.destroy(loadingKey);
    }
  };

  const [downloadingJson, setDownloadingJson] = useState<string | undefined>(undefined);
  const handleDownloadJson = async (record: AlbumItem) => {
    if (!record.albumMID) return;
    try {
      setDownloadingJson(record.albumMID);
      const { albumMID, albumName } = record;
      const res = await getDownLoadJson(albumMID);
      downloadAsJson([res], `${albumName}-专辑`);
    } catch (error) {
      msgError('下载JSON失败: ' + (error as Error).message);
    } finally {
      setDownloadingJson(undefined);
    }
  };

  // 专辑表格列配置
  const columns_album: ColumnType<AlbumItem>[] = [
    {
      title: '专辑信息',
      dataIndex: 'albumName',
      width: 300,
      render: (text, record) => (
        <Space size='middle' className={styles['song-info']}>
          <div className={styles['song-cover']}>
            <Image src={getAlbumPicUrl(record.albumMID)} />
          </div>
          <div
            className={styles['song-details']}
            style={{
              cursor: 'pointer',
            }}
            onClick={() => albumDetailRef.current?.open({ albummid: record.albumMID })}>
            <div className={styles['song-name']} title={text}>
              {text}
            </div>
            <div className={styles['song-album']} title={record.singerName || ''}>
              {record.singerName || ''}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: '歌手',
      dataIndex: 'singerName',
      width: 200,
      ellipsis: true,
    },
    {
      title: '发布时间',
      dataIndex: 'publicTime',
      width: 150,
      align: 'center',
    },
    {
      title: '歌曲数量',
      dataIndex: 'song_count',
      width: 100,
      align: 'center',
    },
    {
      title: '专辑ID',
      dataIndex: 'albumMID',
      width: 200,
      align: 'center',
      render: (albumMID: string) => (
        <CopyText className={styles['song-mid-text']} text={albumMID} />
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 300,
      align: 'center',
      fixed: 'right',
      render: (_, record) => {
        return (
          <Space size='middle'>
            <Button
              type='link'
              size='small'
              loading={playing === record.albumMID}
              icon={playing === record.albumMID ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              onClick={() => {
                if (isPlaying === record.albumMID) {
                  pause();
                } else {
                  handlePlay(record);
                  return;
                }
              }}
              title='播放专辑'>
              播放
            </Button>
            <Button
              type='link'
              size='small'
              loading={downloadingJson === record.albumMID}
              icon={<SaveOutlined />}
              onClick={() => handleDownloadJson(record)}
              title='下载JSON'>
              下载JSON
            </Button>
            <Button
              type='link'
              size='small'
              loading={downloading === record.albumMID}
              icon={<DownloadOutlined />}
              onClick={() => handleDownload(record)}
              title='下载专辑'>
              下载
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns_album}
        dataSource={data}
        rowKey='albumMID'
        loading={loading}
        scroll={{ y: 500, x: 1100 }}
        className={styles['song-table']}
        pagination={false}
      />

      {/* 专辑详情弹窗 */}
      <AlbumDetail ref={albumDetailRef} />
    </>
  );
};

export default AlbumTab;
