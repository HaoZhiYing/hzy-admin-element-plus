import AppConsts from '@/core/scripts/AppConsts';
import { RouteRecordRaw } from 'vue-router';

const layout = () => import("@/core/components/layouts/Layout.vue");
const vues = import.meta.glob(['../views/**/**.vue']);

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
        path: '/:pathMatch(.*)',
        name: '404',
        component: () => import('@/core/components/404.vue')
    },
    {
        //用户刷新组件
        path: '/redirect',
        component: layout,
        children: [{
            path: '/redirect/:path(.*)',
            name: "RedirectCom",
            component: () => import('@/core/components/Redirect.vue'),
        }]
    }
];

export default routes;