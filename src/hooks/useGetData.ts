import { useEffect, useState } from 'react';

/**
 * @description 获取数据的hook T为返回值类型
 * 一般用于获取整个消息体
 * 默认挂载的时候请求
 * 可以手动调用getData方法重新请求
 */
export const useGetData = <T = any>(api: API<T>, params?: any, options?: Options<T>) => {
  const {
    // 监控项
    monitors,
    // 终止函数，什么条件下不执行
    returnFunction,
    // 初始值
    initialValue = {},
    // 拿到数据后执行的函数
    callback,
  } = options || {};

  const [data, setData] = useState(initialValue as T);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await api(params);
      setData(res || ({} as T));
      callback && callback(res || ({} as T));
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (returnFunction && returnFunction()) return;
    getData();
  }, monitors || []);

  return {
    /** 数据 */
    data,
    /** 手动更改数据 */
    setData,
    /** 是否加载中 */
    loading,
    /** 手动获取数据 */
    getData,
  };
};

// 传入的api
export type API<T = {}> = (params?: any) => Promise<T>;
// 回调类型
export type CallBack<T = {}> = (data: T) => any;
// 配置项
export type Options<T = {}> = {
  /**
   * 监控项，当监控项发生变化时，重新请求 默认为[] 只在挂载时请求
   */
  monitors?: any[];
  /**
   * 终止函数，返回true时不执行
   */
  returnFunction?: () => boolean;
  /**
   * 初始值
   */
  initialValue?: any;
  /**
   * 拿到数据后执行的函数
   */
  callback?: CallBack<T>;
};
