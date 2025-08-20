import type { IApiResponse } from '@/types/request';
import { useEffect, useState } from 'react';

/** 获取下拉列表hook T为单个下拉的类型 */
export const useGetDrop = <T = Drop>(
  api: API<T[]>,
  params?: any,
  callback?: CallBack<T[]>,
  options?: Options,
) => {
  const {
    // 监控项
    monitors,
    // 终止函数，什么条件下不执行
    returnFunction,
  } = options || {};

  const [drop, setDrop] = useState([] as T[]);

  useEffect(() => {
    if (returnFunction && returnFunction()) return;
    const asyncFn = async () => {
      try {
        const res = await api(params);
        const { code, data, message } = res;
        if (code === 200) {
          setDrop(data || ([] as T[]));
          callback && callback(data || ([] as T[]));
        }
      } catch (error) {
        console.log('error', error);
      }
    };
    asyncFn();
  }, monitors || []);

  return drop;
};

export type Drop = {
  label: string;
  value: string;
};
// 传入的api
export type API<T = []> = (params?: any) => Promise<IApiResponse<T>>;
// 回调类型
export type CallBack<T = []> = (data: T) => {};
// 配置项
export type Options = {
  /**
   * 监控项，当监控项发生变化时，重新请求 默认为[] 只在挂载时请求
   */
  monitors?: any[];
  /**
   * 终止函数，返回true时不执行
   */
  returnFunction?: () => boolean;
};
