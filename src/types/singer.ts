export interface AlbumInfo {
  /** 专辑ID */
  albumID: number;
  /** 专辑mid */
  albumMid: string;
  /** 专辑名称 */
  albumName: string;
  /** 专辑翻译名称 */
  albumTranName: string;
  /** 专辑类型 */
  albumType: string;
  /** 可能是某种特定标识 */
  pmid: string;
  /** 发布日期 */
  publishDate: string;
  /** 歌手名称 */
  singerName: string;
  /** 标签（这里为null，在TypeScript中可以用null类型来表示） */
  tags: null;
  /** 总数量 */
  totalNum: number;
}

export interface SingerInfo {
  /** 国家 */
  country: string;
  /** 歌手ID */
  singer_id: number;
  /** 歌手mid */
  singer_mid: string;
  /** 歌手名称 */
  singer_name: string;
  /** 歌手图片链接 */
  singer_pic: string;
}
