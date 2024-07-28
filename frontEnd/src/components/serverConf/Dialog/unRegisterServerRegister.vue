<template>
  <div>
    <div>
      <table EditTableNode>
        <tbody>
          <tr>
            <td>IP地址</td>
            <td>
              <InputText v-model="originObj.address" disabled />
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
            <td>端口</td>
            <td style="display:flex; flex-direction:column; gap: 5px;">
              <template v-for="(port, index) in originObj.port">
                <InputText v-model="originObj.port[index]" @change="portTextBlurHandle(index)"
                  @blur="portTextBlurHandle(index)" />
              </template>
              <Button @click="originObj.port.push('')" severity="secondary" outlined="" size="small">添加</Button>
            </td>
          </tr>
          <tr>
            <td>api端口</td>
            <td>
              <InputText v-model="originObj.infoPort" type="number" />
            </td>
          </tr>
          <tr>
            <td>api秘钥</td>
            <td>
              <InputText v-model="originObj.infoAuthKey" />
            </td>
          </tr>
          <tr>
            <td>api连通性</td>
            <td> <Button @click="testApi" outlined severity="secondary" size="small" style="width: 100%;">{{ apiTestText
                }}</Button> </td>
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
              <InputText v-model="originObj.maxBandwidth" type="number" />
            </td>
          </tr>
        </tbody>
      </table>
      <!-- {{ originObj }} -->
    </div>
    <div EditActionBase>
      <Button @click="initForm" severity="secondary" size="small">重置</Button>
      <Divider layout="vertical" />
      <Button @click="cancelRegister" severity="secondary" size="small">取消</Button>
      <Divider layout="vertical" />
      <Button @click="confirmRegister" size="small">确认</Button>
    </div>
  </div>
</template>


<script setup>
import axios from 'axios';
import { useHy2ServserStore } from '@/stores/hy2Server';
import { useToast } from "primevue/usetoast"
import { ref } from 'vue';

// 初始化
const hy2ServerStore = useHy2ServserStore();
const toast = useToast();
const originObj = ref({});
const apiTestText = ref('测试');

// 初始化表单
const initForm = () => {
  originObj.value = JSON.parse(JSON.stringify(hy2ServerStore.unRegisteredList[hy2ServerStore.editIndex]));
  originObj.value.port = [];
  originObj.value.domain = '';
  originObj.value.alias = '';
  originObj.value.infoPort = 0;
  originObj.value.infoAuthKey = '';
  originObj.value.maxOnline = 0;
  originObj.value.maxBandwidth = 0;
}

// 取消认证
const cancelRegister = () => hy2ServerStore.clsoeDialog(false);

// 端口输入框失去焦点
const portTextBlurHandle = (index) => {
  if (originObj.value.port[index].length != 0) return;
  originObj.value.port.splice(index, 1);
}

// 测试api连通性
const testApi = () => {
  // 检查属性完整
  if ((originObj.value.address.length == 0 && originObj.value.domain.length == 0) || originObj.value.infoPort.length == 0 || originObj.value.infoAuthKey.length == 0)
    return apiTestText.value = '属性不完整';

  // 检查是否正在等待上次测试结果
  if (apiTestText.value == '测试中...') return;
  apiTestText.value = '测试中...';

  // 发送请求
  axios.post("/hy2ServerInfo/testServer", {
    target: originObj.value.address,
    domain: originObj.value.domain,
    port: originObj.value.apiPort,
    authkey: originObj.value.infoAuthKey
  })
    .then(axiosRes => {
      apiTestText.value = `成功 ${(axiosRes.data.responseTime / 1000).toFixed(2)}s`;
    })
    .catch(axiosErr => {
      apiTestText.value = `失败`;
    })

}

// 确认认证服务器
const confirmRegister = () => {
  // 检查属性完整
  if (
    originObj.value.infoPort.length == 0 ||
    originObj.value.infoAuthKey.length == 0 ||
    originObj.value.alias.length == 0 ||
    originObj.value.maxOnline == 0 ||
    originObj.value.maxBandwidth == 0 ||
    originObj.value.port.length == 0
  )
    return toast.add({ severity: 'error', summary: '错误', detail: '属性不完整', life: 3000 });

  // 整合请求体
  const requestBody = {
    target: originObj.value.address,
    alias: originObj.value.alias,
    domain: originObj.value.domain,
    port: originObj.value.port,
    maxOnline: originObj.value.maxOnline,
    infoPort: originObj.value.infoPort,
    infoAuthKey: originObj.value.infoAuthKey,
    maxBandwidth: originObj.value.maxBandwidth
  }

  // 发送请求
  axios.post("/hy2ServerInfo/registerServer", requestBody)
    .then(axiosRes => {
      hy2ServerStore.clsoeDialog(true);
      toast.add({ severity: 'success', summary: '成功', detail: '认证服务器成功', life: 1000 });
    })
    .catch(axiosErr => {
      toast.add({ severity: 'error', summary: '错误', detail: '认证服务器失败', life: 3000 });
    })

}


// 启动初始化
initForm();
</script>

<style scoped>
div[EditActionBase] {
  display: flex;
  justify-content: center;
  justify-items: center;
}

table[EditTableNode] {
  margin-bottom: 20px;
}

table[EditTableNode] .p-inputtext {
  height: 30px;
  font-size: 15px;
  padding-left: 0.5rem;
}
</style>