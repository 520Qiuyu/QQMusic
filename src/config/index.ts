import type { FileType } from "@/constants";

const isDev = import.meta.env.DEV;

/** 默认功能配置 */
export const defaultFunctionConfig = {
  /**
   * 是否开启搜索
   */
  enableSearch: isDev,
  /**
   * 是否开启GitHub信息
   */
  enableGithubInfo: true,
  /**
   * 是否开启功能开关Tab
   */
  enableFunctionSwitchTab: true,
  /**
   * 是否开启下载设置Tab
   */
  enableDownloadSetting: true,
  /**
   * 并发上传歌曲数量
   */
  uploadConcurrency: 6,
  /**
   * 是否开启测试Modal
   */
  enableTestModal: isDev,
  /**
   * 演唱会关键词
   */
  liveKeywords: ['演唱会', 'Live', 'live'],
};

/** 默认下载配置 */
export const defaultDownloadConfig = {
  /** 下载音质 */
  quality: 'flac' as keyof typeof FileType,
  /** 是否下载歌词 */
  downloadLyric: true,
  /** 是否内嵌歌词封面 */
  embedLyricCover: true,
  /** 是否内嵌歌曲信息 */
  embedSongInfo: true,
};
