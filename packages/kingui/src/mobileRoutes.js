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
		path: '/:pathMatch(.*)*',
		redirect: {
			name: 'button'
		}
	},
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})