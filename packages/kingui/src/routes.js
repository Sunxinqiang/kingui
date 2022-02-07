import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../README.md')
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('@/components/button/README.md')
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