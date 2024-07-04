<template>
  <Dialog v-model:visible="accountConfStore.editorShow" :header="genDialogTitle()">
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';
import { useAccountConfStore } from '@/stores/accountConf';

// 静态引入
const accountConfStore = useAccountConfStore();


// 动态引入
const Dialog = defineAsyncComponent(() => import("primevue/dialog"))

const genDialogTitle = () => accountConfStore.editorMode == 'add' ? '添加新账号' : '编辑账号信息';

</script>

<style scoped></style>