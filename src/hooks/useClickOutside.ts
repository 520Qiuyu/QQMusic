import type { RefObject } from 'react';

export const useClickOutside = <T extends HTMLElement>(
  callback: (ref: RefObject<T | null>) => void,
) => {
  // 元素实例
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(ref);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return ref;
};
