import { CopyText, SearchForm } from '@/components';
import type { Option as SearchFormOption } from '@/components/SearchForm';
import { PlayCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Modal, Pagination, Space, Table, Tag } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { forwardRef, useState, type ForwardedRef } from 'react';
import { useCompRef, useVisible } from '../../hooks';
import type { Ref } from '../../hooks/useVisible';
import styles from './index.module.scss';

interface SearchParams {
  keyword?: string;
  cur_page: number;
}

const defaultSearchParams: SearchParams = {
  cur_page: 1,
};

const SongSearch = forwardRef((props, ref: ForwardedRef<Ref>) => {
  const { visible, open, close } = useVisible({}, ref);

  const [keyword, setKeyword] = useState('');
  const [searchParams, setSearchParams] = useState<SearchParams>(defaultSearchParams);
  
  const searchFormOptions: SearchFormOption[] = [
    // 歌曲名称
    {
      label: '歌曲名称',
      type: 'input',
      inputProps: {
        placeholder: '请输入歌曲名称',
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

  // 表格列配置
  const columns: ColumnType<any>[] = [
    {
      title: '歌曲信息',
      dataIndex: 'songName',
      key: 'songName',
      width: 300,
      render: (text, record) => (
        <Space size='middle' className={styles['song-info']}>
          <div className={styles['song-cover']}>
            {/* 这里可以添加歌曲封面 */}
          </div>
          <div className={styles['song-details']}>
            <div className={styles['song-name']} title={text}>
              {text}
            </div>
            <div className={styles['song-album']} title={record.albumName || ''}>
              {record.albumName || ''}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: '歌手',
      dataIndex: 'singerName',
      key: 'singerName',
      width: 200,
      render: (singerName: string) => (
        <Space size='small'>
          <Avatar icon={<UserOutlined />} size={40} />
          <div className={styles['singer-info']}>
            <div className={styles['singer-name']} title={singerName || '未知歌手'}>
              {singerName || '未知歌手'}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: '时长',
      dataIndex: 'duration',
      key: 'duration',
      width: 100,
      align: 'center',
      render: (duration: number) => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return (
          <span className={styles['duration']}>
            {minutes}:{seconds.toString().padStart(2, '0')}
          </span>
        );
      },
    },
    {
      title: '歌曲ID',
      dataIndex: 'songId',
      key: 'songId',
      width: 120,
      align: 'center',
      render: (songId: number) => (
        <CopyText className={styles['song-id-text']} text={songId + ''} />
      ),
    },
    {
      title: '歌曲MID',
      dataIndex: 'songMid',
      key: 'songMid',
      width: 200,
      align: 'center',
      render: (songMid: string) => (
        <CopyText className={styles['song-mid-text']} text={songMid} />
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      align: 'center',
      fixed: 'right',
      render: (_, record: any) => {
        return (
          <Space size='middle'>
            <Button
              type='link'
              size='small'
              icon={<PlayCircleOutlined />}
              onClick={() => handlePlay(record)}
              title='播放歌曲'>
              播放
            </Button>
          </Space>
        );
      },
    },
  ];

  const handlePlay = (record: any) => {
    console.log('播放歌曲:', record);
    // 这里实现播放逻辑
  };

  const renderTitle = () => {
    return (
      <div className={styles['modal-title']}>
        <div className={styles['title-content']}>
          <span className={styles['title-text']}>歌曲查询</span>
        </div>
      </div>
    );
  };

  return (
    <Modal
      title={renderTitle()}
      open={visible}
      onCancel={close}
      width={1200}
      centered
      className={styles['song-search-modal']}>
      <SearchForm
        options={searchFormOptions}
        onSearch={handleSearch}
        style={{ marginBottom: 16 }}
      />

      {/* 歌曲列表 */}
      <Table
        columns={columns}
        dataSource={[]} // 这里需要添加实际的数据源
        rowKey='songId'
        loading={false}
        scroll={{ y: 500, x: 1100 }}
        className={styles['song-table']}
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          align: 'end',
          showTotal: (total) => `共 ${total} 首歌曲`,
        }}
      />
    </Modal>
  );
});

export default SongSearch;
