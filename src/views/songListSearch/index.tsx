import { Modal, Form, Select, Input, Button, Table, Space, Avatar, Tag, Image } from "antd";
import { SearchOutlined, PlayCircleOutlined, HeartOutlined } from "@ant-design/icons";
import { forwardRef, type ForwardedRef, useState, useEffect } from "react";
import { useVisible } from "../../hooks";
import type { Ref } from "../../hooks/useVisible";
import { getSongListCategory, getSongList, getSongListDetail } from "../../apis/songList";
import type { SongListData, SongListCategoryData } from "../../types/songList";

const { Option } = Select;

interface SongListSearchForm {
  categoryId: number;
  sortId: number;
  keyword?: string;
}

const SongListSearch = forwardRef((props, ref: ForwardedRef<Ref>) => {
  const { visible, open, close } = useVisible({}, ref);
  const [form] = Form.useForm<SongListSearchForm>();
  const [loading, setLoading] = useState(false);
  const [songList, setSongList] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [categories, setCategories] = useState<SongListCategoryData[]>([]);

  // 获取歌单分类
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getSongListCategory();
        setCategories(res || []);
      } catch (error) {
        console.error("获取歌单分类失败:", error);
      }
    };
    fetchCategories();
  }, []);

  // 表格列配置
  const columns = [
    {
      title: "歌单",
      dataIndex: "dissname",
      key: "dissname",
      render: (text: string, record: any) => (
        <Space>
          <Image
            src={record.imgurl}
            alt={text}
            width={40}
            height={40}
            style={{ borderRadius: 4 }}
            fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
          />
          <div>
            <div style={{ fontWeight: 500 }}>{text}</div>
            <div style={{ fontSize: 12, color: '#666' }}>
              {record.creator?.name || '未知用户'}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: "分类",
      dataIndex: "categoryId",
      key: "categoryId",
      render: (categoryId: number) => {
        const category = categories.find(item => item.categoryId === categoryId);
        return category ? <Tag color="blue">{category.categoryName}</Tag> : "-";
      },
    },
    {
      title: "歌曲数",
      dataIndex: "song_count",
      key: "song_count",
      render: (count: number) => (
        <Tag color="green">{count} 首</Tag>
      ),
    },
    {
      title: "播放量",
      dataIndex: "listennum",
      key: "listennum",
      render: (num: number) => {
        if (num >= 10000) {
          return <span>{(num / 10000).toFixed(1)}万</span>;
        }
        return <span>{num}</span>;
      },
    },
    {
      title: "收藏数",
      dataIndex: "favoritenum",
      key: "favoritenum",
      render: (num: number) => {
        if (num >= 10000) {
          return <span>{(num / 10000).toFixed(1)}万</span>;
        }
        return <span>{num}</span>;
      },
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

  // 搜索歌单
  const handleSearch = async (page = 0) => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      const res = await getSongList({
        categoryId: values.categoryId,
        sortId: values.sortId,
        page,
        limit: 20,
      });
      setSongList(res.list || []);
      setTotal(res.total || 0);
      setCurrentPage(page);
    } catch (error) {
      console.error("搜索歌单失败:", error);
    } finally {
      setLoading(false);
    }
  };

  // 重置搜索
  const handleReset = () => {
    form.resetFields();
    setSongList([]);
    setTotal(0);
    setCurrentPage(0);
  };

  // 分页变化
  const handlePageChange = (page: number) => {
    handleSearch(page - 1); // API 使用从0开始的页码
  };

  return (
    <Modal
      title="歌单查询"
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
        initialValues={{
          categoryId: 10000000, // 默认全部
          sortId: 5, // 默认推荐
        }}
      >
        <Form.Item name="categoryId" label="分类">
          <Select style={{ width: 150 }}>
            <Option value={10000000}>全部</Option>
            {categories.map(item => (
              <Option key={item.categoryId} value={item.categoryId}>
                {item.categoryName}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="sortId" label="排序">
          <Select style={{ width: 120 }}>
            <Option value={5}>推荐</Option>
            <Option value={2}>最新</Option>
            <Option value={3}>最热</Option>
          </Select>
        </Form.Item>

        <Form.Item name="keyword" label="关键词">
          <Input 
            placeholder="歌单名称" 
            style={{ width: 200 }}
            allowClear
          />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button 
              type="primary" 
              icon={<SearchOutlined />}
              onClick={() => handleSearch(0)}
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

      {/* 歌单列表 */}
      <Table
        columns={columns}
        dataSource={songList}
        rowKey="tid"
        loading={loading}
        pagination={{
          current: currentPage + 1, // 转换为从1开始的页码
          total: total,
          pageSize: 20,
          showSizeChanger: false,
          showQuickJumper: true,
          showTotal: (total) => `共 ${total} 个歌单`,
          onChange: handlePageChange,
        }}
        scroll={{ y: 500 }}
      />
    </Modal>
  );
});

export default SongListSearch;
