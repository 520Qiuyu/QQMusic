import { getAlbumInfo, getAlbumPicUrl } from '@/apis/album';
import type { FileType } from '@/constants';
import type { AlbumInfoData, AlbumSongInfo } from '@/types/album';
import { promiseLimit } from '@/utils';
import { downloadWithFileName } from '@/utils/download';
import { useRef, useState } from 'react';
import { usePlayMusic } from './usePlayMusic';

export const useGetAlbumDetail = () => {
  const [currentMid, setCurrentMid] = useState<string>('');
  const [albumInfo, setAlbumInfo] = useState<AlbumInfoData>();
  const [isLoading, setIsLoading] = useState(false);
  const albumInfoMap = useRef<Record<string, AlbumInfoData>>({});

  const { playList, play, getUrl, download, getLyric } = usePlayMusic();

  const getAlbumDetail = async (mid: string) => {
    try {
      setIsLoading(true);
      if (albumInfoMap.current[mid]) {
        return albumInfoMap.current[mid];
      }
      const res = await getAlbumInfo(mid);
      console.log('res', res);
      albumInfoMap.current[mid] = res;
      return res;
    } catch (error) {
      console.error('获取专辑详情失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAlbumSongList = async (mid: string) => {
    try {
      setIsLoading(true);
      const res = await getAlbumDetail(mid);
      return res?.list;
    } catch (error) {
      console.error('获取专辑歌曲列表失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAlbumSongUrl = async (mid: string) => {
    const res = await getAlbumSongList(mid);
    const ids = res?.map((item) => {
      const quality = getHighestQuality(item as any);
      return {
        id: item.songmid,
        name: item.songname,
        quality,
      };
    });
    const promiseArr = ids?.map((item) => async () => {
      const url = await getUrl(item.id, item.quality);
      return {
        ...item,
        url,
      };
    });
    const urls = await promiseLimit(promiseArr!, 6);
    console.log('urls', urls);
    return urls;
  };

  const downloadAlbumSong = async (mid: string) => {
    try {
      const urls = await getAlbumSongUrl(mid);
      console.log('urls', urls);
      for (const item of urls) {
        const { id, name, url } = item;
        console.log('id', id);
        console.log('name', name);
        console.log('url', url);
        console.log(`当前正在下载${name}...`);
        await downloadWithFileName(url.replace('http://', 'https://'), name);
      }
    } catch (error) {
      console.error('下载专辑歌曲失败:', error);
    }
  };

  const getDownLoadJson = async (mid: string) => {
    const albumDetail = await getAlbumDetail(mid);
    const { name, list } = albumDetail || {};
    const promiseArr = list?.map((item) => async () => {
      const lrcContent = await getLyric(item.songmid);
      const url = await getUrl(item.songmid, getHighestQuality(item));
      return {
        songName: item.songname,
        url,
        lrcContent,
      };
    });
    const songList = await promiseLimit(promiseArr!, 6);
    return {
      albumName: name,
      albumCover: getAlbumPicUrl(mid),
      songList,
    };
  };

  const playAlbum = async (mid: string) => {
    const songList = await getAlbumSongList(mid);
    console.log('songList', songList);
    if (!songList?.length) return;
    for (const item of songList) {
      console.log('当前正在播放', item.songname);
      await play(item.songmid);
    }
  };

  return {
    albumInfo,
    isLoading,
    getAlbumDetail,
    getAlbumSongList,
    playAlbum,
    getAlbumSongUrl,
    downloadAlbumSong,
    getDownLoadJson,
  };
};

export const getHighestQuality = (file: {
  size128?: number;
  size320?: number;
  sizeape?: number;
  sizeflac?: number;
  sizeogg?: number;
}): keyof typeof FileType => {
  // 按音质从高到低排序检查
  if (file.sizeflac && file.sizeflac > 0) return 'flac';
  if (file.sizeape && file.sizeape > 0) return 'ape';
  if (file.size320 && file.size320 > 0) return 320;
  if (file.size128 && file.size128 > 0) return 128;

  // 默认返回128kbps
  return 128;
};
