import { createApp } from 'vue'
import App from './App.vue'
import kingui from 'kingui'
import 'kingui/dist/style.css'


const app = createApp(App)
app.use(kingui)
app.mount('#app')
