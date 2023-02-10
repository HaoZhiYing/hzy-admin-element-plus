<script lang="ts" setup>
import { computed } from "vue";
import { ElConfigProvider } from "element-plus";
// 自定义 scss 样式
import "./assets/styles/hzy-admin-ui-layout.scss";
// 自定义 less 样式
import "./assets/styles/hzy-admin-ui-layout.less";
//
import AppStore from "@/core/store/AppStore";
import ThemeStore from "@/core/store/layouts/ThemeStore";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");
const appStore = AppStore();
const themeStore = ThemeStore();
const loading = computed(() => appStore.state.loading);
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <div class="bg" :style="{ backgroundImage: 'url(' + themeStore.bgImages[themeStore.state.backgroundImageIndex] + ')' }">
      <div class="app">
        <div v-loading="loading">
          <router-view />
        </div>
      </div>
    </div>
  </ElConfigProvider>
</template>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  // overflow-y: auto;
  width: 100%;
  min-height: 100vh;
  // font-size: 16px;
  font-weight: 400;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

  .bg {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;

    .app {
      backdrop-filter: saturate(100%) blur(1px);
      -webkit-backdrop-filter: saturate(100%) blur(1px);
      background-color: v-bind("themeStore.state.backgroundColor") !important;
    }
  }
}
</style>
