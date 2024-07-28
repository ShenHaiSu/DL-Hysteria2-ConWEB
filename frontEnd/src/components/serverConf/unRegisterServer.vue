<!-- 单个未认证服务器的信息显示 -->

<template>
  <div UnRegisterServerBase>
    <!-- {{ Props.targetServer }} -->
    <div>
      <h2>IP地址</h2>
      <p>{{ Props.targetServer.address }}</p>
    </div>
    <div>
      <h2>请求次数</h2>
      <p v-tooltip.bottom="{ value: genRequestTooltipText(), autoHide: false }">{{ Props.targetServer.connectCount }}
      </p>
    </div>
    <div>
      <h2 style="color: red;">错误次数</h2>
      <p v-tooltip.bottom="{ value: genErrorTooltipText(), autoHide: false }">{{ errorSum() }}</p>
    </div>
    <div>
      <h2>操作</h2>
      <div UnAuthServerActionBase>
        <Button @click="deleteUnRegisterServer">删除</Button>
        <Button @click="clearUnRegisterServer">清空</Button>
        <Button @click="authServer">认证</Button>
      </div>
    </div>
    <!-- <div>
      {{ Props.targetServer }}
    </div> -->
  </div>
</template>

<script setup>
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import { useHy2ServserStore } from '@/stores/hy2Server';


// 初始化
const Props = defineProps(["targetServer", "targetIndex"]);
const hy2ServerStore = useHy2ServserStore();
const toast = useToast();

const errorSum = () => Object.values(Props.targetServer.error).reduce((acc, cur) => acc + cur, 0);
const genErrorTooltipText = () => {
  let result = ``;
  result += `方法错误：${Props.targetServer.error.method}\n`;
  result += `请求体错误：${Props.targetServer.error.body}\n`;
  return result;
}
const genRequestTooltipText = () => {
  let result = ``;
  result += `首次请求：${new Date(Props.targetServer.firstConnect).toLocaleString()}\n`;
  result += `最近请求：${new Date(Props.targetServer.lastConnect).toLocaleString()}\n`;
  return result;
}

// 删除未认证服务器记录
const deleteUnRegisterServer = () => {
  axios.post("/hy2ServerInfo/deleteServer", { target: Props.targetServer.address })
    .then(axiosRes => {
      toast.add({ severity: 'success', summary: '删除成功', detail: '该服务器记录已删除', life: 1000 });
    })
    .catch(axiosErr => {
      toast.add({ severity: 'error', summary: '删除失败', detail: '请检查网络连接或联系管理员', life: 3000 });
    })
}

// 清空未认证服务器的统计数据
const clearUnRegisterServer = () => {
  axios.post("/hy2ServerInfo/clearServer", { target: Props.targetServer.address })
    .then(axiosRes => {
      hy2ServerStore.freshTarget++;
      toast.add({ severity: 'success', summary: '清空成功', detail: '该服务器的统计数据已清空', life: 1000 });
    })
    .catch(axiosErr => {
      toast.add({ severity: 'error', summary: '清空失败', detail: '请检查网络连接或联系管理员', life: 3000 });
    })
}

// 认证服务器
const authServer = () => {
  hy2ServerStore.editDialogShow = true;
  hy2ServerStore.editDialogMode = "unregister-register";
  hy2ServerStore.editIndex = Props.targetIndex;
}

</script>

<style scoped>
div[UnRegisterServerBase] {
  display: flex;
  padding: 10px;
  border-radius: 5px;
  transition: all ease-in-out 0.15s;
}

div[UnRegisterServerBase]:hover {
  box-shadow: 0 0 5px 2px rgb(225, 225, 225);
}

div[UnRegisterServerBase]>* {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  border-radius: 5px;
  justify-items: center;
  justify-content: center;
  text-align: center;
}


div[UnAuthServerActionBase] {
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
}

div[UnAuthServerActionBase] .p-button {
  height: 35px;
  width: 60px;
  padding: 2px;
}
</style>