import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

interface SongData {
  songName: string;
  url: string;
  lrcContent: string;
}

interface AlbumData {
  albumName: string;
  albumCover: string;
  list: SongData[];
}

/** 要下载的文件 */
const DOWNLOAD_FILE = path.join(__dirname, '王靖雯-专辑.json');
/** 下载目录 */
const DOWNLOAD_DIR = path.join(__dirname, '..', 'music/王靖雯');
/** 并发量 */
export const DOWNLOAD_LIMIT = 6;
/** 是否下载封面 */
const DOWNLOAD_COVER = true;
/** 是否下载歌词 */
const DOWNLOAD_LYRICS = true;
/** 是否去掉伴奏 */
const REMOVE_ACCOMPANY = true;
/** 是否去掉演唱会 */
const REMOVE_CONCERT = false;
/** 是否去掉片段版 */
const REMOVE_FRAGMENT = true;
/** 是否去掉dj */
const REMOVE_DJ = true;

/**
 * 过滤文件名中的非法字符
 * @param filename 原始文件名
 * @returns 过滤后的文件名
 */
function sanitizeFileName(filename: string): string {
  // 移除或替换不允许在文件名中使用的字符
  return filename
    .replace(/[<>:"/\\|?*]/g, '') // 移除Windows文件系统不允许的字符
    .replace(/\s+/g, '_') // 将空格替换为下划线
    .replace(/\.+/g, '_') // 将连续的点替换为单个下划线
    .trim(); // 移除首尾空格
}

/**
 * 确保目录存在，如果不存在则创建
 * @param dirPath 目录路径
 */
function ensureDirectoryExists(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * 下载文件
 * @param url 文件URL
 * @param filePath 保存路径
 */
async function downloadFile(url: string, filePath: string): Promise<void> {
  try {
    const response = await axios({
      method: 'GET',
      url,
      responseType: 'stream',
    });

    const writer = fs.createWriteStream(filePath, { encoding: 'utf8' });
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`下载失败: ${filePath}`, error);
    throw error;
  }
}

/**
 * 下载专辑封面
 * @param albumData 专辑数据
 * @param albumDir 专辑目录
 */
async function downloadAlbumCover(albumData: AlbumData, albumDir: string): Promise<void> {
  if (!DOWNLOAD_COVER) return;
  if (albumData.albumCover) {
    const coverPath = path.join(albumDir, 'cover.jpg');
    await downloadFile(albumData.albumCover, coverPath);
    console.log(`专辑封面下载完成: ${coverPath}`);
  }
}

/**
 * 下载歌词
 * @param song 歌曲数据
 * @param albumDir 专辑目录
 */
async function downloadLyrics(song: SongData, albumDir: string): Promise<void> {
  if (!DOWNLOAD_LYRICS) return;
  if (song.lrcContent) {
    const lrcFileName = `${sanitizeFileName(song.songName)}.lrc`;
    const lrcContent = song.lrcContent;
    // 将文本写入文件 使用utf8编码
    fs.writeFileSync(path.join(albumDir, lrcFileName), lrcContent, { encoding: 'utf8' });
    console.log(`歌词下载完成: ${lrcFileName}`);
  }
}

/**
 * 下载音频文件
 * @param song 歌曲数据
 * @param albumDir 专辑目录
 */
async function downloadAudio(song: SongData, albumDir: string): Promise<void> {
  if (song.url) {
    const ext = song.url.split('?')[0].split('.').pop();
    const audioFileName = `${sanitizeFileName(song.songName)}.${ext}`;
    const audioPath = path.join(albumDir, audioFileName);
    if (fs.existsSync(audioPath)) {
      console.log(`音频已存在: ${audioPath}`);
      return;
    }
    await downloadFile(song.url, audioPath);
    console.log(`音频下载完成: ${audioPath}`);
  }
}

/**
 * 下载单个专辑的所有内容
 * @param albumData 专辑数据
 * @param baseDir 基础目录
 */
async function downloadAlbum(albumData: AlbumData, baseDir: string): Promise<void> {
  const albumName = sanitizeFileName(albumData.albumName);
  const albumDir = path.join(baseDir, albumName);

  // 创建专辑目录
  ensureDirectoryExists(albumDir);
  console.log(`\n开始下载专辑: ${albumData.albumName}`);

  try {
    // 下载专辑封面
    await downloadAlbumCover(albumData, albumDir);

    // 创建歌曲下载任务数组
    const downloadTasks = albumData.list.map((song) => async () => {
      console.log(`\n处理歌曲: ${song.songName}`);

      // 去掉伴奏
      if (
        REMOVE_ACCOMPANY &&
        ['伴奏', '伴奏版', '伴奏带'].some((item) => song.songName.includes(item))
      )
        return console.log(`去掉伴奏: ${song.songName}`);
      // 去掉演唱会
      if (REMOVE_CONCERT && ['演唱会', 'Live', 'live'].some((item) => song.songName.includes(item)))
        return console.log(`去掉演唱会: ${song.songName}`);
      // 去掉片段版
      if (
        REMOVE_FRAGMENT &&
        ['片段版', '片段版', '片段带'].some((item) => song.songName.includes(item))
      )
        return console.log(`去掉片段版: ${song.songName}`);
      // 去掉dj
      if (REMOVE_DJ && ['DJ', 'dj'].some((item) => song.songName.includes(item)))
        return console.log(`去掉dj: ${song.songName}`);

      // 并行下载音频和歌词
      await Promise.all([downloadAudio(song, albumDir), downloadLyrics(song, albumDir)]);
    });

    // 使用并发控制下载歌曲
    await promiseLimit(downloadTasks, 6);

    console.log(`\n专辑 ${albumData.albumName} 下载完成`);
  } catch (error) {
    console.error(`专辑 ${albumData.albumName} 下载失败:`, error);
  }
}

/**
 * 并发执行Promise数组,可限制同时执行的最大数量
 * @param {Array<() => Promise<any>>} promiseArray - Promise函数数组,每个元素都应该是返回Promise的函数
 * @param {number} [limit=6] - 最大并发数,默认为6
 * @returns {Promise<Array<any>>} 返回与输入数组顺序相同的结果数组
 * @throws {Error} 当输入参数不合法时抛出错误
 * @example
 * const tasks = [
 *   () => fetch('/api/1'),
 *   () => fetch('/api/2'),
 *   () => fetch('/api/3')
 * ];
 * const results = await promiseLimit(tasks, 2);
 */
export const promiseLimit = (promiseArray: (() => Promise<any>)[], limit = 6) => {
  if (!Array.isArray(promiseArray)) {
    throw new Error('第一个参数必须是数组');
  }
  if (!Number.isInteger(limit) || limit < 1) {
    throw new Error('并发限制必须是正整数');
  }

  // 处理空数组情况
  if (promiseArray.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    const results = new Array(promiseArray.length);
    let completed = 0;
    let currentIndex = 0;

    // 执行单个任务
    const runTask = async () => {
      // 获取当前任务索引
      const index = currentIndex++;
      // 如果所有任务都已分配，则返回
      if (index >= promiseArray.length) {
        return;
      }
      try {
        const promise = promiseArray[index];
        if (typeof promise !== 'function') {
          throw new Error(`数组中索引为 ${index} 的元素不是函数`);
        }
        results[index] = await promise();
      } catch (error) {
        results[index] = error;
      }
      completed++;
      // 如果还有未分配的任务，继续执行
      if (currentIndex < promiseArray.length) {
        runTask();
      }
      // 所有任务都完成时，返回结果
      else if (completed === promiseArray.length) {
        resolve(results);
      }
    };

    // 启动初始批次的任务
    const tasksToStart = Math.min(limit, promiseArray.length);
    for (let i = 0; i < tasksToStart; i++) {
      try {
        runTask();
      } catch (error) {
        reject(error);
      }
    }
  });
};

/**
 * 主函数：处理所有下载任务
 */
async function main() {
  try {
    // 读取JSON文件
    const jsonPath = DOWNLOAD_FILE;
    const rawData = fs.readFileSync(jsonPath, 'utf8');
    const albumsData: AlbumData[] = JSON.parse(rawData);

    // 创建基础下载目录
    const baseDir = DOWNLOAD_DIR;
    ensureDirectoryExists(baseDir);

    console.log(`开始下载，共 ${albumsData.length} 个专辑`);

    // 创建专辑下载任务数组
    const albumTasks = albumsData.map((albumData) => async () => {
      await downloadAlbum(albumData, baseDir);
    });

    // 使用并发控制下载专辑
    await promiseLimit(albumTasks, 6);

    console.log('\n所有下载任务完成！');
  } catch (error) {
    console.error('下载过程出错:', error);
  }
}

// 运行主函数
main().catch(console.error);
