import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/docs/home.md')
    },
    {
        path: '/quickstart',
        name: 'quickstart',
        component: () => import('@/docs/quickstart.md')
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('@components/button/README.md')
    },
    {
        path: '/loading',
        name: 'loading',
        component: () => import('@components/loading/README.md')
    },
    {
        path: '/icon',
        name: 'icon',
        component: () => import('@components/icon/README.md')
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