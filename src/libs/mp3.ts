import { ID3Writer } from 'browser-id3-writer';
import type { IAudioMetadata, IPicture } from 'music-metadata';
import * as mm from 'music-metadata';

/** 与 `normalizeMp3Tags` 输出一致的标签结构（用于读写 ID3） */
export interface Mp3NormalizedTags {
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
}

/**
 * 将 Blob 读成 ArrayBuffer
 *
 * @example
 * const buf = await blobToArrayBuffer(blob);
 */
const blobToArrayBuffer = async (blob: Blob): Promise<ArrayBuffer> => {
  if (!blob) throw new Error('blob 不能为空');
  return await blob.arrayBuffer();
};

/**
 * 将 music-metadata 的 common 字段规范化为项目统一的 tag 结构
 *
 * @example
 * const tags = normalizeMp3Tags(await mm.parseBlob(file));
 */
const normalizeMp3Tags = (metadata: IAudioMetadata): Mp3NormalizedTags => {
  const common = metadata?.common || {};
  const {
    title,
    artist,
    album,
    year,
    genre,
    comment,
    track,
    disk,
    composer,
    lyricist,
    lyrics,
    picture,
  } = common;

  console.log('metadata', metadata);

  return {
    title: title || undefined,
    artist: artist || (Array.isArray(common?.artists) ? common.artists[0] : '') || undefined,
    album: album || undefined,
    year: typeof year === 'number' ? String(year) : year || undefined,
    genre: Array.isArray(genre) ? genre.join(',') : genre || undefined,
    comment: Array.isArray(comment) ? comment.filter(Boolean).join('\n') : comment || undefined,
    track: track?.no ? String(track.no) : undefined,
    disc: disk?.no ? String(disk.no) : undefined,
    composer: Array.isArray(composer) ? composer.filter(Boolean).join(',') : composer || undefined,
    lyricist: Array.isArray(lyricist) ? lyricist.filter(Boolean).join(',') : lyricist || undefined,
    lyrics: lyrics?.[0]?.text,
    picture: Array.isArray(picture) ? picture : undefined,
  };
};

/**
 * 读取 MP3 的所有标签（浏览器环境）
 *
 * @example
 * const tags = await readAllMp3Tag(file);
 * console.log(tags.title, tags.artist);
 */
export const readAllMp3Tag = async (file: Blob): Promise<Mp3NormalizedTags> => {
  try {
    const metadata = await mm.parseBlob(file);
    const tags = normalizeMp3Tags(metadata);
    console.log('MP3 解析后的标签:', tags);
    return tags;
  } catch (error) {
    console.error('读取 MP3 标签失败:', error);
    return {};
  }
};

/**
 * 读取 MP3 的特定标签
 *
 * @example
 * const title = await readMp3Tag(file, 'title');
 */
export const readMp3Tag = async (file: Blob, tagName: string): Promise<string | undefined> => {
  try {
    if (!tagName) return undefined;
    const all = await readAllMp3Tag(file);
    const key = String(tagName).toLowerCase();
    const val = (all as Record<string, unknown>)[key];
    return typeof val === 'string' ? val : undefined;
  } catch (error) {
    console.error(`读取 MP3 标签 ${tagName} 失败:`, error);
    return undefined;
  }
};

/**
 * 将常见 tag 映射为 ID3v2.3 帧
 *
 * @example
 * const writer = new ID3Writer(buffer);
 * applyId3Frames(writer, { title: 'x', artist: 'y' });
 */
const applyId3Frames = (
  writer: ID3Writer,
  tags: Mp3NormalizedTags | Record<string, unknown>,
): void => {
  if (!tags || typeof tags !== 'object') return;

  const { title, artist, album, year, genre, comment, track, disc, composer, lyricist, lyrics } =
    tags as Mp3NormalizedTags;

  if (title) writer.setFrame('TIT2', String(title));
  if (album) writer.setFrame('TALB', String(album));
  if (year) writer.setFrame('TYER', Number(String(year).slice(0, 4)) || 0);

  if (artist) writer.setFrame('TPE1', [String(artist)]);
  if (genre) writer.setFrame('TCON', [String(genre)]);
  if (composer) writer.setFrame('TCOM', [String(composer)]);

  if (track) writer.setFrame('TRCK', String(track));
  if (disc) writer.setFrame('TPOS', String(disc));

  if (comment) {
    writer.setFrame('COMM', {
      description: 'comment',
      text: String(comment),
      language: 'chi',
    });
  }

  if (lyricist) writer.setFrame('TEXT', String(lyricist));

  if (lyrics) {
    writer.setFrame('USLT', {
      description: 'LYRICS',
      lyrics: String(lyrics),
    });
    writer.setFrame('TXXX', {
      description: 'LYRICS',
      value: String(lyrics),
    });
  }
};

