import AppConsts from '@/scripts/AppConsts';
import { RouteRecordRaw } from 'vue-router';

const layout = () => import("@/components/layouts/Layout.vue");
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
        //默认工作台
        name: 'defaultLayout',
        path: '/',
        component: layout,
        redirect: AppConsts.defaultHomePageInfo.jumpUrl,
        children: [
            {
                path: AppConsts.defaultHomePageInfo.jumpUrl,
                name: AppConsts.defaultHomePageInfo.componentName,
                component: vues['../' + AppConsts.defaultHomePageInfo.url],
                meta: { title: AppConsts.defaultHomePageInfo.name, close: AppConsts.defaultHomePageInfo.close, keepAlive: true, icon: AppConsts.defaultHomePageInfo.icon },
            }]
    }
];

export default routes;