<script setup lang="ts">
import router from '@/router/Index';
const jumpHome = () => {

    router.push('/home');

};
</script>

<template>
    <el-button @click="jumpHome()">登录</el-button>
</template>