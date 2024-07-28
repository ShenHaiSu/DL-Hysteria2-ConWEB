<template>
  <div style="display: flex; flex-direction: column;">
    <p>确定要将 <b>{{ hy2ServerStore.registeredList[hy2ServerStore.editIndex].alias }}</b> 服务器从认证列表中删除吗？ </p>
    <p>取消认证后来自该服务器的所有hy2认证请求都会被拒绝。</p>
    <p>所有人不再能通过此面板的认证连接到该hy2服务器。</p>
    <br>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <Button @click="hy2ServerStore.clsoeDialog(false)">返回</Button>
      <Divider layout="vertical" />
      <Button @click="unAuthServer" severity="warn" >确定取消认证</Button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useToast } from "primevue/usetoast";
import { useHy2ServserStore } from "@/stores/hy2Server";

const hy2ServerStore = useHy2ServserStore();
const toast = useToast();

const unAuthServer = () => {
  axios.post("/hy2ServerInfo/unRegisterServer", { target: hy2ServerStore.registeredList[hy2ServerStore.editIndex].address })
    .then(() => {
      toast.add({ severity: "success", summary: "成功", detail: `已将${hy2ServerStore.registeredList[hy2ServerStore.editIndex].address}服务器取消认证，可以在未认证服务器面板中查看信息。`, life: 1000 });
      hy2ServerStore.clsoeDialog(true);
    })
    .catch(axiosErr => {
      toast.add({ severity: "error", summary: "失败", detail: axiosErr?.response?.data?.msg || '请求失败', life: 3000 });
    })
}

</script>

<style scoped></style>