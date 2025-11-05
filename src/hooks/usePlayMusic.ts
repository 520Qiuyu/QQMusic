import { getAlbumPicUrl } from '@/apis/album';
import { getSongLyric, getSongPlayUrl } from '@/apis/song';
import type { FileType } from '@/constants';
import { writeFlacTagAndPicture } from '@/libs/flac';
import { downloadFileWithBlob, getFileBlob } from '@/utils/download';
import { useEffect, useRef, useState } from 'react';

const audio = new Audio();

export const usePlayMusic = () => {
  const [currentMid, setCurrentMid] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState<string>();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const urlMap = useRef<Record<string, string>>({});

  const getUrl = async (mid: string, quality: keyof typeof FileType = 'flac') => {
    if (urlMap.current[mid]) {
      return urlMap.current[mid];
    }
    const res = await getSongPlayUrl(mid, quality && { quality });
    urlMap.current[mid] = res[mid].url;
    const url = res[mid].url;
    if (!url) throw new Error('获取歌曲播放地址失败');
    return url;
  };

  const play = async (mid: string, quality: keyof typeof FileType = 'flac') => {
    try {
      // 播放当前歌曲，则直接播放
      if (mid === currentMid) {
        audio.play();
        return;
      }
      const url = await getUrl(mid, quality);
      console.log('url', url);
      audio.src = url;
      audio.play();
      setCurrentMid(mid);
      urlMap.current[mid] = url;
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

  const playList = async (midList: string[]) => {
    for (const mid of midList) {
      await play(mid);
    }
  };

  const download = async (
    mid: string,
    name: string,
    quality: keyof typeof FileType = 'flac',
    albumMid?: string,
  ) => {
    try {
      const url = await getUrl(mid, quality);
      console.log(`当前下载歌曲${name},音质为${quality},链接为${url}`);
      /** 获取文件后缀 */
      const finalExt = url.split('?')[0].split('.').pop();
      const { blob, response } = await getFileBlob(url.replace('http://', 'https://'));
      /** 输出文件 */
      let outputFile: Blob = blob;
      /** 获取歌词 */
      const lyric = await getLyric(mid);
      /** 获取封面 */
      let coverBlob: Blob;
      // 如果有专辑mid，则获取封面
      if (albumMid) {
        const cover = getAlbumPicUrl(albumMid);
        const { blob, response } = await getFileBlob(cover.replace('http://', 'https://'));
        coverBlob = blob;
      }

      console.log('blob', blob);
      // 根据音频格式读取标签信息

      switch (finalExt) {
        case 'flac':
          outputFile = await writeFlacTagAndPicture(blob, 'lyrics', lyric, coverBlob!);
          break;
       /*  case 'mp3':
          outputFile = await writeFlacTagAndPicture(blob, 'lyrics', lyric, coverBlob!);
          break; */
        default:
          console.log('当前格式不支持');
          break;
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
    play,
    pause,
    stop,
    audio,
    download,
    playList,
    getUrl,
    getLyric,
  };
};
