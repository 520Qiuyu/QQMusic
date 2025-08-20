/**
 * 将JSON数据下载为文件
 * @param {Object} data - 要下载的JSON数据
 * @param {string} filename - 下载的文件名
 * @returns {void}
 */
export const downloadJsonFile = (data, filename) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

/**
 * 根据URL下载文件
 * @param {string} url - 文件的URL地址
 * @param {string} filename - 下载的文件名
 * @returns {Promise<void>}
 * @example
 * // 下载一个图片文件
 * await downloadFile('https://example.com/image.jpg', 'my-image.jpg');
 */
export const downloadFile = async (url, filename) => {
  try {
    if (!url || !filename) {
      throw new Error('URL和文件名不能为空');
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`下载失败: ${response.statusText}`);
    }
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(objectUrl);
  } catch (error) {
    console.error('文件下载出错:', error);
    throw error;
  }
};
