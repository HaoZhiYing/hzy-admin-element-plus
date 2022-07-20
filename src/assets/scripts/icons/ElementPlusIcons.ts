import { getCurrentInstance } from "vue";
import * as icons from '@element-plus/icons-vue';

const iconsKeyName = "$elementPlusIcons";
const iconNameKeyName = "$elementPlusIconsNames";
const allIconsKeyName = "$allIcons";

/**
 * 使用所有的图标
 * @param {*} app 
 */
export function useAllElementPlusIcons(app: any) {
    var names: any = [];
    let allIcons = app.config.globalProperties[allIconsKeyName];
    allIcons = allIcons ? allIcons : [];
    // 注册组件
    Object.keys(icons).forEach(key => {
        var com = (icons as any)[key];

        //验证能否注册
        if (allIcons.findIndex((w: any) => w == key) < 0) {
            app.component(key, com);
            names.push(key);
            allIcons.push(key);
        }

    });
    // 添加到全局
    app.config.globalProperties[iconsKeyName] = icons;
    app.config.globalProperties[iconNameKeyName] = names;
    app.config.globalProperties[allIconsKeyName] = allIcons;
}

/**
 * 获取所有的 图标 模块
 * @returns 
 */
export function getAll(currentInstance: any) {
    const { appContext } = currentInstance ? currentInstance : getCurrentInstance();
    return appContext.app.config.globalProperties[iconsKeyName];
}

/**
 * 获取所有的 图标名称
 * @returns 
 */
export function getAllName(currentInstance: any) {
    const { appContext } = currentInstance ? currentInstance : getCurrentInstance();
    return appContext.app.config.globalProperties[iconNameKeyName]//.filter((w) => w != "Icon");
}