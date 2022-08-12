import { defineStore } from "pinia";
import { onMounted, reactive, watch } from "vue";
import useCoreStore from "@/store/layouts/CoreStore";
import AppConsts from "@/scripts/AppConsts";

export enum EMenuMode {
    // 1：常规模式
    default = "1",
    //2：顶部模式
    top = "2",
    //3：左侧模式
    left = "3"
}

interface IState {
    // 菜单收展状态
    isCollapse: boolean
    // 当前宽度
    width: number
    // pc端最小宽度
    minWidth: number
    // 最大宽度
    maxWidth: number
    // 移动端pc菜单宽度
    mobileWidth: number
    // 激活文本颜色
    activeTextColor: string | undefined
    // 背景颜色
    backgroundColor: string | undefined
    // 文本颜色
    textColor: string | undefined,
    // 是否自定义颜色
    isCustomColor: boolean,
    // 菜单模式 = 1：常规模式|2：顶部模式|3：左侧模式
    menuMode: EMenuMode
}

// 域名
const domainName = window.location.origin;

export default defineStore("MenuStore", () => {

    const coreStore = useCoreStore();

    let state = reactive<IState>({
        // 菜单收展状态
        isCollapse: false,
        // 当前宽度
        width: 220,
        // pc端最小宽度
        minWidth: 64,
        // 最大宽度
        maxWidth: 220,
        // 移动端pc菜单宽度
        mobileWidth: 0,
        // 激活文本颜色
        activeTextColor: undefined,
        // 背景颜色
        backgroundColor: undefined,
        // 文本颜色
        textColor: undefined,
        // 是否自定义颜色
        isCustomColor: false,
        // 菜单栏模式 = 1：常规模式|2：顶部模式|3：左侧模式
        menuMode: window.innerWidth < coreStore.state.demarcation ? EMenuMode.default : MenuStoreUtil.getMenuMode()
    });

    watch(() => state.menuMode, (value) => MenuStoreUtil.setMenuMode(value));
    watch(() => coreStore.state.isMobile, (value) => {
        // 监听窗口大小 小屏幕下不使用 oneLevelMenuMode
        MenuStoreUtil.setMenuMode(window.innerWidth < coreStore.state.demarcation ?
            EMenuMode.default : MenuStoreUtil.getMenuMode());
        onChangeMenu(value);
        //如果是移动模式，将菜单模式还原为默认行为
        if (value) {
            setMenuMode(EMenuMode.default);
        }
    });

    /**
     * 菜单变化
     * @param isMobile 
     */
    function onChangeMenu(isMobile: boolean) {
        if (isMobile) {
            state.width = state.maxWidth;
        } else {
            // pc 端表现
            if (state.isCollapse) {
                state.width = state.minWidth;
            } else {
                state.width = state.maxWidth;
            }
        }
    };

    /**
     * 菜单收展
     */
    function onChangeCollapse(isCollapse: boolean) {
        state.isCollapse = isCollapse;
        onChangeMenu(coreStore.state.isMobile);
    }

    // 监听移动端变化菜单状态
    onChangeMenu(coreStore.state.isMobile);

    /**
     * 改变自定义颜色
     */
    function onChangeCustomColor(isCustomColor: boolean) {
        state.isCustomColor = isCustomColor;
        if (state.isCustomColor) {
            state.backgroundColor = "#001529";
            state.activeTextColor = "#ffd04b";
            state.textColor = "#ffffff";
        } else {
            state.backgroundColor = undefined;
            state.activeTextColor = undefined;
            state.textColor = undefined;
        }
    }
    onMounted(() => { state.isCustomColor = MenuStoreUtil.getIsCustomColor(); })
    watch(() => state.isCustomColor, value => {
        setCustomColor(value);
        onChangeCustomColor(value);
    });

    /**
     * 设置一级菜单 是否开启
     * @param menumode 
     */
    function setMenuMode(menumode: EMenuMode) {
        state.menuMode = menumode;
    }

    /**
     * 持久化保存自定义颜色状态
     * @param isCustomColor 
     */
    function setCustomColor(isCustomColor: boolean) {
        MenuStoreUtil.setIsCustomColor(isCustomColor);
    }

    return {
        state,
        onChangeCollapse,
        setMenuMode
    }

});

/**
 * 保存菜单状态数据
 */
class MenuStoreUtil {

    /**
     * 持久化保存自定义颜色状态
     * @param isCustomColor 
     */
    static setIsCustomColor(isCustomColor: boolean) {
        localStorage.setItem(`${domainName}_custom_color`, isCustomColor ? "1" : "0");
    }
    /**
    * 获取 IsCustomColor
    */
    static getIsCustomColor(): boolean {
        return localStorage.getItem(`${domainName}_custom_color`) == "1";
    }

    /**
     * 设置 menuMode
     * @param menuMode 
     */
    static setMenuMode(menuMode: EMenuMode) {
        localStorage.setItem(AppConsts.appPrefix + "_one_level_menu_mode", menuMode.toString());
    }
    /**
     * 获取 menuMode
     */
    static getMenuMode() {
        let value = localStorage.getItem(AppConsts.appPrefix + "_one_level_menu_mode");
        return value ? value as EMenuMode : EMenuMode.top;
    }

}