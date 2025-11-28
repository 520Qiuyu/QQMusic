import { getUserAccount, uploadLocalSong } from '@/apis/neteaseApi';
import { MyButton } from '@/components';
import { UploadOutlined } from '@ant-design/icons';
import { Form, Space, Upload } from 'antd';

/**
 * 网易云音乐相关测试组件
 */
const NeteaseMusicTab = () => {
  /** 获取用户信息 */
  const handleGetUserAccount = async () => {
    const res = await getUserAccount();
    console.log('res', res);
  };

  const [file, setFile] = useState<File | null>(null);
  /** 上传本地歌曲 */
  const handleUploadLocalSong = async () => {
    if (!file) return;
    const res = await uploadLocalSong(file);
    console.log('res', res);
  };
  return (
    <Form>
      <Form.Item label='网易云用户信息'>
        <MyButton type='primary' onClick={handleGetUserAccount}>
          获取用户信息
        </MyButton>
      </Form.Item>
      <Form.Item label='上传本地歌曲'>
        <Space wrap>
          <Upload
            accept='.mp3,.flac,.wav,.m4a,.aac,.ogg,.ape'
            maxCount={1}
            beforeUpload={async (file) => {
              return false;
            }}
            onChange={(info) => {
              setFile(info.fileList[0].originFileObj as File);
            }}>
            <MyButton icon={<UploadOutlined />}>选择本地歌曲</MyButton>
          </Upload>
          <MyButton type='primary' onClick={handleUploadLocalSong}>
            上传本地歌曲
          </MyButton>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default NeteaseMusicTab;
