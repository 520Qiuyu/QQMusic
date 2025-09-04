import MP3Tag from 'mp3tag.js';
import { ID3Writer } from 'browser-id3-writer';

/** MP3 标签信息接口 */
export interface Mp3Tags {
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
  picture?: {
    type: number;
    mime: string;
    description: string;
  };
  [key: string]: any;
}

/** 将 Blob 转换为 ArrayBuffer */
const blobToArrayBuffer = async (file: Blob): Promise<ArrayBuffer> => {
  return await file.arrayBuffer();
};

/** 将 ArrayBuffer 转换为 Blob */
const arrayBufferToBlob = (buffer: ArrayBuffer, mimeType: string = 'audio/mpeg'): Blob => {
  return new Blob([buffer], { type: mimeType });
};

/** 解析 LRC 格式歌词为时间戳数组 */
const parseLrcToTimestamps = (lrcText: string): Array<[string, number]> => {
  const lines = lrcText.split(/(?=\[)/);
  const timestamps: Array<[string, number]> = [];

  lines.forEach((line) => {
    // 匹配时间标签 [mm:ss.xx] 或 [mm:ss.xx]
    debugger;
    const timeMatch = line.match(/\[(\d{2}):(\d{2})\.(\d{2})\]/);
    if (timeMatch) {
      const minutes = parseInt(timeMatch[1]);
      const seconds = parseInt(timeMatch[2]);
      const centiseconds = parseInt(timeMatch[3]);

      // 转换为毫秒
      const timestamp = (minutes * 60 + seconds) * 1000 + centiseconds * 10;

      // 提取歌词文本（去除时间标签和元数据标签）
      let lyrics = line.replace(/\[[^\]]+\]/g, '').trim();

      // 过滤掉元数据行（如 [ti:], [ar:], [al:] 等）
      if (lyrics && !lyrics.startsWith('[') && !lyrics.includes(':')) {
        timestamps.push([lyrics, timestamp]);
      }
    }
  });

  // 按时间戳排序
  timestamps.sort((a, b) => a[1] - b[1]);

  return timestamps;
};

/** 读取 MP3 所有标签 */
export const readAllMp3Tag = async (file: Blob): Promise<Mp3Tags> => {
  try {
    const arrayBuffer = await blobToArrayBuffer(file);

    // 创建 MP3Tag 实例
    const mp3tag = new MP3Tag(arrayBuffer);

    // 读取标签
    mp3tag.read({
      id3v2: true,
      id3v1: false,
    });

    console.log('MP3 标签读取结果:', mp3tag);

    if (!mp3tag.tags) {
      return {};
    }

    // 标准化标签字段
    const normalizedTags: Mp3Tags = {};

    const tags = mp3tag.tags;
    const { title, artist, album, year, genre, comment, track, v2, v2Details } = tags;

    // 基本信息
    if (title) normalizedTags.title = title;
    if (artist) normalizedTags.artist = artist;
    if (album) normalizedTags.album = album;
    if (year) normalizedTags.year = year;
    if (genre) normalizedTags.genre = genre;
    if (comment) normalizedTags.comment = comment;
    if (track) normalizedTags.track = track;

    // 歌词 (USLT - Unsynchronized Lyrics)
    if (v2?.TXXX?.length) {
      normalizedTags.lyrics = v2.TXXX?.find((item) => item.description === 'LYRICS')?.text!;
    }

    // 封面图片
    if (v2?.APIC?.length) {
      normalizedTags.picture = {
        type: v2?.APIC[0].type || 3,
        mime: v2.APIC[0].format || 'image/jpeg',
        description: v2.APIC[0].description || '',
      };
    }

    console.log('解析后的 MP3 标签:', normalizedTags);
    return normalizedTags;
  } catch (error) {
    console.error('读取 MP3 标签失败:', error);
    return {};
  }
};

/** 读取特定标签 */
export const readMp3Tag = async (
  file: Blob,
  tagName: keyof Mp3Tags,
): Promise<string | undefined> => {
  try {
    const arrayBuffer = await blobToArrayBuffer(file);

    // 创建 MP3Tag 实例
    const mp3tag = new MP3Tag(arrayBuffer);

    // 读取标签
    mp3tag.read();

    if (!mp3tag.tags) {
      return undefined;
    }

    // 映射标签名到 mp3tag.js 的字段名
    const tagMapping: Record<string, string> = {
      title: 'title',
      artist: 'artist',
      album: 'album',
      year: 'year',
      genre: 'genre',
      track: 'track',
      lyrics: 'lyrics',
      picture: 'picture',
    };

    const mappedTag = tagMapping[tagName];
    if (mappedTag && mp3tag.tags[mappedTag]) {
      return mp3tag.tags[mappedTag];
    }

    return undefined;
  } catch (error) {
    console.error(`读取 MP3 标签 ${tagName} 失败:`, error);
    return undefined;
  }
};

