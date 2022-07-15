<script setup lang="ts">
import zhCn from "element-plus/lib/locale/lang/zh-cn";
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

<style lang="less">
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
