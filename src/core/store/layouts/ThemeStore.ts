import AppConsts from "@/utils/AppConsts";
import { defineStore } from "pinia";
import { onMounted, reactive } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import Img0 from "@/assets/images/login-1.jpg";
import Img1 from "@/assets/images/bg-1.jpg";
import Img2 from "@/assets/images/bg-2.jpg";
import Img3 from "@/assets/images/bg-3.jpg";
import Img4 from "@/assets/images/bg-4.jpg";
import Img5 from "@/assets/images/bg-5.jpg";
import Img6 from "@/assets/images/bg-6.jpg";
import Img7 from "@/assets/images/bg-7.jpg";
// import Img8 from "@/assets/images/bg-8.jpg";
// import Img9 from "@/assets/images/bg-9.jpg";
// import Img10 from "@/assets/images/bg-10.jpg";
// import Img11 from "@/assets/images/bg-11.jpg";
// import Img12 from "@/assets/images/bg-12.jpg";

interface IState {
  // 头部主题 索引
  headerThemeClassIndex: number;
  // 菜单主题 索引
  menuThemeIndex: number;
  // 背景图 索引
  backgroundImageIndex: number;
  // 文本颜色
  textColor: string | undefined;
  // 背景颜色
  backgroundColor: "inherit" | "rgba(0,0,0,.2)" | "rgba(255,255,255,.2)";
}

/**
 * 菜单主题模型
 */
export interface MenuThemeModel {
  // 激活文本背景颜色
  activeBgColor: string | undefined;
  // 激活文本颜色
  activeTextColor: string | undefined;
  // 背景颜色
  backgroundColor: string | undefined;
  // 文本颜色
  textColor: string | undefined;
}

/**
 * 头部颜色
 */
const headerClasss: string[] = [];
for (let index = 0; index < 12; index++) {
  headerClasss.push("hzy-layout-header-" + index);
}

/**
 * 菜单主题集合
 */
const menuThemes: MenuThemeModel[] = [
  {
    //原生风格
    activeBgColor: undefined,
    backgroundColor: "transparent",
    activeTextColor: undefined,
    textColor: undefined,
  },
  {
    //antd 风格
    activeBgColor: "#2f54eb", // 激活文本背景颜色
    backgroundColor: "#001529", // 菜单背景色
    activeTextColor: "#fff", // 文本激活色
    textColor: "#fff", // 默认文本色
  },
  {
    //element+ 官方自定义颜色风格
    activeBgColor: "#2f54eb",
    backgroundColor: "#545c64",
    activeTextColor: "#fff", //黑色
    textColor: "#fff",
  },
  {
    //iview 菜单风格
    activeBgColor: "#2f54eb",
    backgroundColor: "#191a23",
    activeTextColor: "#fff",
    textColor: "#fff",
  },
  {
    //vue-element-admin 菜单风格
    activeBgColor: "#2f54eb", // 激活文本背景颜色
    backgroundColor: "rgb(48, 65, 86)", // 菜单背景色
    activeTextColor: "#fff", // 文本激活色
    textColor: "#fff", // 默认文本色
  },
];

/**
 * 背景图片
 */
const bgImages: string[] = [
  Img0,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  // Img8,
  // Img9,
  // Img10,
  // Img11,
  // Img12,
];

/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*MtVDSKukKj8AAAAAAAAAAAAAARQnAQ") no-repeat; */
/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*FMluR4vJhaQAAAAAAAAAAAAAARQnAQ") no-repeat; */
/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*DGZXS4YOGp0AAAAAAAAAAAAAARQnAQ") no-repeat; */
/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*w6xcR7MriwEAAAAAAAAAAAAAARQnAQ") no-repeat; */
/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*VWFOTbEyU9wAAAAAAAAAAAAAARQnAQ") no-repeat; */
/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1yydQLzw5nYAAAAAAAAAAAAAARQnAQ") no-repeat; */
/* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*XpGeRoZKGycAAAAAAAAAAAAAARQnAQ") no-repeat; */

