<script lang="ts" setup>
import AppIcon from "@/infrastructure/components/AppIcon.vue";
const props = defineProps<{ menuInfo: any }>();
</script>

<template>
  <el-sub-menu :index="props.menuInfo.id + ''" v-bind="$attrs">
    <template #title>
      <AppIcon :name="props.menuInfo.icon" v-if="props.menuInfo.icon" class="el-icon" />
      <span style="font-weight: 400" class="el-menu-title">{{ props.menuInfo.name }}</span>
    </template>

    <template v-for="item in props.menuInfo.children">
      <el-menu-item v-if="item.children.filter((w) => w.show).length == 0 && item.type == 2" :index="item.jumpUrl ? item.jumpUrl : item.id + ''" :title="item.name">
        <AppIcon :name="item.icon" v-if="item.icon" class="el-icon" />
        <span style="font-weight: 400" class="el-menu-title">{{ item.name }}</span>
      </el-menu-item>
      <LayoutMenuSub v-else :menu-info="item" />
    </template>
  </el-sub-menu>
</template>
