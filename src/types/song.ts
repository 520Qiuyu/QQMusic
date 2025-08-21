export interface Extras {
  name: string;
  transname: string;
  subtitle: string;
  from: string;
  wikiurl: string;
}

export interface CompanyInfo {
  /** 标题，如"唱片公司" */
  title: string;
  /** 类型，如"JUMP_TO_COMPANY" */
  type: string;
  /** 内容数组 */
  content: any[];
  /** 位置信息，如51 */
  pos: number;
  /** 更多标记，如0 */
  more: number;
  /** 选中项，如"company" */
  selected: string;
  /** 使用平台，如1 */
  use_platform: number;
}

export interface GenreInfo {
  /** 标题，如"歌曲流派" */
  title: string;
  /** 类型，如"JUMP_TO_CATEGORY" */
  type: string;
  /** 内容数组 */
  content: any[];
  /** 位置信息，如12 */
  pos: number;
  /** 更多标记，如0 */
  more: number;
  /** 选中项，如"genre" */
  selected: string;
  /** 使用平台，如3 */
  use_platform: number;
}

export interface IntroInfo {
  /** 标题，如"简介" */
  title: string;
  /** 类型，如"SPECIAL_DISPLAY" */
  type: string;
  /** 内容数组 */
  content: any[];
  /** 位置信息，如52 */
  pos: number;
  /** 更多标记，如0 */
  more: number;
  /** 选中项，如"intro" */
  selected: string;
  /** 使用平台，如3 */
  use_platform: number;
}

export interface LanInfo {
  /** 标题，如"歌曲语种" */
  title: string;
  /** 类型，如"JUMP_TO_CATEGORY" */
  type: string;
  /** 内容数组 */
  content: any[];
  /** 位置信息，如11 */
  pos: number;
  /** 更多标记，如0 */
  more: number;
  /** 选中项，如"lan" */
  selected: string;
  /** 使用平台，如3 */
  use_platform: number;
}

export interface PubTimeInfo {
  /** 标题，如"发行时间" */
  title: string;
  /** 类型，如"desc" */
  type: string;
  /** 内容数组 */
  content: any[];
  /** 位置信息，如50 */
  pos: number;
  /** 更多标记，如0 */
  more: number;
  /** 选中项，如"pub_time" */
  selected: string;
  /** 使用平台，如0 */
  use_platform: number;
}

export interface Info {
  company: CompanyInfo;
  genre: GenreInfo;
  intro: IntroInfo;
  lan: LanInfo;
  pub_time: PubTimeInfo;
}

export interface Action {
  /** 开关标记，如16904975 */
  switch: number;
  /** 开关标记2，如524288 */
  switch2: number;
  /** 消息ID，如0 */
  msgid: number;
  /** 提醒标记，如16 */
  alert: number;
  /** 图标标记，如12992510 */
  icons: number;
  /** 图标标记2，如0 */
  icon2: number;
  /** 下载消息标记，如0 */
  msgdown: number;
  /** 收藏消息标记，如0 */
  msgfav: number;
  /** 支付消息标记，如0 */
  msgpay: number;
  /** 分享消息标记，如0 */
  msgshare: number;
}

export interface Album {
  /** 专辑ID */
  id: number;
  /** 专辑mid */
  mid: string;
  /** 专辑名称 */
  name: string;
  /** 专辑标题 */
  title: string;
  /** 专辑副标题 */
  subtitle: string;
  /** 专辑pmid */
  pmid: string;
  /** 发布时间 */
  time_public: string;
}

export interface File {
  /** 媒体mid */
  media_mid: string;
  /** 30秒试听开始时间(ms) */
  b_30s: number;
  /** 30秒试听结束时间(ms) */
  e_30s: number;
  /** Hi-Res位深 */
  hires_bitdepth: number;
  /** Hi-Res采样率 */
  hires_sample: number;
  /** 24kbps AAC大小 */
  size_24aac: number;
  /** 48kbps AAC大小 */
  size_48aac: number;
  /** 96kbps AAC大小 */
  size_96aac: number;
  /** 96kbps OGG大小 */
  size_96ogg: number;
  /** 128kbps MP3大小 */
  size_128mp3: number;
  /** 192kbps AAC大小 */
  size_192aac: number;
  /** 192kbps OGG大小 */
  size_192ogg: number;
  /** 320kbps MP3大小 */
  size_320mp3: number;
  /** 360RA格式大小 */
  size_360ra: any[];
  /** APE格式大小 */
  size_ape: number;
  /** 杜比格式大小 */
  size_dolby: number;
  /** DTS格式大小 */
  size_dts: number;
  /** FLAC格式大小 */
  size_flac: number;
  /** Hi-Res格式大小 */
  size_hires: number;
  /** 新格式大小数组 */
  size_new: number[];
  /** 试听片段大小 */
  size_try: number;
  /** 试听开始时间 */
  try_begin: number;
  /** 试听结束时间 */
  try_end: number;
  /** 音频URL */
  url: string;
}

export interface Ksong {
  id: number;
  mid: string;
}

export interface Pay {
  /** 月付费状态 */
  pay_month: number;
  /** 单曲价格 */
  price_track: number;
  /** 专辑价格 */
  price_album: number;
  /** 播放付费状态 */
  pay_play: number;
  /** 下载付费状态 */
  pay_down: number;
  /** 付费状态 */
  pay_status: number;
  /** 免费试听时长 */
  time_free: number;
}

export interface Mv {
  id: number;
  vid: string;
  name: string;
  title: string;
  vt: number;
}

export interface SingerInfo {
  /** 歌手ID */
  id: number;
  /** 歌手mid */
  mid: string;
  /** 歌手名称 */
  name: string;
  /** 歌手标题 */
  title: string;
  /** 歌手类型 */
  type: number;
  /** 用户ID */
  uin: number;
}

export interface Volume {
  gain: number;
  peak: number;
  lra: number;
}

export interface TrackInfo {
  action: Action;
  album: Album;
  bpm: number;
  data_type: number;
  es: string;
  file: File;
  fnote: number;
  genre: number;
  id: number;
  index_album: number;
  index_cd: number;
  interval: number;
  isonly: number;
  ksong: Ksong;
  ktag: string;
  label: string;
  language: number;
  mid: string;
  modify_stamp: number;
  mv: Mv;
  name: string;
  ov: number;
  pay: Pay;
  pingpong: string;
  ppurl: string;
  sa: number;
  singer: SingerInfo[];
  status: number;
  subtitle: string;
  tid: number;
  time_public: string;
  title: string;
  trace: string;
  type: number;
  url: string;
  version: number;
  vf: number[];
  vi: number[];
  volume: Volume;
  vs: string[];
}

export interface SongDetailsData {
  extras: Extras;
  info: Info;
  track_info: TrackInfo;
}
