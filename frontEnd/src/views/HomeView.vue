<template>
  <div HomeMainContainer>
    <div>
      <cpuAramUsagePanel ref="cpuAramComp" />
    </div>
    <div style="display: flex; flex-wrap: wrap; ">
      <diskUsagePanel style="flex: 4; min-width: 600px;" ref="diskComp" />
      <ipAddressPanel style="flex: 1; min-width: 250px;" ref="ipAddressComp" />
    </div>

  </div>
</template>

<script setup>
// 静态引入
import { ref, defineAsyncComponent, onMounted, onActivated } from 'vue';
import axios from "axios";
import { useToast } from 'primevue/usetoast';
import { useSystemInfoStore } from "@/stores/systemInfo.js";
import { useAuthStore } from '@/stores/auth';

// 动态引入
const cpuAramUsagePanel = defineAsyncComponent(() => import("@/components/Home/cpuAramUsagePanel.vue"));
const diskUsagePanel = defineAsyncComponent(() => import("@/components/Home/diskUsagePanel.vue"));
const ipAddressPanel = defineAsyncComponent(() => import("@/components/Home/ipAddressPanel.vue"));

const toast = useToast();
const systemInfoStore = useSystemInfoStore();
const authStore = useAuthStore();
const cpuAramComp = ref(null);
const diskComp = ref(null);
const ipAddressComp = ref(null);

// 每五秒获取一次面板系统数据
const targetUpdate = () => {
  if (!authStore.isLogin) return;

  axios.get("/systemInfo/allInfo")
    .then(axiosRes => {
      const data = axiosRes.data;
      systemInfoStore.set_cpuInfo(data.cpuInfo);
      systemInfoStore.set_ramInfo(data.ramInfo);
      systemInfoStore.set_diskInfo(data.diskInfo);
      systemInfoStore.set_ipInfo(data.ipInfo);
    })
    .then(() => {
      try {
        // 拉起子组件更新
        cpuAramComp['_value'].updateInfo();
      } catch (err) {
        console.error(err);
      }
    })
    .catch(axiosErr => {
      if (authStore.isLogin) toast.add({ severity: "error", summary: "错误", detail: axiosErr.response.data.msg, life: 3000 });
    })
}

setInterval(targetUpdate, 10 * 1000);
onMounted(() => {
  setTimeout(() => targetUpdate(), 1);
})
onActivated(() => {
  setTimeout(() => {
    try {
      cpuAramComp.value.chartRefresh()
    } catch (err) { }
  }, 10);
})

</script>


<style scoped>
div[HomeMainContainer] {
  overflow-x: auto;
}
</style>