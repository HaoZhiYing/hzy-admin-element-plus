<script setup lang="ts">
import router from "@/router";
import LayoutOneLevelMenuVue from "./menus/LayoutOneLevelMenu.vue";

import CoreStore from "@/store/layouts/CoreStore";
import SettingsStore from "@/store/layouts/SettingsStore";
import HeaderStore from "@/store/layouts/HeaderStore";
import MenuStore, { EMenuMode } from "@/store/layouts/MenuStore";
import Tools from "@/scripts/Tools";
//
const coreStore = CoreStore();
const settingsStore = SettingsStore();
const headerStore = HeaderStore();
const menuStore = MenuStore();

// 图标大小
const iconSize: number = 20;

// 退出登录
const logOut = () => {
  Tools.confirm("您确定要退出登录吗?", () => router.push("/login"));
};

// 刷新
const onReload = () => {
  const name = router.currentRoute.value.name ? router.currentRoute.value.name : "";
  coreStore.refresh(router.currentRoute.value.fullPath, name as string);
};

const jumpDoc = () => {
  window.open("https://www.yuque.com/u378909/yidf7v", "_black");
};
</script>

<template>
  <el-header>
    <div class="hzy-layout-header" :class="headerStore.state.class">
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
      <el-tooltip content="HzyAdmin 文档" placement="bottom" @click="onReload">
        <div class="hzy-header-btn" @click="jumpDoc">HzyAdmin 文档</div>
      </el-tooltip>
      <!-- 刷新 -->
      <el-tooltip content="刷新" placement="bottom" @click="onReload">
        <div class="hzy-header-btn">
          <el-icon :size="iconSize"><RefreshRight /></el-icon>
        </div>
      </el-tooltip>
      <!-- 系统配置 -->
      <el-tooltip content="系统配置" placement="bottom">
        <div class="hzy-header-btn" @click="settingsStore.onOpen(!settingsStore.state.isOpen)">
          <el-icon :size="iconSize"><Setting /></el-icon>
        </div>
      </el-tooltip>
      <!-- 黑白主题切换 -->
      <el-tooltip content="黑白主题切换" placement="bottom">
        <div class="hzy-header-btn" @click="coreStore.toggleDark()">
          <el-icon :size="iconSize">
            <Sunny v-if="coreStore.state.isDark" />
            <Sunrise v-else />
          </el-icon>
        </div>
      </el-tooltip>
      <!-- 全屏 -->
      <el-tooltip content="全屏" placement="bottom" v-if="!coreStore.state.isMobile">
        <div class="hzy-header-btn" @click="coreStore.toggleFullscreen()">
          <el-icon :size="iconSize">
            <ZoomOut v-if="coreStore.state.isFullscreen" />
            <ZoomIn v-else />
          </el-icon>
        </div>
      </el-tooltip>
      <!-- 退出登录 -->
      <el-tooltip content="退出登录" placement="bottom">
        <div class="hzy-header-btn" @click="logOut()">
          <el-icon :size="iconSize"><SwitchButton /></el-icon>
        </div>
      </el-tooltip>
      <!-- 当前登陆人 -->
      <el-tooltip content="当前登陆人" placement="bottom">
        <div class="hzy-header-btn">
          <el-icon :size="iconSize"><User /></el-icon>&nbsp;超级管理员
        </div>
      </el-tooltip>
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
  border-bottom: 1px solid var(--el-border-color-light);

  .hzy-header-btn {
    padding: 0 12px;
    cursor: pointer;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .hzy-header-btn:hover {
    background: rgba(243, 246, 248, 0.5);
  }
}
</style>
<!-- 头部皮肤定义 -->
<style lang="less">
//=======// 头部 蓝色
.hzy-layout-header-0 {
  background-color: #096dd9;
  color: #ffffff;
}

//=======// 头部 红色
.hzy-layout-header-1 {
  background-color: #997b71;
  color: #ffffff;
}

//=======// 头部 绿色
.hzy-layout-header-2 {
  background-color: #237804;
  color: #ffffff;
}

//=======// 头部 淡蓝色
.hzy-layout-header-3 {
  background-color: #667afa;
  color: #ffffff;
}

//=======// 头部 粉色
.hzy-layout-header-4 {
  background-color: #f74584;
  color: #ffffff;
}

//=======// 头部 紫色
.hzy-layout-header-5 {
  background-color: #9463f7;
  color: #ffffff;
}

//=======// 头部 黄色
.hzy-layout-header-6 {
  background-color: #d48806;
  color: #ffffff;
}

//=======// 头部 红色
.hzy-layout-header-7 {
  background-color: #ff4c52;
  color: #ffffff;
}
</style>
