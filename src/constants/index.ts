import { getCookie } from '@/utils';

export const mapToList = (map: Record<string, number>) => {
  return Object.entries(map).map(([key, value]) => ({
    label: key,
    value,
  }));
};

export const Area = {
  全部: -100,
  内地: 200,
  港台: 2,
  欧美: 5,
  日本: 4,
  韩国: 3,
  其他: 6,
} as const;
export const AreaList = mapToList(Area);

export const Genre = {
  全部: -100,
  流行: 1,
  嘻哈: 6,
  摇滚: 2,
  电子: 4,
  民谣: 3,
  'R&B': 8,
  民歌: 10,
  轻音乐: 9,
  爵士: 5,
  古典: 14,
  乡村: 25,
  蓝调: 20,
} as const;
export const GenreList = mapToList(Genre);

export const Sex = {
  全部: -100,
  男: 0,
  女: 1,
  组合: 2,
} as const;
export const SexList = mapToList(Sex);

export const getCommonParams = () => ({
  g_tk: 1124214810,
  loginUin: getCookie('uin') || '0',
  hostUin: 0,
  inCharset: 'utf8',
  outCharset: 'utf-8',
  // format: 'json',
  notice: 0,
  platform: 'yqq.json',
  needNewCode: 0,
});

export const _guid =
  (Math.round(2147483647 * Math.random()) * new Date().getUTCMilliseconds()) % 1e10;

export const FileType = {
  m4a: {
    s: 'C400',
    e: '.m4a',
  },
  128: {
    s: 'M500',
    e: '.mp3',
  },
  320: {
    s: 'M800',
    e: '.mp3',
  },
  ape: {
    s: 'A000',
    e: '.ape',
  },
  flac: {
    s: 'F000',
    e: '.flac',
  },
} as const;

export const ResourceType = {
  歌曲: 'song',
  专辑: 'album',
  视频: 'mv',
  歌单: 'playlist',
  歌手: 'user',
  歌词: 'lyric',
} as const;

export type ResourceTypeKeys = keyof typeof ResourceType;
export type ResourceTypeValues = (typeof ResourceType)[ResourceTypeKeys];
