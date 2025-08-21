import { Button, Form, type FormInstance, type FormItemProps, type FormProps } from 'antd';
import { type FC, type ForwardedRef } from 'react';
import AdvancedSearch from './components/AdvancedSearch';
import SearchFormItem from './components/SearchFormItem';
import { type COMPONENT_TYPE, type COMPONENT_TYPE_PROPS_MAP } from './config';
import Styles from './index.module.scss';

const { Item } = Form;

const SearchForm = (props: Props, ref: Ref) => {
  const [formRef] = Form.useForm();
  const {
    options = [],
    advancedOptions = [],
    searchParams = {},
    onSearch = () => {},
    loading = false,
    keepAdvancedSearchValue = true,
    ...restFormProps
  } = props;

  // 同步搜搜参数到表单 场景：刷新页面，地址栏上的参数同步至表单
  useEffect(() => {
    !keepAdvancedSearchValue && formRef.resetFields();
    formRef.setFieldsValue(searchParams);
  }, [searchParams]);

  // 获取下拉选项 在select类型的下拉框中
  const [optionsMap, setOptionsMap] = useState({});
  useEffect(() => {
    const asyncFn = async () => {
      try {
        options.map(async (item) => {
          if (!item.getOptionsApi || !item.name) return; // 没有api直接返回
          const res = await item.getOptionsApi(searchParams);
          setOptionsMap((prev) => {
            return {
              ...prev,
              [item.name as string]: res.data,
            };
          });
          item.getOptionsApiAfter?.(res.data);
        });
      } catch (error) {
        console.log('error', error);
      }
    };
    asyncFn();
  }, []);

  // 是否打开高级搜索
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  const handleSearch = () => {
    const values = formRef.getFieldsValue();
    console.log('values', values);
    onSearch(values);
  };
  const handleReset = () => {
    formRef.resetFields();
    handleSearch();
  };

  useImperativeHandle(ref, () => ({
    reset: handleReset,
    search: handleSearch,
    getValues: formRef.getFieldsValue,
  }));

  return (
    <Form
      layout='inline'
      form={formRef}
      className={Styles['search-form']}
      // preserve={false}
      {...restFormProps}>
      {options.map((item) => {
        const { getOptionsApi, getOptionsApiAfter, ...rest } = item;
        return (
          <SearchFormItem
            key={item.name || item.label}
            {...rest}
            inputProps={{
              ...item.inputProps,
              options: optionsMap[item.name as string] || item.options,
            }}
          />
        );
      })}
      {/* 高级搜索 */}
      {isAdvancedSearch && <AdvancedSearch params={searchParams} items={advancedOptions} />}
      {/* 按钮 */}
      <Item>
        <Button type='primary' onClick={handleSearch} shape='round' loading={loading}>
          查询
        </Button>
      </Item>
      <Item>
        <Button onClick={handleReset} shape='round'>
          重置
        </Button>
      </Item>
      {/* 需要打开高级搜索 */}
      {advancedOptions.length > 0 && (
        <Item>
          <Button type='link' onClick={() => setIsAdvancedSearch(!isAdvancedSearch)}>
            {isAdvancedSearch ? '关闭' : '高级搜索'}
          </Button>
        </Item>
      )}
    </Form>
  );
};

export default forwardRef(SearchForm);

interface Props extends FormProps {
  /** 普通搜索配置项 */
  options?: Option[];
  /** 高级搜索配置项 */
  advancedOptions?: Option[];
  /** 搜索参数 */
  searchParams?: any;
  /** 搜索事件 */
  onSearch?: (values: any) => void;
  /** 重置事件 */
  onReset?: () => void;
  /** 是否加载中 */
  loading?: boolean;
  /** 高级搜索关闭之后，当他再次开启时是否保持原值 */
  keepAdvancedSearchValue?: boolean;
}
type Ref = ForwardedRef<{
  /** 重置表单 */
  reset: () => void;
  /** 搜索 */
  search: () => void;
  /** 获取表单值 */
  getValues: FormInstance['getFieldsValue'];
}>;
export interface Option<T extends COMPONENT_TYPE = COMPONENT_TYPE> extends FormItemProps {
  /** 表单Item的name */
  name?: string;
  /** 表单Item的label */
  label?: string;
  /** 表单类型 默认input */
  type?: T;
  /** 表单项options -- 静态 */
  options?: any[];
  /** 获取表单项options -- 动态  */
  getOptionsApi?: (params?: any) => Promise<any>;
  /** 获取表单项之后的回调 */
  getOptionsApiAfter?: (data?: any) => void;
  /** 表单输入项的props */
  inputProps?: COMPONENT_TYPE_PROPS_MAP[T];
  [key: string]: any;
}
