<template>
  <div NavBarBase>
    <div>
      <InputGroup>
        <InputText @keydown.enter="searchTarget" v-model="searchText" size="small" />
        <Button @click="searchTarget" size="small">搜索</Button>
      </InputGroup>
    </div>
    <div></div>
    <div>
      <Button disabled size="small" text severity="secondary">更多操作</Button>
      <Button @click="addNew" size="small">新增</Button>
      <Button @click="freshServerData" size="small">刷新</Button>
    </div>
  </div>
</template>

<script setup>
import { useHy2ServserStore } from '@/stores/hy2Server';
import { defineAsyncComponent, ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import axios from "axios";

// 动态引入
const InputGroup = defineAsyncComponent(() => import("primevue/inputgroup"));

// 初始化
const hy2ServerStore = useHy2ServserStore();
const toast = useToast();
const searchText = ref("");

searchText.value = hy2ServerStore.searchText;

// 添加新服务器
const addNew = () => {
  if (hy2ServerStore.editDialogShow) return;
  hy2ServerStore.editDialogShow = true;
  hy2ServerStore.editDialogMode = "add";
}

// 刷新服务器信息
const freshServerData = () => {
  axios.get("/hy2ServerInfo/all")
    .then(axiosRes => {
      hy2ServerStore.registeredList = [];
      hy2ServerStore.unRegisteredList = [];

      const data = axiosRes.data;
      for (const key in data[0]) {
        if (!Object.hasOwnProperty.call(data[0], key)) continue;
        data[0][key]['address'] = key;
        hy2ServerStore.registeredList = [...hy2ServerStore.registeredList, data[0][key]];
      }
      for (const key in data[1]) {
        if (!Object.hasOwnProperty.call(data[0], key)) continue;
        data[1][key]['address'] = key;
        hy2ServerStore.unRegisteredList = [...hy2ServerStore.unRegisteredList, data[0][key]];
      }
    })
    .catch(axiosErr => {
      toast.add({ severity: "error", summary: "错误", detail: axiosErr.response.data.msg, life: 3000 });
    })
}

// 触发搜索
const searchTarget = () => hy2ServerStore.searchText = searchText.value;

</script>

<style scoped>
div[NavBarBase] {
  margin-top: -20px;
  display: flex;
}

div[NavBarBase]>*:nth-child(1) {
  flex: 5;
}

div[NavBarBase]>*:nth-child(2) {
  flex: 20;
}

div[NavBarBase]>*:nth-child(3) {
  display: flex;
  gap: 5px;
}
</style>