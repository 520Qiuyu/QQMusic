import type { SongInfo } from './singer';

export interface Sort {
  sortId: number;
  sortName: string;
}

export interface AllSorts {
  allsorts: Sort[];
  categoryId: number;
  categoryName: string;
  usable: number;
}

export interface CategoryGroupItem {
  categoryGroupName: string;
  items: AllSorts[];
  usable: number;
}

export type SongListCategoryData = CategoryGroupItem[];

export interface Creator {
  type: number;
  qq: number;
  encrypt_uin: string;
  name: string;
  isVip: number;
  avatarUrl: string;
  followflag: number;
}

export interface SongListItem {
  commit_time: string;
  createtime: string;
  creator: Creator;
  dissid: string;
  dissname: string;
  imgurl: string;
  introduction: string;
  listenum: number;
  score: number;
  version: number;
}

export interface SongListData {
  categoryId: number;
  ein: number;
  list: SongListItem[];
  sin: number;
  sortId: number;
  sum: number;
  uin: number;
}

export interface Tag {
  // 由于不清楚tags数组中具体对象结构，这里先不定义具体属性，可根据实际情况补充
}

export interface PlaylistInfo {
  album_pic_mid: string;
  buynum: number;
  cmtnum: number;
  coveradurl: string;
  ctime: number;
  cur_song_num: number;
  desc: string;
  dir_pic_url2: string;
  dir_show: number;
  dirid: number;
  dissid: number;
  dissname: string;
  distid: string;
  disstype: number;
  encrypt_uin: string;
  headurl: string;
  ifpicurl: string;
  isAd: number;
  isdj: number;
  isvip: number;
  login: string;
  logo: string;
  mtime: number;
  nick: string;
  nickname: string;
  owndir: number;
  pic_dpi: number;
  pic_mid: string;
  scoreavage: string;
  scoreusercount: number;
  singerid: number;
  singermid: string;
  song_begin: number;
  song_update_num: number;
  song_update_time: number;
  songids: string;
  songlist: SongInfo[];
  songnum: number;
  songtypes: string;
  tags: Tag[];
  total_song_num: number;
  type: number;
  uin: string;
  visitnum: number;
}

export type SongListDetailData = PlaylistInfo[];
