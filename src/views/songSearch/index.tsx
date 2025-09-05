import { getSearchResult } from '@/apis/search';
import { SearchForm } from '@/components';
import type { Option as SearchFormOption } from '@/components/SearchForm';
import type { ResourceTypeValues } from '@/constants';
import { Modal, Pagination, Tabs } from 'antd';
import { forwardRef, useState, type ForwardedRef } from 'react';
import { useGetData, useVisible } from '../../hooks';
import type { Ref } from '../../hooks/useVisible';
import styles from './index.module.scss';
import { SongTab, AlbumTab, SingerTab, MvTab, LyricTab } from './components';

interface SearchParams {
  keyword?: string;
  pageNum: number;
  pageSize: number;
  type: ResourceTypeValues;
}

const defaultSearchParams: SearchParams = {
  pageNum: 1,
  pageSize: 20,
  type: 'song',
};

const SongSearch = forwardRef((props, ref: ForwardedRef<Ref>) => {
  const { visible, open, close } = useVisible({}, ref);

  const [searchParams, setSearchParams] = useState<SearchParams>(defaultSearchParams);

  const searchFormOptions: SearchFormOption[] = [
    // 歌曲名称
    {
      label: '歌曲名称',
      name: 'keyword',
      type: 'input',
      inputProps: {
        placeholder: '请输入歌曲名称',
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


  const { data, loading } = useGetData(
    () => getSearchResult(searchParams.keyword!, searchParams.type, searchParams),
    undefined,
    {
      returnFunction: () => !searchParams.keyword,
      monitors: [searchParams],
    },
  );
  console.log('data', data);


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

      <Tabs
        activeKey={searchParams.type}
        onChange={(key) => setSearchParams({ ...searchParams, type: key as ResourceTypeValues, pageNum: 1 })}>
        <Tabs.TabPane tab='歌曲' key='song'>
          <SongTab data={data?.song?.list || []} loading={loading} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='专辑' key='album'>
          <AlbumTab data={data?.album?.list || []} loading={loading} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='歌手' key='user'>
          <SingerTab data={data?.singer?.list || []} loading={loading} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='MV' key='mv'>
          <MvTab data={data?.mv?.list || []} loading={loading} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='歌词' key='lyric'>
          <LyricTab data={data?.lyric?.list || []} loading={loading} />
        </Tabs.TabPane>
      </Tabs>

      <Pagination
        align='end'
        total={(() => {
          switch (searchParams.type) {
            case 'song':
              return data?.song?.totalnum || 0;
            case 'album':
              return data?.album?.totalnum || 0;
            case 'user':
              return data?.singer?.totalnum || 0;
            case 'mv':
              return data?.mv?.totalnum || 0;
            case 'lyric':
              return data?.lyric?.totalnum || 0;
            default:
              return 0;
          }
        })()}
        current={searchParams.pageNum}
        pageSize={searchParams.pageSize}
        showSizeChanger={true}
        showTotal={(total) => {
          const typeMap = {
            song: '首歌曲',
            album: '张专辑',
            user: '位歌手',
            mv: '个MV',
            lyric: '首歌词',
          };
          return `共 ${total} ${typeMap[searchParams.type] || '条记录'}`;
        }}
        onChange={(page, pageSize) => {
          setSearchParams({ ...searchParams, pageNum: page, pageSize });
        }}
        style={{ marginTop: 16 }}
      />
    </Modal>
  );
});

export default SongSearch;
