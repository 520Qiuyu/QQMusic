import {
  BookOutlined,
  ContainerOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { useCompRef } from '../../hooks';
import AlbumDetail from '../../views/albumDetail';
import AlbumSearch from '../../views/albumSearch';
import Demo from '../../views/demo';
import SingerSearch from '../../views/singerSearch';
import SongListDetail from '../../views/songListDetail';
import SongListSearch from '../../views/songListSearch';
import SongSearch from '../../views/songSearch';
import TestModal from '../../views/testModal';
import styles from './index.module.scss';

const ButtonGroup = () => {
  // 歌手查询
  const singerSearchRef = useCompRef(SingerSearch);
  const handleSingerSearch = () => {
    singerSearchRef.current.open();
  };

  // 歌单查询
  const songListSearchRef = useCompRef(SongListSearch);
  const handleSongListSearch = () => {
    songListSearchRef.current.open();
  };

  // 专辑查询
  const albumSearchRef = useCompRef(AlbumSearch);
  const handleAlbumSearch = () => {
    albumSearchRef.current.open();
  };

  // 歌曲查询
  const songSearchRef = useCompRef(SongSearch);
  const handleSongSearch = () => {
    songSearchRef.current.open();
  };

  // 歌单详情
  const songListDetailRef = useCompRef(SongListDetail);
  const handleSongListDetail = () => {
    songListDetailRef.current.open();
  };

  // 专辑详情
  const albumDetailRef = useCompRef(AlbumDetail);
  const handleAlbumDetail = () => {
    albumDetailRef.current.open();
  };

  // 云盘快速上传
  const demoRef = useCompRef(Demo);
  const handleDemo = () => {
    demoRef.current.open();
  };

  // testModal
  const testModalRef = useCompRef(TestModal);
  const handleTestModal = () => {
    testModalRef.current.open();
  };

  return (
    <div className={styles['button-group']}>
      {/* 歌手查询 */}
      <Tooltip title={'歌手查询'} placement='left'>
        <Button
          type='primary'
          icon={<UserOutlined />}
          onClick={handleSingerSearch}
          className={styles['button']}
        />
      </Tooltip>

      {/* 歌单查询 */}
      <Tooltip title={'歌单查询'} placement='left'>
        <Button
          type='primary'
          icon={<UnorderedListOutlined />}
          onClick={handleSongListSearch}
          className={styles['button']}
        />
      </Tooltip>

      {/* 专辑查询 */}
      {/*       <Tooltip title={'专辑查询'} placement='left'>
        <Button
          type='primary'
          icon={<BookOutlined />}
          onClick={handleAlbumSearch}
          className={styles['button']}
        />
      </Tooltip> */}

      {/* 歌单详情 */}
      <Tooltip title={'歌单详情'} placement='left'>
        <Button
          type='primary'
          icon={<ContainerOutlined />}
          onClick={handleSongListDetail}
          className={styles['button']}
        />
      </Tooltip>

      {/* 专辑详情 */}
      <Tooltip title={'专辑详情'} placement='left'>
        <Button
          type='primary'
          icon={<BookOutlined />}
          onClick={handleAlbumDetail}
          className={styles['button']}
        />
      </Tooltip>

      {/* 歌曲查询 */}
      <Tooltip title={'歌曲查询'} placement='left'>
        <Button
          type='primary'
          icon={<SearchOutlined />}
          onClick={handleSongSearch}
          className={styles['button']}
        />
      </Tooltip>

      {/* demo */}
      {/* <Tooltip title={'demo'} placement='left'>
        <Button
          type='primary'
          icon={<InfoCircleOutlined />}
          onClick={handleDemo}
          className={styles['button']}
        />
      </Tooltip> */}

      {/* testModal */}
      <Tooltip title={'testModal'} placement='left'>
        <Button
          type='primary'
          icon={<InfoCircleOutlined />}
          onClick={handleTestModal}
          className={styles['button']}
        />
      </Tooltip>

      {/* 弹窗组件 */}
      <Demo ref={demoRef} />
      {/* testModal */}
      <TestModal ref={testModalRef} />
      {/* 歌手查询 */}
      <SingerSearch ref={singerSearchRef} />
      {/* 歌单查询 */}
      <SongListSearch ref={songListSearchRef} />
      {/* 专辑查询 */}
      <AlbumSearch ref={albumSearchRef} />
      {/* 歌单详情 */}
      <SongListDetail ref={songListDetailRef} />
      {/* 专辑详情 */}
      <AlbumDetail ref={albumDetailRef} />
      {/* 歌曲查询 */}
      <SongSearch ref={songSearchRef} />
    </div>
  );
};

export default ButtonGroup;
