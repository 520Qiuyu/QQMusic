import { getAlbumPicUrl } from '@/apis/album';
import { getSongInfo as getSongInfoApi, getSongLyric, getSongPlayUrl } from '@/apis/song';
import { writeFlacTagAndPicture } from '@/libs/flac';
import type { TrackInfo } from '@/types/song';
import { downloadAsLRC, downloadFileWithBlob, getFileBlob } from '@/utils/download';
import { useEffect, useRef, useState } from 'react';
import { useConfig } from './useConfig';
import { getFile_qualityList } from '@/utils';

const audio = new Audio();

export const usePlayMusic = () => {
  const { functionConfig, downloadConfig } = useConfig();
  const { quality: downloadQuality, downloadLyric, embedLyricCover } = downloadConfig;
  const {} = functionConfig;

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
      /** 获取歌词 */
      const lyric = await getLyric(mid);
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

  const getLyric = async (mid: string) => {
    const res = await getSongLyric(mid);
    return res;
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
  };
};
