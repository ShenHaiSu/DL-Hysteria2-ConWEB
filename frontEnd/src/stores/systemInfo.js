import { ref, toRaw,reactive } from 'vue'
import { defineStore } from 'pinia'
import { clearObj, assignObj } from '@/assets/tools';

export const useSystemInfoStore = defineStore('systemInfo', () => {
  const cpuInfo = reactive({});
  const ramInfo = reactive({});
  const diskInfo = reactive({});
  const ipInfo = reactive({});

  const get_cpuInfo = () => toRaw(cpuInfo);
  const get_ramInfo = () => toRaw(ramInfo);
  const get_diskInfo = () => toRaw(diskInfo);
  const get_ipInfo = () => toRaw(ipInfo);

  const clearAll = () => {
    clearObj(cpuInfo);
    clearObj(ramInfo);
    clearObj(diskInfo);
    clearObj(ipInfo);
  }

  const set_cpuInfo = (input) => assignObj(cpuInfo, input);
  const set_ramInfo = (input) => assignObj(ramInfo, input);
  const set_diskInfo = (input) => assignObj(diskInfo, input);
  const set_ipInfo = (input) => assignObj(ipInfo, input);

  return {
    cpuInfo, ramInfo, diskInfo, ipInfo,
    get_cpuInfo, get_ramInfo, get_diskInfo, get_ipInfo,
    clearAll, set_cpuInfo, set_ramInfo, set_diskInfo, set_ipInfo,
  }
})
