import { MyButton } from '@/components';
import { FLAC_TAGS, FlacTagList } from '@/constants';
import {
  embedFlacPicture,
  readAllFlacTag,
  readFlacPictures,
  readFlacTag,
  writeFlacTag,
  type FlacTags,
} from '@/libs/flac';
import { downloadFileWithBlob } from '@/utils/download';
import { msgError, msgSuccess } from '@/utils/modal';
import { PictureOutlined, UploadOutlined } from '@ant-design/icons';
import { Card, Descriptions, Form, Image, Input, Select, Space, Upload } from 'antd';
import { useEffect, useState } from 'react';

/**
 * FLAC标签相关测试组件
 */
const FlacTab = () => {
  const [flacFile, setFlacFile] = useState<File | null>(null);
  const [flacTagName, setFlacTagName] = useState<string>('all');
  const [flacTagValue, setFlacTagValue] = useState('');
  const [flacPicture, setFlacPicture] = useState<File | null>(null);
  const [picturePreview, setPicturePreview] = useState<string | null>(null);
  const [flacTags, setFlacTags] = useState<FlacTags & { cover?: string | null }>({});
  const [flacFileList, setFlacFileList] = useState<any[]>([]);
  const [pictureFileList, setPictureFileList] = useState<any[]>([]);

  // 读取 FLAC 标签并更新显示
  const loadFlacTags = async (file: File) => {
    if (!file) return;
    try {
      if (flacTags.cover) {
        URL.revokeObjectURL(flacTags.cover);
      }
      const tags = await readAllFlacTag(file);
      const covers = (await readFlacPictures(file)) || [];
      const cover = covers.length > 0 ? URL.createObjectURL(covers[covers.length - 1]) : null;
      setFlacTags({
        ...tags,
        cover,
      });
      console.log('FLAC 标签:', tags);
    } catch (error) {
      console.error('读取 FLAC 标签失败:', error);
      msgError('读取 FLAC 标签失败');
    }
  };

  // 当文件变化时自动读取标签
  useEffect(() => {
    if (flacFile) {
      loadFlacTags(flacFile);
    }
    return () => {
      if (flacTags.cover) {
        URL.revokeObjectURL(flacTags.cover);
      }
    };
  }, [flacFile]);

  // 处理 FLAC 文件上传
  const handleFlacFileChange = ({ fileList }: any) => {
    setFlacFileList(fileList);
    if (fileList.length > 0 && fileList[0].originFileObj) {
      const file = fileList[0].originFileObj;
      setFlacFile(file);
    } else {
      setFlacFile(null);
      setFlacTags({});
    }
  };

  // 处理图片上传
  const handlePictureChange = ({ fileList }: any) => {
    setPictureFileList(fileList);
    if (fileList.length > 0 && fileList[0].originFileObj) {
      const file = fileList[0].originFileObj;
      setFlacPicture(file);
      // 创建预览
      const reader = new FileReader();
      reader.onload = (e) => {
        setPicturePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFlacPicture(null);
      setPicturePreview(null);
    }
  };

  const handleReadFlacTag = async (): Promise<void> => {
    try {
      if (!flacFile) {
        msgError('请选择文件');
        return;
      }
      if (flacTagName === 'all') {
        const res = await readAllFlacTag(flacFile);
        setFlacTags(res);
        msgSuccess('读取所有标签成功，请查看下方信息');
        console.log('res', res);
      } else {
        const res = await readFlacTag(flacFile, flacTagName as keyof FlacTags);
        msgSuccess(`读取标签 ${FLAC_TAGS[flacTagName]} 成功: ${res || '无值'}`);
        console.log('res', res);
      }
    } catch (error) {
      console.log('error', error);
      msgError('读取标签失败');
    }
  };

  const handleWriteFlacTag = async (): Promise<void> => {
    try {
      if (!flacFile) {
        msgError('请选择文件');
        return;
      }
      if (flacTagName === 'all') {
        msgError('请选择具体标签');
        return;
      }
      if (!flacTagValue.trim()) {
        msgError('请输入标签值');
        return;
      }
      const res = await writeFlacTag(flacFile, flacTagName as keyof FlacTags, flacTagValue);
      if (res) {
        console.log('res', res);
        setFlacFile(new File([res], flacFile.name));
        msgSuccess('写入标签成功');
      }
    } catch (error) {
      console.log('error', error);
      msgError('写入标签失败');
    }
  };

  const handleEmbedFlacPicture = async (): Promise<void> => {
    try {
      if (!flacFile) {
        msgError('请选择文件');
        return;
      }
      if (!flacPicture) {
        msgError('请选择图片');
        return;
      }
      const res = await embedFlacPicture(flacFile, flacPicture);
      if (res) {
        console.log('res', res);
        setFlacFile(new File([res], flacFile.name));
        msgSuccess('嵌入图片成功');
      }
    } catch (error) {
      console.log('error', error);
      msgError('嵌入图片失败');
    }
  };

  const handleDownloadFlacFile = async (): Promise<void> => {
    try {
      if (!flacFile) {
        msgError('请选择文件');
        return;
      }
      downloadFileWithBlob(flacFile, flacFile.name || 'test.flac');
      msgSuccess('文件下载成功');
    } catch (error) {
      console.log('error', error);
      msgError('文件下载失败');
    }
  };

  return (
    <Form>
      {/* FLAC 文件上传 */}
      <Form.Item label='FLAC 文件'>
        <Upload
          fileList={flacFileList}
          accept='.flac'
          maxCount={1}
          beforeUpload={async () => {
            return false;
          }}
          onChange={handleFlacFileChange}>
          <MyButton icon={<UploadOutlined />}>选择 FLAC 文件</MyButton>
        </Upload>
      </Form.Item>

      {/* FLAC 标签信息展示 */}
      {Object.keys(flacTags).length > 0 && (
        <Form.Item label='FLAC 标签信息'>
          <Card size='small'>
            <Descriptions column={2} size='small'>
              {Object.entries(flacTags).map(([key, value]) => (
                <Descriptions.Item
                  key={key}
                  label={FLAC_TAGS[key] || key.toUpperCase()}>
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

      {/* 标签操作 */}
      <Form.Item label='标签操作'>
        <Space wrap>
          <Select
            style={{ width: 150 }}
            options={[
              { label: '全部', value: 'all' },
              ...Object.entries(FLAC_TAGS).map(([key, value]) => ({
                label: value,
                value: key,
              })),
            ]}
            value={flacTagName}
            onChange={(value) => setFlacTagName(value)}
          />
          <Input
            placeholder='请输入标签值'
            value={flacTagValue}
            onChange={(e) => setFlacTagValue(e.target.value)}
            style={{ width: 200 }}
          />
          <MyButton type='primary' onClick={handleReadFlacTag}>
            读取标签
          </MyButton>
          <MyButton type='primary' onClick={handleWriteFlacTag}>
            写入标签
          </MyButton>
        </Space>
      </Form.Item>

      {/* 图片上传 */}
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
          <MyButton type='primary' onClick={handleEmbedFlacPicture}>
            嵌入图片
          </MyButton>
        </Space>
      </Form.Item>

      {/* 文件操作 */}
      <Form.Item label='文件操作'>
        <MyButton type='primary' onClick={handleDownloadFlacFile}>
          下载最新文件
        </MyButton>
      </Form.Item>
    </Form>
  );
};

export default FlacTab;
