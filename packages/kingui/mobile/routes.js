import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@mobile/views/home.vue')
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('@mobile/views/button.vue')
    },
    {
        path: '/loading',
        name: 'loading',
        component: () => import('@mobile/views/loading.vue')
    },
    {
        path: '/icon',
        name: 'icon',
        component: () => import('@mobile/views/icon.vue')
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