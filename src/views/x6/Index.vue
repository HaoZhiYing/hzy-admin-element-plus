<script lang="ts">
// 组件命名
export default { name: "X6Com" };
</script>
<!-- 逻辑代码 -->
<script lang="ts" setup>
import X6_1 from "./Index1.vue";
import X6_2 from "./Index2.vue";
import X6_3 from "./Index3.vue";
</script>

<template>
  <el-row>
    <el-col :span="12">
      <X6_1 />
    </el-col>
    <el-col :span="12">
      <X6_2 />
    </el-col>
    <el-col :span="24">
      <X6_3 />
    </el-col>
  </el-row>
</template>
