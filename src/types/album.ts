export interface CompanyNew {
  brief: string;
  headPic: string;
  is_show: number;
  name: string;
}

export interface Pay {
  payalbum: number;
  payalbumprice: number;
  paydownload: number;
  payinfo: number;
  payplay: number;
  paytrackmouth: number;
  paytrackprice: number;
  timefree: number;
}

export interface Preview {
  trybegin: number;
  tryend: number;
  trysize: number;
}

export interface AlbumSongInfo {
  albumdesc: string;
  albumid: number;
  albummid: string;
  albumname: string;
  alertid: number;
  belongCD: number;
  cdIdx: number;
  interval: number;
  isonly: number;
  label: string;
  msgid: number;
  pay: Pay;
  preview: Preview;
  rate: number;
  singer: {
    id: number;
    mid: string;
    name: string;
  }[];
  size5_1: number;
  size128: number;
  size320: number;
  sizeape: number;
  sizeflac: number;
  sizeogg: number;
  songid: number;
  songmid: string;
  songname: string;
  songorig: string;
  songtype: number;
  strMediaMid: string;
  stream: number;
  switch: number;
  type: number;
  vid: string;
}

export interface AlbumInfoData {
  aDate: string;
  albumTips: string;
  color: number;
  company: string;
  company_new: CompanyNew;
  cur_song_num: number;
  desc: string;
  genre: string;
  id: number;
  lan: string;
  list: AlbumSongInfo[];
  mid: string;
  name: string;
  radio_anchor: number;
  singerid: number;
  singermblog: string;
  singermid: string;
  singername: string;
  song_begin: number;
  total: number;
  total_song_num: number;
}
