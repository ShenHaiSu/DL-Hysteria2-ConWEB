<template>
  <div>
    <div></div>
    <div style="display: flex; width: 100%; justify-content: center;">
      <Button>取消</Button>
      <Divider layout="vertical" />
      <Button>确定</Button>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue"

// 动态引入
const Divider = defineAsyncComponent(() => import("primevue/divider"));

</script>

<style scoped></style>