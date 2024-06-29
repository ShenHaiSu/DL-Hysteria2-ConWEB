<template>
  <div HomeMainContainer>
    <div>
      <cpuAramUsagePanel ref="cpuAramComp" />
    </div>

    <div>
      {{ systemInfoStore.cpuInfo }}
    </div>
  </div>
</template>

<script setup>
// 静态引入
import { ref, defineAsyncComponent, onMounted } from 'vue';
import axios from "axios";
import { useToast } from 'primevue/usetoast';
import { useSystemInfoStore } from "@/stores/systemInfo.js";
// import cpuUsagePanel from "@/components/Home/cpuUsagePanel.vue";

// 动态引入
const cpuAramUsagePanel = defineAsyncComponent(() => import("@/components/Home/cpuAramUsagePanel.vue"));

const toast = useToast();
const systemInfoStore = useSystemInfoStore();
const cpuAramComp = ref(null);

// 每五秒获取一次面板系统数据
const targetUpdate = () => {
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
        cpuAramComp.value.updateInfo();
      } catch (err) {
        console.error(err);
      }
    })
    .catch(axiosErr => {
      toast.add({ severity: "error", summary: "错误", detail: axiosErr.response.data.msg, life: 3000 });
    })
}

setInterval(targetUpdate, 10 * 1000);
onMounted(() => {
  targetUpdate();
})

</script>


<style scoped>
div[HomeMainContainer] {
  overflow-x: auto;
}
</style>