<template>
  <div>
    <!-- 编辑、提示使用框 -->
    <ServerDialog />
    <!-- 上层批量控制以及新增刷新等 -->
    <div>
      <NavBar />
    </div>
    <!-- 主窗口 -->
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

// 动态引入
const NavBar = defineAsyncComponent(() => import("@/components/serverConf/navBar.vue"));
const ServerDialog = defineAsyncComponent(() => import("@/components/serverConf/serverDialog.vue"));

// 默认跳转
const Router = useRouter();
Router.push("/serverConf/registerServer");

</script>

<style scoped></style>