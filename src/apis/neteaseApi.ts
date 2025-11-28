import { getAudioMetadata, getFileMD5 } from '@/utils';
import { msgError } from '@/utils/modal';
import { weapiRequest } from '@/utils/weapiRequest';

const BUCKET = 'jd-musicrep-privatecloud-audio-public';

/**
 * 获取用户信息
 * @returns {Promise} 返回用户账户信息
 */
export const getUserAccount = () =>
  weapiRequest('/api/nuser/account/get', {
    data: {},
  });

/**
 * 上传音频文件到 NOS
 * @param {object} params 配置项
 * @param {File} params.file 文件对象
 * @param {string} params.bucket 存储桶名称
 * @param {string} params.objectKey 文件 key
 * @param {string} params.token nos token
 * @param {string} params.fileMd5 文件 MD5
 * @param {string} params.contentType 文件类型
 * @returns {Promise<object>} 上传结果
 * @example
 * const res = await uploadAudioToNos({
 *   file,
 *   bucket: 'jd-musicrep-privatecloud-audio-public',
 *   objectKey: 'path%2Ffile.mp3',
 *   token: 'token',
 *   fileMd5: 'md5',
 *   contentType: 'audio/mpeg',
 * });
 */
const uploadAudioToNos = async ({ file, bucket, objectKey, token, fileMd5, contentType }) => {
  const lbsUrl = `https://wanproxy.127.net/lbs?version=1.0&bucketname=${bucket}`;
  const lbs = await (await fetch(lbsUrl)).json();
  const safeObjectKey = objectKey.replace('/', '%2F');
  const uploadUrl =
    `${lbs.upload[0]}/${bucket}/${safeObjectKey}?offset=0&complete=true&version=1.0`.replace(
      'http://',
      'https://',
    );
  const response = await fetch(uploadUrl, {
    method: 'post',
    headers: {
      'x-nos-token': token,
      'Content-MD5': fileMd5,
      'Content-Type': contentType,
    },
    body: file,
  });
  let result = {} as any;
  try {
    result = await response.json();
  } catch (error) {
    console.log('uploadAudioToNos parse error', error);
  }
  if (!response.ok) {
    msgError('上传失败：文件未通过 NOS 校验');
    throw new Error(result?.message || '上传失败：文件未通过 NOS 校验');
  }
  return result;
};

/**
 * 上传本地歌曲
 * @param {File} file 文件对象
 * @param {object} options 选项
 * @param {number} options.defaultBitrate 默认比特率，默认999000
 * @param {string} options.defaultAlbum 默认专辑，默认'未知专辑'
 * @param {string} options.defaultArtist 默认歌手，默认'未知歌手'
 * @param {string} options.defaultTitle 默认歌曲名，默认'未知歌曲'
 * @param {string[]} options.defaultArtists 默认歌手列表，默认[]
 * @returns {Promise} 返回上传结果
 * @example
 * const result = await uploadLocalSong(file);
 */
export const uploadLocalSong = async (
  file: File,
  options: {
    defaultBitrate?: number;
    defaultAlbum?: string;
    defaultArtist?: string;
    defaultTitle?: string;
    defaultArtists?: string[];
  } = {},
) => {
  const {
    defaultBitrate = 999000,
    defaultAlbum,
    defaultArtist,
    defaultTitle,
    defaultArtists = [],
  } = options || {};
  let defaultResult = {};
  try {
    const ext = file.name.split('.').pop() || 'mp3';
    const fileMd5 = await getFileMD5(file);
    const bitrate = defaultBitrate;
    const filename = file.name
      .replace('.' + ext, '')
      .replace(/\s/g, '')
      .replace(/\./g, '_');
    const contentType = file.type || 'audio/mpeg';

    // 1、首选检查文件
    const checkRes = await weapiRequest('/api/cloud/upload/check', {
      data: {
        ext: '',
        bitrate: String(bitrate),
        md5: fileMd5,
        length: file.size,
        songId: '0',
        version: 1,
      },
    });
    console.log('检查文件是否存在，checkRes', checkRes);
    if (checkRes.code != 200) {
      msgError('文件检查失败：' + checkRes.message || checkRes.msg || '');
      throw new Error(checkRes.message || checkRes.msg || '文件检查失败');
    }
    const { needUpload, songId } = checkRes;

    // 2.1、 云盘没有该文件，需要上传文件
    if (needUpload) {
      console.log('检测到云盘没有该文件，需要上传文件');
      const uploadTokenRes = await weapiRequest('/api/nos/token/alloc', {
        data: {
          bucket: BUCKET,
          ext,
          filename,
          local: false,
          nos_product: 3,
          type: 'audio',
          md5: fileMd5,
        },
      });
      if (uploadTokenRes.code !== 200) {
        msgError('上传授权失败');
        throw new Error(uploadTokenRes.message || '上传授权失败');
      }
      console.log('获取到上传授权，uploadTokenRes', uploadTokenRes);
      await uploadAudioToNos({
        file,
        bucket: BUCKET,
        objectKey: uploadTokenRes.result.objectKey,
        token: uploadTokenRes.result.token,
        fileMd5,
        contentType,
      });
      console.log('上传文件成功');
    }

    // 2、申请上传token
    const tokenRes = await weapiRequest('/api/nos/token/alloc', {
      data: {
        bucket: '',
        ext,
        filename,
        local: false,
        nos_product: 3,
        type: 'audio',
        md5: fileMd5,
      },
    });
    console.log('申请上传token，tokenRes', tokenRes);
    if (tokenRes.code != 200) {
      msgError('获取上传token失败');
      throw new Error(tokenRes.message || tokenRes.msg || '获取上传token失败');
    }
    const { bucket, docId, objectKey, outerUrl, resourceId, token } = tokenRes.result;

    // 3、获取上传信息
    const {
      album = defaultAlbum,
      artist = defaultArtist,
      artists = defaultArtists,
      title = defaultTitle,
    } = await getAudioMetadata(file);
    defaultResult = {
      ...defaultResult,
      artist,
      artists,
      album,
      md5: fileMd5,
      ext,
      bitrate,
    };
    const uploadInfoRes = await weapiRequest('/api/upload/cloud/info/v2', {
      data: {
        md5: fileMd5,
        songid: songId,
        filename,
        song: title || filename,
        album: album || '未知专辑',
        artist: artist || artists.join(',') || '未知歌手',
        bitrate: String(bitrate),
        resourceId,
      },
    });
    console.log('获取上传信息，uploadInfoRes', uploadInfoRes);
    defaultResult = {
      ...defaultResult,
      id: uploadInfoRes.songId,
    };
    if (uploadInfoRes.code != 200) {
      msgError('获取上传信息失败');
      throw new Error(uploadInfoRes.message || uploadInfoRes.msg || '获取上传信息失败');
    }

    // 4、上传文件
    // 发布资源
    const pubRes = await weapiRequest('/api/cloud/pub/v2', {
      data: {
        songid: uploadInfoRes.songId,
      },
    });
    console.log('发布资源，pubRes', pubRes);
    if (![200, 201].includes(pubRes.code)) {
      msgError(`歌曲： ${file.name} 发布失败`);
      throw new Error(pubRes.message || pubRes.msg || '歌曲发布失败');
    }
    const { songName, bitrate: realBitrate, fileSize } = pubRes.privateCloud;
    defaultResult = {
      ...defaultResult,
      name: songName,
      size: fileSize,
      bitrate: realBitrate,
    };

    return defaultResult;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};
