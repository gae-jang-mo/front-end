import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users'
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
        component: Users
    },
    {
        path: '/oauth2/redirect',
        name: 'oauthLoginHandler',
        component: () => import('../components/login/OauthLoginHandler.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
