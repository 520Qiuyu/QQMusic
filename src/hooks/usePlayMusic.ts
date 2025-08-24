import { getSongPlayUrl } from '@/apis/song';
import type { FileType } from '@/constants';
import { downloadWithFileName } from '@/utils/download';
import { useState } from 'react';

const audio = new Audio();

export const usePlayMusic = () => {
  const [currentMid, setCurrentMid] = useState<string>('');
  const [url, setUrl] = useState<string>('');
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
    return res[mid].url;
  };

  const play = async (mid: string, quality: keyof typeof FileType = 'flac') => {
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

  const download = async (mid: string, name: string, quality: keyof typeof FileType = 'flac') => {
    try {
      const url = await getUrl(mid, quality);
      await downloadWithFileName(url.replace('http://', 'https://'), name);
    } catch (error) {
      console.log('error', error);
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
    url,
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
  };
};
