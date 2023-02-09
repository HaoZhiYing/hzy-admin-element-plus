import { createApp } from 'vue';
import App from './App.vue';
//pinia
import { createPinia } from 'pinia';
// 路由
import { registerRouter } from '@/core/router';
//element plus
import ElementPlus from 'element-plus';
//自定义 scss 样式
import "./assets/styles/hzy-admin-ui-layout.scss";
//自定义 less 样式
import "./assets/styles/hzy-admin-ui-layout.less";
//图标注册
import { useAllIcons } from "@/core/utils/icons";
//vxe-table
import useVXETable from "@/core/utils/VxeTableUtil";

createApp(App)
    .use(createPinia())
    .use(registerRouter())
    .use(ElementPlus)
    .use(useAllIcons)
    .use(useVXETable)
    .mount('#app')
    ;
