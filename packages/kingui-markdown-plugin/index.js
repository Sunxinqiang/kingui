const fs = require('fs-extra')

function mdLoader(code) {
    code = code.replace(/"/g, '\'')
    return `
      <template>
      <Markdown class="markdown-body" source="${code}" />
      </template>
      <script setup>
        import Markdown from 'vue3-markdown-it';
        import 'highlight.js/styles/github.css';
        // import 'highlight.js/styles/monokai.css';
      </script>
    `
}

module.exports = function create (vuePlugin) {
    return {
        name: 'kingui-markdown-plugin',       // 手动实现一个 vite 插件将 .md 文件解析成 vue 文件
        async transform(_, path) {
            if (/\.(md)/.test(path)) {
                const code = await fs.readFile(path, 'utf-8')
                if (path.endsWith('.md')) {
                    return mdLoader(code)
                }
            }
        },
        async handleHotUpdate(ctx) { // 热更新
            const { file } = ctx
            if (/\.(md)$/.test(file)) {
                const code = await fs.readFile(file, 'utf-8')
                let codeLoader = mdLoader(code)
                return vuePlugin.handleHotUpdate({
                    ...ctx,
                    read: () => codeLoader
                })
            }
        }
    }
}