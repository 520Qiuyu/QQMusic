const path = require('path');
const fs = require('fs');
const iconv = require('iconv-lite');

/** 获取文件类型 */
function getFileType(filePath) {
  const extname = path.extname(filePath);
  return extname.toLowerCase();
}

/**
 * 读取文件内容（可指定编码）
 *
 * 如果未指定编码，默认使用 utf-8 读取。
 *
 * @param {string} filePath 文件路径
 * @param {string} [readEncoding='utf-8'] 文件编码，默认 utf-8
 * @returns {string} 文件内容
 * @example
 * readFileContent('test.txt');
 * readFileContent('test.txt', 'gbk');
 */
function readFileContent(filePath, readEncoding = 'utf-8') {
  return iconv.decode(fs.readFileSync(filePath), readEncoding);
}

/**
 * 获取指定文件夹下的所有文件（不递归）
 *
 * @param {string} dirPath 文件夹路径
 * @returns {string[]} 文件（或文件夹）名称数组
 * @example
 * getFiles('./data');
 */
function getFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  return files;
}

/**
 * 递归遍历文件夹下的所有文件和文件夹
 * @param {string} dirPath 要遍历的目录路径
 * @param {function} callback 每遍历到一个文件时调用，参数为文件的绝对路径
 */
function traverseDir(dirPath, callback) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      callback(filePath, dirPath, stats);
    } else if (stats.isDirectory()) {
      traverseDir(filePath, callback);
    }
  });
}

module.exports = {
  getFileType,
  traverseDir,
  readFileContent,
  getFiles,
};
