<script setup lang="ts">
import LayoutHeaderVue from "./LayoutHeader.vue";
import LayoutMenuVue from "./LayoutMenu.vue";
import LayoutTabsVue from "./LayoutTabs.vue";
</script>

<template>
  <el-container class="hzy-layout">
    <!-- 菜单 -->
    <LayoutMenuVue />
    <el-container>
      <!-- 头部 -->
      <LayoutHeaderVue />
      <LayoutTabsVue />
      <!-- 中间内容 -->
      <el-main>
        <router-view />
      </el-main>
      <!-- 页脚 -->
      <el-footer class="text-center"> hzy-admin-element-plus 管理系统 ©2022 created by hzy </el-footer>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.hzy-layout {
  min-height: 100vh;
  //=======// 头部 暗色
  .hzy-layout-header-dark {
    background-color: #001529;
  }

  //=======// 头部 蓝色
  .hzy-layout-header-blue {
    background-color: #096dd9;
  }

  //=======// 头部 红色
  .hzy-layout-header-1 {
    background-color: #997b71;
  }

  //=======// 头部 绿色
  .hzy-layout-header-2 {
    background-color: #237804;
  }

  //=======// 头部 淡蓝色
  .hzy-layout-header-3 {
    background-color: #667afa;
  }

  //=======// 头部 粉色
  .hzy-layout-header-4 {
    background-color: #f74584;
  }

  //=======// 头部 紫色
  .hzy-layout-header-5 {
    background-color: #9463f7;
  }

  //=======// 头部 黄色
  .hzy-layout-header-6 {
    background-color: #d48806;
  }

  //=======// 头部 红色
  .hzy-layout-header-7 {
    background-color: #ff4c52;
  }
}
</style>
