import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/home',
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
		path: '/:pathMatch(.*)*',
		redirect: {
			name: 'loading'
		}
	},
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})