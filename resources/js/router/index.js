import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requiresAuth) && !window.Auth.signedIn) {
        window.location = window.Urls.login
        return
    }
    next()
})

export default router