import { CopyText, SearchForm } from '@/components';
import type { Option as SearchFormOption } from '@/components/SearchForm';
import { UserOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Modal, Pagination, Select, Space, Table, Tag } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { forwardRef, useState, useMemo, type ForwardedRef } from 'react';
import { getSingerList } from '../../apis/singer';
import { Area, AreaList, Genre, GenreList, Sex, SexList } from '../../constants';
import { useCompRef, useGetData, useVisible } from '../../hooks';
import type { Ref } from '../../hooks/useVisible';
import type { SingerInfo } from '../../types/singer';
import HotSongModal from '../hotSong';
import AlbumListModal from '../albumList';
import styles from './index.module.scss';

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

  const [keyword, setKeyword] = useState('');
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
        value: keyword,
        allowClear: true,
        onChange: (e) => {
          console.log('e', e);
          setKeyword(e.target.value);
        },
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

  // 查看热门歌曲
  const hotSongModalRef = useCompRef(HotSongModal);
  const handleHotSong = (record: SingerInfo) => {
    hotSongModalRef.current.open({
      singerId: record.singer_id,
      singerMid: record.singer_mid,
      singerName: record.singer_name,
      singerPic: record.singer_pic,
    });
  };

  // 查看专辑
  const albumModalRef = useCompRef(AlbumListModal);
  const handleAlbum = (record: SingerInfo) => {
    albumModalRef.current.open({
      singerId: record.singer_id,
      singerMid: record.singer_mid,
      singerName: record.singer_name,
      singerPic: record.singer_pic,
    });
  };

  // 表格列配置
  const columns: ColumnType<SingerInfo>[] = [
    {
      title: '歌手信息',
      dataIndex: 'singer_name',
      key: 'singer_name',
      width: 300,
      render: (text: string, record: SingerInfo) => (
        <Space size='middle' className={styles['singer-info']}>
          <Avatar
            src={record.singer_pic}
            icon={<UserOutlined />}
            size={48}
            className={styles['singer-avatar']}
          />
          <div className={styles['singer-details']}>
            <div className={styles['singer-name']}>{text}</div>
            <div className={styles['singer-country']}>{record.country || '未知地区'}</div>
            <div className={styles['singer-id']}>ID: {record.singer_id}</div>
          </div>
        </Space>
      ),
    },
    {
      title: '歌手ID',
      dataIndex: 'singer_id',
      key: 'singer_id',
      width: 120,
      align: 'center',
      render: (id: number) => <CopyText className={styles['singer-id-text']} text={id + ''} />,
    },
    {
      title: '歌手MID',
      dataIndex: 'singer_mid',
      key: 'singer_mid',
      width: 200,
      align: 'center',
      render: (mid: string) => <CopyText className={styles['singer-mid-text']} text={mid} />,
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      align: 'center',
      render: (_, record: SingerInfo) => (
        <Space size='middle'>
          <Button
            type='link'
            size='small'
            icon={<UserOutlined />}
            onClick={() => handleHotSong(record)}>
            查看热门歌曲
          </Button>
          <Button
            type='link'
            color='danger'
            size='small'
            icon={<PlayCircleOutlined />}
            onClick={() => handleAlbum(record)}>
            查看专辑
          </Button>
        </Space>
      ),
    },
  ];
  const { data, loading } = useGetData(getSingerList, searchParams, {
    monitors: [searchParams, visible],
    returnFunction: () => !visible,
  });
  const renderList = useMemo(() => {
    console.log('data', data);
    return (
      data.singerlist?.filter((item) =>
        item.singer_name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase() || ''),
      ) || []
    );
  }, [data, keyword]);

  return (
    <Modal
      title='歌手查询'
      open={visible}
      onCancel={close}
      footer={null}
      width={1100}
      centered
      className={styles['singer-search-modal']}>
      {/* 搜索表单 */}
      <SearchForm options={searchFormOptions} searchParams={searchParams} onSearch={handleSearch} />

      {/* 歌手列表 */}
      <Table
        columns={columns}
        dataSource={renderList}
        rowKey='singer_mid'
        loading={loading}
        pagination={false}
        scroll={{ y: 500 }}
      />

      <Pagination
        current={searchParams.cur_page}
        total={data.total}
        align='end'
        showSizeChanger={false}
        showQuickJumper={true}
        showTotal={(total) => `共 ${total} 位歌手`}
        onChange={(page) => {
          setSearchParams({
            ...searchParams,
            cur_page: page,
          });
        }}
      />

      {/* 热门歌曲Modal */}
      <HotSongModal ref={hotSongModalRef} />
      <AlbumListModal ref={albumModalRef} />
    </Modal>
  );
});

export default SingerSearch;
