<template>
  <div style="padding: 0 30px;">
    <div style="text-align: center;">
      <h2>CPU & RAM 使用量</h2>
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
    <br>
  </div>
</template>

<script setup>
// 静态引入
import { defineAsyncComponent, ref } from 'vue';
import { useSystemInfoStore } from "@/stores/systemInfo.js";

// 动态引入
const Knob = defineAsyncComponent(() => import("primevue/knob"))
const Chart = defineAsyncComponent(() => import("primevue/chart"));

// 初始化
const systemInfoStore = useSystemInfoStore();
const cpuUsageShow = ref(0);
const ramUsageShow = ref(0);
const chartRef = ref(null);
const chartOptions = ref({ maintainAspectRatio: false, aspectRatio: 0.6 });
const chartData = ref({
  labels: [],
  datasets: [{
    label: 'CPU占用',
    data: [],
    fill: false,
    tension: 0.3
  }, {
    label: 'RAM占用',
    data: [],
    fill: false,
    tension: 0.3
  }]
})


const reDrawChart = () => {
  // 删除滞后数据
  if (chartData.value.labels.length == 30) {
    chartData.value.labels.shift();
    chartData.value.datasets[0].data = Array.prototype.slice.call(chartData.value.datasets[0].data, -29);
    chartData.value.datasets[1].data = Array.prototype.slice.call(chartData.value.datasets[1].data, -29);
  }

  // 生成时间戳
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  // 修改图表数据
  chartData.value.labels.push(timeString);
  chartData.value.datasets[0].data = Array.prototype.concat(chartData.value.datasets[0].data, cpuUsageShow.value);
  chartData.value.datasets[1].data = Array.prototype.concat(chartData.value.datasets[1].data, ramUsageShow.value);

  // 拉起图表重绘
  chartRefresh();
}

const updateInfo = () => {
  // 新使用
  const new_cpuUsage = Number((systemInfoStore.cpuInfo.usage * 100).toFixed(1));
  const new_ramUsage = Number((systemInfoStore.ramInfo.usedPercentage * 100).toFixed(1));

  // 挂载Knob显示
  cpuUsageShow.value = new_cpuUsage;
  ramUsageShow.value = new_ramUsage;

  // 刷新图表
  reDrawChart();
}

const chartRefresh = () => {
  chartData.value.datasets[0].data = Array.prototype.concat(chartData.value.datasets[0].data);
  chartData.value.datasets[1].data = Array.prototype.concat(chartData.value.datasets[1].data);
}


defineExpose({ updateInfo, chartRefresh })
</script>

<style scoped></style>