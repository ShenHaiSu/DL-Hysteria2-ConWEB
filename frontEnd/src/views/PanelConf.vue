<template>
  <div>
    <ul @change="handleChange">
      <li>
        <div key-name="allowNonManagerRegister">
          <span>是否允许非管理员 <b>注册</b> </span>
          <ToggleSwitch v-model="panelConf.allowNonManagerRegister" />
        </div>
      </li>
      <li>
        <div key-name="allowNonManagerLogin">
          <span>是否允许非管理员 <b>登录</b> </span>
          <ToggleSwitch v-model="panelConf.allowNonManagerLogin" />
        </div>
      </li>
      <li>
        <div key-name="hy2ServerDefaultPermission">
          <span>代理服务器 <b>默认可连接</b></span>
          <ToggleSwitch v-model="panelConf.hy2ServerDefaultPermission" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios';
import ToggleSwitch from 'primevue/toggleswitch';
import { onMounted, ref } from 'vue'
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const panelConf = ref({
  allowNonManagerRegister: false,
  allowNonManagerLogin: false,
  hy2ServerDefaultPermission: false
});

onMounted(() => {
  axios
    .get('/panelConf/getAll')
    .then(res => {
      panelConf.value.allowNonManagerRegister = res.data.allowNonManagerRegister || false;
      panelConf.value.allowNonManagerLogin = res.data.allowNonManagerLogin || false;
      panelConf.value.hy2ServerDefaultPermission = res.data.hy2ServerDefaultPermission || false;
    })
})

// 切换开关
function handleChange(event) {
  event.target.setAttribute('disabled', true);
  const keyName = event.target.closest('li>div').getAttribute("key-name");
  const value = event.target.checked;
  axios
    .post('/panelConf/update', { key: keyName, value })
    .then(res => {
      toast.add({ severity: 'success', summary: '成功', detail: '设置已保存', life: 500 });
    })
    .catch(err => {
      toast.add({ severity: 'error', summary: '错误', detail: '设置保存失败', life: 500 });
      panelConf.value[keyName] = !value;
    })
    .finally(() => {
      event.target.removeAttribute('disabled');
    });
}

</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
  padding: 10px 30px;
  transition: all 0.15s ease-in-out;
  border-radius: 10px;
}

li:hover {
  background-color: #f2f2f2;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

li>div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  text-justify: center;
}

li>div>span>b {
  color: rgb(173, 33, 33);
}
</style>