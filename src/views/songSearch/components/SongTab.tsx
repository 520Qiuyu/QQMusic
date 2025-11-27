import { getAlbumPicUrl } from '@/apis/album';
import { getSingerPic } from '@/apis/singer';
import { CopyText } from '@/components';
import type { SongInfo } from '@/types/search';
import { useGetAlbumDetail } from '@/hooks/useGetAlbumDetail';
import type { FileType } from '@/constants';
import { DownloadOutlined, PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Button, Image, Select, Space, Table } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { useState } from 'react';
import { usePlayMusic } from '../../../hooks';
import styles from '../index.module.scss';

interface SongTabProps {
  data: SongInfo[];
  loading: boolean;
}

const SongTab = ({ data, loading }: SongTabProps) => {
  const [qualityMap, setQualityMap] = useState<Record<string, keyof typeof FileType>>({});
  const { play, download, isPlaying, pause } = usePlayMusic();

  const handlePlay = (record: SongInfo) => {
    console.log('播放歌曲:', record);
    if (isPlaying) {
      pause();
    } else {
      play(record.songmid, qualityMap[record.songmid] || 128);
    }
  };

  const handleDownload = (record: SongInfo) => {
    download(record.songmid);
  };

  // 歌曲表格列配置
  const columns_song: ColumnType<SongInfo>[] = [
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
      render: (singers: { id: number; mid: string; name: string; name_hilight: string }[]) => (
        <Space size='small'>
          <Image src={getSingerPic(singers[0].mid)} width={40} height={40} />
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
      title: '专辑',
      dataIndex: 'albumname',
      width: 200,
      ellipsis: true,
    },
    {
      title: '大小',
      dataIndex: 'size128',
      width: 120,
      align: 'center',
      render: (_, record) => {
        const sizeKey = `size${qualityMap[record.songmid] || 128}`;
        const size = record[sizeKey] || 0;
        return <span>{Math.round(size / 1024 / 1024)}MB</span>;
      },
    },
    // 音质选择器
    {
      title: '音质',
      key: 'quality',
      width: 150,
      align: 'center',
      render: (_, record) => {
        const options: { label: string; value: number | string }[] = [];
        if (record.size128) options.push({ label: '128k', value: 128 });
        if (record.size320) options.push({ label: '320k', value: 320 });
        if (record.sizeflac) options.push({ label: 'FLAC', value: 'flac' });
        return (
          <Select
            options={options}
            defaultValue={128}
            style={{ width: '100%' }}
            onChange={(value) => {
              setQualityMap((prev) => ({
                ...prev,
                [record.songmid]: value as any,
              }));
            }}
          />
        );
      },
    },
    {
      title: '格式',
      key: 'format',
      width: 150,
      align: 'center',
      render: (_, record) => {
        const formats: string[] = [];
        if (record.size128) formats.push('MP3 128k');
        if (record.size320) formats.push('MP3 320k');
        if (record.sizeflac) formats.push('FLAC');
        return formats.join(' / ');
      },
    },
    {
      title: '歌曲ID',
      dataIndex: 'songmid',
      width: 200,
      align: 'center',
      render: (songmid: string) => <CopyText className={styles['song-mid-text']} text={songmid} />,
    },
    {
      title: '操作',
      key: 'action',
      width: 300,
      align: 'center',
      fixed: 'right',
      render: (_, record) => {
        return (
          <Space size='middle'>
            <Button
              type='link'
              size='small'
              icon={isPlaying === record.songmid ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              onClick={() => handlePlay(record)}
              title='播放歌曲'>
              播放
            </Button>
            <Button
              type='link'
              size='small'
              icon={<DownloadOutlined />}
              onClick={() => handleDownload(record)}
              title='下载歌曲'>
              下载
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns_song}
      dataSource={data}
      rowKey='songmid'
      loading={loading}
      scroll={{ y: 500, x: 1100 }}
      className={styles['song-table']}
      pagination={false}
    />
  );
};

export default SongTab;
