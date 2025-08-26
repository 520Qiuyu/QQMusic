import {
  InfoCircleOutlined,
  UserOutlined,
  UnorderedListOutlined,
  BookOutlined,
  PlayCircleOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { useCompRef } from '../../hooks';
import Demo from '../../views/demo';
import styles from './index.module.scss';
import TestModal from '../../views/testModal';
import SingerSearch from '../../views/singerSearch';
import SongListSearch from '../../views/songListSearch';
import AlbumSearch from '../../views/albumSearch';
import SongSearch from '../../views/songSearch';

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
      <Tooltip title={'专辑查询'} placement='left'>
        <Button
          type='primary'
          icon={<BookOutlined />}
          onClick={handleAlbumSearch}
          className={styles['button']}
        />
      </Tooltip>

      {/* 歌曲查询 */}
      <Tooltip title={'歌曲查询'} placement='left'>
        <Button
          type='primary'
          icon={<CustomerServiceOutlined />}
          onClick={handleSongSearch}
          className={styles['button']}
        />
      </Tooltip>

      {/* demo */}
      <Tooltip title={'demo'} placement='left'>
        <Button
          type='primary'
          icon={<InfoCircleOutlined />}
          onClick={handleDemo}
          className={styles['button']}
        />
      </Tooltip>

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
      {/* 歌曲查询 */}
      <SongSearch ref={songSearchRef} />
    </div>
  );
};

export default ButtonGroup;
