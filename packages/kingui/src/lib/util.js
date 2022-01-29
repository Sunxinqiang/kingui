import { defineAsyncComponent } from 'vue'

export function autoRegister (app, dir, modules) {
    Object.entries(modules).forEach(item => {
        let reg = new RegExp(`./${dir}/(.+).vue`)
        let name = item[0].replace(reg, '$1')
        app.component(name, defineAsyncComponent(item[1]))
    })
}