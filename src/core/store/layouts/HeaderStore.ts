import { defineStore } from "pinia";
import { reactive, watch } from "vue";
import useCoreStore from "@/core/store/layouts/CoreStore";

interface IState {
    class: string[]
}

// 域名
const domainName = window.location.origin;

export default defineStore("HeaderStore", () => {

    const coreStore = useCoreStore();
    //
    let state = reactive<IState>({
        // 头部样式
        class: []
    });

    /**
     * 初始化头部样式
     */
    function initHeaderClass(isDark: boolean) {
        state.class = [];
        // 首先处理边框阴影 
        // var boxShadow = isDark ? 'hzy-layout-header-dark-box-shadow' : 'hzy-layout-header-light-box-shadow';
        // state.class.push(boxShadow);
        var _class = HeaderStoreUtil.getHeaderClass();
        if (_class) state.class.push(_class);
    }
    initHeaderClass(coreStore.isDark);
    watch(() => coreStore.isDark, value => {
        initHeaderClass(value);
    })

    /**
     * 设置头部样式
     * @param _class 样式
     * @param index 索引
     */
    function setHeaderClass(_class: string, index: number) {
        HeaderStoreUtil.setHeaderClass(_class);
        initHeaderClass(coreStore.isDark);
    }

    return {
        state,
        setHeaderClass
    }

});


/**
 * 保存头部状态数据
 */
class HeaderStoreUtil {

    /**
     * 保存头部 class
     * @param _class 
     */
    static setHeaderClass(_class: string) {
        localStorage.setItem(`${domainName}_header_class`, _class ? _class : "");
    }

    /**
     * 获取 menuMode
     */
    static getHeaderClass(): string {
        return localStorage.getItem(`${domainName}_header_class`)!;
    }

}