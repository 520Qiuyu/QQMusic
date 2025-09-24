const Metaflac = require("metaflac-js");
const fs = require("fs");
const { readFileContent } = require("./file");
const iconv = require("iconv-lite");

/** 给flac文件嵌入封面 */
function embedFlacCover(filePath, coverPath) {
  const metaflac = new Metaflac(filePath);
  // console.log('metaflac',metaflac)
  metaflac.importPictureFrom(coverPath);
  metaflac.save();
}

/** 给flac文件嵌入歌词 */
function embedFlacLyric(filePath, lyricPath, options = {}) {
  const {
    /** 优先使用原有歌词 */
    priorityLyric = true,
    /** encode */
    encode = 'gbk'
  } = options;

  const metaflac = new Metaflac(filePath);
  const allTags = metaflac.getAllTags();
  console.log('allTags', allTags)
  if (priorityLyric && allTags.some((tag) => tag?.includes("LYRICS"))) {
    return true;
  }
  if (!priorityLyric && allTags.some((tag) => tag?.includes("LYRICS"))) {
    metaflac.removeTag("LYRICS");
  }


  const lyricContent = readFileContent(lyricPath, encode);
  metaflac.setTag("LYRICS=" + lyricContent);
  metaflac.save();
  return true;
}

/**
 * 给flac文件同时嵌入歌词和封面
 * @param {string} flacPath flac音频文件路径
 * @param {string} lyricPath 歌词文件路径
 * @param {string} coverPath 封面图片路径
 * @param {Object} [options] 额外选项，如歌词编码
 * @returns {boolean} 是否成功
 */
function embedFlacLyricAndCover(flacPath, lyricPath, coverPath, options = {}) {
  const { lyricEncoding = 'gbk' } = options;
  try {
    const metaflac = new Metaflac(flacPath);
    // 处理歌词
    if (lyricPath) {
      const lyricContent = readFileContent(lyricPath, lyricEncoding);
      metaflac.setTag('LYRICS=' + lyricContent);
    }
    // 处理封面
    if (coverPath) {
      metaflac.importPictureFrom(coverPath);
    }
    metaflac.save();
    return true;
  } catch (e) {
    console.error('嵌入歌词/封面失败:', e);
    return false;
  }
}

module.exports = {
  embedFlacCover,
  embedFlacLyric,
  embedFlacLyricAndCover,
};
