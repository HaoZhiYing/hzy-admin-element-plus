<script setup lang="ts">

</script>

<template>
  <el-container class="hzy-layout">
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.hzy-layout {
  min-height: 100vh;
  .el-aside {
    background-color: #001529;
  }

  //=======// 头部 暗色
  .hzy-layout-header-dark {
    background-color: #001529;
  }

  //=======// 头部 蓝色
  .hzy-layout-header-blue {
    background-color: #096dd9;
  }

  //=======// 头部 红色
  .hzy-layout-header-1 {
    background-color: #997b71;
  }

  //=======// 头部 绿色
  .hzy-layout-header-2 {
    background-color: #237804;
  }

  //=======// 头部 淡蓝色
  .hzy-layout-header-3 {
    background-color: #667afa;
  }

  //=======// 头部 粉色
  .hzy-layout-header-4 {
    background-color: #f74584;
  }

  //=======// 头部 紫色
  .hzy-layout-header-5 {
    background-color: #9463f7;
  }

  //=======// 头部 黄色
  .hzy-layout-header-6 {
    background-color: #d48806;
  }

  //=======// 头部 红色
  .hzy-layout-header-7 {
    background-color: #ff4c52;
  }
}
</style>
