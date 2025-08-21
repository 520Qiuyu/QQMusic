# SearchForm 搜索表单

高度封装的搜索表单组件，支持普通搜索和高级搜索，自动处理表单状态。

## 何时使用

- 需要进行数据搜索和筛选的场景
- 需要支持高级搜索的场景
- 需要动态获取选项数据的场景

## 代码演示

### 基础用法

```tsx
import { SearchForm } from '@/components';

const Demo = () => {
  const handleSearch = (values) => {
    console.log('搜索参数：', values);
  };

  return (
    <SearchForm
      options={[
        {
          name: 'keyword',
          label: '关键词',
          type: 'input',
        },
        {
          name: 'status',
          label: '状态',
          type: 'select',
          options: [
            { label: '启用', value: 1 },
            { label: '禁用', value: 0 },
          ],
        },
      ]}
      onSearch={handleSearch}
    />
  );
};
```

### 高级搜索

```tsx
import { SearchForm } from '@/components';

const Demo = () => {
  return (
    <SearchForm
      options={[
        {
          name: 'keyword',
          label: '关键词',
        },
      ]}
      advancedOptions={[
        {
          name: 'date',
          label: '日期范围',
          type: 'rangePicker',
        },
        {
          name: 'category',
          label: '分类',
          type: 'selectSearch',
          getOptionsApi: async () => {
            const res = await fetchCategories();
            return res.data;
          },
        },
      ]}
    />
  );
};
```

## API

### SearchForm

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 普通搜索配置项 | Option[] | [] |
| advancedOptions | 高级搜索配置项 | Option[] | [] |
| searchParams | 搜索参数（用于同步url参数） | object | {} |
| onSearch | 搜索事件 | (values: any) => void | - |
| loading | 加载状态 | boolean | false |
| keepAdvancedSearchValue | 高级搜索关闭后是否保持原值 | boolean | true |

### Option

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 表单项的name | string | - |
| label | 表单项的label | string | - |
| type | 表单项类型 | 'input' \| 'select' \| 'selectSearch' \| 'rangePicker' | 'input' |
| options | 静态选项数据 | { label: string, value: any }[] | - |
| getOptionsApi | 动态获取选项数据的接口 | () => Promise<any> | - |
| getOptionsApiAfter | 获取选项数据后的回调 | (data: any) => void | - |
| inputProps | 表单项组件的props | 见下方说明 | - |

### 组件实例方法

通过 ref 可以获取到组件实例的方法

| 名称 | 说明 | 类型 |
| --- | --- | --- |
| reset | 重置表单 | () => void |
| search | 触发搜索 | () => void |
| getValues | 获取表单值 | () => object |

### 输入组件Props类型说明

根据不同的type，inputProps接受不同的类型：

- type="input": [InputProps](https://ant.design/components/input-cn#api)
- type="select": [SelectProps](https://ant.design/components/select-cn#api)
- type="selectSearch": SelectSearchProps
- type="rangePicker": RangePickerCustomProps

## 注意事项

1. 组件会自动处理表单状态，包括重置和提交
2. 高级搜索的选项会在关闭后自动清空，除非设置 `keepAdvancedSearchValue={true}`
3. 动态选项数据会在组件挂载时自动获取
4. 组件继承了 antd Form 的所有属性，可以通过传递 FormProps 来自定义表单行为