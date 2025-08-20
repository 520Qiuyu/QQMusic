// #region ================ 工具函数 ================

import md5 from 'md5';
import { unsafeWindow } from 'vite-plugin-monkey/dist/client';
import * as mm from 'music-metadata';
import { QUALITY_LEVELS } from '@/constant';

/**
 * 格式化文件大小
 * @param {number} size 文件大小(字节)
 * @returns {string} 格式化后的大小
 */
export const formatFileSize = (size) => {
  if (!size || isNaN(size)) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  size = Math.abs(Number(size));
  let index = 0;
  while (size >= 1024 && index < units.length - 1) {
    size /= 1024;
    index++;
  }
  return `${size.toFixed(index > 0 ? 1 : 0)} ${units[index]}`;
};

/**
 * 格式化时长
 * @param {number} ms 毫秒数
 * @returns {string} 格式化后的时长(mm:ss)
 */
export const formatDuration = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

/**
 * 获取音质描述
 * @param {string} level 音质等级
 * @returns {string} 音质描述
 */
export const getQualityDesc = (level) => {
  return QUALITY_LEVELS[level] || level;
};

/**
 * 将数组分割成多个小数组
 * @param {Array} array - 被分割的数组
 * @param {number} size - 小数组的大小
 * @returns {Array} - 一个包含小数组的数组
 */
export function chunkArray(array, size) {
  if (size <= 0) {
    throw new Error('Size must be greater than 0');
  }
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/**
 * 获取歌曲的艺术家
 * @param {Object} song 歌曲信息
 * @returns {string} 艺术家名称
 */
export const getArtistTextInSongDetail = (song) => {
  return (
    song.ar
      ?.map((ar) => ar.name)
      ?.filter(Boolean)
      .join() ||
    song.pc?.ar ||
    song.artist ||
    ''
  );
};

/**
 * 获取歌曲的专辑
 * @param {Object} song 歌曲信息
 * @returns {string} 专辑名称
 */
export const getAlbumTextInSongDetail = (song) => {
  return song.al?.name || song.pc?.alb || '';
};

/**
 * 对象数组去重
 * @param {Array<Object>} arr - 需要去重的对象数组
 * @param {string} key - 用于去重的属性名
 * @returns {Array<Object>} 去重后的数组，保留每个重复值的第一个对象
 * @example
 * const arr = [{id: 1, name: 'a'}, {id: 1, name: 'b'}, {id: 2, name: 'c'}];
 * const result = uniqueArrayByKey(arr, 'id');
 * // result: [{id: 1, name: 'a'}, {id: 2, name: 'c'}]
 */
export const uniqueArrayByKey = (arr, key) => {
  if (!Array.isArray(arr)) return [];
  if (!key) return arr;

  const seen = new Map();
  return arr.filter((item) => {
    if (!item || typeof item !== 'object') return false;
    const val = item[key];
    if (seen.has(val)) return false;
    seen.set(val, true);
    return true;
  });
};

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
export const promiseLimit = (promiseArray, limit = 6) => {
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
 * 获取油猴环境下的全局对象
 * @returns {Window}
 */
export const getGlobalThis = () => {
  return typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
};

/**
 * 获取网易云用户信息
 * @returns {Object}
 */
export const getGUser = () => {
  const globalThis = getGlobalThis();
  return globalThis.GUser || {};
};

/**
 * 获取字符串长度（中文算2个字符）
 * @param {string} str
 * @returns {number}
 */
export const getStringLength = (str) => {
  return str.split('').reduce((total, char) => {
    return total + (char.charCodeAt(0) > 255 ? 2 : 1);
  }, 0);
};

/**
 * 截取字符串（中文算2个字符）
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export const truncateString = (str, maxLength) => {
  let len = 0;
  let result = '';
  for (let char of str) {
    const charLen = char.charCodeAt(0) > 255 ? 2 : 1;
    if (len + charLen > maxLength) break;
    result += char;
    len += charLen;
  }
  return result;
};

/**
 * 延迟执行
 * @param {number} ms 延迟时间（毫秒）
 * @returns {Promise<void>}
 */
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 计算文件的MD5哈希值
 * @param {File} file - 要计算MD5的文件对象
 * @returns {Promise<string>} 返回文件的MD5哈希值（32位小写十六进制字符串）
 * @example
 * const file = new File(['hello'], 'hello.txt');
 * const md5 = await getFileMD5(file);
 * console.log(md5); // 5d41402abc4b2a76b9719d911017c592
 */
export async function getFileMD5(file) {
  const arrayBuffer = await file.arrayBuffer(); // 读取文件为 ArrayBuffer
  const uint8Array = new Uint8Array(arrayBuffer);
  return md5(uint8Array);
}

/**
 * 从音频文件中获取元数据信息
 * @param {File} file - 音频文件对象
 * @returns {Promise<Object>} 包含音频元数据的对象
 * @example
 * const file = new File(['...'], 'song.mp3');
 * const metadata = await getAudioMetadata(file);
 * console.log(metadata.title, metadata.artist, metadata.album);
 */
export async function getAudioMetadata(file) {
  try {
    const metadata = await mm.parseBlob(file);
    console.log('metadata.common', metadata, metadata.common);
    const { album, artist, artists, title } = metadata.common || {};
    const { bitrate } = metadata.format || {};
    return {
      title: title || '',
      artist: artist || artists?.[0] || '',
      artists: artists || (artist ? [artist] : []),
      album: album || '',
      duration: metadata.format?.duration || 0,
      bitrate: metadata.format?.bitrate || 0,
      sampleRate: metadata.format?.sampleRate || 0,
      format: metadata.format?.container || '',
      bitrate: Math.floor(bitrate / 1000) || 0,
    };
  } catch (error) {
    console.error('Failed to parse audio metadata:', error);
    return {
      title: '',
      artist: '',
      artists: [],
      album: '',
      duration: 0,
      bitrate: 0,
      sampleRate: 0,
      format: '',
    };
  }
}

/**
 * 合并多个对象，只用非空值进行覆盖
 * @param {...Object} objects - 要合并的对象列表
 * @returns {Object} 合并后的新对象
 * @example
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { b: null, c: 3 };
 * const result = mergeObjects(obj1, obj2);
 * // result: { a: 1, b: 2, c: 3 }
 */
export const mergeObjects = (o1, ...objects) => {
  return objects.reduce((result, current) => {
    if (!current || typeof current !== 'object') return result;

    Object.entries(current).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        result[key] = value;
      }
    });

    return result;
  }, o1);
};

