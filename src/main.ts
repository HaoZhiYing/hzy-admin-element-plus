import { createApp } from 'vue'
import App from './App.vue'
//element plus
import ElementPlus from 'element-plus'
import "./assets/styles/hzy-admin-ui.scss"
//自定义 less 样式
import "./assets/styles/hzy-admin-ui-tools.less";
import "./assets/styles/hzy-admin-ui-transition.less";
//
import router from './router/Index';
//图标注册
import { useAllIcons } from "@/assets/scripts/icons";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(useAllIcons);
app.mount('#app');
