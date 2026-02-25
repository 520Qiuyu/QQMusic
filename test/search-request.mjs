/**
 * Node 端示例：使用 axios 请求 QQ 音乐搜索接口（对应 getSearchResult）
 * 运行: node test/search-request.mjs
 * 需先安装: pnpm add -D axios
 */

import axios from 'axios';

const typeMap = {
  song: 0,
  album: 8,
  user: 9,
  playlist: 2,
  lyric: 7,
  mv: 12,
};

const BASE_URL = 'https://c.y.qq.com';

/**
 * 获取搜索结果（与 src/apis/search.ts getSearchResult 等价）
 */
async function getSearchResult(keyword, type = 'song', options = {}) {
  const { pageNum = 1, pageSize = 20 } = options;
  const params = {
    w: keyword,
    n: pageSize,
    p: pageNum,
    catZhida: 1,
    format: 'json',
    outCharset: 'utf-8',
    t: typeMap[type] ?? typeMap.song,
    cr: 1,
    lossless: 0,
    flag_qc: 0,
    platform: 'yqq.json',
    g_tk: 5381,
  };

  const url = `${BASE_URL}/soso/fcgi-bin/client_search_cp?${new URLSearchParams(params).toString()}`;

  const res = await axios.get(url, {
    headers: {
      Referer: 'https://c.y.qq.com/',
      Host: 'c.y.qq.com',
    },
    responseType: 'json',
  });

  console.log('res',res)

  const data = res.data;
  if (data.code !== 0) {
    throw new Error('搜索失败: code !== 0');
  }
  return data.data;
}

// 示例调用
const keyword = process.argv[2] || '周杰伦';
const type = process.argv[3] || 'song';

getSearchResult(keyword, type, { pageNum: 1, pageSize: 5 })
  .then((data) => {
    console.log('搜索关键词:', keyword, '类型:', type);
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((err) => {
    console.error(err || err);
    process.exit(1);
  });
