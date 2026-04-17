/**
 * 用户相关 API 类型定义（对应 `src/apis/user.ts`）
 */

/** 用户创建歌单列表项（fcg_user_created_diss 返回的 disslist 元素） */
export interface UserCreatedDissItem {
  diss_name: string;
  diss_cover: string;
  song_cnt: number;
  listen_num: number;
  /** 目录 id（201 代表“我喜欢”） */
  dirid: number;
  /** 收藏歌单的 tid（用于请求详情） */
  tid?: number;
  /** 是否展示 */
  dir_show?: number;
  [key: string]: any;
}

/** 用户主页 mymusic 元素（用于补齐“我喜欢”歌单） */
export interface ProfileHomepageMyMusicItem {
  id: number;
  num0: number;
}

/** 用户主页信息响应（fcg_get_profile_homepage.fcg） */
export interface ProfileHomepageResponse {
  code: number;
  data?: {
    mymusic?: ProfileHomepageMyMusicItem[];
  };
  [key: string]: any;
}

/** 获取用户创建歌单原始响应（fcg_user_created_diss） */
export interface UserCreatedDissResponse {
  code: number;
  subcode?: number;
  message?: string;
  data?: {
    disslist: UserCreatedDissItem[];
    encrypt_uin?: string;
    hostname?: string;
    hostuin?: number | string;
    /** 接口返回字段名就是 totoal（疑似拼写错误），这里保持一致 */
    totoal?: number;
  };
  [key: string]: any;
}

/** getUserCreatedPlaylist 的封装后返回结构 */
export interface GetUserCreatedPlaylistResult {
  list: UserCreatedDissItem[];
  creator: {
    hostuin: string;
    encrypt_uin?: string;
    hostname?: string;
  };
  /** 例如：这个人不公开歌单 / 获取歌单出错 */
  message?: string;
}

/** 用户收藏歌单列表项（fcg_get_profile_order_asset，reqtype=3 的 cdlist 元素） */
export interface UserCollectedSonglistItem {
  createtime: number;
  dir_show: number;
  dirid: number;
  dirtype: number;
  dissid: number;
  dissname: string;
  encrypt_uin: string;
  isshow: number;
  listennum: number;
  logo: string;
  nickname: string;
  songnum: number;
  type: number;
  uin: number;
  [key: string]: any;
}

/** 用户收藏歌单接口原始响应（fcg_get_profile_order_asset.fcg，reqtype=3） */
export interface UserCollectedSonglistRawResponse {
  code: number;
  subcode?: number;
  /** 接口常用 msg（可能为空字符串） */
  msg?: string;
  /** 部分场景可能为 message */
  message?: string;
  data?: {
    cdlist: UserCollectedSonglistItem[];
    totaldiss: number;
    /** 是否还有更多（0/1） */
    has_more?: number;
  };
  [key: string]: any;
}

/** getUserCollectedSonglist 封装后返回结构 */
export interface GetUserCollectedSonglistResult {
  list: UserCollectedSonglistItem[];
  total: number;
  pageNo: number;
  pageSize: number;
  /** 是否还有更多（来自 data.has_more） */
  has_more?: number;
}

