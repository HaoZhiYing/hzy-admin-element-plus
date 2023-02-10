<!-- 逻辑代码 -->
<script lang="ts" setup>
import Char1 from "./components/Chart1.vue";
import Char2 from "./components/Chart2.vue";
import PageContainer from "@/core/components/PageContainer.vue";

defineOptions({
  name: "ChartBaseCom",
});
</script>

<template>
  <PageContainer>
    <el-row :gutter="16">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card shadow="hover">
          <template #header>
            <router-link :to="{ path: '/chart/more' }">查看 AntV G2 更多示例</router-link>
          </template>
          <Char1 />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card shadow="hover">
          <template #header>
            <router-link :to="{ path: '/chart/more' }">查看 AntV G2 更多示例</router-link>
          </template>
          <Char2 />
        </el-card>
      </el-col>
    </el-row>
  </PageContainer>
</template>
