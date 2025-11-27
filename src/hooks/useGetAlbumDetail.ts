import { getAlbumInfo, getAlbumPicUrl } from '@/apis/album';
import type { AlbumInfoData } from '@/types/album';
import { getFileQualityList, promiseLimit } from '@/utils';
import { useRef, useState } from 'react';
import { useConfig } from './useConfig';
import { usePlayMusic } from './usePlayMusic';

export const useGetAlbumDetail = () => {
  const [currentMid, setCurrentMid] = useState<string>('');
  const [albumInfo, setAlbumInfo] = useState<AlbumInfoData>();
  const [isLoading, setIsLoading] = useState(false);
  const albumInfoMap = useRef<Record<string, AlbumInfoData>>({});

  const { downloadConfig } = useConfig();
  const { quality: downloadQuality } = downloadConfig;
  const { playList, play, getUrl, download, getLyric } = usePlayMusic();

  /**
   * 获取专辑详情
   * @param mid 专辑mid
   * @returns 专辑详情
   */
  const getAlbumDetail = async (mid: string) => {
    try {
      setIsLoading(true);
      if (albumInfoMap.current[mid]) {
        return albumInfoMap.current[mid];
      }
      const res = await getAlbumInfo(mid);
      console.log('专辑详情', res);
      albumInfoMap.current[mid] = res;
      setAlbumInfo(res);
      return res;
    } catch (error) {
      console.error('获取专辑详情失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * 获取专辑歌曲列表
   * @param mid 专辑mid
   * @returns 专辑歌曲列表
   */
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

  /**
   * 获取专辑歌曲播放地址
   * @param mid 专辑mid
   * @returns 专辑歌曲播放地址
   */
  const getAlbumSongUrl = async (mid: string) => {
    const res = await getAlbumSongList(mid);
    const ids = res?.map((item) => {
      return {
        id: item.songmid,
        name: item.songname,
        file: item,
      };
    });
    const promiseArr = ids?.map((item) => async () => {
      const qualityList = getFileQualityList(item.file);
      const finalQuality = qualityList.includes(downloadQuality) ? downloadQuality : qualityList[0];
      const url = await getUrl(item.id, finalQuality);
      return {
        ...item,
        url,
        quality: finalQuality,
      };
    });
    const urls = await promiseLimit(promiseArr!, 6);
    console.log('专辑歌曲播放地址:', urls);
    return urls;
  };

  /**
   * 下载专辑歌曲
   * @param mid 专辑mid
   * @returns 下载专辑歌曲列表
   */
  const downloadAlbumSong = async (mid: string) => {
    try {
      const albumSongList = await getAlbumSongList(mid);
      console.log('准备下载专辑歌曲:', albumSongList);
      for (const item of albumSongList || []) {
        const { songmid, songname } = item;
        console.log(`正在下载: songmid=${songmid}, songname=${songname}`);
        await download(songmid);
      }
    } catch (error) {
      console.error('下载专辑歌曲失败:', error);
    }
  };

  /**
   * 获取专辑下载JSON数据
   * @param mid 专辑mid
   * @returns 下载专辑JSON数据
   */
  const getDownLoadJson = async (mid: string) => {
    const albumDetail = await getAlbumDetail(mid);
    const { name, list } = albumDetail || {};
    const promiseArr = list?.map((item) => async () => {
      const lrcContent = await getLyric(item.songmid);
      const qualityList = getFileQualityList(item);
      const finalQuality = qualityList.includes(downloadQuality) ? downloadQuality : qualityList[0];
      const url = await getUrl(item.songmid, finalQuality);
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
      list: songList,
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
