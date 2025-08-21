import type { AlbumInfoData } from '@/types/album';
import { qqMusicRequest } from '@/utils/request';

/** 获取专辑信息 */
export const getAlbumInfo = async (albummid: string): Promise<AlbumInfoData> => {
  const params = {
    albummid,
    format: 'json',
    outCharset: 'utf-8',
  };

  const res = await qqMusicRequest(
    `/v8/fcg-bin/fcg_v8_album_info_cp.fcg?${new URLSearchParams(params).toString()}`,
    {},
  );
  if (res.code === 0) {
    return res.data;
  }
  throw new Error('获取专辑信息失败');
};

/** 获取专辑图片 */
export const getAlbumPicUrl = (
  albummid: string,
  options?: { size?: string; maxAge?: number },
): string => {
  const { size = '800x800', maxAge = 2592000 } = options || {};
  return `https://y.gtimg.cn/music/photo_new/T002R${size}M000${albummid}.jpg?max_age=${maxAge}`;
};
