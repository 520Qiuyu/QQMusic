/** 功能配置接口 */
export interface FunctionConfig {
  /** 是否显示功能开关Tab */
  enableFunctionSwitchTab?: boolean;
  /** 是否显示下载设置Tab */
  enableDownloadSetting?: boolean;
  /** 是否启用测试Modal */
  enableTestModal?: boolean;
}

/** 下载配置接口 */
export interface DownloadConfig {
  /** 下载音质 */
  quality?: '128' | '320' | 'flac';
  /** 是否下载歌词 */
  downloadLyric?: boolean;
  /** 是否内嵌歌词封面 */
  embedLyricCover?: boolean;
  /** 是否内嵌歌曲信息 */
  embedSongInfo?: boolean;
}

/** 默认功能配置 */
export const defaultFunctionConfig: FunctionConfig = {
  enableFunctionSwitchTab: true,
  enableDownloadSetting: true,
  enableTestModal: true,
};

/** 默认下载配置 */
export const defaultDownloadConfig: DownloadConfig = {
  quality: 'flac',
  downloadLyric: true,
  embedLyricCover: true,
  embedSongInfo: true,
};

