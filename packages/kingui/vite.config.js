import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

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

// https://vitejs.dev/config/
export default defineConfig({
  base: isSite ? './': '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: isSite ? siteBuild: build
})
