<script lang="ts" setup>
import router from "@/router";

const { params } = router.currentRoute.value;
const path: string = params.path as string;
setTimeout(() => {
  window.open(path, "_black");
}, 1000);
</script>
<style lang="less" scoped>
a {
  font-size: 25px;
}
</style>

<template>
  <div class="p-15 text-center">
    <a target="_black" :href="path">{{ path }}</a>
  </div>
</template>
