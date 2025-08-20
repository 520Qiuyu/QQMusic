import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

type TeleportTarget = string | HTMLElement | { current: HTMLElement | null } | null;

/**
 * React 版本的 teleport hook，类似于 Vue 的 teleport 组件
 * @param children - 需要传送的 React 节点
 * @param to - 目标元素，可以是：
 *   - CSS 选择器字符串
 *   - DOM 元素
 *   - React ref 对象
 *   - null（此时默认使用 document.body）
 * @returns void
 */
const useTeleport = (children: ReactNode, to: TeleportTarget = document.body): void => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let targetElement: HTMLElement | null = null;

    // 根据 to 类型获取目标元素
    if (typeof to === 'string') {
      // CSS 选择器
      targetElement = document.querySelector<HTMLElement>(to);
    } else if (to instanceof HTMLElement) {
      // DOM 元素
      targetElement = to;
    } else if (to?.current instanceof HTMLElement) {
      // React ref
      targetElement = to.current;
    }

    // 如果没有找到目标元素，使用 body
    targetElement = targetElement || document.body;

    // 创建容器元素
    const container = document.createElement('div');
    containerRef.current = container;
    targetElement.appendChild(container);

    console.log('children', children);
    console.log('container', container);
    console.log('targetElement', targetElement);
    // 将 React 节点传送到容器中
    createRoot(container).render(children as React.ReactElement);

    // 清理函数
    return () => {
      if (containerRef.current) {
        containerRef.current.remove();
        containerRef.current = null;
      }
    };
  }, [children, to]);
};

export default useTeleport;
