<template>
  <Menu :model="menuContent" style="min-height: 98.5vh;margin-right: 10px;">
    <!-- 侧边栏抬头 -->
    <template #start>
      <span>start</span>
    </template>

    <!-- 侧边栏主体 -->
    <template #item="{ item, props }">
      <div>
        <span>{{ item.label }}</span>
      </div>
    </template>

    <!-- 侧边栏底栏 -->
    <template #end>
      <span>底栏</span>
    </template>
  </Menu>
</template>


<script setup>
import Menu from 'primevue/menu';
import { ref, reactive } from "vue";

const menuContent = reactive([
  { separator: true },
  {
    label: "文档",
    items: [
      { label: "文档-1", command: () => alert("文档1") },
      { label: "文档-2" },
      { label: "文档-3" },
    ]
  },
  { separator: true },
])
</script>

<style scoped></style>