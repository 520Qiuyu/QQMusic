import { getAlbumPicUrl } from '@/apis/album';
import { CopyText } from '@/components';
import type { LyricItem } from '@/types/search';
import { Image, Space, Table } from 'antd';
import type { ColumnType } from 'antd/es/table';
import styles from '../index.module.scss';

interface LyricTabProps {
  data: LyricItem[];
  loading: boolean;
}

const LyricTab = ({ data, loading }: LyricTabProps) => {
  // 歌词表格列配置
  const columns_lyric: ColumnType<LyricItem>[] = [
    {
      title: '歌曲信息',
      dataIndex: 'songname',
      width: 300,
      render: (text, record) => (
        <Space size='middle' className={styles['song-info']}>
          <div className={styles['song-cover']}>
            <Image src={getAlbumPicUrl(record.albummid)} />
          </div>
          <div className={styles['song-details']}>
            <div className={styles['song-name']} title={text}>
              {text}
            </div>
            <div className={styles['song-album']} title={record.albumname || ''}>
              {record.albumname || ''}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: '歌手',
      dataIndex: 'singer',
      width: 200,
      render: (singers: any[]) => (
        <Space size='small'>
          <div className={styles['singer-info']}>
            <div
              className={styles['singer-name']}
              title={singers?.map((s) => s.name).join('/') || '未知歌手'}>
              {singers?.map((s) => s.name).join('/') || '未知歌手'}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: '歌词预览',
      dataIndex: 'content',
      width: 300,
      ellipsis: true,
      render: (content: string) => (
        <div title={content} style={{ maxWidth: 300 }}>
          {content?.substring(0, 50)}...
        </div>
      ),
    },
    {
      title: '歌曲ID',
      dataIndex: 'songmid',
      width: 200,
      align: 'center',
      render: (songmid: string) => <CopyText className={styles['song-mid-text']} text={songmid} />,
    },
  ];

  return (
    <Table
      columns={columns_lyric}
      dataSource={data}
      rowKey='songmid'
      loading={loading}
      scroll={{ y: 500, x: 1100 }}
      className={styles['song-table']}
      pagination={false}
    />
  );
};

export default LyricTab;
