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
                <InputText v-model="originObj.port[index]" @change="portInputChangeHandle(index)" />
              </template>
              <Button @click="originObj.port.push('')" severity="secondary" outlined="" size="small">添加</Button>
            </td>
          </tr>
        </tbody>
      </table>
      {{ originObj }}
    </div>
    <div EditActionBase>
      <Button @click="initForm" severity="secondary" size="small">重置</Button>
      <Divider layout="vertical" />
      <Button @click="cancelRegister" severity="secondary" size="small">取消</Button>
      <Divider layout="vertical" />
      <Button size="small">确认</Button>
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

// 初始化表单
const initForm = () => {
  originObj.value = JSON.parse(JSON.stringify(hy2ServerStore.unRegisteredList[hy2ServerStore.editIndex]));
  originObj.value.port = [];
}

// 取消认证
const cancelRegister = () => hy2ServerStore.clsoeDialog(false);

// 端口输入框变化
const portInputChangeHandle = (index) => {
  if (originObj.value.port[index].length != 0) return;
  originObj.value.port.splice(index, 1);
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

table[EditTableNode] .p-inputtext {
  height: 30px;
  font-size: 15px;
  padding-left: 0.5rem;
}
</style>