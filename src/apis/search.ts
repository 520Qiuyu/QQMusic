import type { ResourceTypeValues } from '@/constants';
import { qqMusicRequest } from '@/utils/request';
import type { SearchResult, WebSearchResult } from '../types/search';
import { generateSearchObfuscatedId } from '@/utils';

const typeMap: Record<ResourceTypeValues, number> = {
  song: 0,
  album: 8,
  user: 9,
  playlist: 2,
  lyric: 7,
  mv: 12,
};

/** 获取搜索结果 */
export const getSearchResult = async (
  keyword: string,
  type: ResourceTypeValues = 'song',
  options?: {
    pageNum: number;
    pageSize: number;
  },
): Promise<SearchResult> => {
  const { pageNum = 1, pageSize = 20 } = options || {};
  const params = {
    w: keyword,
    n: pageSize,
    p: pageNum,
    catZhida: 1,
    format: 'json',
    outCharset: 'utf-8',
    t: typeMap[type],
    cr: 1,
    lossless: 0,
    flag_qc: 0,
    platform: 'yqq.json',
    g_tk: 5381,
  };

  console.log('params', params);

  const res = await qqMusicRequest(
    `/soso/fcgi-bin/client_search_cp?${new URLSearchParams(params as any).toString()}`,
    {
      method: 'GET',
    },
    'c',
  );
  console.log('res', res);
  if (res.code === 0) {
    return res.data;
  }

  throw new Error('搜索失败');
};

/** 搜索web */
export const getWebSearchResult = async (
  keyword: string,
  type: ResourceTypeValues = 'song',
  options?: {
    pageNum: number;
    pageSize: number;
  },
): Promise<WebSearchResult> => {
  const { pageNum = 1, pageSize = 20 } = options || {};

  const f = {
    song: 3,
    album: 4,
    playlist: 6,
    user: 13,
    lyric: 5,
    mv: 7,
  };
  const p = {
    song: 0,
    album: 2,
    mv: 4,
    playlist: 3,
    user: 1,
    lyric: 7,
  };

  const params = {
    req_1: {
      method: 'DoSearchForQQMusicDesktop',
      module: 'music.search.SearchCgiService',
      param: {
        num_per_page: Number(pageSize),
        page_num: Number(pageNum),
        query: keyword,
        remoteplace: 'txt.yqq.center',
        search_type: Number(p[type]),
        searchid: generateSearchObfuscatedId(f[type]),
      },
    },
  };

  console.log('params', params);

  const res = await qqMusicRequest(
    `/cgi-bin/musicu.fcg`,
    {
      method: 'POST',
      data: JSON.stringify(params),
    },
    'u',
  );

  console.log('res', res);
  if (res.code === 0 && res.req_1?.code === 0 && res.req_1?.data?.code === 0) {
    const { body, meta } = (res.req_1?.data as any) || {};
    if (body != null) {
      return {
        ...body,
        pageNum: meta.curpage,
        pageSize: meta.perpage,
        total: meta.estimate_sum,
      };
    }
  }

  throw new Error('搜索失败');
};
