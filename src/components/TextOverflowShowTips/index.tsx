import type { TooltipProps } from 'antd';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import type { CSSProperties } from 'react';
import styles from './index.module.scss';

export default function TextOverflowShowTips({
  text,
  tooltipProps,
  className,
  ...restProps
}: TextOverflowShowTipsProps) {
  /** 容器元素的 ref */
  const containerRef = useRef<HTMLDivElement>(null);
  /** 容器元素的宽度 */
  const { width: containerWidth } = useSize(containerRef) || {};
  /** 文本是否超出容器 */
  const isTooLong = useMemo(() => {
    if (containerWidth) {
      const textWidth = getTextWidth(text);
      return containerWidth < textWidth;
    }
    return false;
  }, [text, containerWidth]);

  const containerStyle: CSSProperties = {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };

  return isTooLong ? (
    <Tooltip title={text} {...tooltipProps}>
      <div
        {...restProps}
        className={classNames(styles['text-overflow-show-tips-container'], className)}>
        <div ref={containerRef} style={containerStyle}>
          {text}
        </div>
      </div>
    </Tooltip>
  ) : (
    <div ref={containerRef} style={containerStyle} {...restProps} className={className}>
      {text}
    </div>
  );
}

/** 获取文字渲染长度 */
export function getTextWidth(text: string, font: string = '14px Arial'): number {
  const span = document.createElement('span');
  span.style.visibility = 'hidden';
  span.style.whiteSpace = 'nowrap';
  span.style.font = font;
  span.style.position = 'absolute';
  span.style.top = '-9999px';
  span.style.left = '-9999px';
  span.innerText = text;
  document.body.appendChild(span);
  const width = span.offsetWidth;
  document.body.removeChild(span);
  return width;
}

interface TextOverflowShowTipsProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  tooltipProps?: TooltipProps;
}
