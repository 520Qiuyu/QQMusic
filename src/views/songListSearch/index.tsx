import { getQQAvatarUrl } from '@/apis/qq';
import { CopyText, SearchForm } from '@/components';
import type { Option as SearchFormOption } from '@/components/SearchForm';
import type { SongListItem } from '@/types/songList';
import {
  ClockCircleOutlined,
  DownloadOutlined,
  EyeOutlined,
  FileOutlined,
  HeartOutlined,
  InfoCircleOutlined,
  PlayCircleOutlined,
  StarOutlined,
  TrophyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Image,
  Modal,
  Pagination,
  Select,
  Space,
  Table,
  Tag,
  Tooltip,
  type TreeSelectProps,
} from 'antd';
import type { ColumnType } from 'antd/es/table';
import { forwardRef, useMemo, useRef, useState, type ForwardedRef } from 'react';
import { getSongList, getSongListCategory } from '../../apis/songList';
import { useCompRef, useGetData, useGetSonglistDetail, useVisible } from '../../hooks';
import type { Ref } from '../../hooks/useVisible';
import styles from './index.module.scss';
import SongListDetail from '../songListDetail';

const { Option } = Select;

interface SearchParams {
  pageNum: number;
  pageSize: number;
  categoryId?: number;
  sortId?: number;
  keyword?: string;
}

const defaultSearchParams: SearchParams = {
  pageNum: 0,
  pageSize: 20,
};

