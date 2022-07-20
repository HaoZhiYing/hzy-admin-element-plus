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
</script>

<template>
  <el-header :class="{ '': isDark, 'hzy-layout-header-blue': !isDark }">
    <el-button type="primary" @click="toggleDark()">切换主题</el-button>
    <el-button type="primary" @click="logOut()">返回登录</el-button>

    <div class="hzy-layout-header">
      <div class="hzy-header-btn" @click="toggleDark()">切换主题</div>
      <div style="flex: 1 1 0%"></div>
      <div class="hzy-header-btn" @click="logOut()">返回登录</div>
    </div>
  </el-header>
</template>

<style lang="less">
.hzy-layout-header {
  display: flex;
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
</style>
