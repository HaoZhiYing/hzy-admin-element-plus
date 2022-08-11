import { RouteRecordRaw } from 'vue-router';

const layout = () => import("@/components/layouts/Layout.vue");

//路由配置
const routes: Array<RouteRecordRaw> = [
    {
        //登录
        path: '/login',
        name: "LoginCom",
        component: () => import('@/views/Login.vue')
    },
    {
        //找不到地址
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/components/404.vue')
    },
    {
        //用户刷新组件
        path: '/redirect',
        component: layout,
        children: [{
            path: '/redirect/:path(.*)',
            name: "RedirectCom",
            component: () => import('@/components/Redirect.vue'),
        }]
    },
    {
        //默认首页
        name: 'defaultLayout',
        path: '/',
        component: layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: "HomeIndexCom",
                component: () => import('@/views/home/Index.vue'),
                meta: { title: '首页', close: false, keepAlive: true },
            }]
    }
];

export default routes;