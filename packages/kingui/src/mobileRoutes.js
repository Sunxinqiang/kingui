import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/home',
        component: import('@/views/home.vue')
    },
    {
        path: '/',
        component: import('@/views/button.vue')
    },
    {
		path: '/:pathMatch(.*)*',
		redirect: {
			path: '/button'
		}
	},
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})