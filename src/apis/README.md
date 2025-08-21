# QQ音乐 API 接口文档

本文档详细介绍了 QQ音乐 API 的所有接口，包括歌曲、专辑、歌单、歌手等相关功能。

## 目录

- [歌曲相关 API](#歌曲相关-api)
- [专辑相关 API](#专辑相关-api)
- [歌单相关 API](#歌单相关-api)
- [歌手相关 API](#歌手相关-api)

---

## 歌曲相关 API

### 1. 获取歌曲信息

**方法名**: `getSongInfo`

**用途**: 获取指定歌曲的详细信息，包括歌曲基本信息、歌手信息等

**参数**:
- `songmid` (string, 必填): 歌曲的 mid 标识
- `options` (object, 可选): 配置选项
  - `songid` (string, 可选): 歌曲 ID

**返回值**: `Promise<SongDetailsData>`

**示例**:
```typescript
const songInfo = await getSongInfo('001CLC7W2Gpz4J', { songid: '123456' });
```

### 2. 获取歌曲歌词

**方法名**: `getSongLyric`

**用途**: 获取指定歌曲的歌词内容

**参数**:
- `songmid` (string, 必填): 歌曲的 mid 标识

**返回值**: `Promise<string>` - 解码后的歌词文本

**示例**:
```typescript
const lyric = await getSongLyric('001CLC7W2Gpz4J');
```

### 3. 获取歌曲播放链接

**方法名**: `getSongPlayUrl`

**用途**: 获取歌曲的播放链接，支持多种音质

**参数**:
- `songmid` (string | string[], 必填): 歌曲的 mid 标识，支持单个或多个
- `options` (object, 可选): 配置选项
  - `quality` (string, 可选): 音质类型，默认为 'flac'
    - 可选值: 'm4a', '128', '320', 'ape', 'flac'

**返回值**: `Promise<Record<string, { url: string; error: string }>>`

**示例**:
```typescript
// 获取单个歌曲播放链接
const playUrl = await getSongPlayUrl('001CLC7W2Gpz4J', { quality: '320' });

// 获取多个歌曲播放链接
const playUrls = await getSongPlayUrl(['001CLC7W2Gpz4J', '001yNIo41SJjuC']);
```

---

## 专辑相关 API

### 1. 获取专辑信息

**方法名**: `getAlbumInfo`

**用途**: 获取指定专辑的详细信息

**参数**:
- `albummid` (string, 必填): 专辑的 mid 标识

**返回值**: `Promise<AlbumInfoData>`

**示例**:
```typescript
const albumInfo = await getAlbumInfo('001CLC7W2Gpz4J');
```

### 2. 获取专辑图片

**方法名**: `getAlbumPicUrl`

**用途**: 生成专辑图片的 URL 链接

**参数**:
- `albummid` (string, 必填): 专辑的 mid 标识
- `options` (object, 可选): 配置选项
  - `size` (string, 可选): 图片尺寸，默认为 '800x800'
  - `maxAge` (number, 可选): 缓存时间，默认为 2592000

**返回值**: `string` - 专辑图片 URL

**示例**:
```typescript
const albumPicUrl = getAlbumPicUrl('001CLC7W2Gpz4J', { size: '300x300' });
```

---

## 歌单相关 API

### 1. 获取歌单分类列表

**方法名**: `getSongListCategory`

**用途**: 获取歌单的分类列表

**参数**: 无

**返回值**: `Promise<SongListCategoryData>`

**示例**:
```typescript
const categories = await getSongListCategory();
```

### 2. 获取歌单列表

**方法名**: `getSongList`

**用途**: 根据分类获取歌单列表

**参数**:
- `options` (object, 可选): 配置选项
  - `limit` (number, 可选): 每页数量，默认为 20
  - `page` (number, 可选): 页码，默认为 0
  - `sortId` (number, 可选): 排序 ID，默认为 5
  - `categoryId` (number, 可选): 分类 ID，默认为 10000000

**返回值**: `Promise<SongListData>`

**示例**:
```typescript
const songList = await getSongList({ 
  limit: 30, 
  page: 1, 
  categoryId: 10000000 
});
```

### 3. 获取歌单详情

**方法名**: `getSongListDetail`

**用途**: 获取指定歌单的详细信息，包括歌单信息和歌曲列表

**参数**:
- `disstid` (string | string[], 必填): 歌单 ID，支持单个或多个

**返回值**: `Promise<SongListDetailData>`

**示例**:
```typescript
// 获取单个歌单详情
const songListDetail = await getSongListDetail('123456789');

// 获取多个歌单详情（歌曲列表为空）
const songListDetails = await getSongListDetail(['123456789', '987654321']);
```

---

## 歌手相关 API

### 1. 获取歌手信息

**方法名**: `getSingerInfo`

**用途**: 获取歌手的详细信息（XML 格式）

**参数**:
- `singermid` (string, 必填): 歌手的 mid 标识

**返回值**: `Promise<any>` - XML 格式的歌手信息

**示例**:
```typescript
const singerInfo = await getSingerInfo('002J4UUk29y8BY');
```

### 2. 获取歌手专辑

**方法名**: `getSingerAlbum`

**用途**: 获取歌手的专辑列表

**参数**:
- `singermid` (string, 必填): 歌手的 mid 标识
- `options` (object, 可选): 配置选项
  - `begin` (number, 可选): 起始位置，默认为 0
  - `num` (number, 可选): 获取数量，默认为 80

**返回值**: `Promise<{ albumList: AlbumInfo[]; total: number; singerMid: string }>`

**示例**:
```typescript
const singerAlbums = await getSingerAlbum('002J4UUk29y8BY', { 
  begin: 0, 
  num: 20 
});
```

### 3. 获取歌手所有专辑

**方法名**: `getSingerAllAlbum`

**用途**: 获取歌手的全部专辑（自动分页获取）

**参数**:
- `singermid` (string, 必填): 歌手的 mid 标识

**返回值**: `Promise<AlbumInfo[]>`

**示例**:
```typescript
const allAlbums = await getSingerAllAlbum('002J4UUk29y8BY');
```

### 4. 获取歌手列表

**方法名**: `getSingerList`

**用途**: 根据条件获取歌手列表

**参数**:
- `options` (object, 必填): 配置选项
  - `area` (number, 必填): 地区筛选
  - `sex` (number, 必填): 性别筛选
  - `genre` (number, 必填): 流派筛选
  - `cur_page` (number, 必填): 当前页码

**返回值**: `Promise<{ singerlist: SingerInfo[]; total: number }>`

**示例**:
```typescript
const singerList = await getSingerList({
  area: 0,    // 内地
  sex: 0,     // 男
  genre: 1,   // 流行
  cur_page: 1
});
```

### 5. 获取歌手被关注数量

**方法名**: `getSingerFollowCount`

**用途**: 获取歌手的粉丝数量

**参数**:
- `singermid` (string, 必填): 歌手的 mid 标识

**返回值**: `Promise<{ blogflag: number; code: number; num: number; status: number; subcode: number }>`

**示例**:
```typescript
const followCount = await getSingerFollowCount('002J4UUk29y8BY');
```

### 6. 获取歌手热门歌曲

**方法名**: `getSingerHotSong`

**用途**: 获取歌手的热门歌曲列表

**参数**:
- `singermid` (string, 必填): 歌手的 mid 标识
- `options` (object, 可选): 配置选项
  - `sin` (number, 可选): 起始位置，默认为 0
  - `num` (number, 可选): 获取数量，默认为 80

**返回值**: `Promise<SingerHotSongData>`

**示例**:
```typescript
const hotSongs = await getSingerHotSong('002J4UUk29y8BY', { 
  sin: 0, 
  num: 20 
});
```

### 7. 获取相似歌手

**方法名**: `getSimilarSinger`

**用途**: 获取与指定歌手相似的歌手列表

**参数**:
- `singer_mid` (string, 必填): 歌手的 mid 标识
- `options` (object, 可选): 配置选项
  - `start` (number, 可选): 起始位置，默认为 0
  - `num` (number, 可选): 获取数量，默认为 5

**返回值**: `Promise<{ hasmore: number; items: Array<{ id: number; mid: string; name: string; pic: string }> }>`

**示例**:
```typescript
const similarSingers = await getSimilarSinger('002J4UUk29y8BY', { 
  start: 0, 
  num: 10 
});
```

---

## 常量说明

### 地区筛选 (Area)
```typescript
{
  全部: -100,
  内地: 200,
  港台: 2,
  欧美: 5,
  日本: 4,
  韩国: 3,
  其他: 6
}
```

### 性别筛选 (Sex)
```typescript
{
  全部: -100,
  男: 0,
  女: 1,
  组合: 2
}
```

### 流派筛选 (Genre)
```typescript
{
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
  蓝调: 20
}
```

### 音质类型 (FileType)
```typescript
{
  m4a: { s: 'C400', e: '.m4a' },
  128: { s: 'M500', e: '.mp3' },
  320: { s: 'M800', e: '.mp3' },
  ape: { s: 'A000', e: '.ape' },
  flac: { s: 'F000', e: '.flac' }
}
```

---

## 错误处理

所有 API 接口在请求失败时会抛出错误，错误信息格式为：
```typescript
throw new Error('具体错误信息');
```

建议在使用时使用 try-catch 进行错误处理：

```typescript
try {
  const result = await getSongInfo('001CLC7W2Gpz4J');
  console.log(result);
} catch (error) {
  console.error('获取歌曲信息失败:', error.message);
}
```

---

## 注意事项

1. 所有接口都需要在 QQ音乐网站环境下使用
2. 部分接口需要用户登录状态
3. 播放链接接口需要有效的用户身份验证
4. 歌词接口返回的是 Base64 编码的内容，会自动解码
5. 歌手信息接口返回 XML 格式数据
6. 歌单详情接口支持批量获取，但批量获取时歌曲列表为空
