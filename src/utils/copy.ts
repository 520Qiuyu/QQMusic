/**
 * 复制文本到剪贴板
 * 
 * @description 支持复制普通文本和HTML内容到剪贴板
 * @example
 * // 复制普通文本
 * copy('Hello World').then(() => {
 *   console.log('复制成功');
 * }).catch(err => {
 *   console.error('复制失败:', err);
 * });
 * 
 * // 复制HTML内容
 * copy('<b>Hello World</b>', { html: true }).then(() => {
 *   console.log('复制成功');
 * });
 */

interface CopyOptions {
  /** 是否复制为HTML内容 */
  html?: boolean;
}

/**
 * 复制文本到剪贴板
 * @param text 要复制的文本内容
 * @param options 复制选项
 * @returns Promise<void>
 */
export const copy = async (text: string, options: CopyOptions = {}): Promise<void> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      // 使用现代Clipboard API
      if (options.html) {
        const type = 'text/html';
        const blob = new Blob([text], { type });
        const data = [new ClipboardItem({ [type]: blob })];
        await navigator.clipboard.write(data);
      } else {
        await navigator.clipboard.writeText(text);
      }
    } else {
      // 降级方案：使用传统的document.execCommand方法
      const textArea = document.createElement('textarea');
      textArea.value = text;
      
      // 防止滚动
      textArea.style.cssText = 'position: fixed; top: -9999px; left: -9999px';
      
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
      } catch (err) {
        throw new Error('复制失败，请检查浏览器权限设置');
      } finally {
        document.body.removeChild(textArea);
      }
    }
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : '复制失败，请重试'
    );
  }
};

export default copy;