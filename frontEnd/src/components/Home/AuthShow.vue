<template>
  <Toast />
  <div AuthCardContainer @click="mainClick">
    <IconUser />
    <span>未登录</span>
  </div>
  <Dialog v-model:visible="dialogShow" modal header="认证界面" :style="{ maxWidth: '50vw', minWidth: `350px` }">
    <template #header>
      <div>
        <h2>认证界面</h2>
      </div>
    </template>
    <!-- 已经登录显示的界面 -->
    <div AuthCardDialogAuthed v-if="authStore.isLogin">



    </div>

    <!-- 未登录显示的界面 -->
    <div AuthCardDialogUnauthed v-else>
      <div style="display: flex; flex-direction: column; gap: 25px; justify-content: center;">
        <FloatLabel>
          <InputText size="small" v-model:modelValue="userNameInput" style="width: 100%;" />
          <label>账户名</label>
        </FloatLabel>
        <FloatLabel>
          <InputText size="small" type="password" v-model:modelValue="userPasswordInput" style="width: 100%;" />
          <label>密码</label>
        </FloatLabel>
      </div>
      <br>
      <div style="display: flex; width: 100%; justify-content: center;">
        <Button size="small" @click="registClick" severity="secondary">注册</Button>
        <Divider layout="vertical" />
        <Button size="small" @click="loginClick">登录</Button>
      </div>
    </div>

    <div style="display: none;">
      <span>{{ userNameInput }}</span>
      <br>
      <span>{{ userPasswordInput }}</span>
    </div>
  </Dialog>
</template>

<script setup>
import IconUser from '@/components/icons/IconUser.vue';
import FloatLabel from "primevue/floatlabel";
import Dialog from 'primevue/dialog';
import { useToast } from 'primevue/usetoast';
import md5 from "md5";
import axios from "axios";
import { useAuthStore } from "@/stores/auth.js";
import { ref } from 'vue';

// 初始化
const authStore = useAuthStore();
const dialogShow = ref(false);
const userNameInput = ref("");
const userPasswordInput = ref("");
const toast = useToast();

// 通用函数
const checkEmptyField = () => {
  // 检查账号和密码是否为空 
  // 为空返回True
  return userNameInput.value.length == 0 || userPasswordInput.value.length == 0;
}

// 外部显示被点击，打开登录或信息界面
const mainClick = () => dialogShow.value = true;

// 注册按钮被点击
const registClick = () => {
  if (checkEmptyField()) return toast.add({ severity: 'error', summary: '错误', detail: '账号或密码不能为空', life: 3000 })

}

// 登录按钮被点击
const loginClick = () => {
  if (checkEmptyField()) return toast.add({ severity: 'error', summary: '错误', detail: '账号或密码不能为空', life: 3000 })

  const md5Password = md5(md5(userPasswordInput.value + "DAOLUOLTS"));
  axios("/auth/login", {
    method: "post", data: {
      userName: userNameInput.value,
      userPassword: userPasswordInput.value
    }
  }).then(axiosRes => {
    
  })
}
</script>

<style scoped>
div[AuthCardContainer] {
  width: 100%;
  height: 50px;
  /* background-color: aqua; */
  border-radius: 10px;
  box-shadow: 0 0 3px 1px rgb(199, 199, 199);
  text-align: center;
  display: flex;
  overflow: hidden;
  gap: 5px;
  padding: 0 10px;
  transition: ease-in-out 0.1s;
  background-color: rgba(0, 0, 0, 0);
  color: black;
}

div[AuthCardContainer]:hover {
  background-color: rgb(131, 131, 131);
  color: rgb(255, 255, 255);
}

div[AuthCardContainer] * {
  line-height: 50px;
  text-align: center;
  align-items: center;
}

div[AuthCardContainer] svg {
  flex: 1;
  font-size: 20px;
  display: block;
  width: 20px;
  height: 100%;
}

div[AuthCardContainer] span {
  flex: 5;
  font-size: 20px;
  /* max-width: 95px; */
  overflow: hidden;
}

div[AuthCardDialogAuthed],
div[AuthCardDialogUnauthed] {
  margin-top: 20px;
}
</style>