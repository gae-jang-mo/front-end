import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/users/:username',
        name: 'users',
        component: () => import('../views/Users.vue')

    },
    {
        path: '/oauth2/redirect',
        name: 'oauthLoginHandler',
        component: () => import('../components/login/OauthLoginHandler.vue')
    }
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});

export default router
