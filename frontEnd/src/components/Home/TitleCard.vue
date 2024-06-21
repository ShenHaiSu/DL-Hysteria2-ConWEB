<template>
  <Card class="mainCard">
    <template #title>{{ pageTitle }}</template>
    <template #content>{{ pageDescribe }}</template>
  </Card>
</template>


<script setup>
import Card from "primevue/card";
import { watch } from "vue";
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const pageTitle = computed(() => {
  return route.name
})

const pageDescribe = computed(() => {
  return route.meta.describe;
})

</script>

<style scoped>
div.mainCard {
  width: 100%;
  height: 10vh;
  box-shadow: 0 0 3px 1px rgb(187, 187, 187);
}
</style>