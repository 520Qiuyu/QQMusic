// #region ================ 工具函数 ================
import type { FileType } from '@/constants';
import type { SongInfo } from '@/types/singer';
import { unsafeWindow } from 'vite-plugin-monkey/dist/client';

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
 * 将数组分割成多个小数组
 * @param {Array} array - 被分割的数组
 * @param {number} size - 小数组的大小
 * @returns {Array} - 一个包含小数组的数组
 */
export function chunkArray<T>(array: T[], size: number): T[][] {
  if (size <= 0) {
    throw new Error('Size must be greater than 0');
  }
  const result: T[][] = [];
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
export const uniqueArrayByKey = <T>(arr: T[], key: keyof T): T[] => {
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
export const promiseLimit = <T>(promiseArray: (() => Promise<T>)[], limit = 6): Promise<T[]> => {
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

/**
 * 获取cookie键值对
 */
export const getCookie = (key?: string) => {
  const cookie = document.cookie;
  const cookieMap = {};
  cookie.split('; ').forEach((row) => {
    const [key, value] = row.split('=');
    cookieMap[key] = value;
  });
  if (!key) return cookieMap;
  return cookieMap[key];
};

/**
 * 根据文件大小信息判断最高音质
 * @param file 文件信息
 * @returns 最高音质类型
 */
export const getHighestQuality = (file: SongInfo['file']): keyof typeof FileType => {
  // 按音质从高到低排序检查
  if (file.size_flac > 0) return 'flac';
  if (file.size_ape > 0) return 'ape';
  if (file.size_320mp3 > 0) return 320;
  if (file.size_192aac > 0) return 'm4a';
  if (file.size_128mp3 > 0) return 128;

  // 默认返回128kbps
  return 128;
};

// #endregion ================ 工具函数 ================

// #region ================ 下载功能 ================

// #endregion ================ 下载功能 ================
