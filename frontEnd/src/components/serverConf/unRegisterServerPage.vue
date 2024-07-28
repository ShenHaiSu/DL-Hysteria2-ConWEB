<!-- 所有未认证服务器的信息显示板 -->

<template>
  <div>
    <UnRegisterServer v-for="(server, index) in hy2ServerStore.unRegisteredList" :targetServer="server"
      :targetIndex="index" :class="genBaseCLass(server)" />
  </div>
</template>

<script setup>
import axios from 'axios';
import { defineAsyncComponent, onMounted, ref, watch } from 'vue';
import { useHy2ServserStore } from '@/stores/hy2Server';
import { useToast } from 'primevue/usetoast';

// 动态引入
const UnRegisterServer = defineAsyncComponent(() => import("@/components/serverConf/unRegisterServer.vue"));

// 初始化
const hy2ServerStore = useHy2ServserStore();
const toast = useToast();

// 刷新数据
const freshUnRegisterServerList = () => {
  axios.get("/hy2ServerInfo/allUnregistered")
    .then(axiosRes => {
      hy2ServerStore.unRegisteredList = [];
      const data = axiosRes.data;
      for (const key in data) {
        if (!Object.hasOwnProperty.call(data, key)) continue;
        data[key]['address'] = key;
        hy2ServerStore.unRegisteredList = [...hy2ServerStore.unRegisteredList, data[key]];
      }
    })
    .catch(axiosErr => {
      toast.add({ severity: "error", summary: "错误", detail: axiosErr?.response?.data.msg || "", life: 3000 });
    })
}

// 挂载时刷新数据
onMounted(() => freshUnRegisterServerList());

// 监听刷新
watch(() => hy2ServerStore.freshTarget, () => freshUnRegisterServerList());

// 生成各个服务器面板的基础className
const genBaseCLass = (server) => {
  if (!(server.address.includes(hy2ServerStore.searchText) || hy2ServerStore.searchText.includes(server.address))) return "hide";
}

</script>

<style scoped>
div.hide {
  display: none !important;
}
</style>