/** 给 MP3 写标签 - 使用 browser-id3-writer */
export const writeMp3Tag = async (
  file: Blob,
  tagName: keyof Mp3Tags,
  tagValue: string,
): Promise<Blob | undefined> => {
  try {
    const arrayBuffer = await blobToArrayBuffer(file);

    // 先读取原有标签信息
    const mp3tag = new MP3Tag(arrayBuffer);
    mp3tag.read();
    const existingTags = mp3tag.tags || {};
    console.log('existingTags', existingTags);

    // 创建 ID3Writer 实例
    const writer = new ID3Writer(arrayBuffer);

    // 先写入原有的标签信息（除了要更新的标签）
    if (existingTags.title && tagName !== 'title') {
      console.log('existingTags.title', existingTags.title);
      (writer as any).setFrame('TIT2', existingTags.title);
    }
    if (existingTags.artist && tagName !== 'artist') {
      console.log('existingTags.artist', existingTags.artist);
      (writer as any).setFrame('TPE1', [existingTags.artist]);
    }
    if (existingTags.album && tagName !== 'album') {
      console.log('existingTags.album', existingTags.album);
      (writer as any).setFrame('TALB', existingTags.album);
    }
    if (existingTags.year && tagName !== 'year') {
      console.log('existingTags.year', existingTags.year);
      (writer as any).setFrame('TYER', existingTags.year);
    }
    if (existingTags.genre && tagName !== 'genre') {
      console.log('existingTags.genre', existingTags.genre);
      (writer as any).setFrame('TCON', existingTags.genre);
    }
    if (existingTags.comment && tagName !== 'comment') {
      console.log('existingTags.comment', existingTags.comment);
      (writer as any).setFrame('COMM', existingTags.comment);
    }
    if (existingTags.track && tagName !== 'track') {
      console.log('existingTags.track', existingTags.track);
      (writer as any).setFrame('TRCK', existingTags.track);
    }

    // 处理原有歌词（如果不是要更新的标签）
    if (tagName !== 'lyrics' && existingTags.v2?.TXXX?.length) {
      const lyricsItem = existingTags.v2.TXXX.find((item) => item.description === 'LYRICS');
      if (lyricsItem && lyricsItem.text) {
        (writer as any).setFrame('USLT', {
          lyrics: lyricsItem.text,
          language: 'eng',
          description: 'Lyrics',
        });
      }
    }

    // 处理原有封面
    if (existingTags.v2?.APIC?.length) {
      const coverItem = existingTags.v2.APIC[0];
      if (coverItem && coverItem.data) {
        (writer as any).setFrame('APIC', {
          type: coverItem.type || 3,
          data: coverItem.data,
          description: coverItem.description || 'Cover',
        });
      }
    }

    // 然后写入新的标签值
    switch (tagName) {
      case 'title':
        (writer as any).setFrame('TIT2', tagValue);
        break;
      case 'artist':
        (writer as any).setFrame('TPE1', tagValue);
        break;
      case 'album':
        (writer as any).setFrame('TALB', tagValue);
        break;
      case 'year':
        (writer as any).setFrame('TYER', tagValue);
        break;
      case 'genre':
        (writer as any).setFrame('TCON', tagValue);
        break;
      case 'comment':
        (writer as any).setFrame('COMM', tagValue);
        break;
      case 'track':
        (writer as any).setFrame('TRCK', tagValue);
        break;
      case 'disc':
        (writer as any).setFrame('TPOS', tagValue);
        break;
      case 'composer':
        (writer as any).setFrame('TCOM', tagValue);
        break;
      case 'lyricist':
        (writer as any).setFrame('TEXT', tagValue);
        break;
      case 'lyrics':
        const formatLyrics = parseLrcToTimestamps(tagValue);
        console.log('formatLyrics', formatLyrics);
        // 歌词标签需要特殊处理
        (writer as any).setFrame('SYLT', {
          type: 1,
          text: formatLyrics,
          timestampFormat: 2,
          language: 'eng',
          description: 'Lyrics',
        });
        break;
      default:
        console.warn(`不支持的标签类型: ${tagName}`);
        break;
    }

    // 写入标签
    const result = writer.addTag();

    if (result) {
      console.log('给 MP3 写标签成功:', { tagName, tagValue });
      return arrayBufferToBlob(result);
    }

    return undefined;
  } catch (error) {
    console.error('给 MP3 写标签失败:', error);
    return undefined;
  }
};

