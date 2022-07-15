
<script setup lang="ts">
import router from '@/router/Index';
const jumpHome = () => {

    router.push('/home');

};
</script>

<template>
    <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">

        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">

            <div class="login">
                <el-card>
                    <template #header>
                        <div class="text-center">hzy-admin-element-plus 管理系统</div>
                    </template>
                    <div>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <br>
                        <br>
                        <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                        <el-button @click="jumpHome()">登录</el-button>
                    </div>
                </el-card>
            </div>

        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">

        </el-col>
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
</style>