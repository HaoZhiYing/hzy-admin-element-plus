<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
import LayoutMenuSubVue from "./LayoutMenuSub.vue";
import CoreStore from "@/store/layouts/CoreStore";
import MenuStore, { EMenuMode } from "@/store/layouts/MenuStore";
import AppStore from "@/store/AppStore";

//
const coreStore = CoreStore();
const menuStore = MenuStore();
const appStore = AppStore();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <el-menu
    default-active="2"
    @open="handleOpen"
    @close="handleClose"
    :collapse="menuStore.state.isCollapse && !coreStore.state.isMobile"
    :collapse-transition="false"
    :active-text-color="menuStore.state.activeTextColor"
    :background-color="menuStore.state.backgroundColor"
    :text-color="menuStore.state.textColor"
  >
    <!-- 动态生成 topnav-->
    <template v-if="menuStore.state.menuMode != EMenuMode.default">
      <template v-for="item in appStore.state.subMenus">
        <el-menu-item v-if="item.children.length === 0" :index="item.jumpUrl ? item.jumpUrl : item.id" :title="item.name">
          <AppIcon :name="item.icon" v-if="item.icon" />
          <span>{{ item.name }}</span>
        </el-menu-item>
        <LayoutMenuSubVue v-else :menu-info="item" />
      </template>
    </template>
    <template v-else>
      <template v-for="item in appStore.state.userInfo.menus">
        <el-menu-item v-if="item.children.length === 0" :index="item.jumpUrl ? item.jumpUrl : item.id" :title="item.name">
          <AppIcon :name="item.icon" v-if="item.icon" />
          <span>{{ item.name }}</span>
        </el-menu-item>
        <LayoutMenuSubVue v-else :menu-info="item" />
      </template>
    </template>

    <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item> -->
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu {
  border-right: 0 !important;
}
.hzy-layou-menu {
  .hzy-layou-menu-title {
    padding: 20px 15px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }
}

.el-aside {
  overflow-x: hidden;
}

.hzy-layout-menu-dark {
  box-shadow: var(--el-box-shadow-dark);
}
.hzy-layout-menu-light {
  box-shadow: var(--el-box-shadow-light);
}
</style>
