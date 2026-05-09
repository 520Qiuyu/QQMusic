import { MyButton } from '@/components';
import { MP3_TAGS } from '@/constants';
import {
  embedMp3Picture,
  readAllMp3Tag,
  readMp3Tag,
  writeMp3Tag,
  type Mp3NormalizedTags,
} from '@/libs/mp3';
import { downloadFileWithBlob } from '@/utils/download';
import { msgError, msgSuccess } from '@/utils/modal';
import { PictureOutlined, UploadOutlined } from '@ant-design/icons';
import { Card, Descriptions, Form, Image, Input, Select, Space, Upload } from 'antd';
import { useEffect, useState } from 'react';

type Mp3TagsDisplay = Omit<Mp3NormalizedTags, 'picture'> & { cover?: string | null };

const MP3_TAG_SELECT_OPTIONS = Object.entries(MP3_TAGS).filter(([key]) => key !== 'picture');

/**
 * MP3（ID3）标签测试组件，逻辑对齐 {@link FlacTab}
 */
const Mp3Tab = () => {
  const [mp3File, setMp3File] = useState<File | null>(null);
  const [mp3TagName, setMp3TagName] = useState<string>('all');
  const [mp3TagValue, setMp3TagValue] = useState('');
  const [mp3Picture, setMp3Picture] = useState<File | null>(null);
  const [picturePreview, setPicturePreview] = useState<string | null>(null);
  const [mp3Tags, setMp3Tags] = useState<Mp3TagsDisplay>({});
  const [mp3FileList, setMp3FileList] = useState<any[]>([]);
  const [pictureFileList, setPictureFileList] = useState<any[]>([]);

  const loadMp3Tags = async (file: File) => {
    if (!file) return;
    try {
      if (mp3Tags.cover) {
        URL.revokeObjectURL(mp3Tags.cover);
      }
      const tags = await readAllMp3Tag(file);
      const { picture, ...rest } = tags;
      let cover: string | null = null;
      if (picture?.length) {
        const last = picture[picture.length - 1];
        if (last.data?.byteLength) {
          const bytes = Uint8Array.from(last.data);
          const blob = new Blob([bytes], { type: last.format || 'image/jpeg' });
          cover = URL.createObjectURL(blob);
        }
      }
      setMp3Tags({
        ...rest,
        cover,
      });
      console.log('MP3 标签:', tags);
    } catch (error) {
      console.error('读取 MP3 标签失败:', error);
      msgError('读取 MP3 标签失败');
    }
  };

  useEffect(() => {
    if (mp3File) {
      loadMp3Tags(mp3File);
    }
    return () => {
      if (mp3Tags.cover) {
        URL.revokeObjectURL(mp3Tags.cover);
      }
    };
  }, [mp3File]);

  const handleMp3FileChange = ({ fileList }: any) => {
    setMp3FileList(fileList);
    if (fileList.length > 0 && fileList[0].originFileObj) {
      const file = fileList[0].originFileObj;
      setMp3File(file);
    } else {
      setMp3File(null);
      setMp3Tags({});
    }
  };

  const handlePictureChange = ({ fileList }: any) => {
    setPictureFileList(fileList);
    if (fileList.length > 0 && fileList[0].originFileObj) {
      const file = fileList[0].originFileObj;
      setMp3Picture(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPicturePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setMp3Picture(null);
      setPicturePreview(null);
    }
  };

  const handleReadMp3Tag = async (): Promise<void> => {
    try {
      if (!mp3File) {
        msgError('请选择文件');
        return;
      }
      if (mp3TagName === 'all') {
        await loadMp3Tags(mp3File);
        msgSuccess('读取所有标签成功，请查看下方信息');
      } else {
        const res = await readMp3Tag(mp3File, mp3TagName);
        msgSuccess(`读取标签 ${MP3_TAGS[mp3TagName] ?? mp3TagName} 成功: ${res || '无值'}`);
        console.log('res', res);
      }
    } catch (error) {
      console.log('error', error);
      msgError('读取标签失败');
    }
  };

  const handleWriteMp3Tag = async (): Promise<void> => {
    try {
      if (!mp3File) {
        msgError('请选择文件');
        return;
      }
      if (mp3TagName === 'all') {
        msgError('请选择具体标签');
        return;
      }
      if (!mp3TagValue.trim()) {
        msgError('请输入标签值');
        return;
      }
      const res = await writeMp3Tag(mp3File, mp3TagName, mp3TagValue);
      console.log('res', res);
      setMp3File(new File([res], mp3File.name));
      msgSuccess('写入标签成功');
    } catch (error) {
      console.log('error', error);
      msgError('写入标签失败');
    }
  };

  const handleEmbedMp3Picture = async (): Promise<void> => {
    try {
      if (!mp3File) {
        msgError('请选择文件');
        return;
      }
      if (!mp3Picture) {
        msgError('请选择图片');
        return;
      }
      const res = await embedMp3Picture(mp3File, mp3Picture);
      console.log('res', res);
      setMp3File(new File([res], mp3File.name));
      msgSuccess('嵌入图片成功');
    } catch (error) {
      console.log('error', error);
      msgError('嵌入图片失败');
    }
  };

  const handleDownloadMp3File = async (): Promise<void> => {
    try {
      if (!mp3File) {
        msgError('请选择文件');
        return;
      }
      downloadFileWithBlob(mp3File, mp3File.name || 'test.mp3');
      msgSuccess('文件下载成功');
    } catch (error) {
      console.log('error', error);
      msgError('文件下载失败');
    }
  };

  return (
    <Form>
      <Form.Item label='MP3 文件'>
        <Upload
          fileList={mp3FileList}
          accept='.mp3,audio/mpeg'
          maxCount={1}
          beforeUpload={async () => {
            return false;
          }}
          onChange={handleMp3FileChange}>
          <MyButton icon={<UploadOutlined />}>选择 MP3 文件</MyButton>
        </Upload>
      </Form.Item>

      {Object.keys(mp3Tags).length > 0 && (
        <Form.Item label='MP3 标签信息'>
          <Card size='small'>
            <Descriptions column={2} size='small'>
              {Object.entries(mp3Tags).map(([key, value]) => (
                <Descriptions.Item key={key} label={MP3_TAGS[key] || key.toUpperCase()}>
                  {key === 'cover' && value ? (
                    <Image
                      src={value}
                      alt='封面'
                      width={100}
                      height={100}
                      style={{ objectFit: 'cover', borderRadius: 4 }}
                      preview
                    />
                  ) : key === 'cover' ? (
                    '无封面'
                  ) : (
                    value
                  )}
                </Descriptions.Item>
              ))}
            </Descriptions>
          </Card>
        </Form.Item>
      )}

      <Form.Item label='标签操作'>
        <Space wrap>
          <Select
            style={{ width: 150 }}
            options={[
              { label: '全部', value: 'all' },
              ...MP3_TAG_SELECT_OPTIONS.map(([key, label]) => ({
                label,
                value: key,
              })),
            ]}
            value={mp3TagName}
            onChange={(value) => setMp3TagName(value)}
          />
          <Input
            placeholder='请输入标签值'
            value={mp3TagValue}
            onChange={(e) => setMp3TagValue(e.target.value)}
            style={{ width: 200 }}
          />
          <MyButton type='primary' onClick={handleReadMp3Tag}>
            读取标签
          </MyButton>
          <MyButton type='primary' onClick={handleWriteMp3Tag}>
            写入标签
          </MyButton>
        </Space>
      </Form.Item>

      <Form.Item label='封面图片'>
        <Space wrap>
          <Upload
            fileList={pictureFileList}
            accept='.jpg,.png,.jpeg'
            maxCount={1}
            beforeUpload={async () => {
              return false;
            }}
            onChange={handlePictureChange}>
            <MyButton icon={<PictureOutlined />}>选择图片</MyButton>
          </Upload>
          {picturePreview && (
            <Image
              src={picturePreview}
              alt='封面预览'
              width={100}
              height={100}
              style={{ objectFit: 'cover', borderRadius: 4 }}
              preview
            />
          )}
          <MyButton type='primary' onClick={handleEmbedMp3Picture}>
            嵌入图片
          </MyButton>
        </Space>
      </Form.Item>

      <Form.Item label='文件操作'>
        <MyButton type='primary' onClick={handleDownloadMp3File}>
          下载最新文件
        </MyButton>
      </Form.Item>
    </Form>
  );
};

export default Mp3Tab;
