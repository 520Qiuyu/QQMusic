import type {
  CheckboxProps,
  DatePickerProps,
  InputProps,
  RadioProps,
  SelectProps,
  SwitchProps,
  TimePickerProps,
} from 'antd';

export type SettingStrategyType =
  | 'select'
  | 'switch'
  | 'input'
  | 'checkbox'
  | 'date'
  | 'time'
  | 'radio';

export type SettingStrategy = {
  label: string;
  key: string;
} & (
  | ({ type: 'switch' } & SwitchProps)
  | ({ type: 'input' } & InputProps)
  | ({ type: 'checkbox' } & CheckboxProps)
  | ({ type: 'date' } & DatePickerProps)
  | ({ type: 'time' } & TimePickerProps)
  | ({ type: 'radio' } & RadioProps)
  | ({ type: 'select' } & SelectProps)
);
