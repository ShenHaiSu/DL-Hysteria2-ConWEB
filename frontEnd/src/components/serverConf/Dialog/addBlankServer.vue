<!-- Dialog内 新增服务器组件 -->

<template>
  <div>
    <div>
      <table AddBlankServerTable>
        <tbody>
          <tr>
            <td>IP地址</td>
            <td>
              <InputText v-model="originObj.address" />
            </td>
          </tr>
          <tr>
            <td>域名</td>
            <td>
              <InputText v-model="originObj.domain" />
            </td>
          </tr>
          <tr>
            <td>别名</td>
            <td>
              <InputText v-model="originObj.alias" />
            </td>
          </tr>
          <tr>
            <td>代理端口</td>
            <td style="display:flex; flex-direction:column; gap: 5px;">
              <template v-for="(port, index) in originObj.port">
                <InputText v-model="originObj.port[index]" @change="portInputChangeHandle(index)" />
              </template>
              <Button @click="originObj.port.push('')" severity="secondary" outlined size="small">添加</Button>
            </td>
          </tr>
          <tr>
            <td>api端口</td>
            <td>
              <InputText v-model="originObj.infoPort" type="number" />
            </td>
          </tr>
          <tr>
            <td>api密钥</td>
            <td>
              <InputText v-model="originObj.infoAuthKey" />
            </td>
          </tr>
          <tr>
            <td>api连通性</td>
            <td>
              <Button @click="apiConnectTestHandle" outlined size="small" style="width: 100%;" severity="secondary">
                {{ apiConnectTestText }}
              </Button>
            </td>
          </tr>
          <tr>
            <td>在线上限 设备</td>
            <td>
              <InputText v-model="originObj.maxOnline" type="number" />
            </td>
          </tr>
          <tr>
            <td>流量上限 GB</td>
            <td>
              <InputText v-model="originObj.bandwidth.total" type="number" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="display: flex; width: 100%; justify-content: center;">
      <Button @click="candelAddServer" severity="secondary" size="small">取消</Button>
      <Divider layout="vertical" />
      <Button @click="addServerConfirm" size="small">确定</Button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { defineAsyncComponent } from "vue";
import { useHy2ServserStore } from "@/stores/hy2Server";
import { useToast } from "primevue/usetoast";

// 初始化
const originObj = ref({ address: "", domain: "", alias: "", infoPort: "", infoAuthKey: "", port: [], bandwidth: { total: 0, used: 0 } });
const hy2ServerStore = useHy2ServserStore();
const toast = useToast();
const apiConnectTestText = ref("测试");

// 动态引入
const Divider = defineAsyncComponent(() => import("primevue/divider"));

// 端口输入框变化时触发
const portInputChangeHandle = (index) => {
  if (originObj.value.port[index].length != 0) return;
  originObj.value.port.splice(index, 1);
}

// api连通性测试
const apiConnectTestHandle = () => {
  // 检查属性
  if ((originObj.value.address.length == 0 && originObj.value.domain.length == 0) || originObj.value.infoPort.length == 0 || originObj.value.infoAuthKey.length == 0)
    return apiConnectTestText.value = "信息不足";

  // 短接阻断
  if (apiConnectTestText.value == "测试中...") return;
  apiConnectTestText.value = "测试中...";

  // 发送请求
  axios.post('/hy2ServerInfo/testServer', {
    target: originObj.value.address,
    domain: originObj.value.domain,
    port: originObj.value.infoPort,
    authkey: originObj.value.infoAuthKey,
  })
    .then(axiosRes => {
      apiConnectTestText.value = `成功 ${(axiosRes.data.responseTime / 1000).toFixed(2)}s`;
    })
    .catch(axiosErr => {
      apiConnectTestText.value = `失败`;
    })
}

// 取消按钮点击事件
const candelAddServer = () => hy2ServerStore.clsoeDialog(false);

// 确定按钮点击事件
const addServerConfirm = () => {
  // 检查属性
  if (
    originObj.value.address.length == 0 ||
    originObj.value.domain.length == 0 ||
    originObj.value.alias.length == 0 ||
    originObj.value.port.length == 0 ||
    originObj.value.infoPort.length == 0 ||
    originObj.value.infoAuthKey.length == 0 ||
    originObj.value.maxOnline <= 0 ||
    originObj.value.bandwidth.total <= 0
  ) {
    return toast.add({ severity: "error", summary: "错误", detail: "信息不足", life: 3000 });
  }

  // 发送请求
  axios.post("/hy2ServerInfo/registerServer", {
    target: originObj.value.address,
    domain: originObj.value.domain,
    alias: originObj.value.alias,
    port: originObj.value.port,
    infoPort: originObj.value.infoPort,
    infoAuthKey: originObj.value.infoAuthKey,
    maxOnline: Number(originObj.value.maxOnline) || 1,
    maxBandwidth: Number(originObj.value.bandwidth.total) || 1,
  })
    .then(axiosRes => {
      //  hy2ServerStore.addServer(axiosRes.data);
      toast.add({ severity: "success", summary: "成功", detail: "服务器添加成功", life: 1000 });
      hy2ServerStore.clsoeDialog(true);
    })
    .catch(axiosErr => {
      toast.add({ severity: "error", summary: "错误", detail: "服务器添加失败", life: 3000 });
    })
}

</script>

<style scoped>
table[AddBlankServerTable] {
  margin-bottom: 10px;
}

table[AddBlankServerTable] .p-inputtext {
  height: 30px;
  width: 250px;
  margin-bottom: 2px;
  font-size: 15px;
  padding-left: 0.5rem;
}
</style>