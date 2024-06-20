<script setup>
import { ref } from 'vue';
import FloatLabel from "primevue/floatlabel";
import Knob from 'primevue/knob';

const inputValue = ref("");
const knobValue = ref(0);

setInterval(() => {
  knobValue.value = parseInt(Math.random() * 100);
}, 500);


</script>

<template>
  <div>
    <div style="display: flex;">
      <FloatLabel>
        <InputText v-model="inputValue" size="small" />
        <label>Username</label>
      </FloatLabel>
      <Button size="small">搜索</Button>
      <div>
        <span>{{ inputValue + knobValue }}</span>
      </div>
    </div>

    <div>
      <Knob v-model="knobValue" readonly />
    </div>
  </div>
</template>
