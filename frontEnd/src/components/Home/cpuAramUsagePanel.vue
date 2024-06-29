<template>
  <div style="padding: 0 30px;">
    <div style="text-align: center;">
      <h2>CPU & RAM</h2>
    </div>
    <div style="display: flex;">
      <div style="flex: 1; align-items: center; text-align: center; ">
        <Knob :size="115" v-model="cpuUsageShow" readonly />
        <span>CPU</span>
      </div>
      <div style="flex: 1; align-items: center; text-align: center;">
        <Knob :size="115" v-model="ramUsageShow" readonly />
        <span>RAM</span>
      </div>
      <div style="flex: 5; align-items: center; text-align: center;">
        <Chart type="line" :data="usageHistory" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script setup>
// 静态引入
import { defineAsyncComponent, computed } from 'vue';
import { reactive } from 'vue';
import { useSystemInfoStore } from "@/stores/systemInfo.js";
import { ref } from 'vue';
import { watch } from 'vue';

// 动态引入
const Knob = defineAsyncComponent(() => import("primevue/knob"))
const Chart = defineAsyncComponent(() => import("primevue/chart"))

// 初始化
const systemInfoStore = useSystemInfoStore();
const cpuUsageShow = ref(0);
const ramUsageShow = ref(0);
const chartOptions = reactive({ maintainAspectRatio: false, aspectRatio: 0.5 });
const usageHistory = reactive({
  labels: [],
  datasets: [
    {
      label: "CPU占用率",
      data: [],
      fill: false,
      tension: 0.3
    }, {
      label: "RAM占用率",
      data: [],
      fill: false,
      tension: 0.3
    }
  ]
});


const updateInfo = (new_cpuUsage, new_ramUsage) => {
  // 新使用
  // const new_cpuUsage = Number((systemInfoStore.cpuInfo.usage * 100).toFixed(1));
  // const new_ramUsage = Number((systemInfoStore.ramInfo.usedPercentage * 100).toFixed(1));

  // 挂载Knob显示
  cpuUsageShow.value = Number((new_cpuUsage * 100).toFixed(1));
  ramUsageShow.value = Number((new_ramUsage * 100).toFixed(1));
}

watch(ramUsageShow, () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  if (usageHistory.labels.length == (10 + 1)) {
    usageHistory.labels.shift();
    usageHistory.datasets[0].data.shift();
    usageHistory.datasets[1].data.shift();
  }
  usageHistory.labels.push(timeString);
  usageHistory.datasets[0].data.push(cpuUsageShow.value);
  usageHistory.datasets[1].data.push(ramUsageShow.value);
})

defineExpose({
  updateInfo
})


</script>

<style scoped></style>