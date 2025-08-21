const fs = require('fs');
const path = require('path');

// 生成统一导出的路径
const paths = ['../src/hooks', '../src/components'];

for (let p of paths) {
  const dir = path.resolve(__dirname, p);
  const files = fs.readdirSync(dir, {
    withFileTypes: true,
  });
  let exportStatements = '';

  exportStatements += files
    .filter(
      (file) =>
        // 是目录且其下包含index.xxx
        (file.isDirectory() &&
          fs.readdirSync(path.resolve(dir, file.name)).some((f) => f.match(/index\.(j|tsx?)$/))) ||
        // 是文件且文件名 以j|tsx? 结尾 且不以index开头
        (file.isFile() && file.name.match(/j|tsx?$/) && !file.name.startsWith('index')),
    )
    .map((file) => {
      // console.log('file', file);
      let fileName;
      if (file.isDirectory()) {
        const subFile = fs
          .readdirSync(path.resolve(dir, file.name))
          .find((f) => f.match(/index\.(j|tsx?)$/));
        fileName = file.name + '/' + subFile;
      } else {
        fileName = file.name;
      }
      // const fileName = file.name;
      const filePath = path.resolve(dir, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const exportStatement = [];

      // 找到所有的 export default xxx; 的 xxx
      const re1 = /export default /g;
      const match1 = re1.exec(fileContent);
      if (match1) {
        const exportName = file.isFile() ? file.name.split('.')[0] : file.name;
        exportStatement.push(` default as ${exportName}`);
      }
      // 找到所有的 export const xxx  的 xxx 和
      const re2 = /export const (\w+)/g;
      let match2;
      while ((match2 = re2.exec(fileContent))) {
        // exportStatement += `export { ${match2[1]} } from './${fileName}';\n`;
        exportStatement.push(` ${match2[1]}`);
      }

      // 找到所有的 export function xxx() {} 的 xxx 和export function useQuery<T = any>()中的 useQuery
      const re3 = /export function (\w+)\s*(<[^>]*>)?\s*\(/g;
      let match3;
      while ((match3 = re3.exec(fileContent))) {
        // exportStatement += `export { ${match3[1]} } from './${fileName}';\n`;
        exportStatement.push(` ${match3[1]}`);
      }

      return `export {${exportStatement.join(',')}} from './${fileName}';\n`;
    })
    .join('');

  if (exportStatements) {
    exportStatements = `// 由${path.resolve(
      __dirname,
      __filename,
    )}自动生成，请勿修改\n${exportStatements}`;
    fs.writeFileSync(path.resolve(dir, 'index.ts'), exportStatements);
  }
}

console.log('index.ts 文件生成成功');
