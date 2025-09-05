import { CopyText } from '@/components';
import type { MvItem } from '@/types/search';
import { Image, Space, Table } from 'antd';
import type { ColumnType } from 'antd/es/table';
import styles from '../index.module.scss';

interface MvTabProps {
  data: MvItem[];
  loading: boolean;
}

const MvTab = ({ data, loading }: MvTabProps) => {
  // MV表格列配置
  const columns_mv: ColumnType<MvItem>[] = [
    {
      title: 'MV信息',
      dataIndex: 'mv_name',
      width: 300,
      render: (text, record) => (
        <Space size='middle' className={styles['song-info']}>
          <div className={styles['song-cover']}>
            <Image src={record.mv_pic_url} />
          </div>
          <div className={styles['song-details']}>
            <div className={styles['song-name']} title={text}>
              {text}
            </div>
            <div className={styles['song-album']} title={record.singer_name || ''}>
              {record.singer_name || ''}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: '歌手',
      dataIndex: 'singer_name',
      width: 200,
      ellipsis: true,
    },
    {
      title: '时长',
      dataIndex: 'duration',
      width: 100,
      align: 'center',
      render: (duration: number) => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      },
    },
    {
      title: '播放次数',
      dataIndex: 'play_count',
      width: 120,
      align: 'center',
      render: (count: number) => {
        if (count >= 10000) {
          return `${(count / 10000).toFixed(1)}万`;
        }
        return count.toString();
      },
    },
    {
      title: '发布时间',
      dataIndex: 'publish_date',
      width: 150,
      align: 'center',
    },
    {
      title: 'MV ID',
      dataIndex: 'mv_id',
      width: 150,
      align: 'center',
      render: (mv_id: number) => <CopyText className={styles['song-mid-text']} text={mv_id.toString()} />,
    },
  ];

  return (
    <Table
      columns={columns_mv}
      dataSource={data}
      rowKey='mv_id'
      loading={loading}
      scroll={{ y: 500, x: 1100 }}
      className={styles['song-table']}
      pagination={false}
    />
  );
};

export default MvTab;
