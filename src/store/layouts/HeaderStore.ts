import { defineStore } from "pinia";
import { reactive, watch } from "vue";
import useCoreStore from "@/store/layouts/CoreStore";

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
        var _class = getHeaderClass();
        if (_class) state.class.push(_class);
    }
    initHeaderClass(coreStore.state.isDark);
    watch(() => coreStore.state.isDark, value => {
        initHeaderClass(value);
    })

    /**
     * 保存头部样式
     */
    function setHeaderClass(_class: string | null) {
        if (_class) {
            localStorage.setItem(`${domainName}_header_class`, _class);
        }
        else {
            localStorage.setItem(`${domainName}_header_class`, "");
        }
        initHeaderClass(coreStore.state.isDark);
    }

    /**
     * 获取头部样式名称
     */
    function getHeaderClass(): string | null {
        return localStorage.getItem(`${domainName}_header_class`);
    }

    return {
        state,
        setHeaderClass
    }

});