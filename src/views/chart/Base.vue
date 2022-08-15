<script lang="ts">
// 组件命名
export default { name: "ChartBaseCom" };
</script>
<!-- 逻辑代码 -->
<script lang="ts" setup>
import Char1 from "./components/Chart1.vue";
import Char2 from "./components/Chart2.vue";
</script>

<template>
  <div>
    <el-alert message="图表" type="success">
      <template #description>
        <p>
          <router-link :to="{ path: '/chart/more' }">查看 AntV G2 更多示例</router-link>
        </p>
      </template>
    </el-alert>
    <el-row class="pt-15">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card hoverable>
          <Char1 />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card hoverable>
          <Char2 />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
