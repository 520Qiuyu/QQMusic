import { Modal, Form, Input, Button, Table, Space, Image, Tag, Avatar } from "antd";
import { SearchOutlined, PlayCircleOutlined, HeartOutlined, UserOutlined } from "@ant-design/icons";
import { forwardRef, type ForwardedRef, useState } from "react";
import { useVisible } from "../../hooks";
import type { Ref } from "../../hooks/useVisible";
import { getAlbumInfo, searchAlbums } from "../../apis/album";
import type { AlbumInfoData } from "../../types/album";

interface AlbumSearchForm {
  keyword?: string;
  artist?: string;
}

const AlbumSearch = forwardRef((props, ref: ForwardedRef<Ref>) => {
  const { visible, open, close } = useVisible({}, ref);
  const [form] = Form.useForm<AlbumSearchForm>();
  const [loading, setLoading] = useState(false);
  const [albumList, setAlbumList] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // 表格列配置
  const columns = [
    {
      title: "专辑",
      dataIndex: "albumName",
      key: "albumName",
      render: (text: string, record: any) => (
        <Space>
          <Image
            src={record.albumPic || record.imgurl}
            alt={text}
            width={50}
            height={50}
            style={{ borderRadius: 4 }}
            fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
          />
          <div>
            <div style={{ fontWeight: 500 }}>{text}</div>
            <div style={{ fontSize: 12, color: '#666' }}>
              {record.singerName || record.artist || '未知歌手'}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: "歌手",
      dataIndex: "singerName",
      key: "singerName",
      render: (text: string, record: any) => (
        <Space>
          <Avatar 
            src={record.singerPic} 
            icon={<UserOutlined />}
            size="small"
          />
          <span>{text || record.artist || '未知歌手'}</span>
        </Space>
      ),
    },
    {
      title: "发行时间",
      dataIndex: "publishDate",
      key: "publishDate",
      render: (date: string) => (
        <span>{date || '未知'}</span>
      ),
    },
    {
      title: "歌曲数",
      dataIndex: "songCount",
      key: "songCount",
      render: (count: number) => (
        <Tag color="green">{count || 0} 首</Tag>
      ),
    },
    {
      title: "专辑类型",
      dataIndex: "albumType",
      key: "albumType",
      render: (type: string) => (
        <Tag color="blue">{type || '专辑'}</Tag>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (_, record: any) => (
        <Space size="middle">
          <Button 
            type="link" 
            size="small" 
            icon={<PlayCircleOutlined />}
          >
            播放
          </Button>
          <Button 
            type="link" 
            size="small" 
            icon={<HeartOutlined />}
          >
            收藏
          </Button>
          <Button type="link" size="small">
            查看详情
          </Button>
        </Space>
      ),
    },
  ];

  // 搜索专辑
  const handleSearch = async (page = 1) => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      
      const res = await searchAlbums({
        keyword: values.keyword,
        artist: values.artist,
        page,
        limit: 20,
      });
      
      setAlbumList(res.list || []);
      setTotal(res.total || 0);
      setCurrentPage(page);
    } catch (error) {
      console.error("搜索专辑失败:", error);
    } finally {
      setLoading(false);
    }
  };

  // 重置搜索
  const handleReset = () => {
    form.resetFields();
    setAlbumList([]);
    setTotal(0);
    setCurrentPage(1);
  };

  // 分页变化
  const handlePageChange = (page: number) => {
    handleSearch(page);
  };

  return (
    <Modal
      title="专辑查询"
      open={visible}
      onCancel={close}
      footer={null}
      width={1200}
      centered
    >
      {/* 搜索表单 */}
      <Form
        form={form}
        layout="inline"
        style={{ marginBottom: 16 }}
      >
        <Form.Item name="keyword" label="专辑名称">
          <Input 
            placeholder="请输入专辑名称" 
            style={{ width: 200 }}
            allowClear
          />
        </Form.Item>

        <Form.Item name="artist" label="歌手">
          <Input 
            placeholder="请输入歌手名称" 
            style={{ width: 200 }}
            allowClear
          />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button 
              type="primary" 
              icon={<SearchOutlined />}
              onClick={() => handleSearch(1)}
              loading={loading}
            >
              搜索
            </Button>
            <Button onClick={handleReset}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>

      {/* 专辑列表 */}
      <Table
        columns={columns}
        dataSource={albumList}
        rowKey="albumId"
        loading={loading}
        pagination={{
          current: currentPage,
          total: total,
          pageSize: 20,
          showSizeChanger: false,
          showQuickJumper: true,
          showTotal: (total) => `共 ${total} 张专辑`,
          onChange: handlePageChange,
        }}
        scroll={{ y: 500 }}
      />
    </Modal>
  );
});

export default AlbumSearch;
