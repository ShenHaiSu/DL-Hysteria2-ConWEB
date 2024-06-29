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
      <div style="flex: 4; align-items: center; text-align: center;">
        <Chart ref="chartRef" type="line" :data="chartData" :options="chartOptions" />
      </div>
    </div>
    <div>
      <Button @click="reDrawChart">刷新图表</Button>
    </div>
  </div>
</template>

<script setup>
// 静态引入
import { defineAsyncComponent, computed, reactive } from 'vue';
import { useSystemInfoStore } from "@/stores/systemInfo.js";
import { ref } from 'vue';
import Chart from "primevue/chart";

// 动态引入
const Knob = defineAsyncComponent(() => import("primevue/knob"))

// 初始化
const systemInfoStore = useSystemInfoStore();
const cpuUsageShow = ref(0);
const ramUsageShow = ref(0);
const chartRef = ref();
const chartOptions = ref({
  maintainAspectRatio: false,
  aspectRatio: 0.6,
});
const chartData = reactive({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    tension: 0.3
  }, {
    label: 'Second Dataset',
    data: [28, 48, 40, 19, 86, 27, 90],
    fill: false,
    tension: 0.3
  }]
})


const reDrawChart = () => {
  // 修改图表数据
  chartData.labels.push("askldj");
  console.log(chartData.datasets[0].data = [65, 59, 80, 81, 56, 55, 40, 100]);

  // 拉起图表重绘
  chartRef['_value'].refresh();
}

const updateInfo = () => {
  // 新使用
  const new_cpuUsage = Number((systemInfoStore.cpuInfo.usage * 100).toFixed(1));
  const new_ramUsage = Number((systemInfoStore.ramInfo.usedPercentage * 100).toFixed(1));

  // 挂载Knob显示
  cpuUsageShow.value = new_cpuUsage;
  ramUsageShow.value = new_ramUsage;
}



defineExpose({ updateInfo })
</script>

<style scoped></style>