<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import router from "@/router/Index.ts";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const logOut = () => router.push("/");
</script>

<template>
  <el-button type="primary" @click="toggleDark()">切换主题</el-button>
  <el-button type="primary" @click="logOut()">返回登录</el-button>
</template>
