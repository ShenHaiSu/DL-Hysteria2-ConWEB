<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive, defineAsyncComponent } from 'vue';

// 动态引入
const AsideBar = defineAsyncComponent(() => import("@/components/common/AsideBar.vue"));
const TitleCard = defineAsyncComponent(() => import("@/components/common/TitleCard.vue"));
const Toast = defineAsyncComponent(() => import("primevue/toast"));

</script>

<template>
  <div style="display: flex; ">
    <Toast />
    <AsideBar />
    <div style="width: 100%; min-width: 500px;">
      <div>
        <TitleCard />
      </div>
      <div class="mainContainer">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
div.mainContainer {
  padding: 30px 10px;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 0 3px 1px rgb(187, 187, 187);
  min-height: 88vh;
}
</style>
