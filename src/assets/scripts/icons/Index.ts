/**
 * 
 * 
 * 更多图标封装看这里：https://github.com/07akioni/xicons
 * 
 * 
 * 
 */

import { useAllElementPlusIcons, getAllName as getAllNameElementPlus } from "./ElementPlusIcons";


export function useAllIcons(app: any) {
    // 注册所有的 antd 图标
    // app.use(useAllAntdIcons);
    // 注册所有的 element plus 图标
    app.use(useAllElementPlusIcons);
    // 注册所有的 fluent 图标 【图标太多容易卡死】
    // app.use(useAllFluentIcons);
    // 注册所有的 ionicons5 图标
    // app.use(useAllIonicons5Icons);

}

/**
 * 获取所有的 antd 图标
 * @returns 
 */
// export function getAllNameByAntd(currentInstance: any) {
//     return getAllNameAntd(currentInstance);
// }

/**
 * 获取所有的 element plus 图标
 * @returns 
 */
export function getAllNameByElementPlus(currentInstance: any) {
    return getAllNameElementPlus(currentInstance);
}


/**
 * 获取所有的 Fluent 图标
 * @returns
 */
// export function getAllNameByFluent(currentInstance: any) {
//     return getAllNameFluent(currentInstance);
// }

/**
 * 获取所有的 ionicons5 图标
 * @returns 
 */
// export function getAllNameByIonicons5(currentInstance: any) {
//     return getAllNameIonicons5(currentInstance);
// }