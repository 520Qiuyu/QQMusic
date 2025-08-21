import { _guid, getCommonParams, FileType } from '@/constants';
import { getCookie } from '@/utils';
import { qqMusicRequest } from '@/utils/request';
import dayjs from 'dayjs';

/** 获取歌曲信息 */
export const getSongInfo = async (songmid: string, options: { songid?: string } = {}) => {
  const { songid = '' } = options;
  const params = {
    ...getCommonParams(),
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: JSON.stringify({
      comm: {
        ct: 24,
        cv: 0,
      },
      songinfo: {
        method: 'get_song_detail_yqq',
        param: {
          song_type: 0,
          song_mid: songmid,
          song_id: songid,
        },
        module: 'music.pf_song_detail_svr',
      },
    }),
  };

  const res = await qqMusicRequest(
    `/cgi-bin/musicu.fcg?${new URLSearchParams(params as any).toString()}`,
    {},
    'u',
  );
  if (res.code === 0) {
    return res.songinfo?.data;
  }

  throw new Error('获取歌曲信息失败');
};

/** 获取歌曲歌词 */
export const getSongLyric = async (songmid: string): Promise<string> => {
  const params = {
    songmid,
    format: 'json',
    outCharset: 'utf-8',
    pcachetime: dayjs().valueOf(),
  };

  const res = await qqMusicRequest(
    `/lyric/fcgi-bin/fcg_query_lyric_new.fcg?${new URLSearchParams(params as any)}`,
    {},
  );

  if (res.code === 0) {
    const lyric = window.atob(res.lyric);
    const bytes = Uint8Array.from(lyric, (c) => c.charCodeAt(0));
    const decoder = new TextDecoder();
    const decodedText = decoder.decode(bytes);
    return decodedText;
  }

  throw new Error('获取歌曲歌词失败');
};

/** 获取歌曲播放链接 */
export const getSongPlayUrl = async (
  songmid: string | string[],
  options: {
    quality: keyof typeof FileType;
  } = {} as any,
): Promise<Record<string, { url: string; error: string }>> => {
  const { quality = 'flac' } = options;
  const songmidList = Array.isArray(songmid) ? songmid : [songmid];
  const fileInfo = FileType[quality];
  const fileNames = songmidList.map((item, index) => `${fileInfo.s}${item}${item}${fileInfo.e}`);
  const uin = getCookie('uin');
  const params = {
    format: 'json',
    sign: 'zzannc1o6o9b4i971602f3554385022046ab796512b7012',
    data: JSON.stringify({
      req_0: {
        module: 'vkey.GetVkeyServer',
        method: 'CgiGetVkey',
        param: {
          filename: fileNames,
          guid: _guid + '',
          songmid: songmidList,
          songtype: [0],
          uin,
          loginflag: 1,
          platform: '20',
        },
      },
      loginUin: uin,
      comm: {
        uin,
        format: 'json',
        ct: 24,
        cv: 0,
      },
    }),
  };

  const res = await qqMusicRequest(
    `/cgi-bin/musicu.fcg?${new URLSearchParams(params as any)}`,
    {},
    'u',
  );
  console.log('res', res);
  if (res.code === 0) {
    const data = res.req_0.data;
    const domain = data.sip?.find((i) => !i.startsWith('http://ws')) || data.sip[0];

    let playUrl = {};
    data.midurlinfo.forEach((item) => {
      playUrl[item.songmid] = {
        url: item.purl ? `${domain}${item.purl}` : '',
        error: !item.purl && '暂无播放链接',
      };
    });

    return playUrl;
  }

  throw new Error('获取歌曲播放链接失败');
};
