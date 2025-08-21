import { SearchForm } from '@/components';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, Modal, Select, Space, Table, Tag } from 'antd';
import { forwardRef, useState, type ForwardedRef } from 'react';
import { getSingerList } from '../../apis/singer';
import { Area, AreaList, Genre, GenreList, Sex, SexList } from '../../constants';
import { useGetData, useVisible } from '../../hooks';
import type { Ref } from '../../hooks/useVisible';
import type { SingerInfo } from '../../types/singer';
import type { Option as SearchFormOption } from '@/components/SearchForm';

const { Option } = Select;

interface SearchParams {
  area: number;
  sex: number;
  genre: number;
  keyword?: string;
  cur_page: number;
}

const defaultSearchParams: SearchParams = {
  cur_page: 1,
  area: Area.全部,
  sex: Sex.全部,
  genre: Genre.全部,
};

const SingerSearch = forwardRef((props, ref: ForwardedRef<Ref>) => {
  const { visible, open, close } = useVisible({}, ref);

  const [searchParams, setSearchParams] = useState<SearchParams>(defaultSearchParams);
  const searchFormOptions: SearchFormOption[] = [
    // 地区
    {
      label: '地区',
      name: 'area',
      type: 'select',
      options: AreaList,
    },
    // 性别
    {
      label: '性别',
      name: 'sex',
      type: 'select',
      options: SexList,
    },
    // 流派
    {
      label: '流派',
      name: 'genre',
      type: 'select',
      options: GenreList,
    },
    // 歌手名称
    {
      label: '歌手名称',
      type: 'input',
      inputProps: {
        placeholder: '请输入歌手名称',
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

  const [formRef] = Form.useForm<SearchParams>();

  // 表格列配置
  const columns = [
    {
      title: '歌手',
      dataIndex: 'singer_name',
      key: 'singer_name',
      render: (text: string, record: SingerInfo) => (
        <Space>
          <Avatar src={record.singer_pic} icon={<UserOutlined />} size='small' />
          <span>{text}</span>
        </Space>
      ),
    },
    {
      title: '地区',
      dataIndex: 'area',
      key: 'area',
      render: (area: number) => {
        const areaItem = AreaList.find((item) => item.value === area);
        return areaItem ? <Tag color='blue'>{areaItem.label}</Tag> : '-';
      },
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      render: (sex: number) => {
        const sexItem = SexList.find((item) => item.value === sex);
        return sexItem ? <Tag color='green'>{sexItem.label}</Tag> : '-';
      },
    },
    {
      title: '流派',
      dataIndex: 'genre',
      key: 'genre',
      render: (genre: number) => {
        const genreItem = GenreList.find((item) => item.value === genre);
        return genreItem ? <Tag color='orange'>{genreItem.label}</Tag> : '-';
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record: SingerInfo) => (
        <Space size='middle'>
          <Button type='link' size='small'>
            查看详情
          </Button>
          <Button type='link' size='small'>
            查看专辑
          </Button>
        </Space>
      ),
    },
  ];
  const { data, loading } = useGetData(getSingerList, searchParams, {
    monitors: [searchParams],
  });
  const renderList = useMemo(() => {
    return data.singerlist || [];
  }, [data]);

  return (
    <Modal title='歌手查询' open={visible} onCancel={close} footer={null} width={1000} centered>
      {/* 搜索表单 */}
      <SearchForm options={searchFormOptions} searchParams={searchParams} onSearch={handleSearch} />

      {/* 歌手列表 */}
      <Table
        columns={columns}
        dataSource={renderList}
        rowKey='singer_mid'
        loading={loading}
        pagination={{
          current: searchParams.cur_page,
          total: data.total,
          pageSize: 20,
          showSizeChanger: false,
          showQuickJumper: true,
          showTotal: (total) => `共 ${total} 位歌手`,
          onChange: (page) => {
            setSearchParams({
              ...searchParams,
              cur_page: page,
            });
          },
        }}
        scroll={{ y: 400 }}
      />
    </Modal>
  );
});

export default SingerSearch;
