import { getSongInfo, getSongLyric, getSongPlayUrl } from '@/apis/song';
import { MyButton } from '@/components';
import { usePlayMusic } from '@/hooks';
import { msgError, msgSuccess } from '@/utils/modal';
import { Form, Input, Space } from 'antd';
import { useState } from 'react';

/**
 * 歌曲相关测试组件
 */
const SongTab = () => {
  const { convertToNeteaseMusic } = usePlayMusic();

  // 测试获取歌曲歌词
  const [songmid, setSongmid] = useState('003rJSwm3TechU');
  const handleGetSongLyric = async () => {
    try {
      const res = await getSongLyric(songmid);
      console.log('res', res);
      msgSuccess('歌曲歌词获取成功');
    } catch (error) {
      console.log('error', error);
      msgError('歌曲歌词获取失败');
    }
  };

  // 测试获取歌曲播放链接
  const handleGetSongPlayUrl = async () => {
    try {
      const res = await getSongPlayUrl(songmid.split(','));
      console.log('res', res);
      msgSuccess('歌曲播放链接获取成功');
    } catch (error) {
      console.log('error', error);
      msgError('歌曲播放链接获取失败');
    }
  };

  // 测试获取歌曲信息
  const handleGetSongInfo = async () => {
    try {
      const res = await getSongInfo(songmid);
      console.log('res', res);
      msgSuccess('歌曲信息获取成功');
    } catch (error) {
      console.log('error', error);
      msgError('歌曲信息获取失败');
    }
  };

  // 测试歌曲转存网易云
  const handleConvertToNeteaseMusic = async () => {
    try {
      const res = await convertToNeteaseMusic(songmid);
      msgSuccess('歌曲转存网易云成功');
    } catch (error) {
      console.log('error', error);
      msgError('歌曲转存网易云失败');
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
          <MyButton type='primary' onClick={handleGetSongLyric}>
            获取歌曲歌词
          </MyButton>
          <MyButton type='primary' onClick={handleGetSongPlayUrl}>
            获取歌曲播放链接
          </MyButton>
          <MyButton type='primary' onClick={handleGetSongInfo}>
            获取歌曲信息
          </MyButton>
          {/* 歌曲转存网易云 */}
          <MyButton type='primary' onClick={handleConvertToNeteaseMusic}>
            歌曲转存网易云
          </MyButton>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default SongTab;
