const routes = [
    {
        path: '/home',
        component: import('@/views/home.vue')
    },
    {
        path: '/button',
        component: import('@/views/button.vue')
    },
    {
        path: '*',
        redirect: '/home'
    }
]