import type { SongListCategoryData, SongListData, SongListDetailData } from '@/types/songList';
import { qqMusicRequest } from '@/utils/request';

/** 获取歌单分类列表 */
export const getSongListCategory = async (): Promise<SongListCategoryData> => {
  const params = {
    format: 'json',
    outCharset: 'utf-8',
  };
  const res = await qqMusicRequest(
    `/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg?${new URLSearchParams(params as any)}`,
    {},
  );
  if (res.code === 0) {
    return res.data?.categories;
  }

  throw new Error('获取歌单分类列表失败');
};

/** 获取歌单列表 */
export const getSongList = async (
  options: {
    limit?: number;
    page?: number;
    sortId?: number;
    categoryId?: number;
  } = {},
): Promise<SongListData> => {
  const { limit = 20, page = 0, sortId = 5, categoryId = 10000000 } = options;
  const sin = page * limit;
  const ein = limit * (page + 1) - 1;
  const params = {
    categoryId,
    sortId,
    sin,
    ein,
    format: 'json',
    outCharset: 'utf-8',
    picmid: 1,
  };

  const res = await qqMusicRequest(
    `/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?${new URLSearchParams(params as any).toString()}`,
    {},
  );
  if (res.code === 0) {
    return res.data;
  }

  throw new Error('获取歌单列表失败');
};

/** 获取歌单详情 可传入多个歌单id 数组或者自行使用,拼接 获取多个歌单的时候 歌曲列表为空*/
export const getSongListDetail = async (
  disstid: string | string[],
): Promise<SongListDetailData> => {
  const disstidStr = Array.isArray(disstid) ? disstid.join(',') : disstid;
  const params = {
    disstid: disstidStr,
    format: 'json',
    outCharset: 'utf-8',
    type: '1',
    json: '1',
    utf8: '1',
    onlysong: '0',
    new_format: '1',
  };

  const res = await qqMusicRequest(
    `/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?${new URLSearchParams(params as any).toString()}`,
    {},
  );
  if (res.code === 0) {
    return res.cdlist;
  }
  throw new Error('获取歌单详情失败');
};
