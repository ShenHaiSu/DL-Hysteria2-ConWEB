<template>
  <div style="padding: 0 30px 0 50px;">
    <div style="text-align: center;">
      <h2>磁盘使用量</h2>
    </div>
    <div>
      <template v-for="(diskUsage, diskName ) in systemInfoStore.diskInfo">
        <div>
          <div style="min-width: 150px; width: 100%; text-align: start"> {{ diskName }}&nbsp;&nbsp;{{ diskUsage['used']
            }}GB / {{
        diskUsage['total'] }}GB
          </div>
          <div style="min-width: 450px;">
            <ProgressBar :value="genDiskUseRate(diskUsage.usedPercentage)"></ProgressBar>
          </div>
        </div>
        <br>
      </template>
    </div>
  </div>
</template>

<script setup>
// 静态引入
import { ref, defineAsyncComponent } from 'vue';
import { useSystemInfoStore } from '@/stores/systemInfo';

// 动态引入
const ProgressBar = defineAsyncComponent(() => import("primevue/progressbar"));

// 初始化
const systemInfoStore = useSystemInfoStore();

const genDiskUseRate = (input) => Number((input * 100).toFixed(2));
</script>

<style scoped></style>