export default defineStore("CoreStore", () => {
  let state = reactive<IState>({
    // 头部颜色
    headerThemeClassIndex: -1,
    // 菜单主题
    menuThemeIndex: 0,
    // 背景图
    backgroundImageIndex: -1,
    // 文本颜色
    textColor: undefined,
    // 背景颜色
    backgroundColor: "inherit",
  });

  const isDark = useDark();
  /**
   * 黑白主题切换
   */
  const toggleDark = useToggle(isDark);

  /**
   * 界面初始化
   */
  onMounted(() => {
    // 头部
    state.headerThemeClassIndex = ThemeStoreUtil.getHeaderThemeClassIndex();
    setHeaderThemeClassIndex(state.headerThemeClassIndex);

    // 菜单
    state.menuThemeIndex = ThemeStoreUtil.getMenuThemeIndex();
    setMenuThemeIndex(state.menuThemeIndex);

    // 背景图
    state.backgroundImageIndex = ThemeStoreUtil.getBgImageIndex();
    setBgImageIndex(state.backgroundImageIndex);

    //文本颜色
    state.textColor = ThemeStoreUtil.getTextColor();
    setTextColor(state.textColor);
  });

  /**
   * 设置头部样式
   * @param index
   */
  function setHeaderThemeClassIndex(index: number) {
    ThemeStoreUtil.setHeaderThemeClassIndex(index);
    state.headerThemeClassIndex = index;
  }

  /**
   * 持久化保存自定义颜色状态
   * @param index 菜单主题索引
   */
  function setMenuThemeIndex(index: number) {
    ThemeStoreUtil.setMenuThemeIndex(index);
    const menuTheme = menuThemes[index];
    state.menuThemeIndex = index;

    if (state.textColor) {
      menuTheme.textColor = state.textColor;
    }
  }

  /**
   * 设置背景图
   * @param index
   */
  function setBgImageIndex(index: number) {
    ThemeStoreUtil.setBgImageIndex(index);
    state.backgroundImageIndex = index;

    state.backgroundColor = index > -1 ? "rgba(0,0,0,.2)" : "inherit";
  }

  /**
   * 设置头部文本颜色
   * @param color
   */
  function setTextColor(color: string | undefined) {
    ThemeStoreUtil.setTextColor(color);
    state.textColor = color;
  }

  return {
    state,
    headerClasss,
    menuThemes,
    bgImages,
    isDark,
    toggleDark,
    setHeaderThemeClassIndex,
    setMenuThemeIndex,
    setBgImageIndex,
    setTextColor,
  };
});

/**
 * 持久化数据工具
 */
class ThemeStoreUtil {
  /**
   * 保存头部 index
   * @param index
   */
  static setHeaderThemeClassIndex(index: number) {
    localStorage.setItem(`${AppConsts.appPrefix}_header_theme_class_index`, index.toString());
  }

  /**
   * 获取头部 index
   * @returns
   */
  static getHeaderThemeClassIndex(): number {
    var index = localStorage.getItem(`${AppConsts.appPrefix}_header_class_index`);
    if (index == null || index == undefined || index == "") return -1;
    return parseInt(index);
  }

  /**
   * 保存头部 index
   * @param index
   */
  static setTextColor(color: string | undefined) {
    if (color) {
      localStorage.setItem(`${AppConsts.appPrefix}_text_color`, color);
    } else {
      localStorage.setItem(`${AppConsts.appPrefix}_text_color`, "");
    }
  }

  /**
   * 获取头部 index
   * @returns
   */
  static getTextColor(): string | undefined {
    var index = localStorage.getItem(`${AppConsts.appPrefix}_text_color`);
    if (index == null || index == undefined || index == "" || !index) return undefined;
    return index;
  }

  /**
   * 持久化保存自定义颜色状态
   * @param index
   */
  static setMenuThemeIndex(index: number) {
    localStorage.setItem(`${AppConsts.appPrefix}_menu_theme_index`, index.toString());
  }

  /**
   * 获取 index
   * @returns
   */
  static getMenuThemeIndex(): number {
    var index = localStorage.getItem(`${AppConsts.appPrefix}_menu_theme_index`);
    if (index == null || index == undefined || index == "") return 0;
    return parseInt(index);
  }

  /**
   * 持久化背景图片index
   * @param index
   */
  static setBgImageIndex(index: number) {
    localStorage.setItem(`${AppConsts.appPrefix}_bg_image_index`, index.toString());
  }

  /**
   * 获取背景 BgImageIndex
   * @returns index
   */
  static getBgImageIndex(): number {
    var index = localStorage.getItem(`${AppConsts.appPrefix}_bg_image_index`);
    if (index == null || index == undefined || index == "") return -1;
    return parseInt(index);
  }
}