/**
 * 写入 MP3 的单个标签（会保留其它已存在的标签）
 *
 * @example
 * const newMp3 = await writeMp3Tag(file, 'title', '新歌曲名');
 */
export const writeMp3Tag = async (file: Blob, tagName: string, tagValue: string): Promise<Blob> => {
  try {
    if (!tagName) throw new Error('tagName 不能为空');
    const key = String(tagName).toLowerCase();

    const all = await readAllMp3Tag(file);
    const nextTags: Mp3NormalizedTags & Record<string, string | IPicture[]> = {
      ...all,
      [key]: tagValue,
    };

    const buffer = await blobToArrayBuffer(file);
    const writer = new ID3Writer(buffer);
    writer.removeTag();
    applyId3Frames(writer, nextTags);
    writer.addTag();
    const blob = writer.getBlob();
    console.log('给 MP3 写标签成功');
    return blob;
  } catch (error) {
    console.error('给 MP3 写标签失败:', error);
    throw new Error('给 MP3 写标签失败');
  }
};

export interface Mp3TagWriteEntry {
  tag: string;
  value: string;
}

export const writeMp3Tags = async (file: Blob, tags: Mp3TagWriteEntry[]): Promise<Blob> => {
  try {
    if (!tags?.length) return file;

    const all = await readAllMp3Tag(file);
    const newTags = Object.fromEntries(tags.map(({ tag, value }) => [tag, value])) as Record<
      string,
      string | IPicture[]
    >;
    const nextTags: Mp3NormalizedTags & Record<string, string | IPicture[]> = {
      ...all,
      ...newTags,
    };

    const buffer = await blobToArrayBuffer(file);
    const writer = new ID3Writer(buffer);
    writer.removeTag();
    applyId3Frames(writer, nextTags);
    writer.addTag();
    const blob = writer.getBlob();
    console.log('给 MP3 写多个标签成功');
    return blob;
  } catch (error) {
    console.error('给 MP3 写多个标签失败:', error);
    throw new Error('给 MP3 写多个标签失败');
  }
};

/**
 * 嵌入 MP3 封面（会保留其它已存在的标签）
 *
 * @example
 * const mp3WithCover = await embedMp3Picture(file, coverBlob);
 */
export const embedMp3Picture = async (file: Blob, picture: Blob): Promise<Blob> => {
  try {
    if (!picture) return file;

    const all = await readAllMp3Tag(file);
    const buffer = await blobToArrayBuffer(file);
    const picBuffer = await blobToArrayBuffer(picture);

    const writer = new ID3Writer(buffer);
    writer.removeTag();
    applyId3Frames(writer, all);

    writer.setFrame('APIC', {
      description: 'cover',
      data: picBuffer,
      type: /* ImageType.CoverFront */ 3,
      useUnicodeEncoding: false,
    });

    writer.addTag();
    console.log('给 MP3 嵌入封面成功');
    return writer.getBlob();
  } catch (error) {
    console.error('给 MP3 嵌入封面失败:', error);
    return file;
  }
};

/**
 * 移除 MP3 的某个标签（通过重写 ID3 标签实现）
 *
 * @example
 * const cleanMp3 = await removeMp3Tag(file, 'comment');
 */
export const removeMp3Tag = async (file: Blob, tagName: string): Promise<Blob> => {
  try {
    if (!tagName) return file;
    const key = String(tagName).toLowerCase();
    const all = await readAllMp3Tag(file);
    const nextTags: Mp3NormalizedTags = { ...all };
    delete (nextTags as Record<string, unknown>)[key];

    const buffer = await blobToArrayBuffer(file);
    const writer = new ID3Writer(buffer);
    writer.removeTag();
    applyId3Frames(writer, nextTags);
    writer.addTag();
    console.log('移除 MP3 标签成功:', tagName);
    return writer.getBlob();
  } catch (error) {
    console.error('移除 MP3 标签失败:', error);
    return file;
  }
};
