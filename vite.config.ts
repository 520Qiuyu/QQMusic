import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import monkey, { cdn, util } from 'vite-plugin-monkey';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      imports: ['react', 'ahooks', util.unimportPreset],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false, // Default `false`
        // provide path ending with `.mjs` or `.cjs` to generate the file with the respective format
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: './src/auto-imports.d.ts',
    }),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://y.qq.com/*'],
        require: [
          // "https://cdn.jsdelivr.net/npm/antd@5.22.4/dist/reset.min.css",
          'https://cdn.jsdelivr.net/npm/dayjs@1.11.13/dayjs.min.js',
        ],
        connect: ['y.qq.com', 'music.163.com', 'aqqmusic.tc.qq.com'],
        grant: ['GM_addStyle', 'GM_setValue', 'GM_getValue', 'GM_deleteValue', 'GM_listValues', 'GM_xmlhttpRequest'],
      },

      build: {
        externalGlobals: [
          ['react', cdn.jsdelivr('React', 'umd/react.production.min.js')],
          ['react-dom', cdn.jsdelivr('ReactDOM', 'umd/react-dom.production.min.js')],
          ['antd', cdn.jsdelivr('antd', 'dist/antd.min.js')],
          ['@ant-design/icons', cdn.jsdelivr('icons', 'dist/index.umd.min.js')],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    open: false,
    port: 8799,
  },
  optimizeDeps: {
    exclude: ['metaflac.wasm'],
  },
});
