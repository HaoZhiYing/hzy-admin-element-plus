<script lang="ts" setup>
import { onMounted, watch, computed } from "vue";
import AppIcon from "@/components/AppIcon.vue";
import router from "@/router";
import TabsStore from "@/store/layouts/TabsStore";

//tabs
const tabsStore = TabsStore();
const active = computed(() => router.currentRoute.value.fullPath);
const tabsState = computed(() => tabsStore.state);

const methods: any = {
  addTags() {
    tabsStore.addTab(router.currentRoute.value);
  },
  onEdit(key: string, action: string) {
    if (action === "remove") {
      methods.removeTab(key);
    }
  },
  removeTab(key: string) {
    tabsStore.closeTabSelf(key);
  },
  closeTabOther() {
    tabsStore.closeTabOther(active.value);
  },
  closeTabAll() {
    tabsStore.closeTabAll();
  },
  tabOnChange(activeKey: string) {
    tabsStore.tabClick(activeKey);
  },
};

onMounted(() => {
  methods.addTags();
});

watch(
  () => router.currentRoute.value.fullPath,
  (value) => {
    methods.addTags();
  }
);
</script>

<template>
  <div class="hzy-layou-tabs">
    <el-tabs v-model="active" type="card" closable @tabRemove="methods.removeTab">
      <el-tab-pane v-for="item in tabsState.tabs" :key="item.fullPath" :name="item.fullPath" :label="item.meta.title" :closable="item.meta.close">
        <!-- {{ item.content }} -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="less">
.hzy-layou-tabs {
  .el-tabs__header {
    margin: 0 !important;
  }

  .el-tabs__content {
    display: none !important;
  }

  .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border-radius: 0px 0px 0 0 !important;
  }
}
</style>
