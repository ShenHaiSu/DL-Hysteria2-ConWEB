<template>
  <div NavBarBase>
    <div>
      <InputGroup>
        <InputText size="small" v-model="hy2ServerStore.searchText" />
        <Button size="small">搜索</Button>
      </InputGroup>
    </div>
    <div></div>
    <div>
      <Button disabled size="small" text severity="secondary" >更多操作</Button>
      <Button size="small">新增</Button>
      <Button size="small">刷新</Button>
    </div>
  </div>
</template>

<script setup>
import { useHy2ServserStore } from '@/stores/hy2Server';
import { defineAsyncComponent } from 'vue';

// 动态引入
const InputGroup = defineAsyncComponent(() => import("primevue/inputgroup"));

// 初始化
const hy2ServerStore = useHy2ServserStore();

</script>

<style scoped>
div[NavBarBase] {
  margin-top: -20px;
  display: flex;
}

div[NavBarBase]>*:nth-child(1) {
  flex: 5;
}

div[NavBarBase]>*:nth-child(2) {
  flex: 20;
}

div[NavBarBase]>*:nth-child(3) {
  display: flex;
  gap: 5px;
}
</style>