import {
  getSimilarSinger,
  getSingerAlbum,
  getSingerAllAlbum,
  getSingerAllHotSong,
  getSingerFollowCount,
  getSingerHotSong,
  getSingerInfo,
  getSingerList,
} from '@/apis/singer';
import { MyButton } from '@/components';
import { AreaList, GenreList, SexList } from '@/constants';
import { msgSuccess } from '@/utils/modal';
import { Form, Input, Select, Space } from 'antd';
import { useState } from 'react';

/**
 * 歌手相关测试组件
 */
const SingerTab = () => {
  // 测试获取歌手列表
  const [getSingerListParams, setGetSingerListParams] = useState({
    area: -100,
    sex: -100,
    genre: -100,
    cur_page: 1,
  });
  /** 获取歌手列表 */
  const handleGetSingerList = async () => {
    try {
      const res = await getSingerList(getSingerListParams);
      console.log('res', res);
      msgSuccess('获取歌手列表成功,请打开控制台查看');
    } catch (error) {
      console.log('error', error);
    }
  };

  // 测试获取歌手信息
  const [mid, setMid] = useState('003fA5G40k6hKc');
  /** 获取歌手信息 */
  const handleGetSingerInfo = async () => {
    try {
      const res = await getSingerInfo(mid);
      console.log('res', res);
      msgSuccess('获取歌手信息成功,请打开控制台查看');
    } catch (error) {
      console.log('error', error);
    }
  };

  /** 获取歌手专辑 */
  const handleGetSingerAlbum = async () => {
    try {
      const res = await getSingerAlbum(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    }
  };

  /** 获取歌手所有专辑 */
  const handleGetSingerAllAlbum = async () => {
    try {
      const res = await getSingerAllAlbum(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    }
  };

  /** 获取歌手被关注数量 */
  const handleGetSingerFollowCount = async () => {
    try {
      const res = await getSingerFollowCount(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    }
  };

  /** 获取歌手热门歌曲 */
  const handleGetSingerHotSong = async () => {
    try {
      const res = await getSingerHotSong(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    }
  };

  /** 获取歌手全部热门歌曲 */
  const handleGetSingerAllHotSong = async () => {
    try {
      const res = await getSingerAllHotSong(mid);
      console.log('res', res);
      msgSuccess('获取歌手全部热门歌曲成功,请打开控制台查看');
    } catch (error) {
      console.log('error', error);
    }
  };

  // 测试获取相似歌手
  const handleGetSimilarSinger = async () => {
    try {
      const res = await getSimilarSinger(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Form>
      {/* 测试获取歌手列表 */}
      <Form.Item label='获取歌手列表'>
        <Space>
          <Select
            options={AreaList}
            style={{
              width: 150,
            }}
            value={getSingerListParams.area}
            onChange={(value) => setGetSingerListParams({ ...getSingerListParams, area: value })}
          />
          <Select
            options={GenreList}
            style={{
              width: 150,
            }}
            value={getSingerListParams.genre}
            onChange={(value) => setGetSingerListParams({ ...getSingerListParams, genre: value })}
          />
          <Select
            options={SexList}
            style={{
              width: 150,
            }}
            value={getSingerListParams.sex}
            onChange={(value) => setGetSingerListParams({ ...getSingerListParams, sex: value })}
          />
          <MyButton type='primary' onClick={handleGetSingerList}>
            获取歌手列表
          </MyButton>
        </Space>
      </Form.Item>

      {/* 测试获取歌手信息 */}
      <Form.Item label='获取歌手信息'>
        <Space wrap>
          <Input
            placeholder='请输入歌手mid'
            style={{ width: 300 }}
            value={mid}
            onChange={(e) => setMid(e.target.value)}
          />
          <MyButton type='primary' onClick={handleGetSingerInfo}>
            获取歌手信息
          </MyButton>
          <MyButton type='primary' onClick={handleGetSingerAlbum}>
            获取歌手专辑
          </MyButton>
          <MyButton type='primary' onClick={handleGetSingerAllAlbum}>
            获取歌手所有专辑
          </MyButton>
          <MyButton type='primary' onClick={handleGetSingerFollowCount}>
            获取歌手被关注数量
          </MyButton>
          <MyButton type='primary' onClick={handleGetSingerHotSong}>
            获取歌手热门歌曲
          </MyButton>
          <MyButton type='primary' onClick={handleGetSingerAllHotSong}>
            获取歌手全部热门歌曲
          </MyButton>
          <MyButton type='primary' onClick={handleGetSimilarSinger}>
            获取相似歌手
          </MyButton>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default SingerTab;
