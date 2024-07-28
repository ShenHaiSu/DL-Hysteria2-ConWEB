<template>
  <div>
    <!-- 信息表单编辑栏 -->
    <div EditMainBase style="display: flex;">
      <table EditMainTable>
        <tbody>
          <tr>
            <td>IP</td>
            <td>
              <InputText v-model="innerObj.address" disabled="true" />
            </td>
          </tr>
          <tr>
            <td>域名</td>
            <td>
              <InputText v-model="innerObj.domain" />
            </td>
          </tr>
          <tr>
            <td>别名</td>
            <td>
              <InputText v-model="innerObj.alias" />
            </td>
          </tr>
          <tr>
            <td>代理端口</td>
            <td style="display:flex; flex-direction:column; gap: 5px;">
              <template v-for="(port, index) in innerObj.port">
                <InputText v-model="innerObj.port[index]" @change="portInputChangeHandle(index)" />
              </template>
              <Button @click="innerObj.port.push('')" severity="secondary" outlined size="small">添加</Button>
            </td>
          </tr>
          <tr>
            <td>api端口</td>
            <td>
              <InputText v-model:modelValue="innerObj.infoPort" type="number" />
            </td>
          </tr>
          <tr>
            <td>api秘钥</td>
            <td>
              <InputText v-model="innerObj.infoAuthKey" />
            </td>
          </tr>
          <tr>
            <td>api连通性</td>
            <td>
              <Button @click="testClick" style="width: 100%;" severity="secondary" outlined size="small">
                {{ apiTestText }}
              </Button>
            </td>
          </tr>
          <tr>
            <td>在线上限 设备</td>
            <td>
              <InputText v-model="innerObj.maxOnline" type="number" />
            </td>
          </tr>
          <tr>
            <td>流量上限 GB</td>
            <td>
              <InputText v-model="innerObj.bandwidth.total" />
            </td>
          </tr>
        </tbody>
      </table>
      <Divider layout="vertical" />
      <div EditMainInfo>
        <table>
          <tbody>
            <tr>
              <td>通过认证次数：</td>
              <td>{{ innerObj.authCount }}</td>
            </tr>
            <tr>
              <td>首次连接时间：</td>
              <td>{{ new Date(innerObj.firstConnect).toLocaleString() }}</td>
            </tr>
            <tr>
              <td>最近连接时间：</td>
              <td>{{ new Date(innerObj.lastConnect).toLocaleString() }}</td>
            </tr>
            <tr>
              <td>错误 - 方法错误：</td>
              <td>{{ innerObj.error.method }}</td>
            </tr>
            <tr>
              <td>错误 - 请求体错误：</td>
              <td>{{ innerObj.error.body }}</td>
            </tr>
            <tr>
              <td>错误 - 拒绝认证：</td>
              <td>{{ innerObj.error.reject }}</td>
            </tr>
            <tr>
              <td>错误 - 超时错误：</td>
              <td>{{ innerObj.error.timeout }}</td>
            </tr>
            <tr>
              <td>已用流量：</td>
              <td>{{ innerObj.bandwidth.used }} GB</td>
            </tr>
            <tr>
              <td>已用占比：</td>
              <td>{{ (innerObj.bandwidth.used / innerObj.bandwidth.total * 100).toFixed(2) }}%</td>
            </tr>
            <tr>
              <td>当前在线设备数：</td>
              <td>{{ innerObj.nowOnline }}</td>
            </tr>
            <tr>
              <td>在线设备明细：</td>
              <td>
                <p v-for="(count, name) in innerObj.onlineList"> {{ name }} : {{ count }} </p>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- {{ innerObj }} -->
      </div>
    </div>

    <!-- 操作栏 -->
    <div ActionDiv>
      <Button @click="resetFullObj" severity="secondary">重置</Button>
      <Divider layout="vertical" />
      <Button @click="cancelClick" severity="secondary" >取消</Button>
      <Divider layout="vertical" />
      <Button @click="updateClick">确定</Button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useHy2ServserStore } from '@/stores/hy2Server';
import { useToast } from 'primevue/usetoast';
import { defineAsyncComponent } from 'vue';
import { ref } from 'vue';

// 动态引入
const Divider = defineAsyncComponent(() => import('primevue/divider'));

// 初始化
const hy2ServerStore = useHy2ServserStore();
const toast = useToast();
const innerObj = ref({});
const apiTestText = ref('测试');

// 初始化函数
const initData = () => {
  innerObj.value = JSON.parse(JSON.stringify(hy2ServerStore.registeredList[hy2ServerStore.editIndex]))
}

// 重置按钮点击事件
const resetFullObj = () => {
  // innerObj.value = JSON.parse(JSON.stringify(hy2ServerStore.registeredList[hy2ServerStore.editIndex]))
  initData();
}

// 取消按钮点击事件
const cancelClick = () => {
  hy2ServerStore.editDialogMode = 'none';
  hy2ServerStore.editIndex = -1;
  hy2ServerStore.editDialogShow = false;
}

// 端口输入框改变事件
const portInputChangeHandle = (index) => {
  if (innerObj.value.port[index].length != 0) return;
  innerObj.value.port.splice(index, 1);
}

// 测试按钮点击事件
const testClick = () => {
  axios.post('/hy2ServerInfo/testServer', {
    target: innerObj.value.address,
    domain: innerObj.value.domain,
    port: innerObj.value.infoPort,
    authkey: innerObj.value.infoAuthKey,
  })
    .then(axiosRes => {
      apiTestText.value = `成功 ${(axiosRes.data.responseTime / 1000).toFixed(2)}s`;
    })
    .catch(axiosErr => {
      apiTestText.value = `失败`;
    })
}

// 确定按钮点击事件
const updateClick = () => {
  axios.post('/hy2ServerInfo/editServer', {
    target: innerObj.value.address,
    domain: innerObj.value.domain,
    alias: innerObj.value.alias,
    port: innerObj.value.port,
    infoPort: innerObj.value.infoPort,
    infoAuthKey: innerObj.value.infoAuthKey,
    maxOnline: innerObj.value.maxOnline,
    maxBandwidth: innerObj.value.bandwidth.total,
  })
    .then(axiosRes => {
      toast.add({ severity: 'success', summary: '提示', detail: '修改成功', life: 1000 });
      hy2ServerStore.editDialogMode = 'done';
      hy2ServerStore.editIndex = -1;
      hy2ServerStore.editDialogShow = false;
      hy2ServerStore.freshTarget += 1;
    })
    .catch(axiosErr => {
      toast.add({ severity: 'error', summary: '错误', detail: '修改失败', life: 3000 });
    })
}

// 调用初始化函数
initData();

</script>

<style scoped>
div[ActionDiv] {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

table[EditMainTable] .p-inputtext {
  height: 30px;
  font-size: 15px;
  padding-left: 0.5rem;
}

div[EditMainTable] {
  flex: 1;
}

div[EditMainInfo] {
  flex: 1;
}

div[EditMainBase] {
  display: flex;
  gap: 5px;
}
</style>