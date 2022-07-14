<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
    <el-button type="primary" @click="toggleDark()">切换主题</el-button>
</template>