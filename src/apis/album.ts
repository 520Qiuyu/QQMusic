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

/** 搜索专辑 */
export const searchAlbums = async (options: {
  keyword?: string;
  artist?: string;
  page?: number;
  limit?: number;
} = {}): Promise<{
  list: any[];
  total: number;
}> => {
  const { keyword = '', artist = '', page = 1, limit = 20 } = options;
  
  // 这里使用模拟数据，实际项目中需要调用真实的API
  // 可以根据需要实现真实的专辑搜索API
  const mockData = [
    {
      albumId: '1',
      albumName: keyword || '示例专辑1',
      singerName: artist || '示例歌手1',
      publishDate: '2023-01-01',
      songCount: 12,
      albumType: '专辑',
      albumPic: 'https://via.placeholder.com/50x50',
      albumMid: '001CLC7W2Gpz4J',
    },
    {
      albumId: '2',
      albumName: keyword || '示例专辑2',
      singerName: artist || '示例歌手2',
      publishDate: '2023-02-01',
      songCount: 8,
      albumType: 'EP',
      albumPic: 'https://via.placeholder.com/50x50',
      albumMid: '002J4UUk29y8BY',
    },
    {
      albumId: '3',
      albumName: keyword || '示例专辑3',
      singerName: artist || '示例歌手3',
      publishDate: '2023-03-01',
      songCount: 15,
      albumType: '专辑',
      albumPic: 'https://via.placeholder.com/50x50',
      albumMid: '003rJSwm3TechU',
    },
  ];

  // 模拟分页
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedData = mockData.slice(start, end);

  return {
    list: paginatedData,
    total: mockData.length,
  };
};
