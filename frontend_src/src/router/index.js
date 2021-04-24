import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: 'get-services'
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
        path: '/get-service/:docSetId',
        name: 'GetService',
        component: () =>
            import ('../views/GetService.vue'),
        props: true
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