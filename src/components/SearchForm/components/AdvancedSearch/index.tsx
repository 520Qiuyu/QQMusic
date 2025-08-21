import { Form } from 'antd';
import type { Option } from '../..';
import SearchFormItem from '../SearchFormItem';

export default function AdvancedSearch(props: Props) {
  const formRef = Form.useFormInstance();
  const { params, items = [] } = props;

  // 获取下拉选项 在select类型的下拉框中
  const [optionsMap, setOptionsMap] = useState({});
  useEffect(() => {
    const asyncFn = async () => {
      try {
        items.map(async (item) => {
          if (!item.getOptionsApi) return; // 没有api直接返回
          const res = await item.getOptionsApi(params);
          setOptionsMap((prev) => {
            return {
              ...prev,
              [item.name]: res.data,
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

  return (
    <>
      {items.map((item) => {
        return (
          <SearchFormItem
            key={item.name}
            name={item.name}
            label={item.label}
            type={item.type}
            inputProps={{
              ...item.inputProps,
              options: optionsMap[item.name] || item.options,
            }}
          />
        );
      })}
    </>
  );
}

interface Props {
  params?: any;
  items?: Option[];
}