// #endregion ================ 工具函数 ================

// #region ================ 下载功能 ================

/**
 * 批量下载歌曲
 * @param {Array} songList 歌曲列表
 * @param {Object} config 下载配置
 */
export async function batchDownloadSongs(songList, config) {
  const downloadQueue = [];

  // 准备下载队列
  for (const song of songList) {
    if (config.filter && !config.filter(song)) continue;

    downloadQueue.push({
      song,
      status: 'pending',
    });
  }

  // 创建进度提示
  const progressBox = await Swal.fire({
    title: '批量下载中',
    html: `
                <div class="download-progress">
                    <div id="download-status">准备下载 ${downloadQueue.length} 首歌曲...</div>
                    <div class="progress-bar">
                        <div id="progress-inner" style="width: 0%"></div>
                    </div>
                </div>
            `,
    showConfirmButton: false,
    allowOutsideClick: false,
  });

  // 开始下载
  const threads = [];
  const threadCount = config.threadCount || 3;

  for (let i = 0; i < threadCount; i++) {
    threads.push(downloadThread(i));
  }

  // 下载线程
  async function downloadThread(threadIndex) {
    while (true) {
      // 获取待下载任务
      const task = downloadQueue.find((t) => t.status === 'pending');
      if (!task) break;

      // 标记为进行中
      task.status = 'downloading';

      try {
        // 获取下载链接
        const urlRes = await new Promise((resolve, reject) => {
          weapiRequest('/api/song/enhance/player/url/v1', {
            data: {
              ids: [task.song.id],
              level: config.level || 'standard',
            },
            onload: resolve,
            onerror: reject,
          });
        });

        if (!urlRes.data?.[0]?.url) {
          throw new Error('获取下载链接失败');
        }

        // 开始下载
        await new Promise((resolve, reject) => {
          const fileName =
            generateFileName(
              task.song.name,
              getArtistInfo(task.song),
              config.fileNameFormat,
            ) + '.mp3';

          GM_download({
            url: urlRes.data[0].url,
            name: fileName,
            onload: resolve,
            onerror: reject,
          });
        });

        task.status = 'success';
      } catch (error) {
        console.error('Download failed:', error);
        task.status = 'error';
      }

      // 更新进度
      updateProgress();
    }
  }

  // 更新进度显示
  function updateProgress() {
    const finished = downloadQueue.filter(
      (t) => t.status === 'success' || t.status === 'error',
    ).length;
    const progress = ((finished / downloadQueue.length) * 100).toFixed(1);
    const successful = downloadQueue.filter(
      (t) => t.status === 'success',
    ).length;
    const failed = downloadQueue.filter((t) => t.status === 'error').length;

    document.getElementById('progress-inner').style.width = `${progress}%`;
    document.getElementById('download-status').textContent =
      `已完成: ${finished}/${downloadQueue.length} (成功: ${successful}, 失败: ${failed})`;

    if (finished === downloadQueue.length) {
      setTimeout(() => {
        Swal.close();
        showTip(
          `下载完成 成功: ${successful}, 失败: ${failed}`,
          failed > 0 ? 'warning' : 'success',
        );
      }, 1000);
    }
  }

  // 等待所有线程完成
  await Promise.all(threads);
}

// #endregion ================ 下载功能 ================
