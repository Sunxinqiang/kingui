import { createApp, defineAsyncComponent } from 'vue'
import '@css/reset.less'
import App from './App.vue'
import router from './routes'

const app = createApp(App)

app.use(router)

Object.entries(import.meta.glob('./components/*.vue')).forEach(item => {
    let name = item[0].replace(/\.\/components\/(.+)\.vue/, '$1')
    app.component(name, defineAsyncComponent(item[1]))
})

Object.entries(import.meta.glob('../components/*/index.vue')).forEach(item => {
    let name = item[0].replace(/\.\.\/components\/(.+)\/index\.vue/, '$1')
    name = name.charAt(0).toUpperCase() + name.substring(1)
    app.component(name, defineAsyncComponent(item[1]))
})

app.mount('#app')
