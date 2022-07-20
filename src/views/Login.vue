<script setup lang="ts">
import router from "@/router/Index";
import { reactive, ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const jumpHome = () => {
  router.push("/home");
};

const state = reactive({
  userName: "admin",
  userPassword: "123456",
});

const isDark = useDark();
const toggleDark = useToggle(isDark);

const windowWidth = ref(window.innerWidth);
</script>

<template>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8"> </el-col>
    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
      <div class="login">
        <el-card style="border: 0px" class="login-card">
          <template #header>
            <div class="text-center">hzy-admin-element-plus 管理系统</div>
          </template>
          <div>
            <div class="mt-20">
              <el-input v-model="state.userName" size="large" placeholder="请输入账号">
                <template #prefix>
                  <el-icon>
                    <User />
                  </el-icon>
                </template>
              </el-input>
            </div>

            <div class="mt-20">
              <el-input v-model="state.userPassword" size="large" placeholder="请输入密码">
                <template #prefix>
                  <el-icon>
                    <Key />
                  </el-icon>
                </template>
              </el-input>
            </div>

            <!-- 暗色按钮样式处理 -->
            <template v-if="isDark">
              <div class="mt-30">
                <el-button @click="jumpHome()" type="primary" text bg size="large" class="w100">登录 </el-button>
              </div>
              <div class="mt-20">
                <el-button @click="toggleDark()" type="success" text bg size="large" class="w100">切换主题 </el-button>
              </div>
            </template>
            <template v-else>
              <div class="mt-20">
                <el-button @click="jumpHome()" type="primary" size="large" class="w100">登录 </el-button>
              </div>
              <div class="mt-20">
                <el-button @click="toggleDark()" type="success" size="large" class="w100">切换主题 </el-button>
              </div>
            </template>
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8"> </el-col>
  </el-row>
</template>

<style lang="less" scoped>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

@media (max-width: 576px) {
  .login-card {
    width: 100% !important;
  }
}

@media (min-width: 576px) and (max-width: 2000px) {
  .login-card {
    width: 100% !important;
  }
}
</style>
