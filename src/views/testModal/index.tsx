import { getAlbumInfo, getAlbumPicUrl } from '@/apis/album';
import { getSearchResult } from '@/apis/search';
import {
  getSimilarSinger,
  getSingerAlbum,
  getSingerAllAlbum,
  getSingerFollowCount,
  getSingerHotSong,
  getSingerInfo,
  getSingerList,
} from '@/apis/singer';
import { getSongInfo, getSongLyric, getSongPlayUrl } from '@/apis/song';
import { getSongList, getSongListCategory, getSongListDetail } from '@/apis/songList';
import {
  AreaList,
  FlacTagList,
  GenreList,
  ResourceType,
  SexList,
  type ResourceTypeValues,
} from '@/constants';
import { useVisible } from '@/hooks';
import type { Ref } from '@/hooks/useVisible';
import { embedFlacPicture, readAllFlacTag, writeFlacTag, type FlacTags } from '@/libs/flac';
import { Button, Form, Input, Modal, Select, Space } from 'antd';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import type { ForwardedRef } from 'react';
import { forwardRef, useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import { downloadDirectly, downloadFileWithBlob } from '@/utils/download';
import { msgError, msgSuccess } from '@/utils/modal';

hljs.configure({
  classPrefix: 'hljs-',
  languages: ['json'],
});

const TestModal = forwardRef((props, ref: ForwardedRef<Ref>) => {
  const { visible, open, close } = useVisible({}, ref);

  // 测试获取歌手列表
  const [getSingerListLoading, setGetSingerListLoading] = useState(false);
  const [getSingerListParams, setGetSingerListParams] = useState({
    area: -100,
    sex: -100,
    genre: -100,
    cur_page: 1,
  });
  const handleGetSingerList = async () => {
    try {
      setGetSingerListLoading(true);
      const res = await getSingerList(getSingerListParams);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSingerListLoading(false);
    }
  };

  // 测试获取歌手信息
  const [mid, setMid] = useState('003fA5G40k6hKc');
  const [getSingerInfoLoading, setGetSingerInfoLoading] = useState(false);
  const handleGetSingerInfo = async () => {
    try {
      setGetSingerInfoLoading(true);
      const res = await getSingerInfo(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSingerInfoLoading(false);
    }
  };

  // 测试获取歌手专辑
  const [getSingerAlbumLoading, setGetSingerAlbumLoading] = useState(false);
  const handleGetSingerAlbum = async () => {
    try {
      setGetSingerAlbumLoading(true);
      const res = await getSingerAlbum(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSingerAlbumLoading(false);
    }
  };

  // 测试获取歌手所有专辑
  const [getSingerAllAlbumLoading, setGetSingerAllAlbumLoading] = useState(false);
  const handleGetSingerAllAlbum = async () => {
    try {
      setGetSingerAllAlbumLoading(true);
      const res = await getSingerAllAlbum(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSingerAllAlbumLoading(false);
    }
  };

  // 测试获取歌手被关注数量
  const [getSingerFollowCountLoading, setGetSingerFollowCountLoading] = useState(false);
  const handleGetSingerFollowCount = async () => {
    try {
      setGetSingerFollowCountLoading(true);
      const res = await getSingerFollowCount(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSingerFollowCountLoading(false);
    }
  };

  // 测试获取歌手热门歌曲
  const [getSingerHotSongLoading, setGetSingerHotSongLoading] = useState(false);
  const handleGetSingerHotSong = async () => {
    try {
      setGetSingerHotSongLoading(true);
      const res = await getSingerHotSong(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSingerHotSongLoading(false);
    }
  };

  // 测试获取相似歌手
  const [getSimilarSingerLoading, setGetSimilarSingerLoading] = useState(false);
  const handleGetSimilarSinger = async () => {
    try {
      setGetSimilarSingerLoading(true);
      const res = await getSimilarSinger(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSimilarSingerLoading(false);
    }
  };

  // 测试获取专辑信息
  const [albummid, setAlbummid] = useState('0016l2F430zMux');
  const [getAlbumInfoLoading, setGetAlbumInfoLoading] = useState(false);
  const handleGetAlbumInfo = async () => {
    try {
      setGetAlbumInfoLoading(true);
      const res = await getAlbumInfo(albummid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetAlbumInfoLoading(false);
    }
  };

  // 测试获取专辑图片
  const [getAlbumPicUrlLoading, setGetAlbumPicUrlLoading] = useState(false);
  const handleGetAlbumPicUrl = async () => {
    try {
      setGetAlbumPicUrlLoading(true);
      const res = getAlbumPicUrl(albummid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetAlbumPicUrlLoading(false);
    }
  };

  // 测试获取歌单列表
  const [getSongListLoading, setGetSongListLoading] = useState(false);
  const [getSongListCategoryLoading, setGetSongListCategoryLoading] = useState(false);
  const handleGetSongListCategory = async () => {
    try {
      setGetSongListCategoryLoading(true);
      const res = await getSongListCategory();
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSongListCategoryLoading(false);
    }
  };
  const handleGetSongList = async () => {
    try {
      setGetSongListLoading(true);
      const res = await getSongList();
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSongListLoading(false);
    }
  };

  // 测试获取歌单详情
  const [disstid, setDisstid] = useState('7011264340');
  const [getSongListDetailLoading, setGetSongListDetailLoading] = useState(false);
  const handleGetSongListDetail = async () => {
    try {
      setGetSongListDetailLoading(true);
      const res = await getSongListDetail(disstid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSongListDetailLoading(false);
    }
  };

  // 测试获取歌曲歌词
  const [getSongLyricLoading, setGetSongLyricLoading] = useState(false);
  const [songmid, setSongmid] = useState('003rJSwm3TechU');
  const handleGetSongLyric = async () => {
    try {
      setGetSongLyricLoading(true);
      const res = await getSongLyric(songmid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSongLyricLoading(false);
    }
  };

  // 测试获取歌曲播放链接
  const [getSongPlayUrlLoading, setGetSongPlayUrlLoading] = useState(false);
  const handleGetSongPlayUrl = async () => {
    try {
      setGetSongPlayUrlLoading(true);
      const res = await getSongPlayUrl(songmid.split(','));
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSongPlayUrlLoading(false);
    }
  };

  // 测试获取歌曲信息
  const [getSongInfoLoading, setGetSongInfoLoading] = useState(false);
  const handleGetSongInfo = async () => {
    try {
      setGetSongInfoLoading(true);
      const res = await getSongInfo(songmid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSongInfoLoading(false);
    }
  };

  // 测试获取搜索结果
  const [getSearchResultLoading, setGetSearchResultLoading] = useState(false);
  const [getSearchResultParams, setGetSearchResultParams] = useState({
    keyword: '',
    type: 'song' as ResourceTypeValues,
  });
  const handleGetSearchResult = async () => {
    try {
      setGetSearchResultLoading(true);
      const res = await getSearchResult(getSearchResultParams.keyword, getSearchResultParams.type);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSearchResultLoading(false);
    }
  };

  // 测试metaflac.wasm
  // 待修改的文件
  const [testMetaflacWasmFile, setTestMetaflacWasmFile] = useState<File>();
  // 待修改的文件的标签
  const [fileTags, setFileTags] = useState<FlacTags>();
  /** 高亮显示代码 */
  const highlightedCode = useMemo(() => {
    if (!fileTags) return '';
    return hljs.highlight(JSON.stringify(fileTags, null, 2), { language: 'json' }).value;
  }, [fileTags]);
  useEffect(() => {
    const asyncFn = async () => {
      if (!testMetaflacWasmFile) return;
      const tags = await readAllFlacTag(testMetaflacWasmFile);
      setFileTags(tags);
    };
    asyncFn();
  }, [testMetaflacWasmFile]);
  /** 下载最新文件 */
  const handleDownloadLatestFile = async () => {
    if (!testMetaflacWasmFile) return;
    downloadFileWithBlob(testMetaflacWasmFile, testMetaflacWasmFile.name);
  };

  const [writeFlacTagParams, setWriteFlacTagParams] = useState<{
    tagName: keyof FlacTags;
    tagValue: string;
  }>({
    tagName: 'title',
    tagValue: '',
  });
  /** 修改标签 */
  const handleWriteFlacTag = async () => {
    if (!testMetaflacWasmFile) return;
    const { tagName, tagValue } = writeFlacTagParams;
    if (!tagName || !tagValue) return msgError('请输入标签值');
    const outputFile = await writeFlacTag(testMetaflacWasmFile, tagName, tagValue);
    console.log('outputFile', outputFile);
    msgSuccess('修改标签成功');
    // downloadFileWithBlob(outputFile!, testMetaflacWasmFile.name);
    setTestMetaflacWasmFile(
      new File([outputFile!], testMetaflacWasmFile.name, { type: 'audio/flac' }),
    );
  };
  /** 嵌入图片 */
  const coverInputRef = useRef<HTMLInputElement>(null);
  const handleEmbedFlacPicture = async () => {
    if (!testMetaflacWasmFile) return msgError('请先选择文件');
    if (!coverInputRef.current?.files?.[0]) return msgError('请选择图片');
    const outputFile = await embedFlacPicture(
      testMetaflacWasmFile,
      coverInputRef.current?.files?.[0]!,
    );
    console.log('outputFile', outputFile);
    msgSuccess('嵌入图片成功');
    downloadFileWithBlob(outputFile!, testMetaflacWasmFile.name);
    setTestMetaflacWasmFile(
      new File([outputFile!], testMetaflacWasmFile.name, { type: 'audio/flac' }),
    );
  };

  return (
    <Modal
      title='测试Modal'
      open={visible}
      onCancel={close}
      width={1000}
      footer={null}
      centered
      styles={{
        body: {
          maxHeight: '80vh',
          overflowY: 'auto',
        },
      }}>
      <Form>
        {/* 测试获取歌手列表 */}
        <Form.Item label='获取歌手列表'>
          <Space>
            <Select
              options={AreaList}
              style={{
                width: 150,
              }}
              value={getSingerListParams.area}
              onChange={(value) => setGetSingerListParams({ ...getSingerListParams, area: value })}
            />
            <Select
              options={GenreList}
              style={{
                width: 150,
              }}
              value={getSingerListParams.genre}
              onChange={(value) => setGetSingerListParams({ ...getSingerListParams, genre: value })}
            />
            <Select
              options={SexList}
              style={{
                width: 150,
              }}
              value={getSingerListParams.sex}
              onChange={(value) => setGetSingerListParams({ ...getSingerListParams, sex: value })}
            />
            <Button type='primary' onClick={handleGetSingerList} loading={getSingerListLoading}>
              获取歌手列表
            </Button>
          </Space>
        </Form.Item>

        {/* 测试获取歌手信息 */}
        <Form.Item label='获取歌手信息'>
          <Space wrap>
            <Input
              placeholder='请输入歌手mid'
              style={{ width: 300 }}
              value={mid}
              onChange={(e) => setMid(e.target.value)}
            />
            <Button type='primary' onClick={handleGetSingerInfo} loading={getSingerInfoLoading}>
              获取歌手信息
            </Button>
            <Button type='primary' onClick={handleGetSingerAlbum} loading={getSingerAlbumLoading}>
              获取歌手专辑
            </Button>
            <Button
              type='primary'
              onClick={handleGetSingerAllAlbum}
              loading={getSingerAllAlbumLoading}>
              获取歌手所有专辑
            </Button>
            <Button
              type='primary'
              onClick={handleGetSingerFollowCount}
              loading={getSingerFollowCountLoading}>
              获取歌手被关注数量
            </Button>
            <Button
              type='primary'
              onClick={handleGetSingerHotSong}
              loading={getSingerHotSongLoading}>
              获取歌手热门歌曲
            </Button>
            <Button
              type='primary'
              onClick={handleGetSimilarSinger}
              loading={getSimilarSingerLoading}>
              获取相似歌手
            </Button>
          </Space>
        </Form.Item>

        {/* 测试获取专辑信息 */}
        <Form.Item label='获取专辑信息'>
          <Space>
            <Input
              placeholder='请输入专辑mid'
              style={{ width: 300 }}
              value={albummid}
              onChange={(e) => setAlbummid(e.target.value)}
            />
            <Button type='primary' onClick={handleGetAlbumInfo} loading={getAlbumInfoLoading}>
              获取专辑信息
            </Button>
            <Button type='primary' onClick={handleGetAlbumPicUrl} loading={getAlbumPicUrlLoading}>
              获取专辑图片
            </Button>
          </Space>
        </Form.Item>

        {/* 测试获取歌单列表 */}
        <Form.Item label='获取歌单列表'>
          <Space>
            <Button
              type='primary'
              onClick={handleGetSongListCategory}
              loading={getSongListCategoryLoading}>
              获取歌单分类列表
            </Button>
            <Button type='primary' onClick={handleGetSongList} loading={getSongListLoading}>
              获取歌单列表
            </Button>
          </Space>
        </Form.Item>

        {/* 测试获取歌单详情 */}
        <Form.Item label='获取歌单详情'>
          <Space>
            <Input
              placeholder='请输入歌单id'
              style={{ width: 300 }}
              value={disstid}
              onChange={(e) => setDisstid(e.target.value)}
            />
            <Button
              type='primary'
              onClick={handleGetSongListDetail}
              loading={getSongListDetailLoading}>
              获取歌单详情
            </Button>
          </Space>
        </Form.Item>

        {/* 测试获取歌曲歌词 */}
        <Form.Item label='获取歌曲歌词'>
          <Space>
            <Input
              placeholder='请输入歌曲mid'
              style={{ width: 300 }}
              value={songmid}
              onChange={(e) => setSongmid(e.target.value)}
            />
            <Button type='primary' onClick={handleGetSongLyric} loading={getSongLyricLoading}>
              获取歌曲歌词
            </Button>
            <Button type='primary' onClick={handleGetSongPlayUrl} loading={getSongPlayUrlLoading}>
              获取歌曲播放链接
            </Button>
            <Button type='primary' onClick={handleGetSongInfo} loading={getSongInfoLoading}>
              获取歌曲信息
            </Button>
          </Space>
        </Form.Item>

        {/* 测试获取搜索结果 */}
        <Form.Item label='获取搜索结果'>
          <Space>
            <Input
              placeholder='请输入搜索关键词'
              style={{ width: 300 }}
              value={getSearchResultParams.keyword}
              onChange={(e) =>
                setGetSearchResultParams({ ...getSearchResultParams, keyword: e.target.value })
              }
            />
            <Select
              options={Object.entries(ResourceType).map(([key, value]) => ({
                label: key,
                value,
              }))}
              style={{ width: 150 }}
              value={getSearchResultParams.type}
              onChange={(value) =>
                setGetSearchResultParams({ ...getSearchResultParams, type: value })
              }
              allowClear
            />
            <Button type='primary' onClick={handleGetSearchResult} loading={getSearchResultLoading}>
              获取搜索结果
            </Button>
          </Space>
        </Form.Item>

        {/* 测试metaflac-wasm */}
        <Form.Item label='测试metaflac.wasm'>
          <Space direction='vertical'>
            {/* 选择以及下载最新文件 */}
            <Space>
              <input type='file' onChange={(e) => setTestMetaflacWasmFile(e.target.files?.[0])} />
              <Button type='primary' onClick={handleDownloadLatestFile}>
                下载最新文件
              </Button>
            </Space>
            {/* 修改Tag */}
            <Space>
              <Select
                options={FlacTagList}
                style={{ width: 150 }}
                value={writeFlacTagParams.tagName}
                onChange={(value) =>
                  setWriteFlacTagParams({ ...writeFlacTagParams, tagName: value })
                }
              />
              <Input
                placeholder='请输入标签值'
                style={{ width: 150 }}
                value={writeFlacTagParams.tagValue}
                onChange={(e) =>
                  setWriteFlacTagParams({ ...writeFlacTagParams, tagValue: e.target.value })
                }
              />
              <Button type='primary' onClick={handleWriteFlacTag}>
                写入标签
              </Button>
            </Space>
            {/* 嵌入图片 */}
            <Space>
              <input type='file' ref={coverInputRef} accept='png,jpg,jpeg' />
              <Button type='primary' onClick={handleEmbedFlacPicture}>
                嵌入图片
              </Button>
            </Space>
          </Space>
          <code className={styles['code']} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </Form.Item>
      </Form>
    </Modal>
  );
});

export default TestModal;
