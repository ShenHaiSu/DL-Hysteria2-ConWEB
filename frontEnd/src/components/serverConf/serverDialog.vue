<!-- Dialog主体 服务器信息编辑、新增、删除确认使用的信息显示基础 -->

<template>
  <Dialog v-model:visible="hy2ServerStore.editDialogShow" modal :header="genDialogHeader()">
    <AddBlankServer v-if="hy2ServerStore.editDialogMode == 'add'" />
    <RegisterServerReset v-if="hy2ServerStore.editDialogMode == 'resgiter-reset'" />
    <RegisterServerUnRegister v-if="hy2ServerStore.editDialogMode == 'resgiter-unauth'" />
    <RegisterServerEdit v-if="hy2ServerStore.editDialogMode == 'resgiter-edit'" />
    <UnRegisterServerRegister v-if="hy2ServerStore.editDialogMode == 'unregister-register'" />
  </Dialog>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useHy2ServserStore } from "@/stores/hy2Server.js";

// 动态引入
const Dialog = defineAsyncComponent(() => import("primevue/dialog"));
const AddBlankServer = defineAsyncComponent(() => import("@/components/serverConf/Dialog/addBlankServer.vue"));
const RegisterServerReset = defineAsyncComponent(() => import("@/components/serverConf/Dialog/registerServerReset.vue"));
const RegisterServerUnRegister = defineAsyncComponent(() => import("@/components/serverConf/Dialog/registerServerUnRegister.vue"));
const RegisterServerEdit = defineAsyncComponent(() => import("@/components/serverConf/Dialog/registerServerEdit.vue"));
const UnRegisterServerRegister = defineAsyncComponent(() => import("@/components/serverConf/Dialog/unRegisterServerRegister.vue"));

// 初始化
const hy2ServerStore = useHy2ServserStore();

// 生成Dialog标题
const genDialogHeader = () => {
  switch (hy2ServerStore.editDialogMode) {
    case "none":
      return `错误标题`;
    case "add":
      return "从空白添加服务器";
    case "resgiter-reset":
      return "重置服务器信息";
    case "resgiter-unauth":
      return "取消认证服务器";
    case "resgiter-edit":
      return "编辑服务器信息";
    case "unregister-register":
      return "认证服务器";
    default:
      return "错误的索引信息导致无标题可显示。";
  }
}

</script>

<style scoped></style>