import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue')
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('@/views/button.vue')
    },
    {
        path: '/loading',
        name: 'loading',
        component: () => import('@/views/loading.vue')
    },
    {
        path: '/icon',
        name: 'icon',
        component: () => import('@/views/icon.vue')
    },
    {
		path: '/:pathMatch(.*)*',
		redirect: {
			name: 'home'
		}
	},
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})