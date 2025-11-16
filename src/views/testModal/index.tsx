import { useVisible } from '@/hooks';
import { useConfig } from '@/hooks/useConfig';
import type { Ref } from '@/hooks/useVisible';
import { Modal, Tabs, type TabsProps } from 'antd';
import type { ForwardedRef } from 'react';
import { forwardRef, useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import { downloadDirectly, downloadFileWithBlob } from '@/utils/download';
import { msgError, msgSuccess } from '@/utils/modal';
import { embedMp3Picture, readAllMp3Tag, writeMp3Tag, type Mp3Tags } from '@/libs/mp3';
import { readMp3Metadata } from '@/libs/mp3MusicMeta';

hljs.configure({
  classPrefix: 'hljs-',
  languages: ['json'],
});

const TestModal = forwardRef((_, ref: ForwardedRef<Ref>) => {
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
  const [getWebSearchResultLoading, setGetWebSearchResultLoading] = useState(false);
  const handleGetWebSearchResult = async () => {
    try {
      setGetWebSearchResultLoading(true);
      const res = await getWebSearchResult(
        getSearchResultParams.keyword,
        getSearchResultParams.type,
      );
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetWebSearchResultLoading(false);
    }
  };

  // 测试metaflac.wasm
  // 待修改的文件
  const [testMetaflacWasmFile, setTestMetaflacWasmFile] = useState<File>();
  // 待修改的文件的标签
  const [fileTags, setFileTags] = useState<FlacTags | Mp3Tags>();
  /** 高亮显示代码 */
  const highlightedCode = useMemo(() => {
    if (!fileTags) return '';
    return hljs.highlight(JSON.stringify(fileTags, null, 2), { language: 'json' }).value;
  }, [fileTags]);
  /** 读取文件标签 */
  useEffect(() => {
    const asyncFn = async () => {
      if (!testMetaflacWasmFile) return;
      console.log('testMetaflacWasmFile', testMetaflacWasmFile);
      const finalExt = testMetaflacWasmFile.name.split('.').pop();
      let tags: FlacTags | Mp3Tags;
      switch (finalExt) {
        case 'flac':
          tags = await readAllFlacTag(testMetaflacWasmFile);
          setFileTags(tags);
          break;
        case 'mp3':
          tags = await readAllMp3Tag(testMetaflacWasmFile);
          setFileTags(tags);
          break;
        default:
          console.log('当前格式不支持');
          break;
      }
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
    const finalExt = testMetaflacWasmFile.name.split('.').pop();
    const { tagName, tagValue } = writeFlacTagParams;
    console.log('writeFlacTagParams', writeFlacTagParams);
    if (!tagName || !tagValue) return msgError('请输入标签值');
    let outputFile: Blob = testMetaflacWasmFile;
    switch (finalExt) {
      case 'flac':
        outputFile = (await writeFlacTag(testMetaflacWasmFile, tagName, tagValue))!;
        break;
      case 'mp3':
        outputFile = (await writeMp3Tag(testMetaflacWasmFile, tagName, tagValue))!;
        break;
    }

    console.log('outputFile', outputFile);
    msgSuccess('修改标签成功');
    // downloadFileWithBlob(outputFile!, testMetaflacWasmFile.name);
    setTestMetaflacWasmFile(new File([outputFile!], testMetaflacWasmFile.name));
  };
  /** 嵌入图片 */
  const coverInputRef = useRef<HTMLInputElement>(null);
  const handleEmbedFlacPicture = async () => {
    if (!testMetaflacWasmFile) return msgError('请先选择文件');
    const finalExt = testMetaflacWasmFile.name.split('.').pop();
    let outputFile: Blob = testMetaflacWasmFile;
    if (!coverInputRef.current?.files?.[0]) return msgError('请选择图片');
    switch (finalExt) {
      case 'flac':
        outputFile = (await embedFlacPicture(
          testMetaflacWasmFile,
          coverInputRef.current?.files?.[0]!,
        ))!;
        break;
      case 'mp3':
        outputFile = (await embedMp3Picture(
          testMetaflacWasmFile,
          coverInputRef.current?.files?.[0]!,
        ))!;
        break;
    }

    console.log('outputFile', outputFile);
    msgSuccess('嵌入图片成功');
    downloadFileWithBlob(outputFile!, testMetaflacWasmFile.name);
    setTestMetaflacWasmFile(new File([outputFile!], testMetaflacWasmFile.name));
  };

  const handleReadMp3Metadata = async () => {
    if (!testMetaflacWasmFile) return;
    const tags = await readMp3Metadata(testMetaflacWasmFile);
    console.log('tags', tags);
  };

  return (
    <Modal
      title='测试Modal'
      open={visible}
      onCancel={close}
      width={1200}
      styles={{
        body: {
          maxHeight: '75vh',
          overflowY: 'auto',
        },
      }}
      footer={null}
      centered>
      <Tabs items={tabItems} />
    </Modal>
  );
});

export default TestModal;
