<template>
  <div registerServerResetBase>
    <div>
      <Button @click="resetBandwidthUsed" severity="secondary" size="small">重置</Button>
      <p>重置服务器已用流量</p>
    </div>
    <div>
      <Button @click="resetAllData" severity="secondary" size="small">重置</Button>
      <p>重置服务器所有累计记录</p>
    </div>
    <div style="justify-content: center;">
      <Button @click="hy2ServerStore.clsoeDialog(false)">取消重置</Button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useToast } from "primevue/usetoast";
import { useHy2ServserStore } from "@/stores/hy2Server";

const hy2ServerStore = useHy2ServserStore();
const toast = useToast();

const resetBandwidthUsed = () => {
  const serverAddress = hy2ServerStore.registeredList[hy2ServerStore.editIndex].address;
  axios.post("/hy2ServerInfo/clearServerBandwidth", { target: serverAddress })
    .then(axiosRes => {
      toast.add({ severity: "success", summary: "成功", detail: `${serverAddress} 服务器的已使用流量已完成归零`, life: 1000 });
      hy2ServerStore.clsoeDialog(true);
    })
    .catch(axiosErr => {
      toast.add({ severity: "error", summary: "错误", detail: axiosErr?.response?.data?.msg || "重置失败", life: 3000 });
    });
}

const resetAllData = () => {
  const serverAddress = hy2ServerStore.registeredList[hy2ServerStore.editIndex].address;
  axios.post("/hy2ServerInfo/clearServer", { target: serverAddress })
    .then(axiosRes => {
      toast.add({ severity: "success", summary: "成功", detail: `${serverAddress} 服务器的所有累计信息完成归零`, life: 1000 });
      hy2ServerStore.clsoeDialog(true);
    })
    .catch(axiosErr => {
      toast.add({ severity: "error", summary: "错误", detail: axiosErr?.response?.data?.msg || "重置失败", life: 3000 });
    });
}

</script>

<style scoped>
div[registerServerResetBase] {
  display: flex;
  flex-direction: column;
  font-size: 100%;
}

div[registerServerResetBase]>* {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  transition: all ease-in-out 0.15s;
  padding: 10px 30px;
  border-radius: 5px;
}

div[registerServerResetBase]>*:hover {
  background-color: rgb(236, 236, 236);
}

div[registerServerResetBase]>*:nth-child(1) .p-button,
div[registerServerResetBase]>*:nth-child(2) .p-button {
  width: 4rem;
  height: 2rem;
}
</style>