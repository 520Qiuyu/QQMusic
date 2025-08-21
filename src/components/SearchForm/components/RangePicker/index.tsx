import React from 'react';
import { DatePicker } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import classNames from 'classnames';
import styles from './index.module.scss';

const { RangePicker: AntRangePicker } = DatePicker;

const RangePicker: React.FC<RangePickerCustomProps> = ({
  value,
  onChange,
  format = 'YYYY-MM-DD',
  className,
  placeholder = ['开始日期', '结束日期'],
  ...rest
}) => {
  // 将任意值转换为dayjs对象
  const toDayjs = (val: string | null | undefined) => {
    if (!val) return null;
    if (dayjs.isDayjs(val)) return val;
    return dayjs(val);
  };

  // 处理范围值
  const rangeValue = Array.isArray(value)
    ? [toDayjs(value[0]), toDayjs(value[1])]
    : null;

  // 处理onChange
  const handleChange: RangePickerProps['onChange'] = (dates, dateStrings) => {
    console.log('dates', dates);
    console.log('dateStrings', dateStrings);
    if (dates && onChange) {
      onChange(
        (dates as any).map((date: any) => (date ? date.format(format) : '')) as string[],
        dateStrings as [string, string],
      );
    }
  };

  return (
    <AntRangePicker
      value={rangeValue as any}
      onChange={handleChange}
      format={format}
      className={classNames(styles['rangePicker'], className)}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default RangePicker;

export interface RangePickerCustomProps extends Omit<RangePickerProps, 'value' | 'onChange'> {
  value?: string[];
  onChange?: (dates: string[], dateStrings: string[]) => void;
  format?: string;
  className?: string;
  placeholder?: [string, string];
}
