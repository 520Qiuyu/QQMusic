import {
  defaultDownloadConfig,
  defaultFunctionConfig
} from '@/config';
import { useLocalStorageState } from 'ahooks';
import { useEffect } from 'react';

/**
 * 配置管理 Hook
 * @description 管理功能配置和下载配置，使用 localStorage 持久化
 * @example
 * const { functionConfig, downloadConfig, setFunctionConfig, setDownloadConfig } = useConfig();
 */
export const useConfig = () => {
  // 下载配置
  const [downloadConfig, setDownloadConfig] = useLocalStorageState(
    'qqmusic_downloadConfig',
    {
      defaultValue: defaultDownloadConfig,
      listenStorageChange: true,
    },
  );

  // 功能配置
  const [functionConfig, setFunctionConfig] = useLocalStorageState(
    'qqmusic_functionConfig',
    {
      defaultValue: defaultFunctionConfig,
      listenStorageChange: true,
    },
  );

  // 初始化配置，合并默认配置
  useEffect(() => {
    setFunctionConfig({
      ...defaultFunctionConfig,
      ...functionConfig,
    });
    setDownloadConfig({
      ...defaultDownloadConfig,
      ...downloadConfig,
    });
  }, []);

  return {
    /** 下载配置 */
    downloadConfig: downloadConfig || defaultDownloadConfig,
    /** 设置下载配置 */
    setDownloadConfig,
    /** 功能配置 */
    functionConfig: functionConfig || defaultFunctionConfig,
    /** 设置功能配置 */
    setFunctionConfig,
  };
};
