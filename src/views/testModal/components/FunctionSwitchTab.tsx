import { useConfig } from '@/hooks/useConfig';
import type { SettingStrategy } from '@/types/testModal';
import { Descriptions } from 'antd';
import SettingItem from './SettingItem';

const { Item } = Descriptions;

/**
 * 功能开关配置策略
 * 每个策略包含功能名称和对应的配置key
 */
const FUNCTION_SWITCH_STRATEGIES: SettingStrategy[] = [
  {
    label: '搜索',
    key: 'enableSearch',
    type: 'switch',
  },
  {
    label: 'GitHub信息',
    key: 'enableGithubInfo',
    type: 'switch',
  },
  {
    label: '功能开关Tab',
    key: 'enableFunctionSwitchTab',
    type: 'switch',
    disabled: true,
  },
  {
    label: '下载设置Tab',
    key: 'enableDownloadSetting',
    type: 'switch',
  },
  {
    label: '并发上传歌曲数量',
    key: 'uploadConcurrency',
    type: 'input',
  },
  {
    label: '演唱会关键词',
    key: 'liveKeywords',
    type: 'select',
    mode: 'tags',
    tokenSeparators: [',', '，', ' '],
    style: { width: '100%' },
  },
  {
    label: '测试Modal',
    key: 'enableTestModal',
    type: 'switch',
  },
];

/**
 * 功能开关Tab组件
 * @description 用于控制各个功能的开启和关闭
 * 使用策略模式管理功能开关配置
 */
const FunctionSwitchTab = () => {
  const { functionConfig, setFunctionConfig } = useConfig();

  /**
   * 处理功能开关切换的策略方法
   * @param key - 功能配置的key
   * @param checked - 开关状态
   */
  const handleSwitchChange = (key: string, checked: boolean) => {
    setFunctionConfig({
      ...functionConfig,
      [key]: checked,
    });
  };

  return (
    <Descriptions column={3} bordered>
      {FUNCTION_SWITCH_STRATEGIES.map((strategy) => {
        const { type, key, label, disabled, ...rest } = strategy;
        return (
          <Item key={key} label={label}>
            <SettingItem
              value={functionConfig[key as keyof typeof functionConfig]}
              // @ts-ignore
              onChange={(value) => handleSwitchChange(key, value)}
              type={type}
              disabled={disabled}
              {...rest}
            />
          </Item>
        );
      })}
    </Descriptions>
  );
};

export default FunctionSwitchTab;
