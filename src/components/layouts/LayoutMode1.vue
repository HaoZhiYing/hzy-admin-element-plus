<script setup lang="ts">
import LayoutHeaderVue from "./LayoutHeader.vue";
import LayoutTabsVue from "./LayoutTabs.vue";
import LayoutMenuMainVue from "./LayoutMenuMain.vue";
import TabsStore from "@/store/layouts/TabsStore";

const tabsStore = TabsStore();
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
        <div style="min-height: calc(100vh - 200px); overflow: hidden">
          <!-- 由于必须要输出 cacheViews 才能不让缓存页面丢失事件 所以用了下面隐藏的input组件 来激活cacheViews变化-->
          <!-- <input type="hidden" :value="tabsStore.state.cacheViews" /> -->
          <router-view v-slot="{ Component, route }">
            <transition name="fade-transform" mode="out-in">
              <keep-alive :include="tabsStore.state.cacheViews">
                <component :is="Component" :key="route.fullPath" />
              </keep-alive>
            </transition>
          </router-view>
        </div>
      </el-main>
      <!-- 页脚 -->
      <el-footer class="text-center p-20"> hzy-admin-element-plus 管理系统 ©2022 created by hzy </el-footer>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.el-main {
  background-color: var(--el-fill-color-light);
}
</style>
