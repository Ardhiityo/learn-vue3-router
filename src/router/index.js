import {
    createRouter,
    createWebHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/product/:id',
            name: 'product',
            component: () => import('../views/Product.vue'),
            children: [{
                path: 'owner',
                name: 'owner',
                component: () => import('../views/Owner.vue')
            }]
        },
        {
            path: '/:catchall(.*)*',
            name: '404',
            component: () => import('../views/error/404.vue'),
        },
    ]
})

export default router;