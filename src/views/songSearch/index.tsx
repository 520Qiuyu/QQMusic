import { getAlbumPicUrl } from '@/apis/album';
import { getSearchResult } from '@/apis/search';
import { CopyText, SearchForm } from '@/components';
import type { Option as SearchFormOption } from '@/components/SearchForm';
import type { Singer, SongInfo } from '@/types/search';
import {
  DownloadOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Image, Modal, Pagination, Select, Space, Table } from 'antd';
import type { ColumnType } from 'antd/es/table';
import { forwardRef, useState, type ForwardedRef } from 'react';
import { useGetData, usePlayMusic, useVisible } from '../../hooks';
import type { Ref } from '../../hooks/useVisible';
import styles from './index.module.scss';
import { getSingerPic } from '@/apis/singer';
import { getHighestQuality } from '@/hooks/useGetAlbumDetail';
import type { FileType } from '@/constants';

interface SearchParams {
  keyword?: string;
  pageNum: number;
  pageSize: number;
}

const defaultSearchParams: SearchParams = {
  pageNum: 1,
  pageSize: 20,
};

const SongSearch = forwardRef((props, ref: ForwardedRef<Ref>) => {
  const { visible, open, close } = useVisible({}, ref);

  const [keyword, setKeyword] = useState('');
  const [searchParams, setSearchParams] = useState<SearchParams>(defaultSearchParams);

  const searchFormOptions: SearchFormOption[] = [
    // 歌曲名称
    {
      label: '歌曲名称',
      name: 'keyword',
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

  const [qualityMap, setQualityMap] = useState<Record<string, keyof typeof FileType>>({});
  // 表格列配置
  const columns: ColumnType<SongInfo>[] = [
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
      render: (singers: Singer[]) => (
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

  const { data, loading } = useGetData(
    () => getSearchResult(searchParams.keyword!, 'song', searchParams),
    undefined,
    {
      returnFunction: () => !searchParams.keyword,
      monitors: [searchParams],
    },
  );
  console.log('data', data);

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
    // 先挑选音质
    const quality = getHighestQuality(record);
    download(record.songmid, record.songname, qualityMap[record.songmid] || quality);
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
        dataSource={data?.song?.list || []} // 这里需要添加实际的数据源
        rowKey='songmid'
        loading={loading}
        scroll={{ y: 500, x: 1100 }}
        className={styles['song-table']}
        pagination={false}
      />

      <Pagination
        align='end'
        total={data?.song?.totalnum || 0}
        current={searchParams.pageNum}
        pageSize={searchParams.pageSize}
        showSizeChanger={true}
        showTotal={(total) => `共 ${total} 首歌曲`}
        onChange={(page, pageSize) => {
          setSearchParams({ ...searchParams, pageNum: page, pageSize });
        }}
        style={{ marginTop: 16 }}
      />
    </Modal>
  );
});

export default SongSearch;
