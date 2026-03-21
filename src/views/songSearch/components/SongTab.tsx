import { getAlbumPicUrl } from '@/apis/album';
import { getSingerPic } from '@/apis/singer';
import { CopyText, MyButton } from '@/components';
import type { FileType } from '@/constants';
import { useConfig, usePlayMusic } from '@/hooks';
import type { TrackInfo } from '@/types/song';
import { getFile_qualityList } from '@/utils';
import { downloadAsLRC } from '@/utils/download';
import { msgError, msgSuccess } from '@/utils/modal';
import {
  CloudDownloadOutlined,
  DownloadOutlined,
  FileOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';
import { Button, Image, Select, Space, Table, Tag } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import styles from '../index.module.scss';

type SongRow = TrackInfo & { quality?: keyof typeof FileType };

interface SongTabProps {
  data: TrackInfo[];
  loading: boolean;
}

const sizeByQuality = (file: TrackInfo['file'], quality: keyof typeof FileType) => {
  if (quality === 128) return file.size_128mp3;
  if (quality === 320) return file.size_320mp3;
  if (quality === 'flac') return file.size_flac;
  return file.size_128mp3;
};

const SongTab = ({ data, loading }: SongTabProps) => {
  const { downloadConfig } = useConfig();
  const { quality: defaultQuality } = downloadConfig;
  const { play, download, isPlaying, pause, getLyric, convertToNeteaseMusic } = usePlayMusic();

  const [list, setList] = useState<SongRow[]>(data);
  useEffect(() => {
    setList(data);
  }, [data]);

  const handleChooseQuality = (record: SongRow, quality: keyof typeof FileType) => {
    setList(
      list.map((item) => {
        if (item.mid === record.mid) {
          return { ...item, quality };
        }
        return item;
      }),
    );
  };

  const handlePlay = (record: SongRow) => {
    console.log('播放歌曲:', record);
    if (isPlaying) {
      pause();
    } else {
      const finalQuality = getQuality(record, defaultQuality, record.quality);
      play(record.mid, finalQuality);
    }
  };

  const handleDownload = async (record: SongRow) => {
    try {
      const finalQuality = getQuality(record, defaultQuality, record.quality);
      await download(record.mid, finalQuality);
    } catch (error) {
      console.error('下载歌曲失败:', error);
    }
  };

  const handleDownloadLyric = async (record: SongRow) => {
    try {
      const lyric = await getLyric(record.mid);
      downloadAsLRC(lyric, record.name);
    } catch (error) {
      console.error('下载歌词失败:', error);
    }
  };

  const handleDownloadNeteaseMusic = async (record: SongRow) => {
    try {
      await convertToNeteaseMusic(record.mid);
      msgSuccess('歌曲转存网易云成功');
    } catch (error) {
      console.log('error', error);
      msgError('歌曲转存网易云失败');
    }
  };

  const columns_song: ColumnType<SongRow>[] = [
    {
      title: '歌曲信息',
      dataIndex: 'name',
      width: 300,
      render: (text, record) => (
        <Space size='middle' className={styles['song-info']}>
          <div className={styles['song-cover']}>
            <Image src={getAlbumPicUrl(record.album.mid)} />
          </div>
          <div className={styles['song-details']}>
            <div className={styles['song-name']} title={text}>
              {text}
            </div>
            <div className={styles['song-album']} title={record.album.name || ''}>
              {record.album.name || ''}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: '歌手',
      dataIndex: 'singer',
      width: 200,
      render: (singers: TrackInfo['singer']) => (
        <Space size='small'>
          <Image src={getSingerPic(singers[0]?.mid)} width={40} height={40} />
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
      dataIndex: ['album', 'name'],
      width: 200,
      ellipsis: true,
    },
    {
      title: '大小',
      width: 120,
      align: 'center',
      render: (_: unknown, record: SongRow) => {
        const quality = getQuality(record, defaultQuality, record.quality);
        const size = sizeByQuality(record.file, quality);
        return <span>{Math.round((size || 0) / 1024 / 1024)}MB</span>;
      },
    },
    {
      title: '音质',
      key: 'quality',
      width: 150,
      align: 'center',
      render: (_: unknown, record: SongRow) => {
        const qualityList = getFile_qualityList(record.file);
        const defaultValue = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
        return (
          <Select
            options={qualityList.map((q) => ({ label: q, value: q }))}
            defaultValue={defaultValue}
            style={{ width: '100%' }}
            onChange={(value) => {
              handleChooseQuality(record, value as keyof typeof FileType);
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
      render: (_: unknown, record: SongRow) => {
        const qualityList = getFile_qualityList(record.file);
        const qualityColorMap = {
          flac: 'green',
          ape: 'volcano',
          320: 'blue',
          m4a: 'orange',
          128: 'gray',
        };
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
      title: '歌曲ID',
      dataIndex: 'mid',
      width: 200,
      align: 'center',
      render: (mid: string) => <CopyText className={styles['song-mid-text']} text={mid} />,
    },
    {
      title: '操作',
      key: 'action',
      width: 300,
      align: 'center',
      fixed: 'right',
      render: (_: unknown, record: SongRow) => (
        <Space size='small' wrap>
          <Button
            type='link'
            size='small'
            icon={isPlaying === record.mid ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
            onClick={() => handlePlay(record)}
            title='播放歌曲'>
            播放
          </Button>
          <MyButton
            type='link'
            size='small'
            icon={<DownloadOutlined />}
            onClick={() => handleDownload(record)}
            title='下载歌曲'>
            下载
          </MyButton>
          <MyButton
            type='link'
            size='small'
            icon={<FileOutlined />}
            onClick={() => handleDownloadLyric(record)}
            title='下载歌词'>
            下载歌词
          </MyButton>
          <MyButton
            type='link'
            size='small'
            icon={<CloudDownloadOutlined />}
            onClick={() => handleDownloadNeteaseMusic(record)}
            title='转存网易云'>
            转存网易云
          </MyButton>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns_song}
      dataSource={list}
      rowKey='mid'
      loading={loading}
      scroll={{ y: 500, x: 1100 }}
      className={styles['song-table']}
      pagination={false}
    />
  );
};

export default SongTab;

function getQuality(
  record: TrackInfo,
  defaultQuality: keyof typeof FileType,
  chooseQuality?: keyof typeof FileType,
) {
  const qualityList = getFile_qualityList(record.file);
  const songDefaultQuality = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
  return chooseQuality || songDefaultQuality;
}
