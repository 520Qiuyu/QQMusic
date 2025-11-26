import { useConfig } from '@/hooks/useConfig';
import type { SettingStrategy } from '@/types/testModal';
import { Descriptions } from 'antd';
import SettingItem from './SettingItem';

const { Item } = Descriptions;

/**
 * 获取音质选项列表
 */
const getQualityOptions = () => {
  return [
    { label: '128k MP3', value: '128' },
    { label: '320k MP3', value: '320' },
    { label: 'FLAC', value: 'flac' },
  ];
};

/**
 * 下载设置配置策略
 * 每个策略包含配置项名称、对应的配置key、控件类型和额外配置
 */
const DOWNLOAD_SETTING_STRATEGIES: SettingStrategy[] = [
  {
    label: '下载音质',
    key: 'quality',
    type: 'select',
    options: getQualityOptions(),
    style: { width: '100%' },
  },
  {
    label: '是否下载歌词',
    key: 'downloadLyric',
    type: 'switch',
  },
  {
    label: '是否内嵌歌词封面',
    key: 'embedLyricCover',
    type: 'switch',
  },
];

/**
 * 下载设置Tab组件
 * @description 用于配置下载相关的设置
 * 使用策略模式管理下载配置
 */
const DownloadSettingTab = () => {
  const { downloadConfig, setDownloadConfig } = useConfig();

  /**
   * 处理配置项变化的策略方法
   * @param key - 配置项的key
   * @param value - 配置项的值
   */
  const handleConfigChange = (key: string, value: any) => {
    setDownloadConfig({
      ...downloadConfig,
      [key]: value,
    });
  };

  return (
    <Descriptions
      column={3}
      size='default'
      bordered
      style={{
        minWidth: 800,
      }}>
      {DOWNLOAD_SETTING_STRATEGIES.map((strategy) => {
        const { type, key, label, ...rest } = strategy;
        return (
          <Item key={key} label={label}>
            <SettingItem
              value={downloadConfig[key as keyof typeof downloadConfig]}
              onChange={((value: any) => handleConfigChange(key, value)) as any}
              type={type}
              {...rest}
            />
          </Item>
        );
      })}
    </Descriptions>
  );
};

export default DownloadSettingTab;
