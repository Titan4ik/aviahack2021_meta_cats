import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

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
      path: '/login',
      name: 'Login',
      component: () =>
          import ('../views/Login.vue')
    },
    {
        path: '/get-service',
        name: 'GetService',
        component: () =>
            import ('../views/GetService.vue')
    },
    {
        path: '/get-services',
        name: 'GetServices',
        component: () =>
            import ('../views/GetServices.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router