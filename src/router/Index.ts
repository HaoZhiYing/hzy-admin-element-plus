import { createRouter, createWebHashHistory } from 'vue-router';

import defaultRouters from '@/router/DefaultRouters';

const routerHistory = createWebHashHistory();

let router = createRouter({
    history: routerHistory,
    routes: defaultRouters,
    scrollBehavior: () => ({ top: 0 }),//to, from, savedPosition
});

//监听路由
router.beforeEach((to, from, next) => {
    // console.log('路由拦截器=>', from, to);

    return next();

});

router.afterEach(() => {

});

export default router;