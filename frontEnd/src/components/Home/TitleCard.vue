<template>
  <Card class="mainCard">
    <template #title>{{ pageTitle }}</template>
    <template #content>{{ pageDescribe ? pageDescribe : "无页面描述" }}</template>
  </Card>
</template>


<script setup>
import Card from "primevue/card";
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
  min-height: 105px;
  width: 100%;
  box-shadow: 0 0 3px 1px rgb(187, 187, 187);
}
</style>