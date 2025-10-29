const path = require("path");
const { traverseDir, getFileType, getFiles } = require("./utils/file");
const { embedFlacLyric, embedFlacCover } = require("./utils/music");

// 音乐文件夹路径
const musicPath = path.resolve(__dirname, "../music/王靖雯");

// 封面类型
const coverTypes = [".png", ".jpeg", ".jpg"];
// 封面映射
const coverMap = {};

let index = 1
// 递归遍历音乐文件夹中的文件
traverseDir(musicPath, (filePath, dirPath) => {
  try {
    console.log('当前遍历:' + index++, filePath, dirPath);
    const fileType = getFileType(filePath);
    switch (fileType) {
      case ".flac":
        // 嵌入歌词
        embedFlacLyric(filePath, filePath.replace(".flac", ".lrc"),{
          priorityLyric:false,
          encode: 'utf-8'
        });
        // 嵌入封面
        const coverPath = coverMap[dirPath];
        if (coverPath) {
          embedFlacCover(filePath, coverPath);
        } else {
          const files = getFiles(dirPath);
          const cover = files.find((file) =>
            coverTypes.some((ext) => file.endsWith(ext))
          );
          const coverPath = cover ? path.join(dirPath, cover) : null;
          coverMap[dirPath] = coverPath;
          if (coverPath) {
            embedFlacCover(filePath, coverPath);
          }
        }
        break;
      case ".png":
      case ".jpeg":
      case ".jpg":
        if (!coverMap[dirPath]) {
          coverMap[dirPath] = filePath;
        }
        break;
    }
  } catch (e) {
    console.error(e)
  }
});
