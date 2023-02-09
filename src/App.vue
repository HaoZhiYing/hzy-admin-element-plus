<script lang="ts" setup>
import { computed } from "vue";
import { ElConfigProvider } from "element-plus";
import AppStore from "@/core/store/AppStore";
import CoreStore from "@/core/store/layouts/CoreStore";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");
const appStore = AppStore();
const coreStore = CoreStore();
const loading = computed(() => appStore.state.loading);
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <div class="bg" :style="{ backgroundImage: 'url(' + coreStore.bgImages[coreStore.state.bgImageIndex] + ')' }">
      <div v-loading="loading">
        <router-view />
      </div>
    </div>
  </ElConfigProvider>
</template>

<style>
.bg {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
