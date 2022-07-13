import { createApp, defineAsyncComponent } from 'vue'
import '@css/reset.less'
import '@/css/githubmd.less'
import App from './App.vue'
import router from './routes'
import Stat from '@vastness/stat-sdk'

try {
    new Stat({
        url: 'https://api.sunxq.top/stat/sa.gif',
        isSinglePage: true,
        clickIncludes: ['BUTTON', 'A']
    })
  } catch (error) {
    console.log(error)
  }

const app = createApp(App)

app.use(router)

Object.entries(import.meta.glob('./components/*.vue')).forEach(item => {
    let name = item[0].replace(/\.\/components\/(.+)\.vue/, '$1')
    app.component(name, defineAsyncComponent(item[1]))
})

app.mount('#app')
