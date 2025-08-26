import { CloseOutlined } from '@ant-design/icons';
import type { ModalFuncProps } from 'antd';
import { App } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import type { NotificationInstance } from 'antd/es/notification/interface';
import { nanoid } from 'nanoid';

// 静态消费有问题,参考官方示例↓
// https://ant-design.antgroup.com/components/app-cn#%E5%85%A8%E5%B1%80%E5%9C%BA%E6%99%AFredux-%E5%9C%BA%E6%99%AF

let message: MessageInstance;
let notification: NotificationInstance;
let modal: Omit<ModalStaticFunctions, 'warn'>;

export default () => {
  const staticFunction = App.useApp();
  message = staticFunction.message;
  modal = staticFunction.modal;
  notification = staticFunction.notification;
  return null;
};

/** 普通消息提示 */
export const msg = (content: string) => {
  return message.info(content);
};
/** 成功消息提示 */
export const msgSuccess = (content: string) => {
  return message.success(content);
};
/** 警告消息提示 */
export const msgWarning = (content: string) => {
  return message.warning(content);
};
/** 错误消息提示 */
export const msgError = (content: string) => {
  return message.error(content);
};
/** 加载中消息提示 */
export const msgLoading = (loadingContent: string, completeCallBack?: () => void) => {
  const key = nanoid();
  message
    .loading({
      key,
      content: loadingContent,
    })
    .then(() => {
      completeCallBack?.();
    });
  return () => message.destroy(key);
};

/** 确认弹窗 */
export const confirm = (
  content: string,
  title: string = '提示',
  otherOptions: ModalFuncProps = {},
) => {
  return new Promise((resolve, reject) => {
    const instance = modal.confirm({
      centered: true,
      content,
      icon: null,
      // @ts-ignore
      closeIcon: <CloseOutlined />,
      title,
      width: 398,
      okButtonProps: {
        shape: 'round',
        type: 'primary',
      },
      cancelButtonProps: {
        shape: 'round',
        type: 'default',
      },
      okText: '确定',
      onCancel: () => {
        reject(false);
      },
      onOk: () => {
        resolve(true);
      },
      ...otherOptions,
    });
  });
};

/** info提示弹窗 */
export const info = (
  content: string,
  title: string = '提示',
  otherOptions: ModalFuncProps = {},
) => {
  return new Promise((resolve, reject) => {
    const instance = modal.info({
      centered: true,
      content,
      icon: null,
      closeIcon: <CloseOutlined />,
      title,
      width: 398,
      okButtonProps: {
        shape: 'round',
        type: 'primary',
      },
      cancelButtonProps: {
        shape: 'round',
        type: 'default',
      },
      okText: '确定',
      onCancel: () => {
        reject(false);
      },
      onOk: () => {
        resolve(true);
      },
      ...otherOptions,
    });
  });
};
