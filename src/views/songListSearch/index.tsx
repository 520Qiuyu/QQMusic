import { CopyText, SearchForm } from '@/components';
import type { Option as SearchFormOption } from '@/components/SearchForm';
import type { SongListItem, SongListCategoryData } from '@/types/songList';
import {
  HeartOutlined,
  PlayCircleOutlined,
  UserOutlined,
  EyeOutlined,
  StarOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import {
  Button,
  Image,
  Modal,
  Pagination,
  Select,
  Space,
  Table,
  Tag,
  Avatar,
  Tooltip,
  type TreeSelectProps,
} from 'antd';
import type { ColumnType } from 'antd/es/table';
import { forwardRef, useState, useMemo, type ForwardedRef } from 'react';
import { getSongList, getSongListCategory } from '../../apis/songList';
import { useGetData, useVisible } from '../../hooks';
import type { Ref } from '../../hooks/useVisible';

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

  /** 歌单分类配置项 */
  const { data: songListCategory } = useGetData(getSongListCategory, undefined, {
    initialValue: [],
  });

  // 扁平化分类数据，用于查找分类名称
  const flatCategories = useMemo(() => {
    const categories: { categoryId: number; categoryName: string }[] = [];
    songListCategory?.forEach((group) => {
      group.items.forEach((item) => {
        categories.push({
          categoryId: item.categoryId,
          categoryName: item.categoryName,
        });
      });
    });
    return categories;
  }, [songListCategory]);

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

  // 表格列配置
  const columns: ColumnType<SongListItem>[] = [
    {
      title: '歌单信息',
      dataIndex: 'dissname',
      key: 'dissname',
      width: 350,
      render: (text: string, record: SongListItem) => (
        <Space size='middle'>
          <Image
            src={record.imgurl}
            alt={text}
            width={60}
            height={60}
            style={{ borderRadius: 8 }}
            fallback='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN'
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontWeight: 500, fontSize: 14 }}>{text}</div>
            <div style={{ fontSize: 12, color: '#666' }}>{record.creator?.name || '未知用户'}</div>
            {record.introduction && (
              <div
                style={{
                  fontSize: 11,
                  color: '#999',
                  maxWidth: 200,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                {record.introduction}
              </div>
            )}
          </div>
        </Space>
      ),
    },
    {
      title: '创建者',
      dataIndex: 'creator',
      key: 'creator',
      width: 180,
      render: (creator: any) => (
        <Space size='small'>
          <Avatar src={creator?.avatarUrl} icon={<UserOutlined />} size={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>{creator?.name || '未知用户'}</div>
            <div style={{ fontSize: 11, color: '#999' }}>QQ: {creator?.qq || '-'}</div>
            {creator?.isVip === 1 && <Tag color='gold'>VIP</Tag>}
          </div>
        </Space>
      ),
    },
    {
      title: '统计信息',
      key: 'stats',
      width: 200,
      render: (_, record: SongListItem) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <EyeOutlined style={{ color: '#1890ff' }} />
            <span>
              {record.listenum >= 10000
                ? `${(record.listenum / 10000).toFixed(1)}万`
                : record.listenum}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <StarOutlined style={{ color: '#faad14' }} />
            <span>{record.score ? record.score.toFixed(1) : '-'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <TrophyOutlined style={{ color: '#52c41a' }} />
            <span>v{record.version}</span>
          </div>
        </div>
      ),
    },
    {
      title: '时间信息',
      key: 'time-info',
      width: 180,
      render: (_, record: SongListItem) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <ClockCircleOutlined style={{ color: '#666' }} />
            <span style={{ fontSize: 12 }}>
              {record.createtime ? new Date(record.createtime).toLocaleDateString() : '-'}
            </span>
          </div>
          <div style={{ fontSize: 11, color: '#999' }}>
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
      render: (dissid: string) => (
        <CopyText
          text={dissid}
          style={{
            fontSize: 12,
            color: '#666',
            fontFamily: 'monospace',
            background: '#f5f5f5',
            padding: '2px 6px',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        />
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      align: 'center',
      fixed: 'right',
      render: (_, record: SongListItem) => (
        <Space size='small' direction='vertical'>
          <Tooltip title='播放歌单'>
            <Button
              type='link'
              size='small'
              icon={<PlayCircleOutlined />}
              onClick={() => handlePlay(record)}>
              播放
            </Button>
          </Tooltip>
          <Tooltip title='收藏歌单'>
            <Button
              type='link'
              size='small'
              icon={<HeartOutlined />}
              onClick={() => handleFavorite(record)}>
              收藏
            </Button>
          </Tooltip>
          <Tooltip title='查看详情'>
            <Button type='link' size='small' onClick={() => handleViewDetail(record)}>
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

  console.log('data', data);

  // 处理函数
  const handlePlay = (record: SongListItem) => {
    console.log('播放歌单:', record);
    // 这里实现播放逻辑
  };

  const handleFavorite = (record: SongListItem) => {
    console.log('收藏歌单:', record);
    // 这里实现收藏逻辑
  };

  const handleViewDetail = (record: SongListItem) => {
    console.log('查看歌单详情:', record);
    // 这里实现查看详情逻辑
  };

  return (
    <Modal title='歌单查询' open={visible} onCancel={close} footer={null} width={1200} centered>
      {/* 上方搜索表单 */}
      <SearchForm options={searchFormOptions} searchParams={searchParams} onSearch={handleSearch} />

      {/* 歌单列表 */}
      <Table
        columns={columns}
        dataSource={data?.list || []}
        rowKey='dissid'
        loading={loading}
        scroll={{ y: 500, x: 1200 }}
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
    </Modal>
  );
});

export default SongListSearch;
