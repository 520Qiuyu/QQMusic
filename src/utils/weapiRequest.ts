import forge from 'node-forge';

export const IV = '0102030405060708';
export const PRESET_KEY = '0CoJUm6Qyw8W8jud';
export const PUBLIC_KEY =
  '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDgtQn2JZ34ZC28NWYpAUd98iZ37BUrX/aKzmFbt7clFSs6sXqHauqKWqdtLkF2KexO40H1YTX8z2lSgBBOAxLsvaklV8k4cBFK9snQXE9/DDaFt6Rr7iVZMldczhC0JNgTz+SHXT6CBHuX3e9SdB1Ua44oncaTWz7OBGLbCiK45wIDAQAB\n-----END PUBLIC KEY-----';
export const BASE62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

/**
 * AES 加密
 * @param {string} text 待加密文本
 * @param {string} key 密钥
 * @param {string} iv 向量
 * @returns {string} 加密后的 Base64 字符串
 */
export const aesEncrypt = (text, key, iv) => {
  const cipher = forge.cipher.createCipher('AES-CBC', key);
  cipher.start({ iv });
  cipher.update(forge.util.createBuffer(text, 'utf8'));
  cipher.finish();
  return forge.util.encode64(cipher.output.getBytes());
};

/**
 * AES 解密
 * @param {string} text 待解密的 Base64 文本
 * @param {string} key 密钥
 * @param {string} iv 向量
 * @returns {string} 解密后的文本
 */
export const aesDecrypt = (text, key, iv) => {
  const decipher = forge.cipher.createDecipher('AES-CBC', key);
  decipher.start({ iv });
  const encryptedBytes = forge.util.decode64(text);
  decipher.update(forge.util.createBuffer(encryptedBytes));
  decipher.finish();
  return decipher.output.toString();
};

/**
 * RSA 加密
 * @param {string} text 待加密文本
 * @param {string} key 公钥
 * @returns {string} 加密后的十六进制字符串
 */
export const rsaEncrypt = (text, key) => {
  const publicKey = forge.pki.publicKeyFromPem(key);
  const encrypted = publicKey.encrypt(text, 'NONE');
  return forge.util.bytesToHex(encrypted);
};

/**
 * 生成加密请求参数
 * @param {Object} object 请求数据
 * @returns {Object} 加密请求参数
 * @property {string} params 加密后的请求数据
 * @property {string} encSecKey 加密后的密钥
 */
export const weapi = (object) => {
  const text = JSON.stringify(object);
  const secretKey = Array.from({ length: 16 }, () =>
    BASE62.charAt(Math.floor(Math.random() * 62)),
  ).join('');
  return {
    params: aesEncrypt(aesEncrypt(text, PRESET_KEY, IV), secretKey, IV),
    encSecKey: rsaEncrypt(secretKey.split('').reverse().join(''), PUBLIC_KEY),
  };
};

// 客户端类型配置
export const CLIENT_CONFIG = {
  web: {
    cookie: true,
    userAgent: undefined,
  },
  android: {
    cookie: 'os=android;appver=9.1.78;channel=netease;osver=14;buildver=241009150147;',
    userAgent:
      'NeteaseMusic/9.1.78.241009150147(9001078);Dalvik/2.1.0 (Linux; U; Android 14; V2318A Build/TP1A.220624.014)',
  },
  pc: {
    cookie:
      'os=pc;appver=3.0.18.203152;channel=netease;osver=Microsoft-Windows-10-Professional-build-19045-64bit;',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 Chrome/91.0.4472.164 NeteaseMusicDesktop/3.0.18.203152',
  },
};

/**
 * 网易云API加密请求
 * @param {string} url - 请求URL
 * @param {Object} config - 请求配置
 * @param {Object} [config.data={}] - 请求数据
 * @param {string} [config.clientType='pc'] - 客户端类型，默认为'pc'
 * @param {string} [config.ip] - 可选的IP地址，用于设置X-Real-IP和X-Forwarded-For头
 * @param {boolean} [config.originResponse] - 可选的原始响应数据，用于覆盖响应数据
 * @returns {Promise<any>} 返回一个Promise，resolve时返回响应数据，reject时返回错误信息
 */
export const weapiRequest = (
  url: string,
  config: {
    data?: Record<string, any>;
    clientType?: keyof typeof CLIENT_CONFIG;
    ip?: string;
    onerror?: (error: any) => void;
    onload?: (response: any) => void;
    originResponse?: boolean;
    cookie?: string;
  },
): Promise<any> => {
  const { data = {}, clientType = 'pc', ip, originResponse = false } = config;

  /* const csrfToken = cookie?.match(/_csrf=([^(;|$)]+)/);
  console.log('csrfToken', csrfToken); */
  data.csrf_token = /* csrfToken ? csrfToken[1] : */ '';

  // 加密请求数据
  const encryptedData = weapi(data);

  // 打印请求数据
  console.log({
    url,
    data,
    encryptedData,
  });

  // 准备请求头
  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
    'user-agent': CLIENT_CONFIG[clientType].userAgent!,
  };

  // 添加IP相关头(如果需要)
  if (ip) {
    headers['X-Real-IP'] = ip;
    headers['X-Forwarded-For'] = ip;
  }

  // 构建完整的请求URL
  const baseUrl = 'https://music.163.com';
  const fullUrl = new URL(url.replace('api', 'weapi'), baseUrl);

  // 发送请求
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      url: fullUrl.toString() + `?csrf_token=${data.csrf_token}`,
      method: 'POST',
      responseType: 'json',
      headers,
      cookie: CLIENT_CONFIG[clientType].cookie as string,
      data: `params=${encodeURIComponent(
        encryptedData.params,
      )}&encSecKey=${encodeURIComponent(encryptedData.encSecKey)}`,
      onload: (res) => resolve(originResponse ? res : res.response),
      onerror: reject,
    });
  });
};
