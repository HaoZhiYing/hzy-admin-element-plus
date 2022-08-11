import { useFullscreen, useWindowSize, useDark, useToggle } from '@vueuse/core';
import { defineStore } from 'pinia';
import { reactive, ref, watch } from 'vue';

interface IState {
    // 菜单收展状态
    isMobile: boolean
    // 全屏
    isFullscreen: boolean
    // 暗黑
    isDark: boolean
    // 鉴定是否移动设备分界值
    demarcation: number
}

export default defineStore("CoreStore", () => {

    let state = reactive<IState>({
        //菜单收展状态
        isMobile: false,
        //全屏
        isFullscreen: false,
        //暗黑
        isDark: false,
        // 鉴定是否移动设备分界值
        demarcation: 576
    });

    //窗口宽高变化
    const { width, height } = useWindowSize();
    state.isMobile = width.value < state.demarcation;
    watch(() => width.value, (value) => {
        state.isMobile = value < state.demarcation;
    });

    //全屏
    const { isFullscreen, enter, exit, toggle } = useFullscreen();
    watch(() => isFullscreen.value, (value) => {
        state.isFullscreen = value;
    });
    const toggleFullscreen = () => toggle();

    //暗黑主题
    let isDark = ref(useDark());
    const toggleDark = useToggle(isDark);
    watch(() => isDark.value, value => {
        state.isDark = value;
    })

    return {
        state,
        toggleFullscreen,
        toggleDark
    }

});