import router from '@/core/router';
import { useFullscreen, useWindowSize } from '@vueuse/core';
import { defineStore } from 'pinia';
import { nextTick, reactive, watch } from 'vue';
import TabsStore from './TabsStore';

interface IState {
    // 菜单收展状态
    isMobile: boolean
    // 鉴定是否移动设备分界值
    demarcation: number
}

export default defineStore("CoreStore", () => {

    const tabsStore = TabsStore();

    let state = reactive<IState>({
        //菜单收展状态
        isMobile: false,
        // 鉴定是否移动设备分界值
        demarcation: 768,
    });

    //窗口宽高变化
    const { width, height } = useWindowSize();
    state.isMobile = width.value < state.demarcation;
    watch(() => width.value, (value) => {
        state.isMobile = value < state.demarcation;
    });

    /**
     * 刷新
     * 
     * @param {*} fullPath 
     * @param {*} componentName 
     */
    // function refresh(fullPath: string, componentName: string) {
    //     console.log(fullPath, componentName);
    //     tabsStore.delCacheView(componentName, () => {
    //         nextTick(() => {
    //             router.push("/redirect" + fullPath);
    //         });
    //     })
    // }

    /**
     * 刷新
     * 
     * @param {*} fullPath 
     */
    function refresh(fullPath: string) {
        tabsStore.closeTabSelf(fullPath);
        nextTick(() => {
            router.push("/redirect" + fullPath);
        });
    }


    return {
        state,
        refresh,
    }

});