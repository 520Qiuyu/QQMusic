import { getSongInfo, getSongLyric, getSongPlayUrl } from '@/apis/song';
import { Button, Form, Input, Space } from 'antd';
import { useState } from 'react';

/**
 * 歌曲相关测试组件
 */
const SongTab = () => {
  // 测试获取歌曲歌词
  const [getSongLyricLoading, setGetSongLyricLoading] = useState(false);
  const [songmid, setSongmid] = useState('003rJSwm3TechU');
  const handleGetSongLyric = async () => {
    try {
      setGetSongLyricLoading(true);
      const res = await getSongLyric(songmid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSongLyricLoading(false);
    }
  };

  // 测试获取歌曲播放链接
  const [getSongPlayUrlLoading, setGetSongPlayUrlLoading] = useState(false);
  const handleGetSongPlayUrl = async () => {
    try {
      setGetSongPlayUrlLoading(true);
      const res = await getSongPlayUrl(songmid.split(','));
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSongPlayUrlLoading(false);
    }
  };

  // 测试获取歌曲信息
  const [getSongInfoLoading, setGetSongInfoLoading] = useState(false);
  const handleGetSongInfo = async () => {
    try {
      setGetSongInfoLoading(true);
      const res = await getSongInfo(songmid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSongInfoLoading(false);
    }
  };

  return (
    <Form>
      {/* 测试获取歌曲歌词 */}
      <Form.Item label='获取歌曲信息'>
        <Space>
          <Input
            placeholder='请输入歌曲mid'
            style={{ width: 300 }}
            value={songmid}
            onChange={(e) => setSongmid(e.target.value)}
          />
          <Button type='primary' onClick={handleGetSongLyric} loading={getSongLyricLoading}>
            获取歌曲歌词
          </Button>
          <Button type='primary' onClick={handleGetSongPlayUrl} loading={getSongPlayUrlLoading}>
            获取歌曲播放链接
          </Button>
          <Button type='primary' onClick={handleGetSongInfo} loading={getSongInfoLoading}>
            获取歌曲信息
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default SongTab;

