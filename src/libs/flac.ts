import { metaflac } from 'metaflac.wasm';

/** FLAC 标签信息接口 */
export interface FlacTags {
  title?: string;
  artist?: string;
  album?: string;
  year?: string;
  genre?: string;
  comment?: string;
  track?: string;
  disc?: string;
  composer?: string;
  lyricist?: string;
  lyrics?: string;
}

/** metaflac 执行结果 */
interface MetaflacResult {
  exitCode: number;
  stdout: string;
  stderr: string;
  files: Map<string, Uint8Array>;
}

/** 执行 metaflac 命令的通用函数 */
const executeMetaflac = async (
  args: string[],
  inputFiles: Map<string, Uint8Array>,
  outputFileNames?: string[],
): Promise<MetaflacResult> => {
  const options: any = { inputFiles };
  if (outputFileNames) {
    options.outputFileNames = outputFileNames;
  }

  const result = await metaflac(args, options);
  console.log('metaflac result:', result);

  return result;
};

/** 检查 metaflac 执行是否成功 */
const checkMetaflacSuccess = (result: MetaflacResult, operation: string): boolean => {
  if (result.exitCode !== 0) {
    console.error(`${operation}失败:`, result.stderr);
    return false;
  }
  return true;
};

/** 将 Blob 转换为 Uint8Array */
const blobToBuffer = async (file: Blob): Promise<Uint8Array> => {
  return new Uint8Array(await file.arrayBuffer());
};

/** 将 Uint8Array 转换为 Blob */
const bufferToBlob = (buffer: Uint8Array, mimeType: string = 'audio/flac'): Blob => {
  return new Blob([buffer], { type: mimeType });
};

/** 解析标签行，支持多行歌词 */
const parseTagLines = (stdout: string): FlacTags => {
  const tags: FlacTags = {};
  const lines = stdout.trim().split('\n');

  let currentTag = '';
  let currentValue = '';
  let isCollectingLyrics = false;

  lines.forEach((line) => {
    // 检查是否是新标签的开始（格式: TAGNAME=value）
    const tagMatch = line.match(/^([A-Z_]+)=(.*)$/);

    if (tagMatch) {
      // 如果之前正在收集歌词，先保存
      if (isCollectingLyrics && currentTag) {
        tags[currentTag.toLowerCase() as keyof FlacTags] = currentValue.trim();
        isCollectingLyrics = false;
      }

      // 开始新标签
      currentTag = tagMatch[1];
      currentValue = tagMatch[2];

      // 检查是否是 LYRICS 标签
      if (currentTag === 'LYRICS') {
        isCollectingLyrics = true;
      } else {
        // 普通标签，直接保存
        tags[currentTag.toLowerCase() as keyof FlacTags] = currentValue;
      }
    } else if (isCollectingLyrics && currentTag) {
      // 继续收集歌词内容（多行）
      currentValue += '\n' + line;
    }
  });

  // 保存最后一个标签（可能是歌词）
  if (isCollectingLyrics && currentTag) {
    tags[currentTag.toLowerCase() as keyof FlacTags] = currentValue.trim();
  }

  return tags;
};

/** 读取flac所有Tag */
export const readAllFlacTag = async (file: Blob): Promise<FlacTags> => {
  try {
    const buffer = await blobToBuffer(file);
    const result = await executeMetaflac(
      ['--show-all-tags', 'file.flac'],
      new Map([['file.flac', buffer]]),
    );

    if (!checkMetaflacSuccess(result, '读取 FLAC 标签')) {
      return {};
    }

    if (result.stdout) {
      const tags = parseTagLines(result.stdout);
      console.log('解析后的标签:', tags);
      return tags;
    }

    return {};
  } catch (error) {
    console.error('读取 FLAC 标签失败:', error);
    return {};
  }
};

/** 读取特定标签 */
export const readFlacTag = async (
  file: Blob,
  tagName: keyof FlacTags,
): Promise<string | undefined> => {
  try {
    const buffer = await blobToBuffer(file);
    const result = await executeMetaflac(
      [`--show-tag=${tagName.toUpperCase()}`, 'file.flac'],
      new Map([['file.flac', buffer]]),
    );

    if (!checkMetaflacSuccess(result, `读取 FLAC 标签 ${tagName}`) || !result.stdout) {
      return undefined;
    }

    // 输出格式: TAGNAME=value
    const lines = result.stdout.trim().split('\n');
    for (const line of lines) {
      if (line.startsWith(`${tagName.toUpperCase()}=`)) {
        return line.substring(tagName.length + 1); // 去掉 "TAGNAME=" 前缀
      }
    }

    return undefined;
  } catch (error) {
    console.error(`读取 FLAC 标签 ${tagName} 失败:`, error);
    return undefined;
  }
};

/** 给flac写标签 */
export const writeFlacTag = async (
  file: Blob,
  tagName: keyof FlacTags,
  tagValue: string,
): Promise<Blob | undefined> => {
  try {
    const buffer = await blobToBuffer(file);
    const result = await executeMetaflac(
      [`--set-tag=${tagName.toUpperCase()}=${tagValue}`, 'file.flac'],
      new Map([['file.flac', buffer]]),
      ['file.flac'],
    );

    if (!checkMetaflacSuccess(result, '给 FLAC 写标签')) {
      return undefined;
    }

    const outputFile = result.files.get('file.flac');
    if (outputFile) {
      console.log('给 FLAC 写标签成功:', result.stdout);
      return bufferToBlob(outputFile);
    }

    return undefined;
  } catch (error) {
    console.error('给 FLAC 写标签失败:', error);
    return undefined;
  }
};

/** 给flac嵌入图片 */
export const embedFlacPicture = async (file: Blob, picture: Blob): Promise<Blob | undefined> => {
  try {
    const buffer = await blobToBuffer(file);
    const coverBuffer = await blobToBuffer(picture);

    const result = await executeMetaflac(
      [`--import-picture-from=cover`, 'file.flac'],
      new Map([
        ['file.flac', buffer],
        [`cover`, coverBuffer],
      ]),
      ['file.flac'],
    );

    if (!checkMetaflacSuccess(result, '给 FLAC 嵌入图片')) {
      return undefined;
    }

    const outputFile = result.files.get('file.flac');
    if (outputFile) {
      console.log('给 FLAC 嵌入图片成功:', result.stdout);
      return bufferToBlob(outputFile);
    }

    return undefined;
  } catch (error) {
    console.error('给 FLAC 嵌入图片失败:', error);
    return undefined;
  }
};

/** 同时写入歌词和封面 */
export const writeFlacTagAndPicture = async (
  file: Blob,
  tagName?: keyof FlacTags,
  tagValue?: string,
  picture?: Blob,
) => {
  try {
    let outputFile = file;
    if (tagName && tagValue) {
      outputFile = (await writeFlacTag(file, tagName, tagValue))!;
    }
    if (picture) {
      outputFile = (await embedFlacPicture(outputFile!, picture))!;
    }
    return outputFile;
  } catch (error) {
    console.error('同时写入歌词和封面失败:', error);
    throw error;
  }
};
