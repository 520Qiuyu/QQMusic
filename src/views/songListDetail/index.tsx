import { getAlbumPicUrl } from '@/apis/album';
import { getQQAvatarUrl } from '@/apis/qq';
import { getSingerPic } from '@/apis/singer';
import { CopyText, MyButton, SearchForm } from '@/components';
import type { Option as SearchFormOption } from '@/components/SearchForm';
import type { FileType } from '@/constants';
import {
  useConfig,
  useFilter,
  useGetData,
  useGetSonglistDetail,
  usePlayMusic,
  useVisible,
} from '@/hooks';
import type { Ref } from '@/hooks/useVisible';
import type { Album, SongInfo } from '@/types/singer';
import { getFile_qualityList, uniqueArrayByKey } from '@/utils';
import { downloadAsJson } from '@/utils/download';
import { msgError, msgSuccess, msgWarning } from '@/utils/modal';
import {
  CloudDownloadOutlined,
  DownloadOutlined,
  EyeOutlined,
  FileOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  SelectOutlined,
  StarOutlined,
  TrophyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Image, message, Modal, Select, Space, Table, Tag, Typography } from 'antd';
import type { ColumnType } from 'antd/es/table';
import type { TableProps } from 'antd/lib';
import { groupBy } from 'lodash';
import { forwardRef, useState, type ForwardedRef } from 'react';
import styles from './index.module.scss';

const { Text, Title } = Typography;

interface IOpenParams {
  dissid?: string;
}

