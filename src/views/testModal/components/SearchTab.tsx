import { getSearchResult, getWebSearchResult } from '@/apis/search';
import { ResourceType, type ResourceTypeValues } from '@/constants';
import { Button, Form, Input, Select, Space } from 'antd';
import { useState } from 'react';

/**
 * 搜索相关测试组件
 */
const SearchTab = () => {
  // 测试获取搜索结果
  const [getSearchResultLoading, setGetSearchResultLoading] = useState(false);
  const [getSearchResultParams, setGetSearchResultParams] = useState({
    keyword: '',
    type: 'song' as ResourceTypeValues,
  });
  const handleGetSearchResult = async () => {
    try {
      setGetSearchResultLoading(true);
      const res = await getSearchResult(getSearchResultParams.keyword, getSearchResultParams.type);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSearchResultLoading(false);
    }
  };
  const [getWebSearchResultLoading, setGetWebSearchResultLoading] = useState(false);
  const handleGetWebSearchResult = async () => {
    try {
      setGetWebSearchResultLoading(true);
      const res = await getWebSearchResult(
        getSearchResultParams.keyword,
        getSearchResultParams.type,
      );
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetWebSearchResultLoading(false);
    }
  };

  return (
    <Form>
      {/* 测试获取搜索结果 */}
      <Form.Item label='获取搜索结果'>
        <Space>
          <Input
            placeholder='请输入搜索关键词'
            style={{ width: 300 }}
            value={getSearchResultParams.keyword}
            onChange={(e) =>
              setGetSearchResultParams({ ...getSearchResultParams, keyword: e.target.value })
            }
          />
          <Select
            options={Object.entries(ResourceType).map(([key, value]) => ({
              label: key,
              value,
            }))}
            style={{ width: 150 }}
            value={getSearchResultParams.type}
            onChange={(value) =>
              setGetSearchResultParams({ ...getSearchResultParams, type: value })
            }
            allowClear
          />
          <Button type='primary' onClick={handleGetSearchResult} loading={getSearchResultLoading}>
            获取搜索结果
          </Button>
          <Button
            type='primary'
            onClick={handleGetWebSearchResult}
            loading={getWebSearchResultLoading}>
            获取web搜索结果
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default SearchTab;

