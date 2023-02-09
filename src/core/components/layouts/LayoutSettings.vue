<script setup lang="ts">
import CoreStore from "@/core/store/layouts/CoreStore";
import SettingsStore from "@/core/store/layouts/SettingsStore";
import HeaderStore from "@/core/store/layouts/HeaderStore";
import MenuStore from "@/core/store/layouts/MenuStore";
//
const coreStore = CoreStore();
const settingsStore = SettingsStore();
const headerStore = HeaderStore();
const menuStore = MenuStore();
</script>
<template>
  <el-drawer v-model="settingsStore.state.isOpen" :with-header="false" direction="rtl" size="300px">
    <div class="hzy-settings">
      <el-divider v-if="!coreStore.state.isMobile"> 菜单模式 </el-divider>
      <div class="hzy-skin-list mb-5 text-center" v-if="!coreStore.state.isMobile">
        <el-radio-group v-model="menuStore.state.menuMode">
          <el-radio label="1">常规</el-radio>
          <el-radio label="2">顶部</el-radio>
          <el-radio label="3">左侧</el-radio>
        </el-radio-group>
      </div>

      <el-divider> 头部颜色 </el-divider>
      <div class="hzy-skin-list mb-5 text-center">
        <template v-for="(item, index) in 12" :key="index">
          <div class="hzy-skin-item" :class="'hzy-layout-header-' + index" @click="headerStore.setHeaderClass('hzy-layout-header-' + index)"></div>
        </template>
      </div>
      <el-button type="primary" class="w100 mb-16" @click="headerStore.setHeaderClass('')">重置</el-button>

      <el-divider> 菜单颜色 </el-divider>
      <div class="hzy-skin-list mb-5 text-center">
        <template v-for="(item, index) in menuStore.menuCustomThemes" :key="index">
          <div class="hzy-skin-item" style="border: 1px solid #67c23a" :style="{ backgroundColor: item.backgroundColor }" @click="menuStore.onChangeMenuCustomThemesIndex(index)"></div>
        </template>
      </div>

      <el-divider> 背景 </el-divider>
      <div v-for="(item, index) in coreStore.bgImages">
        <el-button type="primary" class="w100 mb-16" @click="coreStore.setBgImage(index)" v-if="index == 0">重置</el-button>
        <img :src="item" class="hzy-bg-image-item" @click="coreStore.setBgImage(index)" />
      </div>
    </div>
  </el-drawer>
</template>

<style lang="less">
.hzy-settings {
  .hzy-skin-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .hzy-skin-item {
      width: 35px;
      height: 35px;
      margin: 5px;
      cursor: pointer;
      border-radius: 5px;
    }
  }

  .hzy-bg-image-item {
    width: 100%;
    cursor: pointer;
  }
}
</style>
