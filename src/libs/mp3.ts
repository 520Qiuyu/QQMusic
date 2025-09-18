import { createTagView, dump, parse, PictureType, type TrackNumber } from '@gplane/id3';

export interface Mp3Tags {
  /** 专辑名称 */
  album: string;
  /** 艺术家 */
  artist: string;
  /** 标题 */
  title: string;
  /** 音轨号 */
  track?: string | TrackNumber;
}

/** 将 Blob 转换为 Uint8Array */
const blobToBuffer = async (file: Blob): Promise<Uint8Array> => {
  return new Uint8Array(await file.arrayBuffer());
};

/** 将 Uint8Array 转换为 Blob */
const bufferToBlob = (buffer: Uint8Array, mimeType: string = 'audio/mp3'): Blob => {
  return new Blob([buffer], { type: mimeType });
};

/** 读取MP3所有tag */
export const readAllMp3Tag = async (file: Blob): Promise<Mp3Tags> => {
  const buffer = await blobToBuffer(file);
  const id3 = parse(buffer);
  const tagView = createTagView(id3);

  console.log('id3', id3);
  console.log('tagView', tagView);

  const result: Mp3Tags = {
    album: tagView.album || '',
    artist: tagView.artist || '',
    title: tagView.title || '',
    track: tagView.track || '',
  };
  return result;
};

/** 读取MP3特定tag */
export const readMp3Tag = async (file: Blob, tagName: keyof Mp3Tags): Promise<any> => {
  const allTags = await readAllMp3Tag(file);
  return allTags[tagName];
};

/** 写入MP3tag */
export const writeMp3Tag = async (
  file: Blob,
  tagName: keyof Mp3Tags,
  tagValue: any,
): Promise<any> => {
  const buffer = await blobToBuffer(file);
  const id3 = parse(buffer);
  const tagView = createTagView(id3);

  tagView[tagName] = tagValue;
  const dumpBuffer = dump(id3!, buffer);
  return bufferToBlob(dumpBuffer);
};

/** 嵌入MP3封面 */
export const embedMp3Picture = async (file: Blob, picture: Blob): Promise<any> => {
  const buffer = await blobToBuffer(file);
  const pictureBuffer = await blobToBuffer(picture);
  const id3 = parse(buffer);
  const tagView = createTagView(id3);

  tagView.attachPicture({
    type: PictureType.FrontCover,
    description: 'FRONT COVER',
    picture: pictureBuffer,
  });

  return bufferToBlob(dump(id3!, buffer));
};
