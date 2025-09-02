import { getAlbumPicUrl } from '@/apis/album';
import { getSongLyric, getSongPlayUrl } from '@/apis/song';
import type { FileType } from '@/constants';
import { embedFlacPicture, readAllFlacTag, writeFlacTag } from '@/libs/flac';
import { downloadFileWithBlob, downloadWithFileName, getFileBlob } from '@/utils/download';
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
      const { blob, response } = await getFileBlob(url.replace('http://', 'https://'));
      let newBlob = blob;
      // 写入歌词
      const lyric = await getLyric(mid);
      if (lyric) {
        const outputFile = await writeFlacTag(blob, 'lyrics', lyric);
        if (outputFile) {
          newBlob = outputFile;
        }
      }
      // 嵌入封面
      if (albumMid) {
        const cover = getAlbumPicUrl(albumMid);
        const coverFile = await getFileBlob(cover);
        const outputFile = await embedFlacPicture(newBlob, coverFile.blob);
        if (outputFile) {
          newBlob = outputFile;
        }
      }
      downloadFileWithBlob(newBlob, name);
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
