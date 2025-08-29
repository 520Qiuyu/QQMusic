import { getQQAvatarUrl } from '@/apis/qq';
import { getSingerPic } from '@/apis/singer';
import { SearchForm } from '@/components';
import type { Option as SearchFormOption } from '@/components/SearchForm';
import type { SongInfo } from '@/types/singer';
import { uniqueArrayByKey } from '@/utils';
import {
    DownloadOutlined,
    EyeOutlined,
    FileOutlined,
    HeartOutlined,
    PlayCircleOutlined,
    StarOutlined,
    TrophyOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Image, Modal, Space, Table, Tag, Tooltip, Typography } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { groupBy } from 'lodash';
import { forwardRef, useState, type ForwardedRef } from 'react';
import { useFilter, useGetData, useGetSonglistDetail, useVisible } from '../../hooks';
import type { Ref } from '../../hooks/useVisible';
import styles from './index.module.scss';

const { Text, Title } = Typography;

interface IOpenParams {
  dissid?: string;
}

interface SearchParams {
  pageNum: number;
  pageSize: number;
  keyword?: string;
}

const defaultSearchParams: SearchParams = {
  pageNum: 0,
  pageSize: 20,
};

const SongListDetail = forwardRef((props, ref: ForwardedRef<Ref<any, IOpenParams>>) => {
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
  const [searchParams, setSearchParams] = useState<SearchParams>(defaultSearchParams);

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

  const { data: detail, loading: detailLoading } = useGetData(getPlaylistDetail, currentDissid, {
    initialValue: {},
    returnFunction: () => !currentDissid || !visible,
    monitors: [currentDissid, visible],
  });
  const { data: list, loading } = useGetData(getPlaylistSongList, currentDissid, {
    initialValue: [],
    returnFunction: () => !currentDissid || !visible,
    monitors: [currentDissid, visible],
  });
  console.log('list', list);

  const { filteredList, handleFilter } = useFilter(list || [], {
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

  // 处理函数
  const handlePlay = async () => {
    if (!currentDissid) return;
    try {
      await playPlaylist(currentDissid);
    } catch (error) {
      console.error('播放歌单失败:', error);
    }
  };

  const handleDownload = async () => {
    if (!currentDissid) return;
    try {
      await downloadPlaylistSong(currentDissid);
    } catch (error) {
      console.error('下载歌单失败:', error);
    }
  };

  const handleDownloadJson = async () => {
    if (!currentDissid) return;
    try {
      await getPlaylistDownloadJson(currentDissid);
    } catch (error) {
      console.error('下载歌单JSON失败:', error);
    }
  };

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
      ).map(([key, value]) => ({
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
      options: Object.entries(groupBy(list, (item) => item.album.name)).map(([key, value]) => ({
        label: key,
        value: key,
      })),
    },
  ];

  // 歌曲列表列配置
  const songColumns: ColumnType<SongInfo>[] = [
    {
      title: '歌曲信息',
      dataIndex: 'name',
      key: 'name',
      width: 300,
      render: (text: string, record: SongInfo) => (
        <Space size='middle'>
          <div className={styles['song-info']}>
            <div className={styles['song-name']}>{text}</div>
            <div className={styles['song-artist']}>
              {record.singer?.map((s, index) => (
                <span key={s.mid || index} className={styles['artist-item']}>
                  <Avatar
                    src={getSingerPic(s.mid)}
                    icon={<UserOutlined />}
                    size={16}
                    style={{ marginRight: 4 }}
                  />
                  <span className={styles['artist-name']}>{s.name}</span>
                  {index < record.singer!.length - 1 && (
                    <span className={styles['artist-separator']}>/</span>
                  )}
                </span>
              )) || '-'}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: '专辑',
      dataIndex: 'album',
      key: 'album',
      width: 200,
      render: (album: any) => <Text className={styles['album-name']}>{album?.name || '-'}</Text>,
    },
    {
      title: '时长',
      dataIndex: 'interval',
      key: 'interval',
      width: 100,
      align: 'center',
      render: (interval: number) => (
        <Text className={styles['song-duration']}>
          {Math.floor(interval / 60)}:{(interval % 60).toString().padStart(2, '0')}
        </Text>
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      align: 'center',
      fixed: 'right',
      render: (_, record: SongInfo) => (
        <Space>
          <Tooltip title='播放'>
            <Button
              type='link'
              size='small'
              icon={<PlayCircleOutlined />}
              onClick={() => console.log('播放歌曲:', record.name)}>
              播放
            </Button>
          </Tooltip>
          <Tooltip title='下载'>
            <Button
              type='link'
              size='small'
              icon={<DownloadOutlined />}
              onClick={() => console.log('下载歌曲:', record.name)}>
              下载
            </Button>
          </Tooltip>
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

  const renderFooter = () => {
    return (
      <Space>
        <Button
          type='primary'
          icon={<PlayCircleOutlined />}
          onClick={handlePlay}
          loading={isLoading}>
          播放全部
        </Button>
        <Button icon={<DownloadOutlined />} onClick={handleDownload} loading={isLoading}>
          下载全部
        </Button>
        <Button icon={<FileOutlined />} onClick={handleDownloadJson} loading={isLoading}>
          下载JSON
        </Button>
        <Button icon={<HeartOutlined />} onClick={() => console.log('收藏歌单')}>
          收藏
        </Button>
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
