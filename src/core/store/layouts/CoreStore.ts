import router from '@/core/router';
import AppConsts from '@/utils/AppConsts';
import { useFullscreen, useWindowSize, useDark, useToggle } from '@vueuse/core';
import { defineStore } from 'pinia';
import { nextTick, onMounted, reactive, watch } from 'vue';
import TabsStore from './TabsStore';

interface IState {
    // 菜单收展状态
    isMobile: boolean
    // 全屏
    isFullscreen: boolean
    // 鉴定是否移动设备分界值
    demarcation: number,
    // 背景主题索引
    bgImageIndex: number
}

/**
 * 背景图片
 */
const bgImages: string[] = [
    "",
    "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*MtVDSKukKj8AAAAAAAAAAAAAARQnAQ",
    "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*FMluR4vJhaQAAAAAAAAAAAAAARQnAQ",
    "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*DGZXS4YOGp0AAAAAAAAAAAAAARQnAQ",
    "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*w6xcR7MriwEAAAAAAAAAAAAAARQnAQ",
    "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*VWFOTbEyU9wAAAAAAAAAAAAAARQnAQ",
    "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1yydQLzw5nYAAAAAAAAAAAAAARQnAQ",
    "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*XpGeRoZKGycAAAAAAAAAAAAAARQnAQ"
];

/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*MtVDSKukKj8AAAAAAAAAAAAAARQnAQ") no-repeat; */
/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*FMluR4vJhaQAAAAAAAAAAAAAARQnAQ") no-repeat; */
/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*DGZXS4YOGp0AAAAAAAAAAAAAARQnAQ") no-repeat; */
/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*w6xcR7MriwEAAAAAAAAAAAAAARQnAQ") no-repeat; */
/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*VWFOTbEyU9wAAAAAAAAAAAAAARQnAQ") no-repeat; */
/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1yydQLzw5nYAAAAAAAAAAAAAARQnAQ") no-repeat; */
/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*XpGeRoZKGycAAAAAAAAAAAAAARQnAQ") no-repeat; */

export default defineStore("CoreStore", () => {

    const tabsStore = TabsStore();

    let state = reactive<IState>({
        //菜单收展状态
        isMobile: false,
        //全屏
        isFullscreen: false,
        // 鉴定是否移动设备分界值
        demarcation: 768,
        // 背景主题索引
        bgImageIndex: 0,
    });

    // 界面初始化
    onMounted(() => { state.bgImageIndex = CoreStoreUtil.getBgImageIndex(); })

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

    const isDark = useDark();
    /**
     * 黑白主题切换
     */
    const toggleDark = useToggle(isDark);

    /**
     * 刷新
     * 
     * @param {*} fullPath 
     * @param {*} componentName 
     */
    function refresh(fullPath: string, componentName: string) {
        console.log(fullPath, componentName);
        tabsStore.delCacheView(componentName, () => {
            nextTick(() => {
                router.push("/redirect" + fullPath);
            });
        })
    }

    /**
     * 设置背景图
     * @param index 
     */
    function setBgImage(index: number) {
        state.bgImageIndex = index;
        CoreStoreUtil.setBgImageIndex(index);
    }

    return {
        state,
        bgImages,
        //是否暗黑
        isDark,
        toggleFullscreen,
        //暗黑切换
        toggleDark,
        refresh,
        setBgImage
    }

});


/**
 * 保存菜单状态数据
 */
class CoreStoreUtil {

    /**
     * 持久化图片index
     * @param index 
     */
    static setBgImageIndex(index: number) {
        localStorage.setItem(`${AppConsts.appPrefix}_bg_image_index`, index.toString());
    }


    /**
     * 获取 BgImageIndex
     * @returns 
     */
    static getBgImageIndex(): number {
        var index = localStorage.getItem(`${AppConsts.appPrefix}_bg_image_index`);
        if (index == null || index == undefined || index == "") return 0;
        return parseInt(index);
    }

}