import type { SelectSearchProps } from '@/components/SelectSearch';
import { Form, type InputProps, type SelectProps } from 'antd';
import type { FC } from 'react';
import { COMPONENT_TYPE_MAP, defaultComponentProps, type COMPONENT_TYPE } from '../../config';

const { Item } = Form;

const SearchFormItem: FC<Props> = (props) => {
  const { name, type = 'input', label = '', inputProps = {}, ...formItemProps } = props;
  const InputComponent: any = COMPONENT_TYPE_MAP[type];

  return (
    <Item name={name} label={label} {...formItemProps}>
      <InputComponent {...{ ...defaultComponentProps[type], ...inputProps }} />
    </Item>
  );
};

export default SearchFormItem;

interface Props {
  /** 表单项字段名 */
  name?: string;
  /** 表单项类型 */
  type?: COMPONENT_TYPE;
  /** 表单项label */
  label?: string;
  /** 表单项输入组件属性 */
  inputProps?: InputProps | SelectProps | SelectSearchProps | { [key: string]: any };
  [key: string]: any;
}
