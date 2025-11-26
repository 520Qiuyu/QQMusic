import { getAlbumInfo, getAlbumPicUrl } from '@/apis/album';
import { Button, Form, Input, Space } from 'antd';
import { useState } from 'react';

/**
 * 专辑相关测试组件
 */
const AlbumTab = () => {
  // 测试获取专辑信息
  const [albummid, setAlbummid] = useState('0016l2F430zMux');
  const [getAlbumInfoLoading, setGetAlbumInfoLoading] = useState(false);
  const handleGetAlbumInfo = async () => {
    try {
      setGetAlbumInfoLoading(true);
      const res = await getAlbumInfo(albummid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetAlbumInfoLoading(false);
    }
  };

  // 测试获取专辑图片
  const [getAlbumPicUrlLoading, setGetAlbumPicUrlLoading] = useState(false);
  const handleGetAlbumPicUrl = async () => {
    try {
      setGetAlbumPicUrlLoading(true);
      const res = getAlbumPicUrl(albummid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetAlbumPicUrlLoading(false);
    }
  };

  return (
    <Form>
      {/* 测试获取专辑信息 */}
      <Form.Item label='获取专辑信息'>
        <Space>
          <Input
            placeholder='请输入专辑mid'
            style={{ width: 300 }}
            value={albummid}
            onChange={(e) => setAlbummid(e.target.value)}
          />
          <Button type='primary' onClick={handleGetAlbumInfo} loading={getAlbumInfoLoading}>
            获取专辑信息
          </Button>
          <Button type='primary' onClick={handleGetAlbumPicUrl} loading={getAlbumPicUrlLoading}>
            获取专辑图片
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default AlbumTab;

