import { getAlbumPicUrl } from '@/apis/album';
import { getSingerPic } from '@/apis/singer';
import type { FileType } from '@/constants';
import type { AlbumInfoData, AlbumSongInfo } from '@/types/album';
import {
  DownloadOutlined,
  FileOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Image,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tooltip,
  Typography,
} from 'antd';
import type { ColumnType } from 'antd/es/table';
import { forwardRef, useState, type ForwardedRef } from 'react';
import { useGetAlbumDetail, useGetData, usePlayMusic, useVisible } from '../../hooks';
import type { Ref } from '../../hooks/useVisible';
import styles from './index.module.scss';
import { downloadAsJson } from '@/utils/download';

const { Text, Title } = Typography;

interface IOpenParams {
  albummid?: string;
}

const AlbumDetail = forwardRef((_: unknown, ref: ForwardedRef<Ref<any, IOpenParams>>) => {
  const { visible, open, close } = useVisible(
    {
      onOpen(params?: IOpenParams) {
        if (params?.albummid) {
          setCurrentMid(params.albummid);
        }
      },
    },
    ref,
  );

  const [currentMid, setCurrentMid] = useState('');
  const [inputMid, setInputMid] = useState('');
  const [qualityMap, setQualityMap] = useState<Record<string, keyof typeof FileType>>({});

  const { getAlbumDetail, getAlbumSongList, isLoading, getDownLoadJson } = useGetAlbumDetail();
  const { play, isPlaying, pause, download } = usePlayMusic();

  // 专辑基础信息
  const { data: detail, loading: detailLoading } = useGetData<AlbumInfoData | undefined>(
    getAlbumDetail,
    currentMid,
    {
      initialValue: undefined,
      returnFunction: () => !currentMid || !visible,
      monitors: [currentMid, visible],
    },
  );

  // 专辑歌曲列表
  const { data: list, loading } = useGetData<AlbumSongInfo[] | undefined>(
    getAlbumSongList,
    currentMid,
    {
      initialValue: [],
      returnFunction: () => !currentMid || !visible,
      monitors: [currentMid, visible],
    },
  );

  /** 播放歌曲 */
  const handlePlay = (record: AlbumSongInfo) => {
    console.log('record', record);
    console.log('qualityMap[record.songmid]', qualityMap[record.songmid]);
    if (isPlaying) {
      pause();
    } else {
      play(record.songmid, qualityMap[record.songmid] || 128);
    }
  };
  /** 下载歌曲 */
  const [downloading, setDownloading] = useState<string>('');
  const handleDownload = async (record: AlbumSongInfo) => {
    try {
      if (downloading === record.songmid) return;
      setDownloading(record.songmid);
      console.log('qualityMap[record.songmid]', qualityMap[record.songmid]);
      await download(
        record.songmid,
        record.songname,
        qualityMap[record.songmid] || 128,
        record.albummid,
      );
    } catch (error) {
      console.log('error', error);
    } finally {
      setDownloading('');
    }
  };

  // 歌曲表格列
  const songColumns: ColumnType<AlbumSongInfo>[] = [
    {
      title: '歌曲',
      dataIndex: 'songname',
      key: 'songname',
      width: 300,
      render: (text: string) => (
        <Text className={styles['song-name']} title={text}>
          {text}
        </Text>
      ),
    },
    {
      title: '歌手',
      dataIndex: 'singer',
      key: 'singer',
      width: 240,
      render: (singers: { id: number; mid: string; name: string }[] = []) => (
        <Space size='small' wrap>
          {singers.length > 0 ? (
            singers.map((s, index) => (
              <span key={s.mid || index} className={styles['artist-item']}>
                <Avatar size={30} style={{ marginRight: 4 }} src={getSingerPic(s.mid)} />
                <span className={styles['artist-name']}>{s.name}</span>
                {index < singers.length - 1 && (
                  <span className={styles['artist-separator']}>/</span>
                )}
              </span>
            ))
          ) : (
            <span>-</span>
          )}
        </Space>
      ),
    },
    // 音质选择器
    {
      title: '音质',
      key: 'quality',
      width: 100,
      align: 'center',
      render: (_, record: AlbumSongInfo) => {
        const options: { label: string; value: number | string }[] = [];
        const { size128, size320, sizeflac } = record;
        if (size128) options.push({ label: '128k', value: 128 });
        if (size320) options.push({ label: '320k', value: 320 });
        if (sizeflac) options.push({ label: 'FLAC', value: 'flac' });
        return (
          <Select
            options={options}
            defaultValue={128}
            style={{ width: '100%' }}
            onChange={(value) => {
              setQualityMap((prev) => ({
                ...prev,
                [record.songmid]: value as any,
              }));
            }}
          />
        );
      },
    },
    {
      title: '时长',
      dataIndex: 'interval',
      key: 'interval',
      width: 100,
      align: 'center',
      render: (interval: number) => (
        <Text className={styles['song-duration']}>
          {Math.floor((interval || 0) / 60)}:{((interval || 0) % 60).toString().padStart(2, '0')}
        </Text>
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      align: 'center',
      fixed: 'right',
      render: (_, record: AlbumSongInfo) => (
        <Space>
          <Tooltip title='播放'>
            <Button
              type='link'
              size='small'
              icon={isPlaying === record.songmid ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              onClick={() => handlePlay(record)}>
              播放
            </Button>
          </Tooltip>
          <Tooltip title='下载'>
            <Button
              type='link'
              size='small'
              icon={<DownloadOutlined />}
              loading={downloading === record.songmid}
              onClick={() => handleDownload(record)}>
              下载
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const renderTitle = () => {
    const albumName = detail?.name || '专辑详情';
    const singerName = detail?.singername || '';
    const publishDate = detail?.aDate || '';
    return (
      <div className={styles['modal-header']}>
        <Title level={4} className={styles['modal-title']}>
          专辑详情
        </Title>
        {detail && (
          <div className={styles['album-basic-info']}>
            <Image
              src={currentMid ? getAlbumPicUrl(currentMid) : ''}
              alt={albumName}
              width={80}
              height={80}
              style={{ borderRadius: 8 }}
              fallback='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN'
            />
            <div className={styles['album-info']}>
              <Title level={5} className={styles['album-name']}>
                {albumName}
              </Title>
              <div className={styles['album-meta']}>
                <Text type='secondary' className={styles['singer-name']}>
                  {singerName || '未知歌手'}
                </Text>
                {publishDate && (
                  <Text type='secondary' className={styles['publish-date']}>
                    · {publishDate}
                  </Text>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  /** 下载全部 */
  const [downloadingAll, setDownloadingAll] = useState(false);
  const handleDownloadAll = async () => {
    try {
      setDownloadingAll(true);
      await download(currentMid, detail?.name || '', 128);
    } catch (error) {
      console.log('error', error);
    } finally {
      setDownloadingAll(false);
    }
  };
  /** 下载JSON */
  const [downloadingJson, setDownloadingJson] = useState(false);
  const handleDownloadAllJson = async () => {
    try {
      setDownloadingJson(true);
      const json = await getDownLoadJson(currentMid);
      downloadAsJson(json, `${detail?.name}.json`);
    } catch (error) {
      console.log('error', error);
    } finally {
      setDownloadingJson(false);
    }
  };
  const renderFooter = () => {
    return (
      <Space>
        <Button
          type='primary'
          icon={<DownloadOutlined />}
          onClick={handleDownloadAll}
          loading={downloadingAll}>
          下载全部
        </Button>
        <Button icon={<FileOutlined />} onClick={handleDownloadAllJson} loading={downloadingJson}>
          下载JSON
        </Button>
      </Space>
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMid(e.target.value.trim());
  };
  const handleOpenById = () => {
    if (!inputMid) return;
    setCurrentMid(inputMid);
  };

  return (
    <Modal
      title={renderTitle()}
      open={visible}
      onCancel={close}
      width={1200}
      centered
      className={styles['album-detail-modal']}
      footer={renderFooter()}>
      {/* 顶部：专辑ID输入 */}
      <div style={{ marginBottom: 12, display: 'flex', gap: 8 }}>
        <Input
          placeholder='请输入专辑ID/MID，如 003rJSwm3TechU'
          value={inputMid}
          onChange={handleInputChange}
          onPressEnter={handleOpenById}
          allowClear
          aria-label='专辑ID输入框'
        />
        <Button
          type='primary'
          onClick={handleOpenById}
          loading={loading || detailLoading || isLoading}>
          打开
        </Button>
      </div>
      {/* 歌曲列表表格 */}
      <Table
        columns={songColumns}
        dataSource={list || []}
        rowKey='songmid'
        loading={loading || detailLoading || isLoading}
        scroll={{ y: 400, x: 600 }}
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total) => `共 ${total} 首歌曲`,
        }}
        className={styles['song-table']}
      />
    </Modal>
  );
});

export default AlbumDetail;
