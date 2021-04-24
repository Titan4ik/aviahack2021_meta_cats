import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/create-service',
        name: 'CreateService',
        component: () =>
            import ('../views/CreateService.vue')
    },
    {
        path: '/get-service',
        name: 'GetService',
        component: () =>
            import ('../views/GetService.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router