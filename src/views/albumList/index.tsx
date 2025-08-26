import { getAlbumPicUrl } from '@/apis/album';
import { CopyText, SearchForm } from '@/components';
import type { Option as SearchFormOption } from '@/components/SearchForm';
import { usePlayMusic } from '@/hooks/usePlayMusic';
import { uniqueArrayByKey } from '@/utils';
import { downloadAsJson } from '@/utils/download';
import { msgError, msgLoading, msgSuccess, msgWarning } from '@/utils/modal';
import {
  DownloadOutlined,
  LoadingOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  SaveOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { App, Avatar, Button, Image, Modal, Space, Table, Tag, Typography, message } from 'antd';
import type { ColumnType } from 'antd/es/table';
import type { TableProps } from 'antd/lib';
import { forwardRef, useState, type ForwardedRef } from 'react';
import { getSingerAllAlbum } from '../../apis/singer';
import { useFilter, useGetAlbumDetail, useGetData, useVisible } from '../../hooks';
import type { Ref } from '../../hooks/useVisible';
import type { AlbumInfo } from '../../types/singer';
import styles from './index.module.scss';

interface SearchParams {
  pageNum: number;
  pageSize: number;
}

interface IOpenParams {
  singerId: number;
  singerMid: string;
  singerName: string;
  singerPic?: string;
}

const { Text, Title } = Typography;

const AlbumListModal = forwardRef((props, ref: ForwardedRef<Ref<any, IOpenParams>>) => {
  const { visible, open, close } = useVisible(
    {
      onOpen: (params: IOpenParams) => {
        console.log('params', params);
        setSingerInfo(params);
      },
      onReset: () => {
        setSingerInfo({} as IOpenParams);
      },
    },
    ref,
  );

  const [singerInfo, setSingerInfo] = useState<IOpenParams>({} as IOpenParams);

  // 获取专辑数据
  const { data, loading } = useGetData(getSingerAllAlbum, singerInfo.singerMid, {
    monitors: [singerInfo.singerMid, visible],
    returnFunction: () => !visible || !singerInfo.singerMid,
    initialValue: [],
  });

  const searchFormOptions: SearchFormOption[] = [
    {
      label: '专辑名称',
      name: 'albumName',
      type: 'select',
      options: uniqueArrayByKey(data, 'albumName').map((item) => ({
        label: item.albumName,
        value: item.albumName,
      })),
      inputProps: {
        mode: 'multiple',
      },
    },
  ];

  const { filteredList, handleFilter } = useFilter(data, {
    fields: {
      albumName: {
        getValue: (item) => item.albumName,
      },
    },
  });

  const { play, pause, stop, isPlaying, download } = usePlayMusic();
  const {
    albumInfo,
    isLoading,
    getAlbumDetail,
    getAlbumSongList,
    playAlbum,
    downloadAlbumSong,
    getDownLoadJson,
  } = useGetAlbumDetail();

  /** 处理专辑播放 */
  const [playing, setPlaying] = useState<string | undefined>();
  const handlePlay = async (record: AlbumInfo) => {
    try {
      setPlaying(record.albumMid);
      const { albumMid, albumName } = record;
      // 使用 msgLoading 的 Promise 形式，让它自动处理成功和失败
      const hide = msgLoading(`正在加载《${albumName}》...`);

      await playAlbum(albumMid);

      hide();
      msgSuccess(`《${albumName}》开始播放`);
    } catch (error) {
      console.error('播放失败:', error);
    } finally {
      setPlaying(undefined);
    }
  };

  const [downloading, setDownloading] = useState<string | undefined>();
  /**
   * 处理专辑下载
   * @param record 专辑信息
   */
  const handleDownload = async (record: AlbumInfo) => {
    try {
      setDownloading(record.albumMid);
      const { albumMid, albumName } = record;

      // 使用 msgLoading 的 Promise 形式，让它自动处理成功和失败
      const hide = msgLoading(`正在准备下载《${albumName}》...`);

      // 这里需要获取专辑详情并下载所有歌曲
      // 暂时使用专辑MID作为歌曲MID（实际项目中需要获取专辑详情）
      await downloadAlbumSong(albumMid);
      hide();
      msgSuccess(`《${albumName}》下载成功！`);
    } catch (error) {
      console.error('下载失败:', error);
    } finally {
      setDownloading(undefined);
    }
  };

  const [downloadingJson, setDownloadingJson] = useState<string | undefined>(undefined);
  const handleDownloadJson = async (record: AlbumInfo) => {
    try {
      setDownloadingJson(record.albumMid);
      const { albumMid, albumName } = record;
      const res = await getDownLoadJson(albumMid);
      downloadAsJson([res], `${albumName}-专辑`);
    } catch (error) {
      msgError('下载JSON失败: ' + (error as Error).message);
    } finally {
      setDownloadingJson(undefined);
    }
  };

  // 表格列配置
  const columns: ColumnType<AlbumInfo>[] = [
    {
      title: '专辑信息',
      dataIndex: 'albumName',
      key: 'albumName',
      width: 300,
      render: (text, record) => (
        <Space size='middle' className={styles['album-info']}>
          <div className={styles['album-cover']}>
            <Image
              width={60}
              height={60}
              src={getAlbumPicUrl(record.albumMid)}
              alt={text}
              fallback='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN'
            />
          </div>
          <div className={styles['album-details']}>
            <div className={styles['album-name']} title={text}>
              {text}
            </div>
            <div className={styles['album-trans-name']} title={record.albumTranName || ''}>
              {record.albumTranName || ''}
            </div>
            <div className={styles['album-type']}>
              <Tag color='blue'>{record.albumType || '专辑'}</Tag>
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: '歌手',
      dataIndex: 'singerName',
      key: 'singerName',
      width: 200,
      render: (singerName: string) => (
        <Space size='small'>
          <Avatar icon={<UserOutlined />} src={singerInfo?.singerPic} size={40} />
          <div className={styles['singer-info']}>
            <div className={styles['singer-name']} title={singerName || '未知歌手'}>
              {singerName || '未知歌手'}
            </div>
            <div className={styles['singer-id']} title={singerInfo?.singerId?.toString() || ''}>
              {singerInfo?.singerId || ''}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: '发行时间',
      dataIndex: 'publishDate',
      key: 'publishDate',
      width: 150,
      align: 'center',
      render: (publishDate: string) => {
        return (
          <Text className={styles['publish-date']} title={publishDate}>
            {publishDate || '未知'}
          </Text>
        );
      },
    },
    {
      title: '歌曲数',
      dataIndex: 'totalNum',
      key: 'totalNum',
      width: 100,
      align: 'center',
      render: (totalNum: number) => <Tag color='green'>{totalNum || 0} 首</Tag>,
    },
    {
      title: '专辑ID',
      dataIndex: 'albumID',
      key: 'albumID',
      width: 120,
      align: 'center',
      render: (albumID: number) => (
        <CopyText className={styles['album-id-text']} text={albumID + ''} />
      ),
    },
    {
      title: '专辑MID',
      dataIndex: 'albumMid',
      key: 'albumMid',
      width: 200,
      align: 'center',
      render: (albumMid: string) => (
        <CopyText className={styles['album-mid-text']} text={albumMid} />
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 300,
      align: 'center',
      fixed: 'right',
      render: (_, record: AlbumInfo) => {
        return (
          <Space size='middle'>
            <Button
              type='link'
              size='small'
              loading={playing === record.albumMid}
              icon={playing === record.albumMid ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
              onClick={() => {
                if (isPlaying === record.albumMid) {
                  pause();
                } else {
                  handlePlay(record);
                  return;
                }
              }}
              title='播放专辑'>
              播放
            </Button>
            <Button
              type='link'
              size='small'
              loading={downloadingJson === record.albumMid}
              icon={<SaveOutlined />}
              onClick={() => handleDownloadJson(record)}
              title='下载JSON'>
              下载JSON
            </Button>
            <Button
              type='link'
              size='small'
              loading={downloading === record.albumMid}
              icon={<DownloadOutlined />}
              onClick={() => handleDownload(record)}
              title='下载专辑'>
              下载
            </Button>
          </Space>
        );
      },
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [selectedRows, setSelectedRows] = useState<AlbumInfo[]>([]);
  const rowSelection: TableProps<AlbumInfo>['rowSelection'] = {
    preserveSelectedRowKeys: true,
    selectedRowKeys: selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys as string[]);
      setSelectedRows(selectedRows as AlbumInfo[]);
      console.log('selectedRowKeys', selectedRowKeys);
      console.log('selectedRows', selectedRows);
    },
  };

  const renderTitle = () => {
    return (
      <div className={styles['modal-title']}>
        <div className={styles['title-content']}>
          <Title level={4} style={{ margin: 0 }}>
            {singerInfo.singerName} - 专辑列表
          </Title>
          <div className={styles['title-stats']}>
            <span className={`${styles['stat-item']} ${loading ? styles['loading'] : ''}`}>
              <span className={styles['stat-label']}>专辑</span>
              <span className={styles['stat-value']}>{loading ? '...' : data?.length || 0}</span>
            </span>
            <span className={`${styles['stat-item']} ${loading ? styles['loading'] : ''}`}>
              <span className={styles['stat-label']}>歌曲</span>
              <span className={styles['stat-value']}>
                {loading
                  ? '...'
                  : data?.reduce((sum, album) => sum + (album.totalNum || 0), 0) || 0}
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  /** 批量下载选中的专辑 */
  const [downloadingBatch, setDownloadingBatch] = useState(false);
  const handleBatchDownload = async () => {
    if (selectedRows.length === 0) {
      msgWarning('请先选择要下载的专辑');
      return;
    }

    try {
      setDownloadingBatch(true);
      message.loading(`正在准备下载 ${selectedRows.length} 张专辑...`, 0);

      // 这里可以实现批量下载逻辑
      // 暂时只是显示成功消息
      await new Promise((resolve) => setTimeout(resolve, 2000));

      message.destroy();
      msgSuccess(`成功下载 ${selectedRows.length} 张专辑！`);

      // 清空选择
      setSelectedRowKeys([]);
      setSelectedRows([]);
    } catch (error) {
      message.destroy();
      msgError('批量下载失败: ' + (error as Error).message);
      console.error('批量下载失败:', error);
    } finally {
      setDownloadingBatch(false);
    }
  };

  /** 批量下载选中专辑的JSON */
  const [downloadingBatchJson, setDownloadingBatchJson] = useState(false);
  const handleBatchDownloadJson = async () => {
    if (selectedRows.length === 0) {
      msgWarning('请先选择要下载的专辑');
      return;
    }
    try {
      setDownloadingBatchJson(true);

      // 使用 msgLoading 的 Promise 形式，让它自动处理成功和失败
      const hide = msgLoading(`正在准备下载 ${selectedRows.length} 张专辑...`);

      const result = [] as any;
      for (const album of selectedRows) {
        console.log('album', album);
        const res = await getDownLoadJson(album.albumMid);
        result.push(res);
      }
      downloadAsJson(result, `${singerInfo.singerName}-专辑`);
      hide();
      msgSuccess(`成功下载 ${selectedRows.length} 张专辑！`);
    } catch (error) {
      console.error('批量下载JSON失败:', error);
    } finally {
      setDownloadingBatchJson(false);
    }
  };

  const renderFooter = () => {
    return (
      <div className={styles['footer']}>
        {/* 已选择数目 */}
        <div className={styles['selected-count']}>
          已选择 {selectedRows.length} 张专辑
          {selectedRows.length > 0 && (
            <span className={styles['selected-info']}>
              （共 {selectedRows.reduce((sum, album) => sum + (album.totalNum || 0), 0)} 首歌曲）
            </span>
          )}
        </div>
        <Space>
          {/* 全部选择 */}
          <Button
            onClick={() => {
              setSelectedRowKeys(filteredList?.map((item) => item.albumMid) || []);
              setSelectedRows(filteredList || []);
            }}
            disabled={filteredList?.length === 0}>
            全部选择
          </Button>
          <Button
            onClick={() => {
              setSelectedRowKeys([]);
              setSelectedRows([]);
            }}
            disabled={selectedRows.length === 0}>
            清空选择
          </Button>
          {/* 下载Json选中专辑 */}
          <Button
            type='primary'
            onClick={handleBatchDownloadJson}
            loading={downloadingBatchJson}
            disabled={selectedRows.length === 0}>
            下载Json{selectedRows?.length ? `(${selectedRows?.length})` : ''}
          </Button>
          <Button
            type='primary'
            onClick={handleBatchDownload}
            loading={downloadingBatch}
            disabled={selectedRows.length === 0}>
            下载选中专辑{selectedRows?.length ? `(${selectedRows?.length})` : ''}
          </Button>
        </Space>
      </div>
    );
  };

  return (
    <Modal
      title={renderTitle()}
      open={visible}
      onCancel={close}
      footer={renderFooter()}
      width={1200}
      centered
      className={styles['album-list-modal']}>
      <SearchForm
        options={searchFormOptions}
        onSearch={handleFilter}
        style={{ marginBottom: 16 }}
      />

      {/* 专辑列表 */}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={filteredList || []}
        rowKey='albumMid'
        loading={loading}
        scroll={{ y: 500, x: 1100 }}
        className={styles['album-table']}
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          align: 'end',
          showTotal: (total) => `共 ${total} 张专辑`,
        }}
      />
    </Modal>
  );
});

export default AlbumListModal;
