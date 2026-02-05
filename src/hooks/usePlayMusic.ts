import { getAlbumPicUrl } from '@/apis/album';
import { uploadLocalSong } from '@/apis/neteaseApi';
import { getSongInfo as getSongInfoApi, getSongLyric, getSongPlayUrl } from '@/apis/song';
import { FlacTag, type FileType } from '@/constants';
import { writeFlacTag, writeFlacTagAndPicture } from '@/libs/flac';
import type { TrackInfo } from '@/types/song';
import { downloadAsLRC, downloadFileWithBlob, getFileBlob } from '@/utils/download';
import { message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useConfig } from './useConfig';

const audio = new Audio();

export const usePlayMusic = () => {
  const { functionConfig, downloadConfig } = useConfig();
  const { quality: downloadQuality, downloadLyric, embedLyricCover } = downloadConfig;
  const { } = functionConfig;

  const [currentMid, setCurrentMid] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState<string>();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const urlMap = useRef<Record<string, string>>({});
  const songInfoMap = useRef<Record<string, TrackInfo>>({});

  /**
   * 获取歌曲信息
   * @param mid 歌曲mid
   * @returns 歌曲信息
   */
  const getSongInfo = async (mid: string) => {
    if (songInfoMap.current[mid]) {
      return songInfoMap.current[mid];
    }
    const res = await getSongInfoApi(mid);
    const songInfo = res.track_info;
    songInfoMap.current[mid] = songInfo;
    return songInfo;
  };

  /**
   * 获取歌曲播放地址
   * @param mid 歌曲mid
   * @param quality 音质
   * @returns 歌曲播放地址
   */
  const getUrl = async (mid: string, quality = downloadQuality) => {
    const key = mid + quality;
    if (urlMap.current[key]) {
      return urlMap.current[key];
    }
    const res = await getSongPlayUrl(mid, { quality });
    const url = res[mid]?.url || '';
    if (!url) throw new Error('获取歌曲播放地址失败');
    urlMap.current[key] = url;
    console.log('url', url);
    return url;
  };

  /**
   * 获取歌曲歌词
   * @param mid 歌曲mid
   * @returns 歌曲歌词
   */
  const getLyric = async (mid: string) => {
    const res = await getSongLyric(mid);
    return res;
  };

  /**
   * 播放歌曲
   * @param mid 歌曲mid
   * @param quality 音质
   * @returns
   */
  const play = async (mid: string, quality = downloadQuality) => {
    try {
      // 播放当前歌曲，则直接播放
      if (mid === currentMid) {
        audio.play();
        return;
      }
      const url = await getUrl(mid, quality);
      audio.src = url;
      audio.play();
      setCurrentMid(mid);
      return new Promise((resolve) => {
        audio.onended = () => {
          resolve(true);
          setIsPlaying(undefined);
        };
      });
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsPlaying(mid);
    }
  };

  /**
   * 播放歌曲列表
   * @param midList 歌曲mid列表
   * @returns
   */
  const playList = async (midList: string[]) => {
    for (const mid of midList) {
      await play(mid);
    }
  };

  /**
   * 下载歌曲 并写入标签, 当传入专辑mid时, 会下载封面并写入封面
   * @param mid 歌曲mid
   * @param quality 音质
   * @returns
   */
  const download = async (mid: string, quality = downloadQuality) => {
    try {
      // 获取歌曲信息
      const songInfo = await getSongInfo(mid);
      const { name, album: { mid: albumMid } = {} } = songInfo;
      // 获取歌曲播放地址
      const url = await getUrl(mid, quality);
      console.log(`当前下载歌曲${name},音质为${quality},链接为${url}`);
      /** 获取文件后缀 */
      const finalExt = url.split('?')[0].split('.').pop();
      const { blob } = await getFileBlob(url.replace('http://', 'https://'));
      /** 输出文件 */
      let outputFile: Blob = blob;
      // 写入歌曲信息到文件、以获取到的为准
      if (songInfo) {
        const { name, album: { name: albumName }, singer } = songInfo
        if (name) {
          outputFile = await writeFlacTag(outputFile, FlacTag.标题, name);
        }
        if (albumName) {
          outputFile = await writeFlacTag(outputFile, FlacTag.专辑, albumName);
        }
        if (singer) {
          outputFile = await writeFlacTag(outputFile, FlacTag.艺术家, singer.map(item => item.name).join(','));
        }
      }
      let lyric: string = '';
      /** 获取歌词 */
      try {
        lyric = await getLyric(mid);
        console.log(`获取到歌词《${name}》`, lyric);
      } catch (error) {
        console.log(`获取歌词失败《${name}》`, error);
      }
      /** 获取封面 */
      let coverBlob: Blob;
      // 如果有专辑mid，则获取封面
      if (albumMid) {
        const cover = getAlbumPicUrl(albumMid);
        const { blob } = await getFileBlob(cover.replace('http://', 'https://'));
        coverBlob = blob;
      }

      if (embedLyricCover) {
        // 根据音频格式读取标签信息
        switch (finalExt) {
          case 'flac':
            outputFile = await writeFlacTagAndPicture(blob, 'lyrics', lyric, coverBlob!);
            break;
          default:
            console.log('当前格式不支持');
            break;
        }
      }

      // 下载歌词
      if (downloadLyric) {
        downloadAsLRC(lyric, name);
      }

      downloadFileWithBlob(outputFile, `${name}.${finalExt}`);
    } catch (error) {
      console.log('error', error);
    }
  };

  /**
   * 歌曲转存网易云
   * @param mid 歌曲mid
   * @returns
   */
  const convertToNeteaseMusic = async (
    mid: string,
    options?: {
      quality?: keyof typeof FileType;
      onChange?: (message: string) => void;
    },
  ) => {
    const { quality = downloadQuality, onChange } = options || {};
    const loadingKey = 'convert-to-netease-music' + mid;
    const msgLoading = (msg: string) => {
      message.loading({
        key: loadingKey,
        content: msg,
        duration: 0,
      });
    };
    const log = (msg: string, ...rest: any[]) => {
      console.log(msg, ...rest);
      onChange?.(msg);
      msgLoading(msg);
    };
    try {
      // 获取歌曲信息
      log(`开始获取歌曲信息：${mid}`);
      const songInfo = await getSongInfo(mid);
      const { name, album: { mid: albumMid } = {} } = songInfo;
      log(`获取到歌曲信息：${name}`, songInfo);
      // 获取歌曲播放地址
      const url = await getUrl(mid, quality);
      log(`获取到歌曲《${name}》播放地址`, url);
      /** 获取文件后缀 */
      const finalExt = url.split('?')[0].split('.').pop();
      // 下载歌曲
      log(`开始下载歌曲《${name}》`, url);
      const { blob } = await getFileBlob(url.replace('http://', 'https://'));
      let outputFile: Blob = blob;
      // 写入歌曲信息到文件、以获取到的为准
      if (songInfo) {
        const { name, album: { name: albumName }, singer } = songInfo
        if (name) {
          outputFile = await writeFlacTag(outputFile, FlacTag.标题, name);
        }
        if (albumName) {
          outputFile = await writeFlacTag(outputFile, FlacTag.专辑, albumName);
        }
        if (singer) {
          outputFile = await writeFlacTag(outputFile, FlacTag.艺术家, singer.map(item => item.name).join(','));
        }
        log(`写入歌曲信息到文件《${name}》`, { name, albumName, singer });
      }

      /** 写入歌词和封面 */
      if (embedLyricCover) {
        log(`开始写入歌词和封面《${name}》`);
        let lyric: string = '';
        try {
          lyric = await getLyric(mid);
          log(`获取到歌词《${name}》`, lyric);
        } catch (error) {
          log(`获取歌词失败《${name}》`, error);
        }
        /** 获取封面 */
        let coverBlob: Blob;
        // 如果有专辑mid，则获取封面
        if (albumMid) {
          const cover = getAlbumPicUrl(albumMid);
          const { blob } = await getFileBlob(cover.replace('http://', 'https://'));
          coverBlob = blob;
          log(`获取到封面《${name}》`, coverBlob);
        }

        switch (finalExt) {
          case 'flac':
            outputFile = await writeFlacTagAndPicture(blob, 'lyrics', lyric, coverBlob!);
            log(`写入歌词和封面成功《${name}》`, outputFile);
            break;
          default:
            log('当前格式不支持嵌入歌词和封面');
            break;
        }
      }
      // 转存网易云
      log(`开始转存网易云《${name}》`, outputFile);
      const res = await uploadLocalSong(new File([outputFile], `${name}.${finalExt}`));
      log(`转存网易云成功《${name}》`, res);
    } catch (error) {
      log(`转存网易云失败《${name}》`, error);
    } finally {
      message.destroy(loadingKey);
    }
  };

  const pause = () => {
    audio.pause();
    setIsPlaying(undefined);
  };

  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(undefined);
  };

  useEffect(() => {
    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
    };
    audio.onpause = () => {
      setIsPlaying(undefined);
    };
  }, [currentMid]);

  return {
    isPlaying,
    currentTime,
    duration,
    audio,
    play,
    pause,
    stop,
    download,
    playList,
    getUrl,
    getLyric,
    getSongInfo,
    convertToNeteaseMusic,
  };
};