/** 给 MP3 嵌入图片 - 使用 browser-id3-writer */
export const embedMp3Picture = async (file: Blob, picture: Blob): Promise<Blob | undefined> => {
  try {
    const arrayBuffer = await blobToArrayBuffer(file);
    const coverArrayBuffer = await blobToArrayBuffer(picture);

    // 先读取原有标签信息
    const mp3tag = new MP3Tag(arrayBuffer);
    mp3tag.read();
    const existingTags = mp3tag.tags || {};

    // 创建 ID3Writer 实例
    const writer = new ID3Writer(arrayBuffer);

    // 先写入原有的标签信息
    if (existingTags.title) {
      console.log('existingTags.title', existingTags.title);
      (writer as any).setFrame('TIT2', existingTags.title);
    }
    if (existingTags.artist) {
      console.log('existingTags.artist', existingTags.artist);
      (writer as any).setFrame('TPE1', [existingTags.artist]);
    }
    if (existingTags.album) {
      console.log('existingTags.album', existingTags.album);
      (writer as any).setFrame('TALB', existingTags.album);
    }
    if (existingTags.year) {
      console.log('existingTags.year', existingTags.year);
      (writer as any).setFrame('TYER', existingTags.year);
    }
    if (existingTags.genre) {
      console.log('existingTags.genre', existingTags.genre);
      (writer as any).setFrame('TCON', existingTags.genre);
    }
    if (existingTags.comment) {
      console.log('existingTags.comment', existingTags.comment);
      (writer as any).setFrame('COMM', existingTags.comment);
    }
    if (existingTags.track) {
      console.log('existingTags.track', existingTags.track);
      (writer as any).setFrame('TRCK', existingTags.track);
    }

    // 处理原有歌词
    if (existingTags.v2?.TXXX?.length) {
      const lyricsItem = existingTags.v2.TXXX.find((item) => item.description === 'LYRICS');
      if (lyricsItem && lyricsItem.text) {
        (writer as any).setFrame('USLT', {
          text: lyricsItem.text,
          language: 'eng',
          description: 'Lyrics',
        });
      }
    }

    // 设置新的封面图片（覆盖原有封面）
    (writer as any).setFrame('APIC', {
      type: 3,
      data: coverArrayBuffer,
      description: 'Cover',
    });

    // 写入标签
    const result = writer.addTag();

    if (result) {
      console.log('给 MP3 嵌入图片成功');
      return arrayBufferToBlob(result);
    }

    return undefined;
  } catch (error) {
    console.error('给 MP3 嵌入图片失败:', error);
    return undefined;
  }
};

/** 同时写入歌词和封面 */
export const writeMp3TagAndPicture = async (
  file: Blob,
  tagName: keyof Mp3Tags,
  tagValue: string,
  picture: Blob,
): Promise<Blob | undefined> => {
  try {
    let outputFile = await writeMp3Tag(file, tagName, tagValue);
    if (outputFile) {
      outputFile = await embedMp3Picture(outputFile, picture);
    }
    return outputFile;
  } catch (error) {
    console.error('同时写入歌词和封面失败:', error);
    throw error;
  }
};

/** 移除 MP3 标签 - 使用 browser-id3-writer */
export const removeMp3Tag = async (
  file: Blob,
  tagName?: keyof Mp3Tags,
): Promise<Blob | undefined> => {
  try {
    if (tagName) {
      // 移除特定标签 - 通过写入空值来实现
      console.log(`移除 MP3 标签 ${tagName} - 通过写入空值实现`);
      return await writeMp3Tag(file, tagName, '');
    } else {
      // 移除所有标签 - 返回原文件，因为该库不支持批量移除
      console.log('移除所有 MP3 标签 - 返回原文件');
      return file;
    }
  } catch (error) {
    console.error('移除 MP3 标签失败:', error);
    return undefined;
  }
};
