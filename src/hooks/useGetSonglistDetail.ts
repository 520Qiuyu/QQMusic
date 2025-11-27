import { getSongListDetail } from '@/apis/songList';
import type { FileType } from '@/constants';
import type { PlaylistInfo } from '@/types/songList';
import { getFile_qualityList, promiseLimit } from '@/utils';
import { useRef, useState } from 'react';
import { usePlayMusic } from './usePlayMusic';
import { useConfig } from './useConfig';

export const useGetSonglistDetail = () => {
  const [playlistInfo, setPlaylistInfo] = useState<PlaylistInfo>();
  const [isLoading, setIsLoading] = useState(false);
  const playlistInfoMap = useRef<Record<string, PlaylistInfo>>({});

  const { downloadConfig } = useConfig();
  const { quality: downloadQuality } = downloadConfig;
  const { playList, play, getUrl, download, getLyric } = usePlayMusic();

  /**
   * 获取歌单详情
   * @param dissid 歌单ID
   * @returns 歌单详情信息
   */
  const getPlaylistDetail = async (dissid: string) => {
    try {
      setIsLoading(true);
      if (playlistInfoMap.current[dissid]) {
        return playlistInfoMap.current[dissid];
      }
      const res = await getSongListDetail(dissid);
      console.log('歌单详情:', res);
      const playlistDetail = Array.isArray(res) ? res[0] : res;
      playlistInfoMap.current[dissid] = playlistDetail;
      return playlistDetail;
    } catch (error) {
      console.error('获取歌单详情失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * 获取歌单歌曲列表
   * @param dissid 歌单ID
   * @returns 歌单中的歌曲列表
   */
  const getPlaylistSongList = async (dissid: string) => {
    try {
      setIsLoading(true);
      const res = await getPlaylistDetail(dissid);
      return res?.songlist;
    } catch (error) {
      console.error('获取歌单歌曲列表失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * 获取歌单歌曲播放地址
   * @param dissid 歌单ID
   * @returns 歌曲播放地址列表
   */
  const getPlaylistSongUrl = async (dissid: string) => {
    const res = await getPlaylistSongList(dissid);
    const ids = res?.map((item) => {
      return {
        id: item.mid,
        name: item.name,
        file: item.file,
      };
    });
    const promiseArr = ids?.map((item) => async () => {
      const qualityList = getFile_qualityList(item.file);
      const finalQuality = qualityList.includes(downloadQuality) ? downloadQuality : qualityList[0];
      const url = await getUrl(item.id, finalQuality);
      return {
        ...item,
        url,
        quality: finalQuality,
      };
    });
    const urls = await promiseLimit(promiseArr!, 6);
    console.log('歌单歌曲播放地址:', urls);
    return urls;
  };

  /**
   * 下载歌单歌曲
   * @param dissid 歌单ID
   */
  const downloadPlaylistSong = async (dissid: string) => {
    try {
      const songList = await getPlaylistSongList(dissid);
      console.log('准备下载歌单歌曲:', songList);
      for (const item of songList || []) {
        const { mid, name, file } = item;
        console.log(`正在下载: mid=${mid}, name=${name}`);
        await download(mid);
      }
    } catch (error) {
      console.error('下载歌单歌曲失败:', error);
    }
  };

  /**
   * 获取歌单下载JSON数据
   * @param dissid 歌单ID
   * @returns 包含歌单信息和歌曲下载链接的JSON数据
   */
  const getPlaylistDownloadJson = async (dissid: string) => {
    const playlistDetail = await getPlaylistDetail(dissid);
    const { dissname, songlist } = playlistDetail || {};
    const promiseArr = songlist?.map((item) => async () => {
      const lrcContent = await getLyric(item.mid);
      const qualityList = getFile_qualityList(item.file);
      const finalQuality = qualityList.includes(downloadQuality) ? downloadQuality : qualityList[0];
      const url = await getUrl(item.mid, finalQuality);
      return {
        songName: item.name,
        url,
        lrcContent,
      };
    });
    const songList = await promiseLimit(promiseArr!, 6);
    return {
      playlistName: dissname,
      playlistCover: playlistDetail?.pic_mid
        ? `https://y.gtimg.cn/music/photo_new/T002R300x300M000${playlistDetail.pic_mid}.jpg`
        : '',
      songList,
    };
  };

  /**
   * 播放歌单
   * @param dissid 歌单ID
   */
  const playPlaylist = async (dissid: string) => {
    const songList = await getPlaylistSongList(dissid);
    console.log('歌单歌曲列表:', songList);
    if (!songList?.length) return;
    for (const item of songList) {
      console.log('当前正在播放', item.name);
      await play(item.mid);
    }
  };

  return {
    playlistInfo,
    isLoading,
    getPlaylistDetail,
    getPlaylistSongList,
    playPlaylist,
    getPlaylistSongUrl,
    downloadPlaylistSong,
    getPlaylistDownloadJson,
  };
};
