<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";
import router from "@/router/Index";

const isDark = ref(useDark());

useDark({
  onChanged(dark: boolean) {
    // update the dom, call the API or something
    isDark.value = dark;
  },
});

const toggleDark = useToggle(isDark);

const logOut = () => router.push("/");

//图标大小
const iconSize: number = 20;
</script>

<template>
  <el-header>
     <!-- :class="{ '': isDark, 'hzy-layout-header-blue': !isDark }" -->
    <div class="hzy-layout-header" :class="{ 'hzy-layout-header-dark': isDark, 'hzy-layout-header-light': !isDark }">
      <!-- 菜单收缩 -->
      <el-tooltip content="菜单收展" placement="bottom">
        <div class="hzy-header-btn">
          <el-icon :size="iconSize"><Fold /></el-icon>
          <!-- <el-icon><Expand /></el-icon> -->
        </div>
      </el-tooltip>
      <div style="flex: 1 1 0%"></div>
      <!-- 刷新 -->
      <el-tooltip content="刷新" placement="bottom">
        <div class="hzy-header-btn">
          <el-icon :size="iconSize"><RefreshRight /></el-icon>
        </div>
      </el-tooltip>
      <!-- 系统配置 -->
      <el-tooltip content="系统配置" placement="bottom">
        <div class="hzy-header-btn">
          <el-icon :size="iconSize"><Setting /></el-icon>
        </div>
      </el-tooltip>
      <!-- 黑白主题切换 -->
      <el-tooltip content="黑白主题切换" placement="bottom">
        <div class="hzy-header-btn" @click="toggleDark()">
          <el-icon :size="iconSize"><TurnOff /></el-icon>
        </div>
      </el-tooltip>
      <!-- 全屏 -->
      <el-tooltip content="全屏" placement="bottom">
        <div class="hzy-header-btn">
          <el-icon :size="iconSize"><FullScreen /></el-icon>
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

  .hzy-header-btn {
    padding: 0 12px;
    cursor: pointer;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .hzy-header-btn:hover {
    background: rgba(243, 246, 248, 0.2);
  }
}

.hzy-layout-header-dark {
  box-shadow: var(--el-box-shadow-dark);
}
.hzy-layout-header-light {
  box-shadow: var(--el-box-shadow-light);
}
</style>
