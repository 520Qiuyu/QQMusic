import { useVisible } from '@/hooks';
import { useConfig } from '@/hooks/useConfig';
import type { Ref } from '@/hooks/useVisible';
import { Modal, Tabs, type TabsProps } from 'antd';
import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import AlbumTab from './components/AlbumTab';
import DownloadSettingTab from './components/DownloadSettingTab';
import FlacTab from './components/FlacTab';
import FunctionSwitchTab from './components/FunctionSwitchTab';
import SearchTab from './components/SearchTab';
import SingerTab from './components/SingerTab';
import SongListTab from './components/SongListTab';
import SongTab from './components/SongTab';

const TestModal = forwardRef((_, ref: ForwardedRef<Ref>) => {
  const { visible, open, close } = useVisible({}, ref);
  const { functionConfig } = useConfig();
  const { enableFunctionSwitchTab, enableDownloadSetting } = functionConfig;

  const tabItems = [
    {
      key: 'singer',
      label: '歌手',
      children: <SingerTab />,
    },
    {
      key: 'album',
      label: '专辑',
      children: <AlbumTab />,
    },
    {
      key: 'song',
      label: '歌曲',
      children: <SongTab />,
    },
    {
      key: 'songList',
      label: '歌单',
      children: <SongListTab />,
    },
    {
      key: 'search',
      label: '搜索',
      children: <SearchTab />,
    },
    {
      key: 'flac',
      label: 'FLAC',
      children: <FlacTab />,
    },
    enableFunctionSwitchTab && {
      key: 'functionSwitchTab',
      label: '功能开关',
      children: <FunctionSwitchTab />,
    },
    enableDownloadSetting && {
      key: 'downloadSetting',
      label: '下载设置',
      children: <DownloadSettingTab />,
    },
  ].filter(Boolean) as TabsProps['items'];

  return (
    <Modal
      title='测试Modal'
      open={visible}
      onCancel={close}
      width={1200}
      styles={{
        body: {
          maxHeight: '75vh',
          overflowY: 'auto',
        },
      }}
      footer={null}
      centered>
      <Tabs items={tabItems} />
    </Modal>
  );
});

export default TestModal;
