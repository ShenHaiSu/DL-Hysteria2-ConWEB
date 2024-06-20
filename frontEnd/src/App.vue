<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { ref, reactive } from 'vue';
import Panel from 'primevue/panel';
import AsideBar from "@/components/Home/AsideBar.vue"
import TitleCard from "@/components/Home/TitleCard.vue";

</script>

<template>
  <div style="display: flex; ">
    <AsideBar />
    <div style="width: 100%;">
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
  padding-top: 30px;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
