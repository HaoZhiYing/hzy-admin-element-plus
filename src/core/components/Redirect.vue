<script lang="ts" setup>
import router from "@/core/router";

const { params, query } = router.currentRoute.value;
const { path } = params;
router.replace({ path: "/" + path, query });
</script>

<template>
  <div class="p-15" v-loading="true"></div>
</template>
