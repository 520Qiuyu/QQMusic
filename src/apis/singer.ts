import type { AlbumInfo, SingerInfo } from '@/types/singer';
import { qqMusicRequest } from '@/utils/request';
import dayjs from 'dayjs';

/** 获取歌手信息 */
export const getSingerInfo = async (singermid: string) => {
  const params = {
    singermid,
    format: 'xml',
    outCharset: 'utf-8',
    utf8: '1',
    r: dayjs().valueOf() + '',
  };
  return qqMusicRequest(
    `/splcloud/fcgi-bin/fcg_get_singer_desc.fcg?${new URLSearchParams(params).toString()}`,
    {
      method: 'GET',
      responseType: 'text', // 改为 text 因为返回的是 XML
    },
  );
};

/** 获取歌手专辑 */
export const getSingerAlbum = async (
  singermid: string,
  options: { begin?: number; num?: number } = {},
): Promise<{ albumList: AlbumInfo[]; total: number; singerMid: string }> => {
  const { begin = 0, num = 80 } = options;
  const params = {
    format: 'json',
    singermid,
    data: JSON.stringify({
      comm: {
        ct: 24,
        cv: 0,
      },
      singer: {
        method: 'GetAlbumList',
        param: {
          sort: 5,
          singermid,
          begin,
          num,
        },
        module: 'music.musichallAlbum.AlbumListServer',
      },
    }),
  };
  const res = await qqMusicRequest(
    `/cgi-bin/musicu.fcg?${new URLSearchParams(params).toString()}`,
    {},
    'u',
  );
  if (res.code === 0) {
    return res.singer?.data;
  }
  throw new Error('获取歌手专辑失败');
};

/** 获取歌手所有专辑 */
export const getSingerAllAlbum = async (singermid: string): Promise<AlbumInfo[]> => {
  const allAlbum: AlbumInfo[] = [];
  let begin = 0;
  const num = 80;
  let hasMore = true;
  while (hasMore) {
    const res = await getSingerAlbum(singermid, { begin, num });
    if (res) {
      allAlbum.push(...res.albumList);
      hasMore = allAlbum.length < res.total;
    } else {
      hasMore = false;
    }
    begin += num;
  }
  return allAlbum;
};

/** 获取歌手列表 */
export const getSingerList = async (options: {
  area: number;
  sex: number;
  genre: number;
  cur_page: number;
}): Promise<{
  /** 歌手列表数据 */
  singerlist: SingerInfo[];
  /** 总数 */
  total: number;
}> => {
  const { area = -100, sex = -100, genre = -100, cur_page = 1 } = options;
  const params = {
    format: 'json',
    data: JSON.stringify({
      comm: {
        ct: 24,
        cv: 0,
      },
      singerList: {
        module: 'Music.SingerListServer',
        method: 'get_singer_list',
        param: {
          area: +area,
          sex: +sex,
          genre: +genre,
          index: -100,
          sin: (cur_page - 1) * 80,
          cur_page,
        },
      },
    }),
  };
  const res = await qqMusicRequest(
    `/cgi-bin/musicu.fcg?${new URLSearchParams(params).toString()}`,
    {},
    'u',
  );
  if (res.code === 0) {
    return res.singerList?.data;
  }
  throw new Error('获取歌手列表失败');
};

/** 获取歌手被关注数量 */
export const getSingerFollowCount = async (
  singermid: string,
): Promise<{
  blogflag: number;
  code: number;
  num: number;
  status: number;
  subcode: number;
}> => {
  const params = {
    singermid,
    format: 'json',
    outCharset: 'utf-8',
    utf8: '1',
    rnd: dayjs().valueOf() + '',
  };
  return qqMusicRequest(
    `/rsc/fcgi-bin/fcg_order_singer_getnum.fcg?${new URLSearchParams(params).toString()}`,
    {},
    'c',
  );
};

/** 获取歌手热门歌曲 */
export const getSingerHotSong = async (
  singermid: string,
  options: {
    sin?: number;
    num?: number;
  } = {},
): Promise<any> => {
  const { sin = 0, num = 80 } = options;
  const params = {
    singermid,
    format: 'json',
    data: JSON.stringify({
      comm: {
        ct: 24,
        cv: 0,
      },
      singer: {
        method: 'get_singer_detail_info',
        param: {
          sort: 5,
          singermid,
          sin,
          num,
        },
        module: 'music.web_singer_info_svr',
      },
    }),
  };

  const res = await qqMusicRequest(
    `/cgi-bin/musicu.fcg?${new URLSearchParams(params).toString()}`,
    {},
    'u',
  );
  if (res.code === 0) {
    return res.singer?.data;
  }
  throw new Error('获取歌手热门歌曲失败');
};
