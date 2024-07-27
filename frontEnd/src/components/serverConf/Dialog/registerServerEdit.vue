<template>
  <div>
    <!-- 信息表单编辑栏 -->
    <div EditMainBase style="display: flex;">
      <table EditMainTable>
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
            <Button @click="innerObj.port.push('')" severity="secondary" outlined="" size="small">添加</Button>
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
            <InputText v-model="innerObj.infoAuthkey" />
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
      </table>
      <Divider layout="vertical" />
      <div EditMainInfo>
        
        <!-- {{ innerObj }} -->
      </div>
    </div>

    <!-- 操作栏 -->
    <div ActionDiv>
      <Button @click="resetFullObj" severity="info">重置</Button>
      <Divider layout="vertical" />
      <Button @click="cancelClick">取消</Button>
      <Divider layout="vertical" />
      <Button>确定</Button>
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
const IconSlash = defineAsyncComponent(() => import("@/components/icons/IconSlash.vue"));

// 初始化
const hy2ServerStore = useHy2ServserStore();
const toast = useToast();
const innerObj = ref({});

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