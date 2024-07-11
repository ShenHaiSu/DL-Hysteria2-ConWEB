<template>
  <Dialog v-model:visible="hy2ServerStore.editDialogShow" modal :header="genDialogHeader()">
    <AddBlankServer v-if="hy2ServerStore.editDialogMode == 'add'" />
  </Dialog>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useHy2ServserStore } from "@/stores/hy2Server.js";

// 动态引入
const Dialog = defineAsyncComponent(() => import("primevue/dialog"));
const AddBlankServer = defineAsyncComponent(() => import("@/components/serverConf/addBlankServer.vue"));

// 初始化
const hy2ServerStore = useHy2ServserStore();

// 生成Dialog标题
const genDialogHeader = () => {
  switch (hy2ServerStore.editDialogMode) {
    case "none":
      return `错误标题`;
    case "add":
      return "从空白添加服务器";
  }
}

</script>

<style scoped></style>