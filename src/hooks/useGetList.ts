import type { IApiResponse, IPageData } from '@/types/request';
import { useEffect, useState } from 'react';

/** 获取分页数据hook T为单个数据项类型 */
export const useGetList = <T = any>(api: API<T>, params?: any, options: Options = {}) => {
  const { monitors, listKey = 'list', totalKey = 'total', returnFunction = undefined } = options;

  const [list, setList] = useState([] as T[]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [otherInfo, setOtherInfo] = useState({});

  useEffect(
    () => {
      const asyncFn = async () => {
        try {
          // 条件终止
          if (returnFunction && returnFunction()) return;

          setLoading(true);
          const res = await api(params);
          // 处理重复请求，多次请求 如果有新的请求，则不更新 以最后一次请求为准 参考react官网
          if (hasNewRequest) return;
          if ((res.code = 200)) {
            const { data } = res;
            if (!data) return;
            setList(listKey ? data[listKey] : data);
            setTotal(data[totalKey] || 0);
            // @ts-ignore
            const { [totalKey]: _, [listKey]: __, ...other } = data;
            setOtherInfo(other);
          }
        } catch (error) {
          console.log('error', error);
        } finally {
          setLoading(false);
        }
      };
      /** 是否有新的请求 */
      let hasNewRequest = false;
      asyncFn();

      return () => {
        hasNewRequest = true;
      };
    },
    monitors || [params],
  );

  return {
    /**
     * 数据列表
     */
    list,
    /**
     * 数据列表加载状态
     */
    loading,
    /**
     * 数据总数
     */
    total,
    /**
     * 其他信息
     */
    otherInfo,
  };
};

// 传入的api
export type API<T> =
  | ((params?: any) => Promise<IApiResponse<IPageData<T>>>)
  | ((params?: any) => Promise<IApiResponse<T[]>>);
// 配置项
export type Options = {
  /**
   * 监控项，当监控项发生变化时，重新请求 默认为[] 只在挂载时请求
   */
  monitors?: any[];
  /**
   * 取值key，默认为list res.data.list 设为false则直接取值res.data
   */
  listKey?: string | false;
  /**
   * totalkey，默认为total res.data.total
   */
  totalKey?: string;
  /**
   * 终止函数，返回true时不执行
   */
  returnFunction?: () => boolean;
};
