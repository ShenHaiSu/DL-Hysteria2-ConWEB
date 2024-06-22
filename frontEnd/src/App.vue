<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { ref, reactive, defineAsyncComponent } from 'vue';
// import AsideBar from "@/components/Home/AsideBar.vue"
// import TitleCard from "@/components/Home/TitleCard.vue";

// 动态引入
const AsideBar = defineAsyncComponent(() => import("@/components/Home/AsideBar.vue"));
const TitleCard = defineAsyncComponent(() => import("@/components/Home/TitleCard.vue"));

</script>

<template>
  <div style="display: flex; ">
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
