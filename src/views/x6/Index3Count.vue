<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <button @click="count++">计数:{{ count }}</button>
</template>
