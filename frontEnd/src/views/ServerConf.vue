<template>
  <div>
    <!-- 上层批量控制以及新增刷新等 -->
    <div>
      <NavBar />
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';


// 动态引入
const NavBar = defineAsyncComponent(() => import("@/components/serverConf/navBar.vue"));

</script>

<style scoped></style>