const SongListDetail = forwardRef((_, ref: ForwardedRef<Ref<any, IOpenParams>>) => {
  const { visible, open, close } = useVisible(
    {
      onOpen(params: IOpenParams) {
        if (params) {
          setCurrentDissid(params.dissid!);
        }
      },
    },
    ref,
  );

  const [currentDissid, setCurrentDissid] = useState<string>('');
  const [inputMid, setInputMid] = useState('');

  const { downloadConfig } = useConfig();
  const { quality: defaultQuality } = downloadConfig;
  // 歌单详情hook
  const {
    getPlaylistDetail,
    getPlaylistSongList,
    playPlaylist,
    downloadPlaylistSong,
    getPlaylistDownloadJson,
    isLoading,
    getPlaylistSongUrl,
    playlistInfo,
  } = useGetSonglistDetail();
  // 歌曲相关hook
  const { play, isPlaying, pause, download, convertToNeteaseMusic } = usePlayMusic();

  const { data: detail, loading } = useGetData(getPlaylistDetail, currentDissid, {
    initialValue: {},
    returnFunction: () => !currentDissid || !visible,
    monitors: [currentDissid, visible],
    callback: (data) => {
      console.log('data', data);
    },
  });
  const list = useMemo(() => {
    return detail?.songlist || [];
  }, [detail]);

  const { filteredList, handleFilter, setFilteredList } = useFilter(list || [], {
    fields: {
      name: {
        getValue: (item) => item.name,
      },
      albumName: {
        getValue: (item) => item.album.name,
      },
      singer: {
        getValue: (item) => item.singer.map((s) => s.name).join(' / '),
      },
    },
  });

  // 搜索表单配置
  const searchFormOptions: SearchFormOption[] = [
    {
      label: '名字',
      name: 'name',
      type: 'select',
      inputProps: {
        mode: 'multiple',
      },
      options: uniqueArrayByKey(list!, 'name').map((item) => ({
        label: item.name,
        value: item.name,
      })),
    },
    // 歌手
    {
      label: '歌手',
      name: 'singer',
      type: 'select',
      inputProps: {
        mode: 'multiple',
      },
      options: Object.entries(
        groupBy(list, (item) => item.singer.map((s) => s.name).join(' / ')),
      ).map(([key]) => ({
        label: key,
        value: key,
      })),
    },
    // 专辑
    {
      label: '专辑',
      name: 'albumName',
      type: 'select',
      inputProps: {
        mode: 'multiple',
      },
      options: Object.entries(groupBy(list, (item) => item.album.name)).map(([key]) => ({
        label: key,
        value: key,
      })),
    },
    // 歌单ID
    {
      label: '歌单ID',
      type: 'input',
      inputProps: {
        placeholder: '请输入歌单ID',
        value: inputMid,
        onChange: (e) => setInputMid(e.target.value.trim()),
        onPressEnter: () => {
          if (inputMid) {
            setCurrentDissid(inputMid);
          }
        },
      },
    },
  ];

  /** 选择音质 */
  const handleChooseQuality = (record: SongInfo, quality: keyof typeof FileType) => {
    setFilteredList(
      filteredList.map((item) => {
        if (item.mid === record.mid) {
          return {
            ...item,
            quality: quality as any,
          };
        }
        return item;
      }),
    );
  };
  /** 播放歌曲 */
  const handlePlay = (record: SongInfo & { quality?: keyof typeof FileType }) => {
    if (isPlaying) {
      pause();
    } else {
      const { file, quality } = record;
      const finalQuality = getQuality(file, defaultQuality, quality);
      play(record.mid, finalQuality);
    }
  };
  /** 下载歌曲 */
  const handleDownload = async (record: SongInfo & { quality?: keyof typeof FileType }) => {
    try {
      const { file, quality } = record;
      const finalQuality = getQuality(file, defaultQuality, quality);
      await download(record.mid, finalQuality);
    } catch (error) {
      console.log('error', error);
    }
  };
  /** 转存网易云歌曲 */
  const handleDownloadNeteaseMusic = async (
    record: SongInfo & { quality?: keyof typeof FileType },
  ) => {
    try {
      const { file, quality } = record;
      const finalQuality = getQuality(file, defaultQuality, quality);
      await convertToNeteaseMusic(record.mid, { quality: finalQuality });
      msgSuccess('歌曲转存网易云成功');
    } catch (error) {
      console.log('error', error);
      msgError('歌曲转存网易云失败');
    }
  };
  // 歌曲列表列配置
  const songColumns: ColumnType<SongInfo>[] = [
    {
      title: '歌曲信息',
      dataIndex: 'name',
      key: 'name',
      width: 280,
      render: (text: string, record: SongInfo) => (
        <div className={styles['song-info']}>
          <div className={styles['song-name']}>{text}</div>
          <div className={styles['song-artist']}>
            {record.singer?.map((s, index) => (
              <span key={s.mid || index} className={styles['artist-item']}>
                <span className={styles['artist-name']}>{s.name}</span>
                {index < record.singer!.length - 1 && (
                  <span className={styles['artist-separator']}>/</span>
                )}
              </span>
            )) || '-'}
          </div>
          <div className={styles['song-id']}>
            <CopyText text={record.mid} className={styles['id-copy']} />
          </div>
        </div>
      ),
    },
    {
      title: '专辑信息',
      dataIndex: 'album',
      key: 'album',
      width: 280,
      render: (album: Album) => (
        <Space size='middle' className={styles['album-info']}>
          <Image
            width={60}
            height={60}
            src={album?.mid ? getAlbumPicUrl(album.mid, { size: '300x300' }) : ''}
            alt={album?.name || ''}
            fallback='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN'
            style={{ borderRadius: 4 }}
          />
          <div className={styles['album-details']}>
            <div className={styles['album-name']} title={album?.name || '-'}>
              {album?.name || '-'}
            </div>
            <div className={styles['album-id']}>
              {album?.mid ? (
                <CopyText text={album.mid} className={styles['id-copy']} />
              ) : (
                <Text type='secondary'>-</Text>
              )}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: '歌手信息',
      dataIndex: 'singer',
      key: 'singer',
      width: 220,
      render: (singers: SongInfo['singer']) => (
        <div className={styles['singer-list']}>
          {singers?.map((singer, index) => (
            <div key={singer.mid || index} className={styles['singer-item']}>
              <Avatar
                src={getSingerPic(singer.mid)}
                icon={<UserOutlined />}
                size={32}
                style={{ marginRight: 8 }}
              />
              <div className={styles['singer-details']}>
                <div className={styles['singer-name']}>{singer.name}</div>
                <CopyText text={singer.mid} className={styles['id-copy']} />
              </div>
            </div>
          )) || '-'}
        </div>
      ),
    },
    {
      title: '音质',
      dataIndex: 'file',
      key: 'file',
      width: 120,
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
      title: '操作',
      key: 'action',
      width: 200,
      align: 'center',
      fixed: 'right',
      render: (_, record: SongInfo) => (
        <Space size='small' wrap>
          <Button
            type='link'
            size='small'
            icon={isPlaying === record.mid ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
            onClick={() => handlePlay(record)}>
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
            onClick={() => handleDownloadNeteaseMusic(record)}>
            转存网易云
          </MyButton>
        </Space>
      ),
    },
  ];

  const renderTitle = () => {
    const { pic_mid, dissname, nickname, isvip, visitnum, scoreavage, songnum, desc, uin } =
      detail || {};
    return (
      <div className={styles['modal-header']}>
        <Title level={4} className={styles['modal-title']}>
          歌单详情
        </Title>
        {detail && (
          <div className={styles['playlist-basic-info']}>
            <Image
              src={
                pic_mid ? `https://y.gtimg.cn/music/photo_new/T002R300x300M000${pic_mid}.jpg` : ''
              }
              alt={dissname}
              width={80}
              height={80}
              style={{ borderRadius: 8 }}
              fallback='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN'
            />
            <div className={styles['playlist-info']}>
              <Title level={5} className={styles['playlist-name']}>
                {dissname}
              </Title>
              <div className={styles['creator-info']}>
                <Avatar
                  src={getQQAvatarUrl(uin!)}
                  icon={<UserOutlined />}
                  size={24}
                  style={{ marginRight: 8 }}
                />
                <Text className={styles['creator-name']}>{nickname || '未知用户'}</Text>
                {isvip === 1 && <Tag color='gold'>VIP</Tag>}
              </div>
              <div className={styles['playlist-stats']}>
                <Space>
                  <Text type='secondary'>
                    <EyeOutlined /> {visitnum?.toLocaleString() || 0} 播放
                  </Text>
                  <Text type='secondary'>
                    <StarOutlined /> {scoreavage || '-'} 评分
                  </Text>
                  <Text type='secondary'>
                    <TrophyOutlined /> {songnum || 0} 首歌曲
                  </Text>
                </Space>
              </div>
              {/* 歌单介绍 */}
              {desc && (
                <div className={styles['playlist-desc']}>
                  <Text type='secondary' className={styles['description-text']}>
                    {desc}
                  </Text>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [selectedRows, setSelectedRows] = useState<SongInfo[]>([]);
  const rowSelection: TableProps<SongInfo>['rowSelection'] = {
    preserveSelectedRowKeys: true,
    selectedRowKeys: selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys as string[]);
      setSelectedRows(selectedRows as SongInfo[]);
    },
  };

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
        message.loading({
          key: loadingKey,
          content: `正在下载第 ${songIndex} 首歌曲 ${song.name}...`,
          duration: 0,
        });
        const finalQuality = getQuality(song.file, defaultQuality);
        await download(song.mid, finalQuality);
        message.success({
          key: loadingKey,
          content: `第 ${songIndex} 首歌曲 ${song.name} 下载成功！`,
          duration: 0,
        });
        songIndex++;
      }
      msgSuccess(`成功下载 ${selectedRows.length} 首歌曲！`);
      message.destroy(loadingKey);
    } catch (error) {
      console.error('下载选中歌曲失败:', error);
    }
  };
  /** 下载全部JSON */
  const handleDownloadAllJson = async () => {
    if (!currentDissid) return;
    try {
      const data = await getPlaylistDownloadJson(currentDissid);
      console.log('data', data);
      downloadAsJson(data, `${data.playlistName}.json`);
    } catch (error) {
      console.error('下载歌单JSON失败:', error);
    }
  };
  const renderFooter = () => {
    return (
      <Space>
        {selectedRowKeys?.length < list!.length ? (
          <Button
            icon={<SelectOutlined />}
            onClick={() => {
              setSelectedRowKeys(list?.map((item) => item.mid) || []);
              setSelectedRows(list || []);
            }}>
            全部选择
          </Button>
        ) : (
          <Button
            icon={<SelectOutlined />}
            onClick={() => {
              setSelectedRowKeys([]);
              setSelectedRows([]);
            }}>
            清空选择
          </Button>
        )}
        <MyButton
          type='primary'
          icon={<DownloadOutlined />}
          onClick={handleBatchDownload}
          disabled={!selectedRows?.length}>
          下载选中歌曲{selectedRows?.length ? `(${selectedRows?.length})` : ''}
        </MyButton>
        <MyButton
          type='primary'
          icon={<FileOutlined />}
          onClick={handleDownloadAllJson}
          disabled={!list?.length}>
          下载全部JSON{list?.length ? `(${list?.length})` : ''}
        </MyButton>
      </Space>
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
      className={styles['song-list-detail-modal']}>
      {/* 搜索表单 */}
      <SearchForm
        options={searchFormOptions}
        onSearch={handleFilter}
        style={{
          marginBottom: 0,
        }}
      />

      {/* 歌曲列表表格 */}
      <Table
        columns={songColumns}
        dataSource={filteredList}
        rowSelection={rowSelection}
        rowKey='mid'
        loading={loading}
        scroll={{ y: 400, x: 800 }}
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total) => `共 ${total} 首歌曲`,
        }}
      />
    </Modal>
  );
});

export default SongListDetail;

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
