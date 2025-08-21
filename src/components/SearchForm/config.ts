import type { InputProps, SelectProps, TreeSelectProps } from 'antd';
import { Input, Select, TreeSelect } from 'antd';
import type { SelectSearchProps } from '../SelectSearch';
import SelectSearch from '../SelectSearch';
import type { RangePickerCustomProps } from './components/RangePicker';
import RangePicker from './components/RangePicker';

export const filterOption = (inputValue: string, option: any) => {
  return option.label.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
};
/** 类型组件映射 */
export const COMPONENT_TYPE_MAP = {
  input: Input,
  select: Select,
  selectSearch: SelectSearch,
  rangePicker: RangePicker,
  treeSelect: TreeSelect,
};
/** 类型组件props映射 */
export interface COMPONENT_TYPE_PROPS_MAP {
  input: InputProps;
  select: SelectProps;
  selectSearch: SelectSearchProps;
  rangePicker: RangePickerCustomProps;
  treeSelect: TreeSelectProps;
}
/** 默认组件类型 */
export const defaultComponent = 'input';
/** 默认组件属性 */
export const defaultComponentProps = {
  input: {
    placeholder: '请输入',
    style: { width: '200px' },
    allowClear: true,
  } as InputProps,
  select: {
    placeholder: '请选择',
    style: { width: '200px' },
    allowClear: true,
    maxTagCount: 2,
    showSearch: true,
    filterOption,
  } as SelectProps,
  selectSearch: {} as SelectSearchProps,
  rangePicker: {} as RangePickerCustomProps,
  treeSelect: {
    treeCheckable: true,
    allowClear: true,
    treeExpandAction: 'click',
    filterTreeNode: (inputValue, treeNode) => {
      return treeNode.props.title.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
    },
    placeholder: '请选择',
    style: {
      width: '200px',
    },
  } as TreeSelectProps,
};
export type COMPONENT_TYPE = keyof typeof COMPONENT_TYPE_MAP;
