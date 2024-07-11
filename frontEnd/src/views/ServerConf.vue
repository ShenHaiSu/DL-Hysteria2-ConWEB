<template>
  <div>
    <!-- 编辑、提示使用框 -->
    <ServerDialog />
    <!-- 上层批量控制以及新增刷新等 -->
    <div>
      <NavBar />
    </div>
    <!-- 已认证服务器的信息显示 -->
    <div>

    </div>
    <!-- 未认证服务器信息显示 -->
    <div>
    </div>

    <!-- debug使用 -->
    <div>
      {{ hy2ServerStore.registeredList }}
      <br>
      {{ hy2ServerStore.unRegisteredList }}
      <br>
      {{ hy2ServerStore.editDialogShow }} - {{ hy2ServerStore.editDialogMode }}
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import { useHy2ServserStore } from "@/stores/hy2Server.js";

// 动态引入
const NavBar = defineAsyncComponent(() => import("@/components/serverConf/navBar.vue"));
const ServerDialog = defineAsyncComponent(() => import("@/components/serverConf/serverDialog.vue"));

// 初始化
const hy2ServerStore = useHy2ServserStore();

</script>

<style scoped></style>