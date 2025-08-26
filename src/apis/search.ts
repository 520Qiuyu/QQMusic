import type { ResourceTypeValues } from '@/constants';
import { qqMusicRequest } from '@/utils/request';

/** 获取搜索结果 */
export const getSearchResult = async (
  keyword: string,
  type: ResourceTypeValues = 'song',
  options?: {
    pageNum: number;
    pageSize: number;
  },
) => {
  const { pageNum = 1, pageSize = 10 } = options || {};
  const params = {
    w: keyword,
    n: pageSize,
    p: pageNum,
    catZhida: 1,
    format: 'json',
    outCharset: 'utf-8',
    ct: 24,
    qqmusic_ver: 1298,
    remoteplace: `txt.yqq.${type}`,
    t: 0,
    aggr: 1,
    cr: 1,
    lossless: 0,
    flag_qc: 0,
    platform: 'yqq.json',
  };

  const res = await qqMusicRequest(
    `/soso/fcgi-bin/client_search_cp?${new URLSearchParams(params as any).toString()}`,
    {
      method: 'GET',
    },
    'c',
  );
  return res;
};
