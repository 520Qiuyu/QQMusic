import { getAlbumPicUrl } from '@/apis/album';
import { getSingerPic } from '@/apis/singer';
import { MyButton } from '@/components';
import type { FileType } from '@/constants';
import type { AlbumInfoData, AlbumSongInfo } from '@/types/album';
import { getFileQualityList } from '@/utils';
import { downloadAsJson } from '@/utils/download';
import { msgError, msgSuccess, msgWarning } from '@/utils/modal';
import {
  CloudDownloadOutlined,
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
  message,
  Modal,
  Select,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography,
} from 'antd';
import type { ColumnType, TableProps } from 'antd/es/table';
import { forwardRef, useState, type ForwardedRef } from 'react';
import { useConfig, useGetAlbumDetail, useGetData, usePlayMusic, useVisible } from '../../hooks';
import type { Ref } from '../../hooks/useVisible';
import styles from './index.module.scss';

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

  const { downloadConfig } = useConfig();
  const { quality: defaultQuality } = downloadConfig;
  const { getAlbumDetail, getAlbumSongList, isLoading, getDownLoadJson } = useGetAlbumDetail();
  const { play, isPlaying, pause, download, convertToNeteaseMusic } = usePlayMusic();

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
  const {
    data: list,
    loading,
    setData: setList,
  } = useGetData<AlbumSongInfo[] | undefined>(getAlbumSongList, currentMid, {
    initialValue: [],
    returnFunction: () => !currentMid || !visible,
    monitors: [currentMid, visible],
    callback: (data) => {
      console.log('data', data);
    },
  });

  /** 选择音质 */
  const handleChooseQuality = (record: AlbumSongInfo, quality: keyof typeof FileType) => {
    setList(
      list?.map((item) => {
        if (item.songmid === record.songmid) {
          return {
            ...item,
            quality,
          };
        }
        return item;
      }) || [],
    );
  };
  /** 播放歌曲 */
  const handlePlay = (record: AlbumSongInfo & { quality?: keyof typeof FileType }) => {
    if (isPlaying) {
      pause();
    } else {
      const { quality } = record;
      const finalQuality = getQuality(record, defaultQuality, quality);
      play(record.songmid, finalQuality);
    }
  };
  /** 下载歌曲 */
  const [downloading, setDownloading] = useState<string>('');
  const handleDownload = async (record: AlbumSongInfo & { quality?: keyof typeof FileType }) => {
    try {
      if (downloading === record.songmid) return;
      setDownloading(record.songmid);
      const { quality } = record;
      const finalQuality = getQuality(record, defaultQuality, quality);
      await download(record.songmid, finalQuality);
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
        const qualityList = getFileQualityList(record);
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
      key: 'format',
      width: 150,
      align: 'center',
      render: (_, record: AlbumSongInfo) => {
        const qualityList = getFileQualityList(record);
        const qualityColorMap = {
          flac: 'green',
          ape: 'volcano',
          320: 'blue',
          m4a: 'orange',
          128: 'gray',
        };
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

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [selectedRows, setSelectedRows] = useState<AlbumSongInfo[]>([]);
  const rowSelection: TableProps<AlbumSongInfo>['rowSelection'] = {
    preserveSelectedRowKeys: true,
    selectedRowKeys: selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys as string[]);
      setSelectedRows(selectedRows as AlbumSongInfo[]);
      console.log('selectedRowKeys', selectedRowKeys);
      console.log('selectedRows', selectedRows);
    },
  };

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

  /** 下载选中歌曲 */
  const handleBatchDownload = async () => {
    if (selectedRows.length === 0) {
      msgWarning('请先选择要下载的歌曲');
      return;
    }

    const loadingKey = 'download-album-song';
    try {
      message.loading({
        key: loadingKey,
        content: `正在准备下载 ${selectedRows.length} 首歌曲...`,
        duration: 0,
      });
      let index = 1;
      for (const song of selectedRows) {
        message.loading({
          key: loadingKey,
          content: `正在下载第 ${index} 首歌曲 ${song.songname}...`,
          duration: 0,
        });
        const finalQuality = getQuality(song, defaultQuality);
        await download(song.songmid, finalQuality);
        message.success({
          key: loadingKey,
          content: `第 ${index} 首歌曲 ${song.songname} 下载成功！`,
          duration: 1,
        });
        index++;
      }
      message.success({
        key: loadingKey,
        content: `成功下载 ${selectedRows.length} 首歌曲！`,
        duration: 1,
      });
    } catch (error) {
      console.error('批量下载失败:', error);
      message.destroy(loadingKey);
      msgError('批量下载失败: ' + (error as Error).message);
    } finally {
      message.destroy(loadingKey);
    }
  };
  /** 转存网易云选中歌曲 */
  const handleBatchDownloadNeteaseMusic = async () => {
    if (selectedRows.length === 0) {
      msgWarning('请先选择要转存网易云的歌曲');
      return;
    }

    const loadingKey = 'download-album-song-netease';
    try {
      message.loading({
        key: loadingKey,
        content: `正在准备转存网易云 ${selectedRows.length} 首歌曲...`,
        duration: 0,
      });
      let index = 1;
      for (const song of selectedRows) {
        console.log('song', song);
        const record = song as AlbumSongInfo & { quality?: keyof typeof FileType };
        const finalQuality = getQuality(record, defaultQuality, record.quality);
        message.loading({
          key: loadingKey,
          content: `正在转存第 ${index} 首歌曲 ${song.songname}...`,
          duration: 0,
        });
        await convertToNeteaseMusic(song.songmid, { quality: finalQuality });
        message.success({
          content: `第 ${index} 首歌曲 ${song.songname} 转存成功！`,
          duration: 1,
        });
        index++;
      }
      message.success({
        key: loadingKey,
        content: `成功转存 ${selectedRows.length} 首歌曲！`,
        duration: 1,
      });
    } catch (error) {
      console.error('批量转存网易云失败:', error);
      msgError('批量转存网易云失败: ' + (error as Error).message);
    } finally {
      message.destroy(loadingKey);
    }
  };
  /** 下载JSON */
  const handleDownloadAllJson = async () => {
    if (!currentMid) return;
    const loadingKey = 'download-album-json';
    try {
      message.loading({
        key: loadingKey,
        content: `正在下载专辑JSON...`,
        duration: 0,
      });
      const res = await getDownLoadJson(currentMid);
      downloadAsJson([res], `${detail?.name}.json`);
      message.destroy(loadingKey);
      msgSuccess('成功下载专辑JSON！');
    } catch (error) {
      console.log('error', error);
    } finally {
      message.destroy(loadingKey);
    }
  };

  const renderFooter = () => {
    return (
      <div className={styles['footer']}>
        <div className={styles['selected-count']}>已选择 {selectedRows.length} 首歌曲</div>
        <Space>
          {/* 全部选择 */}
          {selectedRowKeys?.length < list!.length ? (
            <Button
              onClick={() => {
                setSelectedRowKeys(list?.map((item) => item.songmid) || []);
                setSelectedRows(list || []);
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
          <MyButton type='primary' icon={<DownloadOutlined />} onClick={handleBatchDownload}>
            下载选中歌曲{selectedRows?.length ? `(${selectedRows?.length})` : ''}
          </MyButton>
          <MyButton
            type='primary'
            icon={<CloudDownloadOutlined />}
            onClick={handleBatchDownloadNeteaseMusic}>
            转存网易云{selectedRows?.length ? `(${selectedRows?.length})` : ''}
          </MyButton>
          <MyButton icon={<FileOutlined />} type='primary' onClick={handleDownloadAllJson}>
            下载全部歌曲JSON
          </MyButton>
        </Space>
      </div>
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
        rowSelection={rowSelection}
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

const getQuality = (
  record: AlbumSongInfo,
  defaultQuality: keyof typeof FileType,
  chooseQuality?: keyof typeof FileType,
) => {
  const qualityList = getFileQualityList(record);
  const songDefaultQuality = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
  const finalQuality = chooseQuality || songDefaultQuality;
  return finalQuality;
};
