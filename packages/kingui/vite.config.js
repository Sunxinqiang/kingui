import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs-extra'

const isSite = process.env.ENV === 'site';

const build = {
  cssCodeSplit: false,
  lib: {
    entry: path.resolve(__dirname, 'src/export.js'),
    name: 'KingUI',
    fileName: (format) => `kingui.${format}.js`
  },
  rollupOptions: {
    // 确保外部化处理那些你不想打包进库的依赖
    external: ['vue'],
    output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      globals: {
        vue: 'Vue'
      }
    }
  }
}

const siteBuild = {
  outDir: 'site',
  rollupOptions: {
    input: {
      main: path.resolve(__dirname, 'index.html'),
      mobile: path.resolve(__dirname, 'mobile.html')
    }
  }
}

const vuePlugin = createVuePlugin({ include: [/\.vue$/, /\.md$/] })

// https://vitejs.dev/config/
export default defineConfig({
  base: isSite ? './': '/',
  plugins: [
    {
      name: 'vite-plugin-md',       // 手动实现一个 vite 插件将 .md 文件解析成 vue 文件
      async transform (_, path) {
        if (/\.(md)/.test(path)) {
          const code = await fs.readFile(path, 'utf-8')
          if (path.endsWith('.md')) {
            return mdLoader(code, path)
          }
        }
      },
      async handleHotUpdate (ctx) { // 热更新
        const { file } = ctx
        if (/\.(md)$/.test(file)) {
           const code = await fs.readFile(file, 'utf-8')
           let codeLoader = mdLoader(code, path)
           return vuePlugin.handleHotUpdate({
              ...ctx,
              read: () => codeLoader
           })
        }
      }
    },
    vuePlugin // 可编译 path 结尾是 .vue 与 .md 的文件
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: isSite ? siteBuild: build
})


function mdLoader (code, path) {
  code = code.replace(/"/g, '\'')
  return `
    <template>
      <Markdown source="${code}" />
    </template>
    <script setup>
      import Markdown from 'vue3-markdown-it';
      import 'highlight.js/styles/github.css';
    </script>
  `
}