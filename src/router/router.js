import Vue from "vue";
import StudentPage from "@/pages/StudentPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import VueRouter from "vue-router";
import store from "@/store";
import BeautifulPage from "@/pages/BeautifulPage.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: BeautifulPage,
        meta: {requiresAuth: true}
    },
    {
        path: '/old',
        component: StudentPage,
        meta: {requiresAuth: true}
    },
    {
        path: '/login',
        component: LoginPage,
        meta: {requiresAuth: false}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) =>{
    const token = store.state.student.token

    if (to.meta.requiresAuth && !token) {
        next('/login')
    } else {
        next()
    }
})

export default router;