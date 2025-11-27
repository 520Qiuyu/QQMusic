import { getSongListDetail } from '@/apis/songList';
import type { FileType } from '@/constants';
import type { PlaylistInfo } from '@/types/songList';
import { promiseLimit } from '@/utils';
import { useRef, useState } from 'react';
import { usePlayMusic } from './usePlayMusic';

export const useGetSonglistDetail = () => {
  const [playlistInfo, setPlaylistInfo] = useState<PlaylistInfo>();
  const [isLoading, setIsLoading] = useState(false);
  const playlistInfoMap = useRef<Record<string, PlaylistInfo>>({});

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
      console.log('歌单详情响应:', res);
      // 由于API返回的是数组，取第一个元素
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
      const quality = getHighestQualityInSonglist(item.file);
      return {
        id: item.mid,
        name: item.name,
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
        console.log('id:', mid);
        console.log('name:', name);
        console.log('file:', file);
        console.log(`当前正在下载${name}...`);
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
      const url = await getUrl(item.mid, getHighestQualityInSonglist(item.file));
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
    getHighestQualityInSonglist,
  };
};

const getHighestQualityInSonglist = (file: {
  size_flac?: number;
  size_ape?: number;
  size_320mp3?: number;
  size_128mp3?: number;
}): keyof typeof FileType => {
  // 按音质从高到低排序检查
  if (file.size_flac && file.size_flac > 0) return 'flac';
  if (file.size_ape && file.size_ape > 0) return 'ape';
  if (file.size_320mp3 && file.size_320mp3 > 0) return 320;
  if (file.size_128mp3 && file.size_128mp3 > 0) return 128;

  // 默认返回128kbps
  return 128;
};
