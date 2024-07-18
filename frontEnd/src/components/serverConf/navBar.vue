<template>
  <div NavBarBase>
    <div>
      <InputGroup>
        <InputText @keydown.enter="searchTarget" v-model="searchText" size="small" />
        <Button @click="searchTarget" size="small">搜索</Button>
      </InputGroup>
    </div>
    <div>
      <Button @click="Router.push('/serverConf/registerServer')" size="small"
        :severity="genPageSeverity('auth')">已认证服务器</Button>
      <Button @click="Router.push('/serverConf/unRegisterServer')" size="small"
        :severity="genPageSeverity('unauth')">未认证服务器</Button>
    </div>
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
import { useRoute, useRouter } from "vue-router";

// 动态引入
const InputGroup = defineAsyncComponent(() => import("primevue/inputgroup"));

// 初始化
const hy2ServerStore = useHy2ServserStore();
const searchText = ref("");
const Route = useRoute();
const Router = useRouter();

searchText.value = hy2ServerStore.searchText;

// 添加新服务器
const addNew = () => {
  if (hy2ServerStore.editDialogShow) return;
  hy2ServerStore.editDialogShow = true;
  hy2ServerStore.editDialogMode = "add";
}

// 刷新服务器信息
const freshServerData = () => {
  hy2ServerStore.freshTarget = hy2ServerStore.freshTarget + 1;
}

// 触发搜索
const searchTarget = () => hy2ServerStore.searchText = searchText.value;

// 获取按钮severity
const genPageSeverity = (type) => {
  if (Route.fullPath.match("/registerServer") && type == "auth") {
    return "";
  } else if (Route.fullPath.match("/unRegisterServer") && type == "unauth") {
    return "";
  } else {
    return "secondary";
  }
}

</script>

<style scoped>
div[NavBarBase] {
  margin-top: -20px;
  margin-bottom: 10px;
  display: flex;
}

div[NavBarBase]>*:nth-child(1) {
  flex: 5;
}

div[NavBarBase]>*:nth-child(2) {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex: 20;
}

div[NavBarBase]>*:nth-child(3) {
  display: flex;
  gap: 5px;
}
</style>