<!-- 所有已认证服务器的显示页面 内存放多个已认证服务器 -->

<template>
  <div>
    <RegisterServer v-for="(server, index) in hy2ServerStore.registeredList" :target-index="index"
      :target-server="server" :class="genBaseCLass(server)" />
  </div>
</template>

<script setup>
import axios from "axios";
import { useHy2ServserStore } from "@/stores/hy2Server";
import { onMounted, watch } from "vue";
import { useToast } from "primevue/usetoast";
import { defineAsyncComponent } from "vue";

// 动态引入
const RegisterServer = defineAsyncComponent(() => import("@/components/serverConf/registerServer.vue"));

// 初始化
const hy2ServerStore = useHy2ServserStore();
const toast = useToast();

// 刷新数据
const freshRegisterServerList = () => {
  axios.get("/hy2ServerInfo/allRegistered")
    .then(axiosRes => {
      hy2ServerStore.registeredList = [];
      const data = axiosRes.data;
      for (const key in data) {
        if (!Object.hasOwnProperty.call(data, key)) continue;
        data[key]['address'] = key;
        hy2ServerStore.registeredList = [...hy2ServerStore.registeredList, data[key]];
      }
    })
    .catch(axiosErr => {
      console.log(axiosErr);
      toast.add({ severity: "error", summary: "错误", detail: axiosErr?.response?.data.msg || "", life: 3000 });
    })
}

// 启动自动更新
onMounted(() => freshRegisterServerList());

// 监听Pinia的刷新触发器
watch(() => hy2ServerStore.freshTarget, () => freshRegisterServerList());

// 生成各个服务器面板的基础className
const genBaseCLass = (server) => {
  const searchPool = `${server.alias}#${server.address}`;
  if (!(searchPool.includes(hy2ServerStore.searchText) || hy2ServerStore.searchText.includes(searchPool))) return "hide";
}

</script>

<style scoped>
div.hide {
  display: none !important;
}
</style>