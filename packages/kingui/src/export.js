import '@/css/reset.less'
import KButton from './components/button/index.vue'

export default {
    install (Vue) {
        Vue.component('KButton', KButton)
    }
}