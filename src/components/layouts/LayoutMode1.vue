<script setup lang="ts">
import LayoutHeaderVue from "./LayoutHeader.vue";
import LayoutTabsVue from "./LayoutTabs.vue";
import LayoutMenuMainVue from "./LayoutMenuMain.vue";
</script>

<template>
  <el-container>
    <!-- 菜单 -->
    <LayoutMenuMainVue />
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
