<script lang="ts" setup>
import { getCurrentInstance, ref, watch } from "vue";
// icons
import { getAllNameByElementPlus } from "@/core/utils/icons";

//定义属性
const props = defineProps<{
  name: string;
  size?: number | string;
  color?: string;
  style?: Object | string;
  class?: Object | string;
  /**
   * antdv 仅适用双色图标。设置双色图标的主要颜色	string (十六进制颜色)
   */
  twoToneColor?: string;
}>();

const currentInstance = getCurrentInstance();
const allNames = getAllNameByElementPlus(currentInstance);
const isDefaultElementPlusIcon = ref(allNames.findIndex((w: any) => w.toLocaleLowerCase() == props.name.toLocaleLowerCase()) > -1);

watch(
  () => props.name,
  (value) => {
    isDefaultElementPlusIcon.value = allNames.findIndex((w: any) => w.toLocaleLowerCase() == value.toLocaleLowerCase()) > -1;
  }
);
</script>

<template>
  <i
    :style="{ width: (props.size ? props.size : 14) + 'px', height: (props.size ? props.size : 14) + 'px', color: props.color, ...(props.style as Object) }"
    :color="$props.color"
    :class="props.class"
    v-if="isDefaultElementPlusIcon"
  >
    <component :is="props.name" />
  </i>
  <component
    :is="props.name"
    :fill="props.color"
    :style="{ fontSize:(props.size ? props.size : 14) + 'px', color: props.color, ...(props.style as Object) }"
    :class="props.class"
    :twoToneColor="props.twoToneColor"
    v-else
  />
</template>
