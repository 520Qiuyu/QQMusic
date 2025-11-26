import { getSongList, getSongListCategory, getSongListDetail } from '@/apis/songList';
import { Button, Form, Input, Space } from 'antd';
import { useState } from 'react';

/**
 * 歌单相关测试组件
 */
const SongListTab = () => {
  // 测试获取歌单列表
  const [getSongListLoading, setGetSongListLoading] = useState(false);
  const [getSongListCategoryLoading, setGetSongListCategoryLoading] = useState(false);
  const handleGetSongListCategory = async () => {
    try {
      setGetSongListCategoryLoading(true);
      const res = await getSongListCategory();
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSongListCategoryLoading(false);
    }
  };
  const handleGetSongList = async () => {
    try {
      setGetSongListLoading(true);
      const res = await getSongList();
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSongListLoading(false);
    }
  };

  // 测试获取歌单详情
  const [disstid, setDisstid] = useState('7011264340');
  const [getSongListDetailLoading, setGetSongListDetailLoading] = useState(false);
  const handleGetSongListDetail = async () => {
    try {
      setGetSongListDetailLoading(true);
      const res = await getSongListDetail(disstid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSongListDetailLoading(false);
    }
  };

  return (
    <Form>
      {/* 测试获取歌单列表 */}
      <Form.Item label='获取歌单列表'>
        <Space>
          <Button
            type='primary'
            onClick={handleGetSongListCategory}
            loading={getSongListCategoryLoading}>
            获取歌单分类列表
          </Button>
          <Button type='primary' onClick={handleGetSongList} loading={getSongListLoading}>
            获取歌单列表
          </Button>
        </Space>
      </Form.Item>

      {/* 测试获取歌单详情 */}
      <Form.Item label='获取歌单详情'>
        <Space>
          <Input
            placeholder='请输入歌单id'
            style={{ width: 300 }}
            value={disstid}
            onChange={(e) => setDisstid(e.target.value)}
          />
          <Button
            type='primary'
            onClick={handleGetSongListDetail}
            loading={getSongListDetailLoading}>
            获取歌单详情
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default SongListTab;

