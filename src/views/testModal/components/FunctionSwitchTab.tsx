import { useConfig } from '@/hooks/useConfig';
import { Descriptions } from 'antd';
import SettingItem from './SettingItem';

const { Item } = Descriptions;

/**
 * 功能开关配置策略
 * 每个策略包含功能名称和对应的配置key
 */
const FUNCTION_SWITCH_STRATEGIES = [
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
    <Descriptions column={3} size='large' bordered>
      {FUNCTION_SWITCH_STRATEGIES.map((strategy) => {
        const { type, key, label, disabled, ...rest } = strategy;
        return (
          <Item key={key} label={label}>
            <SettingItem
              value={functionConfig[key as keyof typeof functionConfig]}
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

