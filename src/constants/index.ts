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
