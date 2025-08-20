import { uniqueArrayByKey } from "@/utils";
import { Button, Form, Select, Space } from "antd";
import styles from "./index.module.scss";

interface Props {
  onSearch: (values: any) => void;
  data: any[];
  options: any[];
}

const SearchForm = ({ onSearch, data = [], options = [] }: Props) => {
  const [form] = Form.useForm();

  // 获取去重后的选项列表
  const getUniqueOptions = key => {
    const uniqueList = uniqueArrayByKey(data, key);
    const options = uniqueList.map(item => ({
      label: item[key],
      value: item[key],
    }));
    return options;
  };

  const handleSearch = () => {
    const values = form.getFieldsValue();
    onSearch(values);
  };

  const handleReset = () => {
    form.resetFields();
    onSearch({});
  };

  return (
    <Form
      form={form}
      layout="inline"
      className={styles["search-form"]}
    >
      <Space wrap>
        {options.map(item => {
          return (
            <Form.Item
              key={item.value}
              name={item.value}
              label={item.label}
              style={{ marginBottom: 0, minWidth: 200 }}
            >
              <Select
                mode="multiple"
                allowClear
                showSearch
                placeholder={item.label}
                maxTagCount="responsive"
                options={getUniqueOptions(item.value)}
                filterOption={(input, option) =>
                  (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                }
              />
            </Form.Item>
          );
        })}

        <Button
          type="primary"
          onClick={handleSearch}
        >
          搜索
        </Button>
        <Button onClick={handleReset}>重置</Button>
      </Space>
    </Form>
  );
};

export default SearchForm;
