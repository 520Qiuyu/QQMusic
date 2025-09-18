# QQ音乐数据查询助手

一个基于油猴脚本的QQ音乐数据查询工具，支持歌手信息查询、专辑查询、歌单查询、热门歌曲查询等功能。

## ✨ 功能特性

- 🎵 **歌手查询**：支持按地区、性别、流派筛选歌手，查看歌手详细信息
- 📀 **专辑查询**：支持专辑搜索，查看专辑详情和歌曲列表
- 🎼 **歌单查询**：支持歌单分类查询，浏览热门歌单
- 🔥 **热门歌曲**：查看指定歌手的热门歌曲列表
- 📊 **数据展示**：美观的表格展示，支持复制ID和MID信息
- 🎨 **QQ音乐风格**：采用QQ音乐官方配色和设计风格
- 🔍 **智能搜索**：支持关键词搜索和实时过滤
- 📱 **响应式设计**：适配不同屏幕尺寸

## 🚀 使用方法

1. 安装油猴插件（Tampermonkey）
2. 安装本脚本 [![安装脚本](https://img.shields.io/badge/-%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC-blue)](https://raw.githubusercontent.com/520Qiuyu/QQMusic/main/dist/qqmusic.user.js)
3. 打开QQ音乐网页版 - https://y.qq.com/
4. 在页面右下角找到功能按钮组
5. 点击相应功能按钮进行数据查询

## 📸 功能展示

### 主界面
![主界面](./src/assets/imgs/Snipaste_2025-08-25_11-48-58.png)

### 歌手查询功能
![歌手查询](./src/assets/imgs/Snipaste_2025-08-25_11-49-15.png)

### 专辑查询功能
![专辑查询](./src/assets/imgs/Snipaste_2025-08-25_11-49-30.png)

## 📝 功能说明

### 歌手查询
- 支持按地区（全部、华语、欧美、日本、韩国、其他）筛选
- 支持按性别（全部、男、女、组合）筛选  
- 支持按流派（全部、流行、摇滚、民谣、电子、说唱、轻音乐、爵士、古典、乡村、R&B、民族、英伦、金属、朋克、蓝调、雷鬼、世界音乐、拉丁、另类/独立、New Age、古风、后摇、Bossa Nova）筛选
- 支持关键词搜索歌手名称
- 显示歌手头像、姓名、国家、ID、MID等信息
- 支持查看歌手热门歌曲和专辑

### 专辑查询
- 支持专辑名称和艺术家搜索
- 显示专辑封面、名称、艺术家、发行时间等信息
- 支持查看专辑详情和歌曲列表

### 歌单查询
- 支持歌单分类浏览
- 支持按排序方式筛选
- 支持关键词搜索歌单
- 显示歌单封面、名称、创建者、播放量等信息

### 热门歌曲
- 查看指定歌手的热门歌曲
- 显示歌曲信息、专辑、上传时间等
- 支持复制歌曲ID和MID

## 🔨 开发相关

### 技术栈

- React 18 + TypeScript
- Vite + vite-plugin-monkey
- Ant Design 组件库
- SCSS 样式处理
- Tampermonkey API

### 项目结构

```
QQMusic/
├── src/
│   ├── apis/           # API接口
│   ├── components/     # 通用组件
│   ├── constants/      # 常量定义
│   ├── hooks/          # 自定义Hooks
│   ├── types/          # TypeScript类型定义
│   ├── utils/          # 工具函数
│   └── views/          # 页面组件
├── dist/               # 构建输出
├── vite.config.ts      # Vite配置
└── package.json        # 项目配置
```

### 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建油猴脚本
pnpm build

# 预览构建结果
pnpm preview
```

### 开发环境要求

- Node.js >= 16
- pnpm >= 7

## 📋 API接口

### 歌手相关
- `getSingerList` - 获取歌手列表
- `getSingerInfo` - 获取歌手详细信息
- `getSingerAlbum` - 获取歌手专辑
- `getSingerAllAlbum` - 获取歌手所有专辑
- `getSingerFollowCount` - 获取歌手关注数
- `getSingerHotSong` - 获取歌手热门歌曲
- `getSimilarSinger` - 获取相似歌手

### 专辑相关
- `searchAlbums` - 搜索专辑

### 歌单相关
- `getSongListCategory` - 获取歌单分类
- `getSongList` - 获取歌单列表
- `getSongListDetail` - 获取歌单详情

### 歌曲相关
- `getSongInfo` - 获取歌曲信息
- `getSongLyric` - 获取歌曲歌词
- `getSongPlayUrl` - 获取歌曲播放地址

## 🎨 设计规范

### 颜色主题
- 主色调：`#31C27C`（QQ音乐绿）
- 悬停色：`#2DB573`
- 激活色：`#28A069`
- 链接色：`#31C27C`

### 组件风格
- 采用QQ音乐官方设计语言
- 圆角设计：6px-8px
- 阴影效果：0 2px 8px rgba(0, 0, 0, 0.1)
- 过渡动画：0.3s ease

## 📝 注意事项

- 需要登录QQ音乐账号
- 部分功能可能需要VIP权限
- 数据来源于QQ音乐官方API
- 请遵守QQ音乐使用条款

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 贡献指南

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/AmazingFeature`
3. 提交更改：`git commit -m 'Add some AmazingFeature'`
4. 推送分支：`git push origin feature/AmazingFeature`
5. 提交 Pull Request

## 📄 许可证

MIT License

## 🙏 致谢

- QQ音乐官方API
- Ant Design 组件库
- Vite 构建工具
- Tampermonkey 插件

---

如果这个项目对你有帮助，请给个 ⭐️ 支持一下！
