import {
  getSingerAlbum,
  getSingerAllAlbum,
  getSingerFollowCount,
  getSingerHotSong,
  getSingerInfo,
  getSingerList,
} from '@/apis/singer';
import { AreaList, GenreList, SexList } from '@/constants';
import { useVisible } from '@/hooks';
import type { Ref } from '@/hooks/useVisible';
import { Button, Form, Input, Modal, Select, Space } from 'antd';
import dayjs from 'dayjs';
import type { ForwardedRef } from 'react';
import { forwardRef, useState } from 'react';

const TestModal = forwardRef((props, ref: ForwardedRef<Ref>) => {
  const { visible, open, close } = useVisible({}, ref);

  // 测试获取歌手列表
  const [getSingerListLoading, setGetSingerListLoading] = useState(false);
  const [getSingerListParams, setGetSingerListParams] = useState({
    area: -100,
    sex: -100,
    genre: -100,
    cur_page: 1,
  });
  const handleGetSingerList = async () => {
    try {
      setGetSingerListLoading(true);
      const res = await getSingerList(getSingerListParams);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSingerListLoading(false);
    }
  };

  // 测试获取歌手信息
  const [mid, setMid] = useState('003fA5G40k6hKc');
  const [getSingerInfoLoading, setGetSingerInfoLoading] = useState(false);
  const handleGetSingerInfo = async () => {
    try {
      setGetSingerInfoLoading(true);
      const res = await getSingerInfo(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSingerInfoLoading(false);
    }
  };

  // 测试获取歌手专辑
  const [getSingerAlbumLoading, setGetSingerAlbumLoading] = useState(false);
  const handleGetSingerAlbum = async () => {
    try {
      setGetSingerAlbumLoading(true);
      const res = await getSingerAlbum(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSingerAlbumLoading(false);
    }
  };

  // 测试获取歌手所有专辑
  const [getSingerAllAlbumLoading, setGetSingerAllAlbumLoading] = useState(false);
  const handleGetSingerAllAlbum = async () => {
    try {
      setGetSingerAllAlbumLoading(true);
      const res = await getSingerAllAlbum(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSingerAllAlbumLoading(false);
    }
  };

  // 测试获取歌手被关注数量

  const [getSingerFollowCountLoading, setGetSingerFollowCountLoading] = useState(false);
  const handleGetSingerFollowCount = async () => {
    try {
      setGetSingerFollowCountLoading(true);
      const res = await getSingerFollowCount(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSingerFollowCountLoading(false);
    }
  };

  // 测试获取歌手热门歌曲

  const [getSingerHotSongLoading, setGetSingerHotSongLoading] = useState(false);
  const handleGetSingerHotSong = async () => {
    try {
      setGetSingerHotSongLoading(true);
      const res = await getSingerHotSong(mid);
      console.log('res', res);
    } catch (error) {
      console.log('error', error);
    } finally {
      setGetSingerHotSongLoading(false);
    }
  };

  return (
    <Modal title='测试Modal' open={visible} onCancel={close} width={1000} footer={null} centered>
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
            <Button type='primary' onClick={handleGetSingerList} loading={getSingerListLoading}>
              获取歌手列表
            </Button>
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
            <Button type='primary' onClick={handleGetSingerInfo} loading={getSingerInfoLoading}>
              获取歌手信息
            </Button>
            <Button type='primary' onClick={handleGetSingerAlbum} loading={getSingerAlbumLoading}>
              获取歌手专辑
            </Button>
            <Button
              type='primary'
              onClick={handleGetSingerAllAlbum}
              loading={getSingerAllAlbumLoading}>
              获取歌手所有专辑
            </Button>
            <Button
              type='primary'
              onClick={handleGetSingerFollowCount}
              loading={getSingerFollowCountLoading}>
              获取歌手被关注数量
            </Button>
            <Button
              type='primary'
              onClick={handleGetSingerHotSong}
              loading={getSingerHotSongLoading}>
              获取歌手热门歌曲
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
});

export default TestModal;
