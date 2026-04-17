import {
  getUserCollectedSonglist,
  getUserCreatedPlaylist,
  getUserProfileHomepage,
} from '@/apis/user';
import { MyButton } from '@/components';
import { Button, Form, Input, Space } from 'antd';
import { useState } from 'react';

/**
 * 用户相关测试组件
 * - 获取用户创建歌单（含“我喜欢”补齐）
 * - 获取用户主页信息
 */
const UserTab = () => {
  const [userId, setUserId] = useState('1943684871');

  const handleGetUserCreatedPlaylist = async () => {
    if (!userId) return;
    try {
      const res = await getUserCreatedPlaylist(userId);
      console.log('getUserCreatedPlaylist res', res);
    } catch (error) {
      console.log('getUserCreatedPlaylist error', error);
    }
  };

  const handleGetUserCollectedSonglist = async () => {
    if (!userId) return;
    try {
      const res = await getUserCollectedSonglist(userId);
      console.log('getUserCollectedSonglist res', res);
    } catch (error) {
      console.log('getUserCollectedSonglist error', error);
    }
  };

  const [getHomepageLoading, setGetHomepageLoading] = useState(false);
  const handleGetUserProfileHomepage = async () => {
    if (!userId) return;
    try {
      setGetHomepageLoading(true);
      const res = await getUserProfileHomepage(userId);
      console.log('getUserProfileHomepage res', res);
    } catch (error) {
      console.log('getUserProfileHomepage error', error);
    } finally {
      setGetHomepageLoading(false);
    }
  };

  return (
    <Form>
      <Form.Item label='用户ID(QQ号)'>
        <Space wrap>
          <Input
            placeholder='请输入用户ID，例如 123456'
            style={{ width: 300 }}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <MyButton type='primary' onClick={handleGetUserCreatedPlaylist}>
            获取用户创建歌单
          </MyButton>{' '}
          <MyButton type='primary' onClick={handleGetUserCollectedSonglist}>
            获取用户收藏歌单
          </MyButton>
          <Button
            type='primary'
            onClick={handleGetUserProfileHomepage}
            loading={getHomepageLoading}>
            获取用户主页信息
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default UserTab;
