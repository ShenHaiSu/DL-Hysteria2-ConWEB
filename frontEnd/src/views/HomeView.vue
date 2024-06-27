<script setup>
// 静态引入
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';
// import FloatLabel from "primevue/floatlabel";
// import Knob from 'primevue/knob';
// import Slider from 'primevue/slider';

// 动态引入
const Knob = defineAsyncComponent(() => import("primevue/knob"))
const FloatLabel = defineAsyncComponent(() => import("primevue/floatlabel"))
const Slider = defineAsyncComponent(() => import("primevue/slider"))


const inputValue = ref("");
const knobValue = ref(0);

setInterval(() => {
  knobValue.value = parseInt(Math.random() * 100);
}, 1000);


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
      <Slider v-model="knobValue" /> 
    </div>
  </div>
</template>
