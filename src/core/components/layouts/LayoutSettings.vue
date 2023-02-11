<script setup lang="ts">
import CoreStore from "@/core/store/layouts/CoreStore";
import SettingsStore from "@/core/store/layouts/SettingsStore";
import MenuStore from "@/core/store/layouts/MenuStore";
import ThemeStore from "@/core/store/layouts/ThemeStore";
//
const coreStore = CoreStore();
const settingsStore = SettingsStore();
const menuStore = MenuStore();
const themeStore = ThemeStore();
</script>
<template>
  <el-drawer v-model="settingsStore.state.isOpen" :with-header="false" direction="rtl" size="350px">
    <div class="hzy-settings">
      <el-divider> 头部颜色 </el-divider>
      <div class="hzy-skin-list mb-5 text-center">
        <template v-for="(item, index) in 12" :key="index">
          <div class="hzy-skin-item" :class="'hzy-layout-header-' + index" @click="themeStore.setHeaderThemeClassIndex(index)"></div>
        </template>
      </div>
      <el-button type="primary" class="w100 mb-16" @click="themeStore.setHeaderThemeClassIndex(-1)">重置</el-button>

      <el-divider> 菜单颜色 </el-divider>
      <div class="hzy-skin-list mb-5 text-center">
        <template v-for="(item, index) in themeStore.menuThemes" :key="index">
          <div class="hzy-skin-item" style="border: 1px solid #67c23a" :style="{ backgroundColor: item.backgroundColor }" @click="themeStore.setMenuThemeIndex(index)"></div>
        </template>
      </div>

      <el-divider> 文本颜色 </el-divider>
      <div class="hzy-skin-list mb-5 text-center">
        <el-radio-group
          v-model="themeStore.state.textColor"
          @change="
            (value) => {
              themeStore.setTextColor(value as any);
            }
          "
        >
          <el-radio :label="undefined">默认</el-radio>
          <el-radio label="rgba(0, 0, 0, 0.85)">黑色</el-radio>
          <el-radio label="#fff">白色</el-radio>
        </el-radio-group>
      </div>

      <el-divider v-if="!coreStore.state.isMobile"> 菜单模式 </el-divider>
      <div class="hzy-skin-list mb-5 text-center" v-if="!coreStore.state.isMobile">
        <el-radio-group v-model="menuStore.state.menuMode">
          <el-radio label="1">常规</el-radio>
          <el-radio label="2">顶部</el-radio>
          <el-radio label="3">左侧</el-radio>
        </el-radio-group>
      </div>

      <el-divider> 背景 </el-divider>
      <el-button type="primary" class="w100 mb-5" @click="themeStore.setBgImageIndex(-1)">重置</el-button>
      <div class="hzy-skin-list text-center">
        <div v-for="(item, index) in themeStore.bgImages" style="width: 50%">
          <img :src="item" class="hzy-bg-image-item" @click="themeStore.setBgImageIndex(index)" />
        </div>
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
      margin: 2px;
      cursor: pointer;
      border-radius: 5px;
    }
  }

  .hzy-bg-image-item {
    width: 150px;
    cursor: pointer;
    height: 100px;
  }
}
</style>
