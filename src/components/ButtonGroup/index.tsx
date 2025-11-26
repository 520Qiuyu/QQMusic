import { useCompRef, useConfig } from '@/hooks';
import AlbumDetail from '@/views/albumDetail';
import AlbumSearch from '@/views/albumSearch';
import GithubInfo from '@/views/githubInfo';
import SingerSearch from '@/views/singerSearch';
import SongListDetail from '@/views/songListDetail';
import SongListSearch from '@/views/songListSearch';
import SongSearch from '@/views/songSearch';
import TestModal from '@/views/testModal';
import {
  BookOutlined,
  ContainerOutlined,
  GithubOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import styles from './index.module.scss';

const ButtonGroup = () => {
  const { functionConfig } = useConfig();
  const { enableSearch, enableGithubInfo, enableTestModal } = functionConfig;

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

  // testModal
  const testModalRef = useCompRef(TestModal);
  const handleTestModal = () => {
    testModalRef.current.open();
  };

  // githubInfo
  const githubInfoRef = useCompRef(GithubInfo);
  const handleGithubInfo = () => {
    githubInfoRef.current.open();
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
      {enableSearch && (
        <Tooltip title={'歌曲查询'} placement='left'>
          <Button
            type='primary'
            icon={<SearchOutlined />}
            onClick={handleSongSearch}
            className={styles['button']}
          />
        </Tooltip>
      )}

      {/* testModal */}
      {enableTestModal && (
        <Tooltip title={'testModal'} placement='left'>
          <Button
            type='primary'
            icon={<InfoCircleOutlined />}
            onClick={handleTestModal}
            className={styles['button']}
          />
        </Tooltip>
      )}

      {/* githubInfo */}
      {enableGithubInfo && (
        <Tooltip title={'githubInfo'} placement='left'>
          <Button
            type='primary'
            icon={<GithubOutlined />}
            onClick={handleGithubInfo}
            className={styles['button']}
          />
        </Tooltip>
      )}
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
      {/* githubInfo */}
      <GithubInfo ref={githubInfoRef} />
    </div>
  );
};

export default ButtonGroup;
