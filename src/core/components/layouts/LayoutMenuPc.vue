<script lang="ts" setup>
import { computed } from "vue";
import LayoutMenuVue from "./menus/LayoutMenu.vue";
import MenuStore from "@/core/store/layouts/MenuStore";
import AppConsts from "@/utils/AppConsts";
import ThemeStore from "@/core/store/layouts/ThemeStore";
//
const menuStore = MenuStore();
const themeStore = ThemeStore();

const textColor = computed(() => {
  if (themeStore.state.menuThemeIndex > 0) {
    return themeStore.menuThemes[themeStore.state.menuThemeIndex]?.textColor;
  }
  return themeStore.state.textColor ?? themeStore.menuThemes[themeStore.state.menuThemeIndex]?.textColor;
});
</script>

<template>
  <el-aside :width="menuStore.state.width + 'px'" :style="{ backgroundColor: themeStore.menuThemes[themeStore.state.menuThemeIndex]?.backgroundColor }">
    <div class="hzy-layou-menu">
      <div class="hzy-layou-menu-title" v-if="!menuStore.state.isCollapse" :style="{ color: textColor }">
        {{ AppConsts.appTitle }}
      </div>
      <LayoutMenuVue />
    </div>
  </el-aside>
</template>

<style lang="less" scoped>
.el-aside {
  overflow: hidden;
  overflow-y: auto;
  z-index: 7;
  // 对左侧区添加透明度
  backdrop-filter: saturate(50%) blur(1px);
  -webkit-backdrop-filter: saturate(50%) blur(1px);
}
.hzy-layou-menu {
  .el-menu {
    border-right: 0 !important;
  }
  .hzy-layou-menu-title {
    font-weight: bold;
    font-size: 20px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
