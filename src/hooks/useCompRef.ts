import type { ForwardRefExoticComponent } from 'react';

/** 获取组件Ref类型的useRef */
export const useCompRef = <T extends ForwardRefExoticComponent<any>>(_component: T) => {
  const initObj = {} as any;
  const proxy = new Proxy(initObj, {
    get: (target, prop) => {
      console.log('target', target);
      console.log('prop', prop);
      if (target === initObj) {
        console.warn('是否忘记了传递组件Ref?');
      }
      return null;
    },
  });
  return useRef<RefType<T>>(proxy);
};
