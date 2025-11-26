import { useState, useRef, useImperativeHandle } from 'react';
import type { RefObject } from 'react';

/** 习惯使用函数式弹窗
 * 通过ref调用组件内部的
 * 方法来打开弹窗，可以避
 * 免许多各种各样的visible */
export const useVisible = (props: Props = {}, ref?: React.ForwardedRef<any>) => {
  const {
    onOpen = NOOP,
    onClose = NOOP,
    onReset = NOOP,
    resetOnOpen = true,
    resetOnClose = false,
  } = props;
  const [visible, setVisible] = useState(false);
  const open = (params?: any) => {
    resetOnOpen && reset();
    setVisible(true);
    onOpen(params);
  };
  const close = () => {
    resetOnClose && reset();
    setVisible(false);
    onClose();
  };
  const reset = () => {
    setVisible(false);
    onReset();
  };
  const resolve = useRef<((p: any) => void) | null>(null);
  const reject = useRef<((p: any) => void) | null>(null);
  const submit = <T = any>() => {
    return new Promise<T>((_resolve, _reject) => {
      resolve.current = _resolve;
      reject.current = _reject;
    });
  };

  ref &&
    useImperativeHandle(ref, () => ({
      open,
      close,
      reset,
      submit,
      resolve,
      reject,
    }));

  return {
    visible,
    open,
    close,
    reset,
    submit,
    resolve,
    reject,
  };
};

interface Props {
  onOpen?: (params?: any) => void;
  onClose?: () => void;
  onReset?: () => void;
  /** 打开的时候是否reset 默认为true */
  resetOnOpen?: boolean;
  /** 关闭的时候是否reset 默认为false */
  resetOnClose?: boolean;
}

/** T submit的返回值类型 O open的参数类型 */
export interface Ref<T = any, O = any> {
  open: (params?: O) => void;
  close: () => void;
  reset: () => void;
  submit: <T = any>() => Promise<T>;
  resolve: RefObject<(p: T) => void>;
}

const NOOP = () => {};
