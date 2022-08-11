/**
 * 
 * 
 * 更多图标封装看这里：https://github.com/07akioni/xicons
 * 
 * 
 * 
 */

import { ComponentInternalInstance } from "vue";
import { useAllElementPlusIcons, getAllName as getAllNameAntd } from "./ElementPlusIcons";
// import { useAllIonicons5Icons, getAllName as getAllNameIonicons5 } from "./IonIcons5Icons";

export function useAllIcons(app: any) {
    // 注册所有的 antd 图标
    app.use(useAllElementPlusIcons);
    // 注册所有的 ionicons5 图标
    // app.use(useAllIonicons5Icons);

}

/**
 * 获取所有的 antd 图标
 * @returns 
 */
export function getAllNameByAntd(currentInstance: ComponentInternalInstance | null) {
    return getAllNameAntd(currentInstance);
}

/**
 * 获取所有的 ionicons5 图标
 * @returns
 */
// export function getAllNameByIonicons5(currentInstance: ComponentInternalInstance | null) {
//     return getAllNameIonicons5(currentInstance);
// }
