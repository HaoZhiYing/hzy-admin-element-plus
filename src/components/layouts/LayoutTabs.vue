<script lang="ts" setup>
import { ref } from "vue";

let tabIndex = 2;
const editableTabsValue = ref("2");
const editableTabs = ref([
  {
    title: "Tab 1",
    name: "1",
    content: "Tab 1 content",
  },
  {
    title: "Tab 2",
    name: "2",
    content: "Tab 2 content",
  },
]);

const addTab = (targetName: string) => {
  const newTabName = `${++tabIndex}`;
  editableTabs.value.push({
    title: "New Tab",
    name: newTabName,
    content: "New Tab content",
  });
  editableTabsValue.value = newTabName;
};
const removeTab = (targetName: string) => {
  const tabs = editableTabs.value;
  let activeName = editableTabsValue.value;
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.name;
        }
      }
    });
  }

  editableTabsValue.value = activeName;
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
};
</script>

<template>
  <div class="hzy-layou-tabs">
    <el-tabs v-model="editableTabsValue" type="card" class="demo-tabs" closable @tabRemove="removeTab">
      <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
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

  .el-tabs__content{
    display: none !important;
  }
}
</style>
