<!-- 逻辑代码 -->
<script lang="ts" setup>
import { ref } from "vue";
import PageContainer from "@/core/components/PageContainer.vue";
import Tools from "@/core/utils/Tools";

defineOptions({
  name: "ButtonCom",
});

const messageText = ref("hello");

const methods = {
  onHello() {
    Tools.message.success(messageText.value);
  },
};
</script>

<template>
  <PageContainer>
    <div class="text-center btns" @click="methods.onHello">
      <el-row class="mb-16">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button>中文</el-button>
      </el-row>

      <el-row class="mb-16">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
      </el-row>

      <el-row class="mb-16">
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
      </el-row>

      <el-row>
        <el-button icon="Search" circle />
        <el-button type="primary" icon="Edit" circle />
        <el-button type="success" icon="Check" circle />
        <el-button type="info" icon="Message" circle />
        <el-button type="warning" icon="Star" circle />
        <el-button type="danger" icon="Delete" circle />
      </el-row>
    </div>
  </PageContainer>
</template>

<style lang="less" scope>
// .btns{
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
</style>