const SongListSearch = forwardRef((props, ref: ForwardedRef<Ref>) => {
  const { visible, open, close } = useVisible({}, ref);

  const [searchParams, setSearchParams] = useState<SearchParams>(defaultSearchParams);

  // 歌单详情hook
  const {
    playPlaylist,
    downloadPlaylistSong,
    getPlaylistDownloadJson,
    getPlaylistDetail,
    getPlaylistSongList,
    getPlaylistSongUrl,
    isLoading,
    playlistInfo,
  } = useGetSonglistDetail();

  /** 歌单分类配置项 */
  const { data: songListCategory } = useGetData(getSongListCategory, undefined, {
    monitors: [visible],
    returnFunction: () => !visible,
    initialValue: [],
    callback: (data) => {
      console.log('data', data);
    },
  });

  const categoryOptions = useMemo(() => {
    return songListCategory?.map((item) => ({
      label: item.categoryGroupName,
      value: item.categoryGroupName,
      checkable: false,
      children: item.items.map((item) => ({
        label: item.categoryName,
        value: item.categoryId,
      })),
    }));
  }, [songListCategory]);

  const searchFormOptions: SearchFormOption[] = [
    // 分类
    {
      label: '分类',
      name: 'categoryIds',
      type: 'treeSelect',
      inputProps: {
        treeData: categoryOptions,
      } as TreeSelectProps,
    },
    // 排序
    {
      label: '排序',
      name: 'sortId',
      type: 'select',
      options: [
        { label: '默认', value: 1 },
        { label: '最新', value: 2 },
        { label: '最热', value: 3 },
        { label: '评分', value: 4 },
        { label: 'none', value: 5 },
      ],
      inputProps: {
        mode: undefined,
        allowClear: true,
      },
    },
  ];

  const handleSearch = (values: SearchParams) => {
    const newParams = Object.fromEntries(
      searchFormOptions.filter((item) => item.name).map((item) => [item.name, values[item.name!]]),
    );
    setSearchParams({
      ...searchParams,
      ...newParams,
    });
  };

  // 处理函数
  const handlePlay = async (record: SongListItem) => {
    console.log('播放歌单:', record);
    try {
      await playPlaylist(record.dissid);
    } catch (error) {
      console.error('播放歌单失败:', error);
    }
  };

  const songListDetailRef = useCompRef(SongListDetail);
  const handleViewDetail = async (record: SongListItem) => {
    console.log('查看歌单详情:', record);
    songListDetailRef.current?.open({
      dissid: record.dissid,
    });
  };

  const handleDownload = async (record: SongListItem) => {
    console.log('下载歌单:', record);
    try {
      await downloadPlaylistSong(record.dissid);
    } catch (error) {
      console.error('下载歌单失败:', error);
    }
  };

  const handleDownloadJson = async (record: SongListItem) => {
    console.log('下载歌单json:', record);
    try {
      await getPlaylistDownloadJson(record.dissid);
    } catch (error) {
      console.error('下载歌单json失败:', error);
    }
  };

  // 表格列配置
  const columns: ColumnType<SongListItem>[] = [
    {
      title: '歌单信息',
      dataIndex: 'dissname',
      key: 'dissname',
      width: 400,
      render: (text: string, record: SongListItem) => (
        <Space size='middle'>
          <div className={styles['playlist-cover-container']}>
            <Image
              src={record.imgurl}
              alt={text}
              width={60}
              height={60}
              style={{ borderRadius: 8 }}
              fallback='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN'
            />
            {/* 播放量信息 - 右下角 */}
            <div className={styles['play-count-overlay']}>
              <span>{formatPlayCount(record.listennum || 0)}</span>
            </div>
          </div>
          <div className={styles['playlist-info']}>
            <div className={styles['playlist-name']}>{text}</div>
            <div className={styles['creator-info']}>
              <Avatar
                src={getQQAvatarUrl(record.creator?.qq)}
                icon={<UserOutlined />}
                size={20}
                style={{ marginRight: 8 }}
              />
              <span className={styles['creator-name']}>{record.creator?.name || '未知用户'}</span>
              {record.creator?.isVip === 1 && <Tag color='gold'>VIP</Tag>}
            </div>
            <div className={styles['creator-qq']}>QQ: {record.creator?.qq || '-'}</div>
            {record.introduction && (
              <div className={styles['introduction']}>{record.introduction}</div>
            )}
          </div>
        </Space>
      ),
    },
    {
      title: '时间信息',
      key: 'time-info',
      width: 180,
      render: (_, record: SongListItem) => (
        <div className={styles['time-info']}>
          <div className={styles['create-time']}>
            <ClockCircleOutlined style={{ color: '#666' }} />
            <span>
              {record.createtime ? new Date(record.createtime).toLocaleDateString() : '-'}
            </span>
          </div>
          <div className={styles['commit-time']}>
            提交: {record.commit_time ? new Date(record.commit_time).toLocaleDateString() : '-'}
          </div>
        </div>
      ),
    },
    {
      title: '歌单ID',
      dataIndex: 'dissid',
      key: 'dissid',
      width: 150,
      align: 'center',
      render: (dissid: string) => <CopyText text={dissid} className={styles['playlist-id']} />,
    },
    {
      title: '操作',
      key: 'action',
      width: 350,
      align: 'center',
      fixed: 'right',
      render: (_, record: SongListItem) => (
        <Space>
          <Tooltip title='播放歌单'>
            <Button
              type='link'
              size='small'
              icon={<PlayCircleOutlined />}
              onClick={() => handlePlay(record)}>
              播放
            </Button>
          </Tooltip>
          <Tooltip title='下载歌单'>
            <Button
              type='link'
              size='small'
              icon={<DownloadOutlined />}
              onClick={() => handleDownload(record)}>
              下载
            </Button>
          </Tooltip>
          {/* 下载json */}
          <Tooltip title='下载json'>
            <Button
              type='link'
              size='small'
              icon={<FileOutlined />}
              onClick={() => handleDownloadJson(record)}>
              下载json
            </Button>
          </Tooltip>
          <Tooltip title='查看详情'>
            <Button
              type='link'
              size='small'
              icon={<InfoCircleOutlined />}
              onClick={() => handleViewDetail(record)}>
              详情
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const { data, loading } = useGetData(
    getSongList,
    {
      ...searchParams,
      limit: searchParams.pageSize,
      page: searchParams.pageNum,
    },
    {
      returnFunction: () => !visible,
      monitors: [searchParams, visible],
    },
  );

  return (
    <Modal
      title='歌单查询'
      open={visible}
      onCancel={close}
      footer={null}
      width={1200}
      centered
      className={styles['song-list-search-modal']}>
      {/* 上方搜索表单 */}
      <SearchForm
        options={searchFormOptions}
        searchParams={searchParams}
        onSearch={handleSearch}
        style={{
          marginBottom: 16,
        }}
      />

      {/* 歌单列表 */}
      <Table
        columns={columns}
        dataSource={data?.list || []}
        rowKey='dissid'
        loading={loading}
        scroll={{ y: 500, x: 970 }}
        pagination={false}
      />

      <Pagination
        align='end'
        total={data?.sum || 0}
        current={searchParams.pageNum}
        pageSize={searchParams.pageSize}
        showSizeChanger={true}
        showTotal={(total) => `共 ${total} 个歌单`}
        onChange={(page, pageSize) => {
          setSearchParams({ ...searchParams, pageNum: page, pageSize });
        }}
        style={{ marginTop: 16 }}
      />

      {/* 歌单详情弹窗 */}
      <SongListDetail ref={songListDetailRef} />
    </Modal>
  );
});

/**
 * 格式化播放量显示
 * @param count 播放量数字
 * @returns 格式化后的播放量字符串
 */
const formatPlayCount = (count: number): string => {
  if (count >= 100000000) {
    return `${(count / 100000000).toFixed(1)}亿`;
  } else if (count >= 10000) {
    return `${(count / 10000).toFixed(1)}万`;
  } else {
    return count.toString();
  }
};

export default SongListSearch;
