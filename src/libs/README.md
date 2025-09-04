# 音频标签处理库

这个库提供了对 FLAC 和 MP3 音频文件的标签读写功能，支持读取、写入、嵌入封面等操作。

## 功能特性

### 🎵 **支持的音频格式**
- **FLAC** - 无损音频格式，使用 `metaflac.wasm`
- **MP3** - 有损音频格式，使用混合架构：
  - **读取**: `mp3tag.js` - 完整的标签读取支持
  - **写入**: `browser-id3-writer` - 高效的标签写入
- **OGG/WAV** - 暂不支持（预留接口）

### 🏷️ **支持的标签类型**
- 基本信息：title, artist, album, year, genre, comment
- 音轨信息：track, disc
- 创作信息：composer, lyricist
- 歌词：lyrics (支持多行)
- 封面：picture/cover

## 使用方法

### 1. **统一接口（推荐）**

```typescript
import { 
  readAudioTags, 
  writeAudioTag, 
  embedAudioPicture,
  detectAudioFormat 
} from '@/libs/audio';

// 自动检测格式并读取标签
const tags = await readAudioTags(audioBlob);
console.log('歌曲标题:', tags.title);
console.log('艺术家:', tags.artist);

// 写入标签
const newBlob = await writeAudioTag(audioBlob, 'title', '新标题');

// 嵌入封面
const audioWithCover = await embedAudioPicture(audioBlob, coverBlob);

// 检测音频格式
const format = detectAudioFormat(audioBlob);
console.log('音频格式:', format); // 'flac' | 'mp3'
```

### 2. **FLAC 专用接口**

```typescript
import { 
  readAllFlacTag, 
  writeFlacTag, 
  embedFlacPicture 
} from '@/libs/flac';

// 读取 FLAC 标签
const tags = await readAllFlacTag(flacBlob);

// 写入 FLAC 标签
const newFlac = await writeFlacTag(flacBlob, 'lyrics', '歌词内容');

// 嵌入 FLAC 封面
const flacWithCover = await embedFlacPicture(flacBlob, coverBlob);
```

### 3. **MP3 专用接口**

```typescript
import { 
  readAllMp3Tag, 
  readMp3Tag, 
  writeMp3Tag, 
  embedMp3Picture,
  removeMp3Tag 
} from '@/libs/mp3';

// 读取 MP3 标签（使用 mp3tag.js）
const tags = await readAllMp3Tag(mp3Blob);

// 读取特定标签（使用 mp3tag.js）
const title = await readMp3Tag(mp3Blob, 'title');

// 写入 MP3 标签（使用 browser-id3-writer）
const newMp3 = await writeMp3Tag(mp3Blob, 'title', '新标题');

// 嵌入 MP3 封面（使用 browser-id3-writer）
const mp3WithCover = await embedMp3Picture(mp3Blob, coverBlob);

// 移除 MP3 标签（使用 browser-id3-writer）
const cleanMp3 = await removeMp3Tag(mp3Blob, 'comment');
```

## 在 usePlayMusic 中的使用

```typescript
const download = async (mid: string, name: string, quality: keyof typeof FileType = 'flac') => {
  try {
    const url = await getUrl(mid, quality);
    const { blob } = await getFileBlob(url.replace('http://', 'https://'));
    
    // 根据音质自动选择标签读取方式
    if (quality === 'flac') {
      const { readAllFlacTag } = await import('@/libs/flac');
      const tags = await readAllFlacTag(blob);
      console.log('FLAC 标签:', tags);
    } else if (quality === 128 || quality === 320) {
      const { readAllMp3Tag } = await import('@/libs/mp3');
      const tags = await readAllMp3Tag(blob);
      console.log('MP3 标签:', tags);
    }
    
    // 继续下载逻辑...
  } catch (error) {
    console.log('error', error);
  }
};
```

## 依赖安装

```bash
# FLAC 支持（已包含）
# metaflac.wasm 已集成

# MP3 支持 - 混合架构
npm install mp3tag.js        # 用于标签读取
npm install browser-id3-writer # 用于标签写入
```

## 注意事项

1. **FLAC 格式**：使用 WebAssembly 版本的 metaflac，性能较好
2. **MP3 格式**：使用混合架构，读取用 mp3tag.js，写入用 browser-id3-writer
3. **异步操作**：所有标签操作都是异步的，需要 await
4. **错误处理**：标签操作失败不会影响主要下载流程
5. **格式检测**：自动根据 MIME 类型和文件扩展名检测格式
6. **浏览器兼容**：两个库都完全支持浏览器环境

## MP3 标签特性

### ✅ **完整支持的功能**
- **标签读取**：使用 mp3tag.js，支持所有标准 ID3v1/v2 标签
- **标签写入**：使用 browser-id3-writer，支持文本、数字、歌词等类型标签
- **封面嵌入**：使用 browser-id3-writer，支持 JPEG、PNG 等格式的封面图片
- **标签移除**：使用 browser-id3-writer，支持移除特定标签
- **标签更新**：支持在不丢失其他标签的情况下更新特定标签

### 🎯 **特殊标签处理**
- **歌词标签**：支持多语言歌词和描述信息
- **封面图片**：自动检测 MIME 类型，支持多种图片格式
- **音轨信息**：支持音轨号和碟片号
- **年份信息**：支持标准年份格式

### 🔄 **混合架构优势**
- **读取性能**：mp3tag.js 提供完整的标签解析和读取
- **写入效率**：browser-id3-writer 专注于标签写入，性能更好
- **兼容性**：两个库都完全支持浏览器环境
- **功能完整**：结合两个库的优势，提供最佳的 MP3 标签处理体验

## 扩展支持

如需支持更多音频格式（如 OGG、WAV），可以在 `audio.ts` 中添加对应的处理逻辑：

```typescript
case 'ogg':
  // 添加 OGG 标签处理
  return await readOggTags(file);
case 'wav':
  // 添加 WAV 标签处理
  return await readWavTags(file);
```
