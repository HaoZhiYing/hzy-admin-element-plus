<script setup lang="ts">
import router from "@/core/router";
import LayoutOneLevelMenuVue from "./menus/LayoutOneLevelMenu.vue";
import CoreStore from "@/core/store/layouts/CoreStore";
import SettingsStore from "@/core/store/layouts/SettingsStore";
import MenuStore, { EMenuMode } from "@/core/store/layouts/MenuStore";
import Tools from "@/core/utils/Tools";
import ThemeStore from "@/core/store/layouts/ThemeStore";
import AppIcon from "@/core/components/AppIcon.vue";
import { useFullscreen } from "@vueuse/core";
import { watch } from "vue";
//
const coreStore = CoreStore();
const settingsStore = SettingsStore();
const menuStore = MenuStore();
const themeStore = ThemeStore();

// 图标大小
const iconSize: number = 18;

//全屏
const { isFullscreen, enter, exit, toggle } = useFullscreen();

// 退出登录
function logOut() {
  Tools.confirm("您确定要退出登录吗?", () => router.push("/login"));
}

// 刷新
function onReload() {
  coreStore.refresh(router.currentRoute.value.fullPath);
}

//文档地址
function jumpDoc() {
  window.open("https://www.yuque.com/u378909/yidf7v", "_black");
}

//pro
function jumpPro() {
  window.open("http://124.221.128.7:6600/", "_black");
}

//mvc
function jumpMvc() {
  window.open("http://124.221.128.7:7600/", "_black");
}
</script>

<template>
  <el-header>
    <div class="hzy-layout-header" :class="themeStore.headerClasss[themeStore.state.headerThemeClassIndex]">
      <!-- 菜单收缩 -->
      <el-tooltip content="菜单收展" placement="bottom">
        <div class="hzy-header-btn" @click="menuStore.onChangeCollapse(!menuStore.state.isCollapse)">
          <el-icon :size="iconSize">
            <template v-if="coreStore.state.isMobile">
              <Expand v-if="!menuStore.state.isCollapse" />
              <Fold v-else />
            </template>
            <template v-else>
              <Expand v-if="menuStore.state.isCollapse" />
              <Fold v-else />
            </template>
          </el-icon>
        </div>
      </el-tooltip>
      <div style="flex: 1 1 0%; height: 100%; display: flex" v-if="menuStore.state.menuMode == EMenuMode.top">
        <LayoutOneLevelMenuVue />
      </div>
      <div style="flex: 1 1 0%" v-else></div>
      <!-- HzyAdmin 文档 -->
      <el-tooltip content="HzyAdmin 文档" placement="bottom" v-if="!coreStore.state.isMobile">
        <div class="hzy-header-btn" @click="jumpDoc">
          <el-badge is-dot type="success">
            <el-icon :size="iconSize"><Document /></el-icon>
          </el-badge>
        </div>
      </el-tooltip>

      <!-- 全屏 -->
      <el-tooltip :content="isFullscreen ? '退出全屏' : '全屏'" placement="bottom" v-if="!coreStore.state.isMobile">
        <div class="hzy-header-btn" @click="toggle()">
          <AppIcon name="fullscreen-exit-outlined" :size="iconSize" v-if="isFullscreen" />
          <AppIcon name="fullscreen-outlined" :size="iconSize" v-else />
          <!-- <el-icon :size="iconSize">
            <Minus v-if="coreStore.state.isFullscreen" />
            <FullScreen v-else />
          </el-icon> -->
        </div>
      </el-tooltip>

      <!-- 刷新 -->
      <el-tooltip content="刷新" placement="bottom">
        <div class="hzy-header-btn" @click="onReload">
          <el-icon :size="iconSize"><RefreshRight /></el-icon>
        </div>
      </el-tooltip>

      <!-- 黑白主题切换 -->
      <div class="hzy-header-btn" @click="themeStore.toggleDark()">
        <!-- <ThemeSwitch :state="coreStore.state.isDark" :iconSize="iconSize" /> -->
        <el-icon :size="iconSize">
          <Sunny v-if="themeStore.isDark" />
          <MoonNight v-else />
        </el-icon>
      </div>

      <!-- 系统配置 -->
      <el-tooltip content="系统配置" placement="bottom">
        <div class="hzy-header-btn" @click="settingsStore.onOpen(!settingsStore.state.isOpen)">
          <el-icon :size="iconSize"><Setting /></el-icon>
        </div>
      </el-tooltip>

      <!-- 当前登陆人 -->
      <el-dropdown>
        <div class="hzy-header-btn">
          <el-icon :size="iconSize"><User /></el-icon>&nbsp;超级管理员
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logOut()">
              <el-icon :size="16">
                <SwitchButton />
              </el-icon>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<style lang="less" scoped>
.el-header {
  padding: 0;
}
.hzy-layout-header {
  display: flex;
  height: 100%;
  // border-bottom: 1px solid var(--el-border-color-light);
  // 动画延迟
  transition: background-color 0.6s;
  -moz-transition: background-color 0.6s;
  /* Firefox 4 */
  -webkit-transition: background-color 0.6s;
  /* Safari 和 Chrome */
  -o-transition: background-color 0.6s;

  .hzy-header-btn {
    padding: 0 12px;
    cursor: pointer;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .hzy-header-btn:hover {
    background: rgba(243, 246, 248, 0.3);
  }

  * {
    // 头部文本颜色
    color: v-bind("themeStore.state.textColor");
  }
}

.el-dropdown {
  color: inherit !important;
}
</style>
<!-- 头部皮肤定义 -->
<style lang="less">
//=======// 头部 蓝色
.hzy-layout-header-0 {
  background: #2173dc;
  background: -webkit-gradient(linear, left top, right top, from(#1d42ab), color-stop(#2173dc), to(#1e93ff));
  background: linear-gradient(90deg, #1d42ab, #2173dc, #1e93ff);
}

.hzy-layout-header-1 {
  background-color: #8d6658;
}

.hzy-layout-header-2 {
  background-color: #57c7d4;
}

.hzy-layout-header-3 {
  background-color: #46be8a;
}

.hzy-layout-header-4 {
  background-color: #757575;
}

.hzy-layout-header-5 {
  background-color: #677ae4;
}

.hzy-layout-header-6 {
  background-color: #f2a654;
}

.hzy-layout-header-7 {
  background-color: #f96197;
}

.hzy-layout-header-8 {
  background-color: #926dde;
}

.hzy-layout-header-9 {
  background-color: #f96868;
}

.hzy-layout-header-10 {
  background-color: #3aa99e;
}

.hzy-layout-header-11 {
  background-color: #f9cd48;
}
</style>
