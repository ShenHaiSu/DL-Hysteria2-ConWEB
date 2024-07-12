<template>
  <div>
    {{ Props.targetIndex }}
    <br>
    {{ Props.targetServer }}
  </div>
</template>


<script setup>

const Props = defineProps(['targetIndex','targetServer']);


</script>

<style scoped>

</style>