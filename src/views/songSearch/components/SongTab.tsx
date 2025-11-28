import { getAlbumPicUrl } from '@/apis/album';
import { getSingerPic } from '@/apis/singer';
import { CopyText, MyButton } from '@/components';
import type { FileType } from '@/constants';
import { useConfig, usePlayMusic } from '@/hooks';
import type { SongInfo } from '@/types/search';
import { getFileQualityList } from '@/utils';
import { downloadAsLRC } from '@/utils/download';
import {
  DownloadOutlined,
  FileOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
} from '@ant-design/icons';
import { Button, Image, Select, Space, Table, Tag } from 'antd';
import type { ColumnType } from 'antd/es/table';
import styles from '../index.module.scss';

interface SongTabProps {
  data: SongInfo[];
  loading: boolean;
}

const SongTab = ({ data, loading }: SongTabProps) => {
  const { downloadConfig } = useConfig();
  const { quality: defaultQuality } = downloadConfig;
  const { play, download, isPlaying, pause, getLyric } = usePlayMusic();

  const [list, setList] = useState<SongInfo[]>(data);
  useEffect(() => {
    setList(data);
  }, [data]);

  const handleChooseQuality = (record: SongInfo, quality: keyof typeof FileType) => {
    setList(
      list.map((item) => {
        if (item.songmid === record.songmid) {
          return {
            ...item,
            quality,
          };
        }
        return item;
      }),
    );
  };

  const handlePlay = (record: SongInfo & { quality?: keyof typeof FileType }) => {
    console.log('播放歌曲:', record);
    if (isPlaying) {
      pause();
    } else {
      const finalQuality = getQuality(record, defaultQuality, record.quality);
      play(record.songmid, finalQuality);
    }
  };

  const handleDownload = async (record: SongInfo & { quality?: keyof typeof FileType }) => {
    try {
      const finalQuality = getQuality(record, defaultQuality, record.quality);
      await download(record.songmid, finalQuality);
    } catch (error) {
      console.error('下载歌曲失败:', error);
    }
  };

  const handleDownloadLyric = async (record: SongInfo & { quality?: keyof typeof FileType }) => {
    try {
      const lyric = await getLyric(record.songmid);
      downloadAsLRC(lyric, record.songname);
    } catch (error) {
      console.error('下载歌词失败:', error);
    }
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
      render: (_, record: SongInfo & { quality?: keyof typeof FileType }) => {
        const quality = record.quality || defaultQuality;
        const sizeKey = `size${quality}`;
        if (record.quality) {
          console.log('quality', quality);
          console.log('sizeKey', sizeKey);
        }
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
        const qualityList = getFileQualityList(record);
        const defaultValue = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
        return (
          <Select
            options={qualityList.map((quality) => ({
              label: quality,
              value: quality,
            }))}
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
      render: (_, record: SongInfo & { quality?: keyof typeof FileType }) => {
        const qualityList = getFileQualityList(record);
        // 定义不同音质对应的颜色
        const qualityColorMap = {
          flac: 'green',
          ape: 'volcano',
          320: 'blue',
          m4a: 'orange',
          128: 'gray',
        };
        // 音质tag文本映射
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
            <MyButton
              type='link'
              size='small'
              icon={<DownloadOutlined />}
              onClick={() => handleDownload(record)}
              title='下载歌曲'>
              下载
            </MyButton>
            {/* 下载歌词 */}
            <MyButton
              type='link'
              size='small'
              icon={<FileOutlined />}
              onClick={() => handleDownloadLyric(record)}
              title='下载歌词'>
              下载歌词
            </MyButton>
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns_song}
      dataSource={list}
      rowKey='songmid'
      loading={loading}
      scroll={{ y: 500, x: 1100 }}
      className={styles['song-table']}
      pagination={false}
    />
  );
};

export default SongTab;

const getQuality = (
  record: SongInfo,
  defaultQuality: keyof typeof FileType,
  chooseQuality?: keyof typeof FileType,
) => {
  const qualityList = getFileQualityList(record);
  const songDefaultQuality = qualityList.includes(defaultQuality) ? defaultQuality : qualityList[0];
  const finalQuality = chooseQuality || songDefaultQuality;
  return finalQuality;
};
