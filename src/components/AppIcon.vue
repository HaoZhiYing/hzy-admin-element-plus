<script lang="ts" setup>
//封装组件来自：https://www.xicons.org/#/
// import { getCurrentInstance, ref, watch } from "vue";
// icons
// import { getAllNameByAntd } from "@/scripts/icons";

//定义属性
const props = defineProps<{
  name: string;
  // size: Number | String,
  size?: number;
  color?: string;
  // style?: any;
  // class?: any;
  // tag?: string;
}>();

// const currentInstance = getCurrentInstance();
// const allNameByAntds = getAllNameByAntd(currentInstance);
// const isAntdIcon = ref(allNameByAntds.findIndex((w: any) => w == props.name) > -1);

// watch(
//   () => props.name,
//   () => {
//     isAntdIcon.value = allNameByAntds.findIndex((w: any) => w == props.name) > -1;
//   }
// );

//style 用于兼容 antd 图标
// let style: any = props.style ? props.style : {};
// if (isAntdIcon.value) {
//   style["fontSize"] = props.size + "px";
// }
</script>

<template>
  <el-icon :size="props.size" :color="props.color">
    <component :is="props.name" />
  </el-icon>
</template>
