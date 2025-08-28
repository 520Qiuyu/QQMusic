/**
 * 搜索结果的语义信息
 */
export interface Semantic {
  /** 当前返回的数量 */
  curnum: number;
  /** 当前页码 */
  curpage: number;
  /** 列表数据，具体数据结构未知 */
  list: any[];
  /** 总数 */
  totalnum: number;
}

/**
 * 专辑信息接口
 */
export interface SongInfo {
  /** 专辑ID */
  albumid: number;
  /** 专辑MID */
  albummid: string;
  /** 专辑名称 */
  albumname: string;
  /** 高亮显示的专辑名称 */
  albumname_hilight: string;
  /** 未知警报ID，用途未知 */
  alertid: number;
  /** 所属CD信息，0可能表示某种特定含义 */
  belongCD: number;
  /** CD索引 */
  cdIdx: number;
  /** 是否为中文歌手，0可能表示否 */
  chinesesinger: number;
  /** 文档ID */
  docid: string;
  /** 未知数组，用途未知 */
  grp: any[];
  /** 未知间隔信息，用途未知 */
  interval: number;
  /** 是否唯一，1可能表示是 */
  isonly: number;
  /** 歌词内容 */
  lyric: string;
  /** 高亮显示的歌词内容 */
  lyric_hilight: string;
  /** 媒体MID */
  media_mid: string;
  /** 消息ID */
  msgid: number;
  /** 新状态 */
  newStatus: number;
  /** 未知数字，用途未知 */
  nt: number;
  /** 付费信息 */
  pay: {
    /** 专辑付费状态，0可能表示免费 */
    payalbum: number;
    /** 专辑价格 */
    payalbumprice: number;
    /** 下载付费状态，1可能表示需要付费下载 */
    paydownload: number;
    /** 付费信息状态，1可能表示有付费信息 */
    payinfo: number;
    /** 播放付费状态，0可能表示免费播放 */
    payplay: number;
    /** 单曲包月付费状态，1可能表示可单曲包月 */
    paytrackmouth: number;
    /** 单曲价格 */
    paytrackprice: number;
  };
  /** 预览信息 */
  preview: {
    /** 预览开始位置 */
    trybegin: number;
    /** 预览结束位置 */
    tryend: number;
    /** 预览大小 */
    trysize: number;
  };
  /** 发布时间 */
  pubtime: number;
  /** 未知纯净度信息，用途未知 */
  pure: number;
  /** 歌手信息数组 */
  singer: Singer[];
  /** 歌曲在128kbps码率下的大小 */
  size128: number;
  /** 歌曲在320kbps码率下的大小 */
  size320: number;
  /** 歌曲ape格式的大小，0可能表示无此格式 */
  sizeape: number;
  /** 歌曲flac格式的大小 */
  sizeflac: number;
  /** 歌曲ogg格式的大小 */
  sizeogg: number;
  /** 歌曲ID */
  songid: number;
  /** 歌曲MID */
  songmid: string;
  /** 歌曲名称 */
  songname: string;
  /** 高亮显示的歌曲名称 */
  songname_hilight: string;
  /** 字符串媒体MID */
  strMediaMid: string;
  /** 流信息，用途未知 */
  stream: number;
  /** 未知开关信息，用途未知 */
  switch: number;
  /** 未知时间或其他标识，用途未知 */
  t: number;
  /** 未知标签，用途未知 */
  tag: number;
  /** 未知类型，用途未知 */
  type: number;
  /** 版本 */
  ver: number;
  /** 视频ID，为空可能表示无视频 */
  vid: string;
}

/**
 * 歌手信息接口
 */
export interface Singer {
  /** 歌手ID */
  id: number;
  /** 歌手MID */
  mid: string;
  /** 歌手名称 */
  name: string;
  /** 高亮显示的歌手名称 */
  name_hilight: string;
}

/**
 * 歌曲列表信息
 */
export interface SongList {
  /** 当前返回的歌曲数量 */
  curnum: number;
  /** 当前页码 */
  curpage: number;
  /** 歌曲列表，具体歌曲数据结构未知 */
  list: SongInfo[];
  /** 歌曲总数 */
  totalnum: number;
}

/**
 * 专辑信息，具体属性根据实际情况补充
 */
export interface AlbumInfo {
  /** 专辑ID */
  albumID: number;
  /** 专辑MID */
  albumMID: string;
  /** 专辑名称 */
  albumName: string;
  /** 高亮显示的专辑名称 */
  albumname_hilight: string;
}

/**
 * 热门歌曲信息，具体属性根据实际情况补充
 */
export interface HotSongInfo {
  /** 歌曲原始信息字符串 */
  f: string;
  /** 歌曲ID */
  songID: number;
  /** 歌曲MID */
  songMID: string;
  /** 歌曲名称 */
  songName: string;
  /** 高亮显示的歌曲名称 */
  songname_hilight: string;
}

/**
 * 歌手详细信息
 */
export interface ZhidaSinger {
  /** 专辑数量 */
  albumNum: number;
  /** 热门专辑列表 */
  hotalbum: AlbumInfo[];
  /** 热门歌曲列表 */
  hotsong: HotSongInfo[];
  /** MV 数量 */
  mvNum: number;
  /** 歌手ID */
  singerID: number;
  /** 歌手MID */
  singerMID: string;
  /** 歌手名称 */
  singerName: string;
  /** 歌手图片链接 */
  singerPic: string;
  /** 高亮显示的歌手名称 */
  singername_hilight: string;
  /** 歌曲数量 */
  songNum: number;
}

/**
 * 搜索结果整体信息
 */
export interface SearchResult {
  /** 搜索关键词 */
  keyword: string;
  /** 优先级 */
  priority: number;
  /** 未知信息数组，具体数据结构未知 */
  qc: any[];
  /** 搜索结果的语义信息 */
  semantic: Semantic;
  /** 歌曲列表信息 */
  song: SongList;
  /** 未知标签，用途未知 */
  tab: number;
  /** 标签列表，具体数据结构未知 */
  taglist: any[];
  /** 总时长 */
  totaltime: number;
  /** 知达相关信息 */
  zhida: {
    /** 类型 */
    type: number;
    /** 歌手详细信息 */
    zhida_singer: ZhidaSinger;
  };
}
