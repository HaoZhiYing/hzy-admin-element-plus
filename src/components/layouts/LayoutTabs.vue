<script lang="ts" setup>
import { onMounted, watch, computed, ref } from "vue";
import router from "@/router";
import TabsStore from "@/store/layouts/TabsStore";
import AppIcon from "../AppIcon.vue";

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
  /**
   * 关闭标签
   */
  removeTab(key: string) {
    tabsStore.closeTabSelf(key);
  },
  /**
   * 关闭其他标签
   */
  closeTabOther() {
    tabsStore.closeTabOther(active.value);
  },
  /**
   * 关闭所有标签
   */
  closeTabAll() {
    tabsStore.closeTabAll();
  },
  /**
   * 标签点击选中
   */
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
  <div class="hzy-layout-tabs">
    <div class="hzy-layout-tabs-left">
      <el-tabs type="card" :modelValue="active" closable @tabRemove="methods.removeTab" @tabChange="methods.tabOnChange">
        <el-tab-pane v-for="item in tabsState.tabs" :key="item.fullPath" :name="item.fullPath" :closable="item.meta.close">
          <template #label>
            <span>
              <!-- <AppIcon :name="item.meta.icon" :size="16" v-if="item.meta.icon" /> -->
              {{ item.meta.title }}
            </span>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 更多操作 -->
    <div class="hzy-layout-tabs-right">
      <el-dropdown>
        <span class="hzy-layout-tabs-right-dropdown-name">
          <el-icon><MoreFilled /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="Close" @click="methods.closeTabOther()">关闭其他</el-dropdown-item>
            <el-dropdown-item icon="Delete" @click="methods.closeTabAll()">关闭全部 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="less">
.hzy-layout-tabs {
  display: flex;
  .hzy-layout-tabs-left {
    flex: 1;
    .el-tabs__header {
      margin: 0 !important;
    }

    .el-tabs__content {
      display: none !important;
    }

    .el-tabs--card > .el-tabs__header {
      border-bottom: 0;
    }

    .el-tabs--card > .el-tabs__header .el-tabs__nav {
      border-radius: 0px 0px 0 0 !important;
    }

    .el-tabs__item.is-active {
      background-color: var(--el-fill-color-light);
    }

    .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
      border-bottom-color: initial;
    }

    .el-tabs--card > .el-tabs__header .el-tabs__item {
      border-bottom: 0;
    }
  }

  .hzy-layout-tabs-right {
    width: 40px;
    cursor: pointer;
    .el-dropdown {
      width: 100%;
      height: 100%;
      .hzy-layout-tabs-right-dropdown-name {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    }
    .el-dropdown:hover {
      background: rgba(243, 246, 248, 0.5);
    }
  }

  .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: 0;
  }

  .el-tabs--card>.el-tabs__header .el-tabs__item{
    border: 0;
  }

  .el-tabs__nav-wrap{
        margin-bottom: 0px;
  }
}
</style>
