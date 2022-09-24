<script lang="ts">
// 组件命名
export default { name: "ListIndexCom" };
</script>
<!-- 逻辑代码 -->
<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import Info from "./Info.vue";
import tools from "@/scripts/tools";
import { EMessageType } from "@/scripts/AppEnumType";

const state = reactive<any>({
  fromSearch: {
    state: false,
    fieldCount: 7,
    vm: {
      value: "",
    },
  },
  table: {
    loading: false,
    columns: [],
    data: [],
  },
});

const currentPage1 = ref(5);
const currentPage2 = ref(5);
const currentPage3 = ref(5);
const currentPage4 = ref(4);
const pageSize2 = ref(100);
const pageSize3 = ref(100);
const pageSize4 = ref(100);
const small = ref(false);
const background = ref(true);
const disabled = ref(false);

//表单操作对象
const refInfo = ref<InstanceType<typeof Info>>();

const methods = {
  findList() {
    state.table.loading = true;
    setTimeout(() => {
      const data = [];
      for (let i = 0; i < 50; i++) {
        data.push({
          key: i + 1,
          name: `Hzy ${i + 1}`,
          age: 18 + i,
          address: `addr. ${i + 1}`,
          column1: `London Park no1. ${i}`,
          column2: `London Park no2. ${i}`,
          column3: `London Park no3. ${i}`,
          column4: `London Park no4. ${i}`,
          column5: `London Park no5. ${i}`,
          id: i,
        });
      }
      state.table.data = data;
      state.table.loading = false;
    }, 1 * 1000);
  },
  exportExcel() {
    tools.notice("导出Excel成功!", EMessageType.警告, "提醒");
  },
  confirm() {
    tools.message("删除成功!", EMessageType.成功);
    methods.findList();
  },
  //打开表单页面
  openForm(id: string) {
    refInfo.value!.openForm({ visible: true, key: id });
  },
};

onMounted(() => {
  methods.findList();
});
</script>

<template>
  <div class="p-20">
    <!-- 高级检索 -->
    <el-collapse-transition>
      <el-card class="search-card" v-show="state.fromSearch.state">
        <el-form label-position="left" label-width="auto">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="item in 10">
              <el-form-item label-width="80px" label="用户名">
                <el-input v-model:value="state.fromSearch.vm.value" placeholder="用户名" style="width: 250px" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
              <!--button-->
              <el-form-item>
                <el-button plain type="primary" @click="methods.findList">查询</el-button>
                <el-button plain @click="methods.findList()">重置</el-button>
                <el-button plain type="danger" @click="state.fromSearch.state = false">关闭</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
    </el-collapse-transition>
    <!-- 工具栏 -->
    <el-space wrap :size="[20, 20]">
      <!-- 检索 -->
      <div>
        <el-input v-model="state.fromSearch.vm.value" placeholder="请输入姓名">
          <template #append>
            <el-button icon="Search" type="primary" @click="methods.findList()" />
          </template>
        </el-input>
      </div>
      <el-button plain :icon="state.fromSearch.state ? 'UpOutlined' : 'DownOutlined'" @click="state.fromSearch.state = !state.fromSearch.state"> 高级检索 </el-button>
      <el-button plain icon="PlusOutlined" type="primary" @click="methods.openForm('')"> 新建 </el-button>
      <el-popconfirm title="您确定要删除?" @confirm="methods.confirm()">
        <template #reference>
          <el-button plain type="danger" icon="DeleteOutlined"> 批量删除 </el-button>
        </template>
      </el-popconfirm>
      <el-dropdown>
        <el-button plain icon="DownOutlined"> 更多操作 </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="methods.exportExcel">导出 Excel</el-dropdown-item>
            <el-dropdown-item @click="methods.exportExcel">下载 导入模板</el-dropdown-item>
            <el-dropdown-item @click="methods.exportExcel">导入 Excel</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-space>

    <!-- 表格 -->
    <el-table :data="state.table.data" border stripe height="calc(100vh - 250px)" class="mt-20" table-layout="fixed" highlight-current-row v-loading="state.table.loading">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="key" label="序号" width="80" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="age" label="年龄" width="180" />
      <el-table-column prop="address" label="家庭地址" />
      <el-table-column prop="column1" label="列1" />
      <el-table-column prop="column2" label="列2" />
      <el-table-column prop="column3" label="列3" />
      <el-table-column prop="column4" label="列4" />
      <el-table-column prop="column5" label="列5" />
      <el-table-column prop="action" label="操作">
        <template #default>
          <el-space wrap :size="[20, 0]">
            <el-button link type="primary" @click="methods.openForm('')">编辑</el-button>
            <el-button link type="danger" @click="methods.confirm()">删除</el-button>
          </el-space>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-model:currentPage="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      class="mt-20"
    />
    <!-- @size-change="handleSizeChange"
        @current-change="handleCurrentChange" -->
    <Info ref="refInfo" @onSuccess="() => methods.findList()" />
  </div>
</template>