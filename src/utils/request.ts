import { GM_xmlhttpRequest } from 'vite-plugin-monkey/dist/client';
import type { GmXmlhttpRequestOption } from 'vite-plugin-monkey/dist/client';

const yURL = 'https://y.qq.com';
const cURL = 'https://c.y.qq.com';
const uURL = 'https://u.y.qq.com';

const getBaseURL = (url: string, type: UrlType = 'c') => {
  let baseURL = '';
  switch (type) {
    case 'y':
      baseURL = yURL + url;
      break;
    case 'u':
      baseURL = uURL + url;
      break;
    case 'c':
      baseURL = cURL + url;
      break;
    default:
      baseURL = cURL + url;
      break;
  }
  return baseURL;
};

const getDefaultHeaders = (type: UrlType = 'c') => {
  switch (type) {
    case 'y':
      return { referer: 'https://y.qq.com/', host: 'y.qq.com' };
    case 'u':
      return {
        referer: 'https://y.qq.com/portal/player.html',
        host: 'u.y.qq.com',
        'content-type': 'application/x-www-form-urlencoded',
      };
    case 'c':
      return { referer: 'https://c.y.qq.com/', host: 'c.y.qq.com' };
    default:
      return { referer: 'https://c.y.qq.com/', host: 'c.y.qq.com' };
  }
};

export const qqMusicRequest = async <T = any>(
  url: string,
  config: Omit<GmXmlhttpRequestOption<any, any>, 'url'>,
  type: UrlType = 'c',
) => {
  const baseURL = getBaseURL(url, type);

  const { headers, method = 'GET', responseType = 'json', ...rest } = config;
  const cookie = document.cookie;

  return new Promise<T>((resolve, reject) => {
    GM_xmlhttpRequest({
      method: method,
      url: baseURL,
      responseType,
      headers: { ...getDefaultHeaders(type), cookie, ...headers } as Record<string, string>,
      cookie,
      onload: (res) => resolve(res.response),
      onerror: reject,
      ...rest,
    });
  });
};

type UrlType = 'y' | 'c' | 'u';
