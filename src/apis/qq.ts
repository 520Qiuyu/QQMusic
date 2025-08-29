/**
 * 获取 QQ 头像 URL
 * @param {string | number} qqNumber - 用户的 QQ 号码
 * @param {number} [size=100] - 方形头像尺寸 (推荐值：40、100、140、640 等)
 * @param {string} [prefix='q1'] - 可选 QLogo 服务器前缀：q1, q2, q3, q4
 * @returns {string} 完整的 QQ 头像 URL
 */
export function getQQAvatarUrl(qqNumber: string | number, size = 640, prefix = 'q1') {
  const safeQQ = encodeURIComponent(qqNumber);
  const safeSize = Number(size) || 100;
  const safePrefix = ['q1', 'q2', 'q3', 'q4'].includes(prefix) ? prefix : 'q1';
  return `https://${safePrefix}.qlogo.cn/g?b=qq&nk=${safeQQ}&s=${safeSize}`;
}
