import { IAudioMetadata, IFormat, ITag, IPicture, parseBlob } from 'music-metadata';

/** MP3 元数据信息接口 */
export interface Mp3Metadata {
  title?: string;
  artist?: string;
  album?: string;
  year?: string;
  genre?: string;
  comment?: string;
  track?: string;
  disc?: string;
  composer?: string;
  lyricist?: string;
  lyrics?: string;
  picture?: IPicture[];
  duration?: number;
  bitrate?: number;
  sampleRate?: number;
  format?: string;
  size?: number;
  [key: string]: any;
}

/** 读取 MP3 所有元数据 */
export const readMp3Metadata = async (file: Blob): Promise<Mp3Metadata> => {
  try {
    const metadata = await parseBlob(file);

    console.log('MP3 元数据读取结果:', metadata);

    if (!metadata) {
      return {};
    }

    // 标准化元数据字段
    const normalizedMetadata: Mp3Metadata = {};

    // 基本信息
    if (metadata.common.title) normalizedMetadata.title = metadata.common.title;
    if (metadata.common.artist) normalizedMetadata.artist = metadata.common.artist;
    if (metadata.common.album) normalizedMetadata.album = metadata.common.album;
    if (metadata.common.year) normalizedMetadata.year = metadata.common.year.toString();
    if (metadata.common.genre) normalizedMetadata.genre = metadata.common.genre.join(', ');
    if (metadata.common.comment) {
      // 处理评论数组
      const comments = metadata.common.comment.map((comment) => comment.text).join('; ');
      normalizedMetadata.comment = comments;
    }
    if (metadata.common.track) normalizedMetadata.track = metadata.common.track.no?.toString();
    if (metadata.common.disk) normalizedMetadata.disc = metadata.common.disk.no?.toString();
    if (metadata.common.composer) normalizedMetadata.composer = metadata.common.composer.join(', ');
    if (metadata.common.lyricist) normalizedMetadata.lyricist = metadata.common.lyricist.join(', ');

    // 歌词
    if (metadata.common.lyrics) {
      normalizedMetadata.lyrics = metadata.common.lyrics.join('\n');
    }

    // 封面图片
    if (metadata.common.picture && metadata.common.picture.length > 0) {
      normalizedMetadata.picture = metadata.common.picture;
    }

    // 音频格式信息
    if (metadata.format) {
      normalizedMetadata.duration = metadata.format.duration;
      normalizedMetadata.bitrate = metadata.format.bitrate;
      normalizedMetadata.sampleRate = metadata.format.sampleRate;
      normalizedMetadata.format = metadata.format.container;
      // 使用文件大小作为备选
      normalizedMetadata.size = file.size;
    }

    // 保留其他元数据
    Object.entries(metadata).forEach(([key, value]) => {
      if (!normalizedMetadata.hasOwnProperty(key)) {
        normalizedMetadata[key] = value;
      }
    });

    console.log('解析后的 MP3 元数据:', normalizedMetadata);
    return normalizedMetadata;
  } catch (error) {
    console.error('读取 MP3 元数据失败:', error);
    return {};
  }
};

/** 读取特定元数据字段 */
export const readMp3MetadataField = async (
  file: Blob,
  fieldName: keyof Mp3Metadata,
): Promise<string | number | IPicture[] | undefined> => {
  try {
    const metadata = await readMp3Metadata(file);
    return metadata[fieldName];
  } catch (error) {
    console.error(`读取 MP3 元数据字段 ${fieldName} 失败:`, error);
    return undefined;
  }
};

/** 读取 MP3 基本信息 */
export const readMp3BasicInfo = async (
  file: Blob,
): Promise<{
  title?: string;
  artist?: string;
  album?: string;
  duration?: number;
  bitrate?: number;
}> => {
  try {
    const metadata = await readMp3Metadata(file);
    return {
      title: metadata.title,
      artist: metadata.artist,
      album: metadata.album,
      duration: metadata.duration,
      bitrate: metadata.bitrate,
    };
  } catch (error) {
    console.error('读取 MP3 基本信息失败:', error);
    return {};
  }
};

/** 读取 MP3 封面图片 */
export const readMp3Cover = async (file: Blob): Promise<IPicture[] | undefined> => {
  try {
    const metadata = await readMp3Metadata(file);
    return metadata.picture;
  } catch (error) {
    console.error('读取 MP3 封面失败:', error);
    return undefined;
  }
};

/** 读取 MP3 歌词 */
export const readMp3Lyrics = async (file: Blob): Promise<string | undefined> => {
  try {
    const metadata = await readMp3Metadata(file);
    return metadata.lyrics;
  } catch (error) {
    console.error('读取 MP3 歌词失败:', error);
    return undefined;
  }
};

/** 获取 MP3 文件统计信息 */
export const getMp3FileStats = async (
  file: Blob,
): Promise<{
  size: number;
  duration: number;
  bitrate: number;
  sampleRate: number;
  format: string;
}> => {
  try {
    const metadata = await readMp3Metadata(file);
    return {
      size: metadata.size || file.size,
      duration: metadata.duration || 0,
      bitrate: metadata.bitrate || 0,
      sampleRate: metadata.sampleRate || 0,
      format: metadata.format || 'unknown',
    };
  } catch (error) {
    console.error('获取 MP3 文件统计信息失败:', error);
    return {
      size: file.size,
      duration: 0,
      bitrate: 0,
      sampleRate: 0,
      format: 'unknown',
    };
  }
};

/** 检查 MP3 文件是否包含特定标签 */
export const hasMp3Tag = async (file: Blob, tagName: keyof Mp3Metadata): Promise<boolean> => {
  try {
    const metadata = await readMp3Metadata(file);
    return metadata[tagName] !== undefined && metadata[tagName] !== null;
  } catch (error) {
    console.error(`检查 MP3 标签 ${tagName} 失败:`, error);
    return false;
  }
};

/** 获取所有可用的元数据字段 */
export const getAvailableMp3Fields = async (file: Blob): Promise<string[]> => {
  try {
    const metadata = await readMp3Metadata(file);
    return Object.keys(metadata).filter(
      (key) => metadata[key] !== undefined && metadata[key] !== null && metadata[key] !== '',
    );
  } catch (error) {
    console.error('获取可用 MP3 字段失败:', error);
    return [];
  }
};
