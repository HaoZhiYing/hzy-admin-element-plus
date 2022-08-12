<script lang="ts" setup>
import LayoutMenuVue from "./menus/LayoutMenu.vue";
import CoreStore from "@/store/layouts/CoreStore";
import MenuStore from "@/store/layouts/MenuStore";
// import { computed } from "vue";
//
const coreStore = CoreStore();
const menuStore = MenuStore();
// const bgColor = computed(() => menuStore.state.backgroundColor);
</script>

<template>
  <el-drawer v-model="menuStore.state.isCollapse" :with-header="false" v-if="coreStore.state.isMobile" direction="ltr" :size="menuStore.state.maxWidth" custom-class="layout-menu-mobile">
    <div style="min-height: 100vh" :style="{ backgroundColor: menuStore.state.backgroundColor }">
      <LayoutMenuVue />
    </div>
  </el-drawer>
</template>

<style lang="less">
.layout-menu-mobile {
  // background-color: v-bind(bgColor) !important;
  .el-drawer__body {
    padding: 0 !important;
  }
}
</style>
