<script lang="ts">
// 组件命名
export default { name: "ListIndexCom" };
</script>
<!-- 逻辑代码 -->
<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import AppIcon from "@/components/AppIcon.vue";
import Info from "./Info.vue";
import tools from "@/scripts/tools";
import { EMessageType } from "@/scripts/AppEnumType";

const columns = [
  {
    title: "序号",
    dataIndex: "key",
    width: 80,
    fixed: "left",
  },
  {
    title: "姓名",
    dataIndex: "name",
    ellipsis: true,
    width: 130,
  },
  {
    title: "年龄",
    dataIndex: "age",
    ellipsis: true,
    width: 180,
  },
  {
    title: "地址",
    dataIndex: "address",
    ellipsis: true,
    width: 180,
  },
  {
    title: "列1",
    dataIndex: "column1",
    ellipsis: true,
    width: 180,
  },
  {
    title: "列2",
    dataIndex: "column2",
    ellipsis: true,
    width: 180,
  },
  {
    title: "列3",
    dataIndex: "column3",
    ellipsis: true,
    width: 180,
  },
  {
    title: "列4",
    dataIndex: "column4",
    ellipsis: true,
    width: 180,
  },
  {
    title: "操作",
    dataIndex: "id",
    width: 120,
    fixed: "right",
  },
];

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

//表单操作对象
const refInfo = ref<InstanceType<typeof Info>>();

const methods = {
  findList() {
    state.table.loading = true;
    state.table.columns = columns;
    setTimeout(() => {
      const data = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          key: i + 1,
          name: `Hzy ${i + 1}`,
          age: 18 + i,
          address: `addr. ${i + 1}`,
          column1: `London Park no. ${i}`,
          column2: `London Park no. ${i}`,
          column3: `London Park no. ${i}`,
          column4: `London Park no. ${i}`,
          id: i,
        });
      }
      state.table.data = data;
      state.table.loading = false;
    }, 1.5 * 1000);
  },
  exportExcel() {
    tools.notice("导出Excel成功!", EMessageType.警告, "提醒");
  },
  confirm() {
    tools.message("删除成功!", EMessageType.成功);
  },
  //打开表单页面
  openForm(id: string) {
    refInfo.value!.openForm({ visible: true, key: id });
  },
};

//多选对象
const rowSelection: any = {
  onChange: (selectedRowKeys: string[], selectedRows: any[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
  },
  getCheckboxProps: (record: any) => ({
    // disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

onMounted(() => {
  methods.findList();
});
</script>

<template>
  <div>
    <el-card class="mb-15" v-show="state.fromSearch.state">
      <el-row>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <el-input v-model:value="state.fromSearch.vm.value" placeholder="用户名" />
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <el-input v-model:value="state.fromSearch.vm.value" placeholder="年龄" />
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <el-input v-model:value="state.fromSearch.vm.value" placeholder="地址" />
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <el-input v-model:value="state.fromSearch.vm.value" placeholder="用户名" />
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <el-input v-model:value="state.fromSearch.vm.value" placeholder="地址" />
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <el-input v-model:value="state.fromSearch.vm.value" placeholder="地址1" />
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
          <el-input v-model:value="state.fromSearch.vm.value" placeholder="地址2" />
        </el-col>
        <!--button-->
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" style="float: right">
          <el-button type="primary" class="mr-15" @click="methods.findList()">查询</el-button>
          <el-button class="mr-15" @click="methods.findList()">重置</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-button class="mr-15" @click="state.fromSearch.state = !state.fromSearch.state">
            <div v-if="state.fromSearch.state"><AppIcon name="UpOutlined" />&nbsp;&nbsp;收起</div>
            <div v-else><AppIcon name="DownOutlined" />&nbsp;&nbsp;展开</div>
          </el-button>
          <el-button type="primary" class="mr-15" @click="methods.openForm('')">
            <template #icon>
              <AppIcon name="PlusOutlined" />
            </template>
            新建
          </el-button>
          <el-popconfirm title="您确定要删除?" @confirm="methods.confirm" okText="确定" cancelText="取消">
            <el-button type="primary" danger class="mr-15">
              <template #icon>
                <AppIcon name="DeleteOutlined" />
              </template>
              批量删除
            </el-button>
          </el-popconfirm>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="text-right">
          <el-dropdown>
            <template #overlay>
              <el-menu>
                <el-menu-item key="1" @click="methods.exportExcel">导出 Excel</el-menu-item>
                <el-menu-item key="2" @click="methods.exportExcel">下载 导入模板</el-menu-item>
                <el-menu-item key="3" @click="methods.exportExcel">导入 Excel</el-menu-item>
              </el-menu>
            </template>
            <el-button>
              更多操作
              <AppIcon name="DownOutlined" />
            </el-button>
          </el-dropdown>
        </el-col>
      </el-row>

      <el-table
        size="middle"
        class="mt-15"
        :columns="state.table.columns"
        :datel-source="state.table.data"
        :pagination="{ pageSize: 10 }"
        :loading="state.table.loading"
        :scroll="{ x: 'calc(100wh - 300px)' }"
        :row-selection="rowSelection"
      >
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'id'">
            <span>
              <a href="javascript:;" @click="methods.openForm(text)">修改</a>
              <el-divider type="vertical" />
              <a class="text-danger">删除{{ text }}</a>
            </span>
          </template>
        </template>
      </el-table>
    </el-card>
    <Info ref="refInfo" @onSuccess="() => methods.findList()" />
  </div>
</template>
