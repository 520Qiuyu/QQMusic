import { CloseOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Modal, message } from 'antd';
import React from 'react';

message.config({
  top: 100,
});

/** 普通消息提示 */
export const msg = (content) => {
  message.info(content);
};
/** 成功消息提示 */
export const msgSuccess = (content) => {
  message.success(content);
};
/** 警告消息提示 */
export const msgWarning = (content) => {
  message.warning(content);
};
/** 错误消息提示 */
export const msgError = (content) => {
  message.error(content);
};

/** 确认弹窗 */
export const confirm = (content, title, otherOptions = {}) => {
  return new Promise((resolve, reject) => {
    const instance = Modal.confirm({
      centered: true,
      content,
      icon: null,
      closable: true,
      title: title || '提示',
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
      cancelText: '取消',
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
