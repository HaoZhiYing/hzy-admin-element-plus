import AppStore from '@/core/store/AppStore';
import { RouteMeta, RouteRecordRaw } from 'vue-router';
import router from '@/core/router';
import AppConsts from '../../utils/AppConsts';
import Tools from '../utils/Tools';

//导出所有的 vue 模块
let dynamicRouters: Array<RouteRecordRaw> = [];
let allRouters: Array<any> = [];
const dynamicLayoutName = "dynamicLayout";
const layout = () => import("@/core/components/layouts/Layout.vue");

/**
 * 生成动态路由
 * @param menuTreeList
 */
export function genDynamicRouters(menuTreeList: any[]): boolean {
    const isdynamicLayout = router.hasRoute(dynamicLayoutName);

    if (isdynamicLayout)
        return isdynamicLayout;

    // if (isdynamicLayout) router.removeRoute(dynamicLayoutName);

    const homeUrl = AppConsts.defaultHomePageInfo.url;
    dynamicRouters.push({
        path: AppConsts.defaultHomePageInfo.jumpUrl!,
        name: AppConsts.defaultHomePageInfo.componentName!,
        component: AppConsts.modules['../../' + homeUrl] ?? AppConsts.modules['../' + homeUrl] ?? AppConsts.modules[homeUrl!],
        meta: {
            title: AppConsts.defaultHomePageInfo.name,
            close: AppConsts.defaultHomePageInfo.close,
            keepAlive: true,
            icon: AppConsts.defaultHomePageInfo.icon!,
            id: 0,
            name: AppConsts.defaultHomePageInfo.name,
            componentName: AppConsts.defaultHomePageInfo.componentName,
            url: AppConsts.defaultHomePageInfo.jumpUrl,
            type: 2,
            mode: 1
        },
    });

    //动态路由
    createDynamicRouters(Tools.genTreeData(menuTreeList, null));

    router.addRoute({
        name: dynamicLayoutName,
        path: '/',
        component: layout,
        redirect: AppConsts.defaultHomePageInfo.jumpUrl!,
        children: dynamicRouters
    });

    //将所有的路由信息记录到 全局状态 中
    var appStore = AppStore();
    appStore.state.allRouters = allRouters;
    appStore.state.userInfo.menus = menuTreeList;

    return isdynamicLayout;
}

/**
 * 创建动态路由
 * @param data
 */
function createDynamicRouters(data: any) {
    for (let i = 0; i < data?.length; i++) {
        let item = data[i];

        let path = item.router ? item.router : (item.url ?? '/404');

        //如果是菜单类型
        if (item.type == 2) {
            var route: RouteRecordRaw = {
                path: path,
                name: item.componentName ? item.componentName : item.id,
                redirect: path && path === '/404' ? '/404' : undefined,
                meta: {
                    title: item.name,
                    menuId: item.id,
                    ...item
                } as RouteMeta,
            } as RouteRecordRaw;

            if (path && path === '/404') {
                route.redirect = '/404';
            } else {
                route.component = AppConsts.modules['../../' + item.url] ?? AppConsts.modules['../' + item.url] ?? AppConsts.modules[item.url];
            }

            dynamicRouters.push(route);
            allRouters.push(route);
        }

        //只要有 children 则需要往下递归
        createDynamicRouters(item.children);
    }
}
