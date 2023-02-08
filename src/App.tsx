import { defineComponent, computed } from "vue";
import { ElConfigProvider } from "element-plus";
import AppStore from "@/core/store/AppStore";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

export default defineComponent({
  setup(props, ctx) {
    dayjs.locale("zh-cn");
    const appStore = AppStore();
    const loading = computed(() => appStore.state.loading);

    return () => (
      <ElConfigProvider locale={zhCn}>
        <div v-loading={loading.value}>
          <router-view ></router-view>
        </div>
      </ElConfigProvider>
    )
  }
}) 