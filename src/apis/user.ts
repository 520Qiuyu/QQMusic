import { qqMusicRequest } from '@/utils/request';
import type {
  GetUserCollectedSonglistResult,
  GetUserCreatedPlaylistResult,
  ProfileHomepageResponse,
  UserCollectedSonglistRawResponse,
  UserCreatedDissItem,
  UserCreatedDissResponse,
} from '@/types/user';
import { getCookie } from '@/utils';

/** 获取用户主页信息（用于补齐“我喜欢”歌单） */
export const getUserProfileHomepage = async (
  userId: string = getCookie('uin'),
): Promise<ProfileHomepageResponse> => {
  const params = {
    cid: 205360838,
    userid: userId,
    reqfrom: 1,
  };
  return await qqMusicRequest(
    `/rsc/fcgi-bin/fcg_get_profile_homepage.fcg?${new URLSearchParams(params as any).toString()}`,
    {
      headers: {
        Referer: 'https://y.qq.com/portal/profile.html',
      },
    },
    'c',
  );
};

/** 获取用户创建的歌单（含“我喜欢”补齐逻辑） */
export const getUserCreatedPlaylist = async (
  userId: string = getCookie('uin'),
): Promise<GetUserCreatedPlaylistResult> => {
  const params = {
    hostUin: 0,
    hostuin: userId,
    sin: 0,
    size: 200,
    g_tk: 5381,
    loginUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
  };

  const res = await qqMusicRequest<UserCreatedDissResponse>(
    `/rsc/fcgi-bin/fcg_user_created_diss?${new URLSearchParams(params as any).toString()}`,
    {
      headers: {
        Referer: 'https://y.qq.com/portal/profile.html',
      },
    },
    'c',
  );

  console.log('res', res);

  // 4000：对方不公开歌单
  if (res.code === 4000) {
    return {
      list: [],
      message: '这个人不公开歌单',
      creator: {
        hostuin: String(userId),
      },
    };
  }

  if (!res.data?.disslist) {
    return {
      list: [],
      message: '获取歌单出错',
      creator: {
        hostuin: String(userId),
      },
    };
  }

  const list = res.data.disslist;

  // 201：我喜欢
  let favDiss = list.find((v) => v.dirid === 201);
  if (favDiss) {
    favDiss.diss_cover = 'http://y.gtimg.cn/mediastyle/global/img/cover_like.png';
  } else {
    try {
      const detail = await getUserProfileHomepage(userId);
      const fav = detail.data?.mymusic?.[0];
      if (fav) {
        const diss: UserCreatedDissItem = {
          diss_name: '我喜欢',
          diss_cover: 'http://y.gtimg.cn/mediastyle/y/img/cover_qzone_130.jpg',
          song_cnt: fav.num0,
          listen_num: 0,
          dirid: 201,
          tid: fav.id,
          dir_show: 1,
        };
        list.unshift(diss);
      }
    } catch (error) {
      console.log('获取主页信息，我喜欢的音乐失败：', error);
    }
  }

  return {
    list,
    creator: {
      hostuin: String(userId),
      encrypt_uin: res.data.encrypt_uin,
      hostname: res.data.hostname,
    },
  };
};

/**
 * 获取用户收藏的歌单
 * @see QQMusicApi `user['/collect/songlist']`
 */
export const getUserCollectedSonglist = async (
  userId: string = getCookie('uin'),
  options?: {
    pageNo?: number;
    pageSize?: number;
  },
): Promise<GetUserCollectedSonglistResult> => {
  const { pageNo = 1, pageSize = 20 } = options || {};
  const params = {
    ct: 20,
    cid: 205360956,
    userid: userId,
    reqtype: 3,
    sin: String((pageNo - 1) * pageSize),
    ein: String(pageNo * pageSize),
  };

  const res = await qqMusicRequest<UserCollectedSonglistRawResponse>(
    `/fav/fcgi-bin/fcg_get_profile_order_asset.fcg?${new URLSearchParams(params as any).toString()}`,
    {
      headers: {
        Referer: 'https://y.qq.com/',
      },
    },
    'c',
  );

  const { totaldiss, cdlist, has_more } = res.data ?? {};
  return {
    list: cdlist ?? [],
    total: totaldiss ?? 0,
    pageNo,
    pageSize,
    has_more,
  };
};
