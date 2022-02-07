## 使用方法
#### 1. 引入依赖
```json
"devDependencies": {
    "highlight.js": "^11.4.0",
    "vue3-markdown-it": "^1.0.10",
    "@kingui/markdown-plugin": "workspace:*"
  }
```

```js
import createVuePlugin from '@vitejs/plugin-vue'
import createMdPlugin from '@kingui/markdown-plugin'

const vuePlugin = createVuePlugin({ include: [/\.vue$/, /\.md$/] })


export default defineConfig({
  plugins: [
    createMdPlugin(vuePlugin),
    vuePlugin
  ],
})

```