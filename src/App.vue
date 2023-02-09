<script lang="tsx" setup>
import { computed } from "vue";
import { ElConfigProvider } from "element-plus";
import AppStore from "@/core/store/AppStore";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

dayjs.locale("zh-cn");
const appStore = AppStore();
const loading = computed(() => appStore.state.loading);

defineRender(() => (
  <ElConfigProvider locale={zhCn}>
    <div v-loading={loading.value}>
      <router-view />
    </div>
  </ElConfigProvider>
));
</script>

<style>
body {
  /* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*MtVDSKukKj8AAAAAAAAAAAAAARQnAQ") no-repeat fixed center; */
  /* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*FMluR4vJhaQAAAAAAAAAAAAAARQnAQ") no-repeat fixed center; */
  /* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*DGZXS4YOGp0AAAAAAAAAAAAAARQnAQ") no-repeat fixed center; */
  /* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*w6xcR7MriwEAAAAAAAAAAAAAARQnAQ") no-repeat fixed center; */
  /* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*VWFOTbEyU9wAAAAAAAAAAAAAARQnAQ") no-repeat fixed center; */
  /* background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*1yydQLzw5nYAAAAAAAAAAAAAARQnAQ") no-repeat fixed center; */
  background: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*XpGeRoZKGycAAAAAAAAAAAAAARQnAQ") no-repeat fixed center;
  /* background-size: cover; */
}
</style>
