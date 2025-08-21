import { Input, Select, type InputProps, type SelectProps } from 'antd';
import { useEffect } from 'react';
import Styles from './index.module.scss';

const { Group } = Input;

const defaultSearchParams = {
  prop: 'xm',
  value: '',
};

export default function SelectSearch(props: Props) {
  const {
    value,
    onChange,
    defaultValue,
    SearchSelectOptions,
    selectProps,
    inputProps,
    width = 300,
    selectWidth = 80,
    inputWidth = 180,
  } = props;
  // 设置搜索参数
  const [searchParams, setSearchParams] = useState(() => {
    if (value?.prop == undefined) return defaultValue || defaultSearchParams;
    return {
      ...(defaultValue || defaultSearchParams),
      ...value,
    };
  });

  // 保证受控
  useEffect(() => {
    if (value?.prop == undefined) return;
    if (typeof value !== 'object') return console.warn('value类型错误,必须为对象');
    setSearchParams({
      ...value,
    });
  }, [value]);

  /** select改变事件 */
  const handleSearchSelectChange = (value) => {
    const newSearchParams = {
      ...searchParams,
      prop: value,
    };
    setSearchParams(newSearchParams);
    onChange?.(newSearchParams, searchParams);
  };
  /** input改变事件 */
  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    const newSearchParams = {
      ...searchParams,
      value: value,
    };
    setSearchParams(newSearchParams);
    onChange?.(newSearchParams, searchParams);
  };
  return (
    <Group
      compact
      style={{
        width: width,
      }}
      className={Styles['select-search']}>
      <Select
        options={SearchSelectOptions || defaultSearchSelectOptions}
        placeholder='请选择'
        value={searchParams.prop}
        onChange={handleSearchSelectChange}
        style={{
          width: selectWidth,
          borderRadius: '6px 0 0 6px',
        }}
        {...selectProps}
      />
      <Input
        placeholder={`请输入`}
        style={{ width: inputWidth, height: 32 }}
        value={searchParams.value}
        onChange={handleSearchInputChange}
        allowClear
        {...inputProps}
      />
    </Group>
  );
}

/** 下拉选项配置 */
export const defaultSearchSelectOptions = [
  {
    value: 'xh',
    label: '学号',
  },
  {
    value: 'xm',
    label: '姓名',
  },
];

type OptionItem = {
  value: string;
  label: string;
};
type Value = {
  prop: string;
  value: string;
};
type Props = {
  value?: Value;
  onChange?: (value: Value, old: Value) => void;
  defaultValue?: Value;
  SearchSelectOptions?: OptionItem[];
  selectProps?: SelectProps;
  inputProps?: InputProps;
  width?: number;
  selectWidth?: number;
  inputWidth?: number;
};

// 导出Props
export type { Props as SelectSearchProps };
