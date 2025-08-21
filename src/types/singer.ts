export interface AlbumInfo {
  /** 专辑ID */
  albumID: number;
  /** 专辑mid */
  albumMid: string;
  /** 专辑名称 */
  albumName: string;
  /** 专辑翻译名称 */
  albumTranName: string;
  /** 专辑类型 */
  albumType: string;
  /** 可能是某种特定标识 */
  pmid: string;
  /** 发布日期 */
  publishDate: string;
  /** 歌手名称 */
  singerName: string;
  /** 标签（这里为null，在TypeScript中可以用null类型来表示） */
  tags: null;
  /** 总数量 */
  totalNum: number;
}

export interface SingerInfo {
  /** 国家 */
  country: string;
  /** 歌手ID */
  singer_id: number;
  /** 歌手mid */
  singer_mid: string;
  /** 歌手名称 */
  singer_name: string;
  /** 歌手图片链接 */
  singer_pic: string;
}

export interface SingerHotSongExtra {
  /** 是否为新歌 */
  is_new: number;
  /** 是否为独家 */
  is_only: number;
  /** 播放次数 */
  listen_count: number;
  /** 上传时间 */
  upload_time: string;
}

export interface Action {
  /** 开关状态 */
  switch: number;
  /** 消息ID */
  msgid: number;
  /** 提醒状态 */
  alert: number;
  /** 图标状态 */
  icons: number;
  /** 分享消息状态 */
  msgshare: number;
  /** 下载消息状态 */
  msgdown: number;
  /** 收藏消息状态 */
  msgfav: number;
  /** 支付消息状态 */
  msgpay: number;
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
  subtitle: string | null;
  /** 专辑pmid */
  pmid: string;
  /** 发布时间 */
  time_public: string;
}

export interface File {
  /** 音频ID */
  id: number;
  /** 音频mid */
  mid: string;
  /** 音频媒体mid */
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
  /** APE格式大小 */
  size_ape: number;
  /** DTS格式大小 */
  size_dts: number;
}

export interface Mv {
  id: number;
  vid: string;
  name: string;
  title: string;
  vt: number;
}

export interface Pay {
  /** 按月付费 */
  pay_month: number;
  /** 单曲价格 */
  price_track: number;
  /** 专辑价格 */
  price_album: number;
  /** 付费播放 */
  pay_play: number;
  /** 付费下载 */
  pay_down: number;
  /** 付费状态 */
  pay_status: number;
  /** 免费时长 */
  time_free: number;
}

/** 歌曲信息 */
export interface SongInfo {
  /** 歌曲操作信息 */
  action: Action;
  /** 专辑信息 */
  album: Album;
  /** 每分钟节拍数 */
  bpm: number;
  /** 数据类型 */
  data_type: number;
  /** 文件信息 */
  file: File;
  /** 备注标记 */
  fnote: number;
  /** 流派 */
  genre: number;
  /** 歌曲ID */
  id: number;
  /** 专辑索引 */
  index_album: number;
  /** CD索引 */
  index_cd: number;
  /** 歌曲时长(秒) */
  interval: number;
  /** 是否独家 */
  isonly: number;
  /** K歌信息 */
  ksong: {
    /** K歌ID */
    id: number;
    /** K歌mid */
    mid: string;
  };
  /** 标签 */
  label: string;
  /** 语言 */
  language: number;
  /** 歌曲mid */
  mid: string;
  /** 修改时间戳 */
  modify_stamp: number;
  /** MV信息 */
  mv: Mv;
  /** 歌曲名称 */
  name: string;
  /** 未知字段 */
  ov: number;
  /** 付费信息 */
  pay: Pay;
  /** 乒乓信息 */
  pingpong: string;
  /** 乒乓URL */
  ppurl: string;
  /** 歌手信息 */
  singer: {
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
  }[];
  /** 状态 */
  status: number;
  /** 副标题 */
  subtitle: string;
  /** 歌曲tid */
  tid: number;
  /** 发布时间 */
  time_public: string;
  /** 歌曲标题 */
  title: string;
  /** 追踪信息 */
  trace: string;
  /** 类型 */
  type: number;
  /** 歌曲URL */
  url: string;
  /** 版本号 */
  version: number;
  /** 音量信息 */
  volume: {
    /** 增益 */
    gain: number;
    /** 峰值 */
    peak: number;
    /** 响度范围 */
    lra: number;
  };
}

export interface SingerHotSongData {
  extras: SingerHotSongExtra[];
  music_grp: any[];
  show_singer_desc: boolean;
  singer_brief: string;
  singer_info: {
    area: number;
    attribute4: number;
    fans: number;
    genre: number;
    id: number;
    mid: string;
    name: string;
    other_name: string;
  };
  songlist: SongInfo[];
  total_album: number;
  total_mv: number;
  total_song: number;
  yinyueren: string;
}
