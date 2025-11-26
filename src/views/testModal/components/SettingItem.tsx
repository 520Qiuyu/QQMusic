import {
  Checkbox,
  DatePicker,
  Input,
  Radio,
  Select,
  Switch,
  TimePicker,
} from 'antd';
import type { ComponentProps } from 'react';

interface SettingItemProps {
  /** 当前值 */
  value?: any;
  /** 值变化回调 */
  onChange?: (value: any) => void;
  /** 控件类型 */
  type?: 'input' | 'select' | 'radio' | 'checkbox' | 'switch' | 'date' | 'time';
  /** 是否禁用 */
  disabled?: boolean;
  /** 其他属性 */
  [key: string]: any;
}

/**
 * 通用设置项组件
 * @description 支持多种控件类型，统一的值变化处理
 * @example
 * <SettingItem
 *   type="switch"
 *   value={enabled}
 *   onChange={(checked) => setEnabled(checked)}
 * />
 */
export default function SettingItem(props: SettingItemProps) {
  const { value, onChange, type = 'switch', disabled, ...otherProps } = props;

  switch (type) {
    case 'input':
      return (
        <Input
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          {...otherProps}
        />
      );
    case 'select':
      return (
        <Select
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...otherProps}
        />
      );
    case 'radio':
      return (
        <Radio.Group
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          {...otherProps}
        />
      );
    case 'checkbox':
      return (
        <Checkbox.Group
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...otherProps}
        />
      );
    case 'date':
      return (
        <DatePicker
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...otherProps}
        />
      );
    case 'time':
      return (
        <TimePicker
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...otherProps}
        />
      );
    case 'switch':
    default:
      return (
        <Switch
          checked={value}
          onChange={onChange}
          disabled={disabled}
          {...otherProps}
        />
      );
  }
}

