<template>
  <div style="padding: 0 30px;">
    <div style="text-align: center;">
      <h2>IP地址</h2>
    </div>
    <div style="font-size: 16px;">
      <template v-for="ipAddress in systemInfoStore.ipInfo">
        <div style="display: flex;">
          <Tag severity="secondary" :value="ipAddress.match(':') ? 'IPv6' : 'IPv4'" />
          <div class="ipSpan" style="margin-left: 10px;" @click="ipAddressClick">{{ ipAddress }}</div>
        </div>
        <Divider style="margin: 5px 0;" />
      </template>
    </div>
  </div>
</template>

<script setup>
// 静态引入
import { ref, defineAsyncComponent } from "vue";
import { useSystemInfoStore } from "@/stores/systemInfo";
import { useToast } from "primevue/usetoast";

// 动态引入
const Divider = defineAsyncComponent(() => import("primevue/divider"));
const Tag = defineAsyncComponent(() => import("primevue/tag"));


// 初始化
const systemInfoStore = useSystemInfoStore();
const toast = useToast();

const ipAddressClick = (event) => {
  // console.log(event.target.innerText);
  navigator.clipboard.writeText(event.target.innerText);
  toast.add({ severity: "success", summary: "成功", detail: "已复制", life: 1000 });
}

</script>

<style scoped>
div.ipSpan {
  background-color: rgb(0, 0, 0, 0);
  transition: all ease-in-out 0.2s;
  padding: 3px 3px;
  border-radius: 5px;
  width: 100%;
}

div.ipSpan:hover {
  cursor: pointer;
  background-color: rgb(214, 214, 214)
}
</style>