<template>
  <div AuthCardContainer @click="mainClick">
    <IconUser />
    <span>{{ authStore.getIsLogin() ? authStore.getUserName() : "未登录" }}</span>
  </div>

  <Dialog v-model:visible="dialogShow" modal header="认证界面" :style="{ maxWidth: '50vw', minWidth: `350px` }">
    <template #header>
      <div>
        <h2>认证界面</h2>
      </div>
    </template>
    <!-- 已经登录显示的界面 -->
    <div AuthCardDialogAuthed v-if="authStore.isLogin">
      <div>
        <table style="width: 100%;">
          <tbody>
            <tr>
              <td>用户名</td>
              <td>{{ authStore.getUserName() }}</td>
            </tr>
            <tr>
              <td>权限级别</td>
              <td>
                <Tag :value="authStore.getUserPermission()" :severity="getTagSeverity()" rounded></Tag>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <Divider style="width: 100%;" />
              </td>
            </tr>
            <template v-for="item in userInfoKeys">
              <tr>
                <td>{{ item }}</td>
                <td>{{ authStore.getUserInfo()[item] }}</td>
              </tr>
            </template>
          </tbody>
        </table>
        <br><br>
      </div>
      <div>
        <Button size="small" @click="renewInfo">刷新</Button>
        <Divider layout="vertical" />
        <Button size="small" @click="logoutClick">登出</Button>
      </div>
    </div>

    <!-- 未登录显示的界面 -->
    <div AuthCardDialogUnauthed v-else>
      <div>
        <FloatLabel>
          <InputText size="small" @keydown="inputKeyDown" v-model="userNameInput" placeholder="必填" />
          <label>账户名</label>
        </FloatLabel>
        <FloatLabel>
          <InputText size="small" type="password" @keydown="inputKeyDown" v-model="userPasswordInput"
            placeholder="必填" />
          <label>密码</label>
        </FloatLabel>
        <FloatLabel v-if="adminKeyInputShow">
          <InputText size="small" v-model="adminKeyInput" placeholder="选填" />
          <label>管理员秘钥</label>
        </FloatLabel>
      </div>
      <br>
      <div>
        <Button size="small" @click="registClick" severity="secondary">注册</Button>
        <Divider layout="vertical" />
        <Button size="small" @click="loginClick">登录</Button>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
// 静态引入
import { useToast } from 'primevue/usetoast';
import md5 from "md5";
import axios from "axios";
import { useAuthStore } from "@/stores/auth.js";
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';
import { computed } from 'vue';
import { onMounted } from 'vue';

// 动态引入
const IconUser = defineAsyncComponent(() => import("@/components/icons/IconUser.vue"));
const FloatLabel = defineAsyncComponent(() => import("primevue/floatlabel"));
const Dialog = defineAsyncComponent(() => import("primevue/dialog"));
const Tag = defineAsyncComponent(() => import("primevue/tag"));

// 初始化
const authStore = useAuthStore();
const dialogShow = ref(false);
const userNameInput = ref("");
const adminKeyInputShow = ref(false);
const adminKeyInput = ref("");
const userPasswordInput = ref("");
const toast = useToast();

// 通用函数
const checkEmptyField = () => userNameInput.value.length == 0 || userPasswordInput.value.length == 0;
const md5Password = () => md5(md5(userPasswordInput.value + "DAOLUOLTS").toString());

// 外部显示被点击，打开登录或信息界面
const mainClick = () => {
  // 显示认证界面
  dialogShow.value = true;
  // 关闭管理员秘钥显示
  adminKeyInputShow.value = false;
  // 清空信息框
  userNameInput.value = "";
  userPasswordInput.value = "";
  adminKeyInput.value = "";
}

const userInfoKeys = computed(() => {
  console.log(Object.keys(authStore.getUserInfo()));
  return Object.keys(authStore.getUserInfo());
})

onMounted(() => {
  axios("/auth/checkLogin", { method: "post" })
    .then(axiosRes => {
      const data = axiosRes.data;
      authStore.setUserName(data.userName);
      authStore.setUserPermission(data.userPermission);
      authStore.coverUserInfo(data.userInfo);
      authStore.setIsLogin(true);
      toast.add({ severity: "success", summary: "身份验证", detail: "已通过身份验证，欢迎回来：" + data.userName, life: 3000 });
    })
    .catch(() => {
      toast.add({ severity: "error", summary: "当前未登录", detail: "请先登录", life: 3000 });
    })
})

// 注册按钮被点击
const registClick = () => {
  if (checkEmptyField()) return toast.add({ severity: 'error', summary: '错误', detail: '账号或密码不能为空', life: 3000 });

  if (!adminKeyInputShow.value) return adminKeyInputShow.value = true;


  axios("/auth/regist", {
    method: "post", data: {
      userName: userNameInput.value,
      userPassword: md5Password(),
      adminKey: adminKeyInput.value
    }
  }).then(axiosRes => {
    // 返回的数据
    /**
     * {
     *  userName String,
     *  userPermission String,
     *  userInfo: {},
     * }
     */
    const data = axiosRes.data;
    authStore.setUserName(data.userName);
    authStore.setUserPermission(data.userPermission);
    authStore.coverUserInfo(data.userInfo);
    authStore.setIsLogin(true);
    // 完成登录
  }).catch(axiosErr => {
    toast.add({ severity: "error", summary: "错误", detail: axiosErr.response.data.msg, life: 3000 });
  })
}

// 登录按钮被点击
const loginClick = () => {
  if (checkEmptyField()) return toast.add({ severity: 'error', summary: '错误', detail: '账号或密码不能为空', life: 3000 });

  axios("/auth/login", {
    method: "post", data: {
      userName: userNameInput.value,
      userPassword: md5Password()
    }
  }).then(axiosRes => {
    // 返回的数据
    /**
     * {
     *  userName String,
     *  userPermission String,
     *  userInfo: {}
     * }
     */
    const data = axiosRes.data;
    authStore.setUserName(data.userName);
    authStore.setUserPermission(data.userPermission);
    authStore.coverUserInfo(data.userInfo);
    authStore.setIsLogin(true);
    // 完成登录
    toast.add({ severity: "success", summary: "成功", detail: data.msg, life: 3000 });
    dialogShow.value = false;
  }).catch(axiosErr => {
    toast.add({ severity: "error", summary: "错误", detail: axiosErr.response.data.msg, life: 3000 });
  })
}

// 登出按钮被点击
const logoutClick = () => {
  if (!authStore.getIsLogin()) return toast.add({ severity: "error", summary: "错误", detail: "当前已经是未登录状态，请刷新页面尝试修正显示。", life: 3000 });

  axios("/auth/logout", { method: "post" })
    .then(axiosRes => {
      const data = axiosRes.data;

      authStore.setIsLogin(false);
      authStore.setUserName("");
      authStore.setUserPermission("none");
      authStore.coverUserInfo({});

      toast.add({ severity: "success", summary: "成功", detail: "完成登出，现在是未登录状态。", life: 3000 });
      location.reload();
    })
    .catch(axiosErr => {
      toast.add({ severity: "error", summary: "错误", detail: axiosErr.response.data.msg, life: 3000 });
    })
}

// 刷新账户信息按钮被点击
const renewInfo = () => {
  if (!authStore.getIsLogin()) return toast.add({ severity: "error", summary: "错误", detail: "当前已经是未登录状态，请刷新页面尝试修正显示。", life: 3000 });

  axios("/auth/checkLogin", { method: "post" })
    .then(axiosRes => {
      // 返回的数据
      /**
       * {
       *  userName String,
       *  userPermission String,
       *  userInfo: {}
       * }
       */
      const data = axiosRes.data;
      authStore.setUserName(data.userName);
      authStore.setUserPermission(data.userPermission);
      authStore.coverUserInfo(data.userInfo);
      authStore.setIsLogin(true);
      toast.add({ severity: "success", summary: "成功", detail: "已收到服务器下发的新Session", life: 3000 });
    })
    .catch(axiosErr => {
      toast.add({ severity: "error", summary: "错误", detail: axiosErr.response.data.msg, life: 3000 });
    })
}

// 输入框按键按下事件
const inputKeyDown = (event) => {
  if (event.key == "Enter") return loginClick();
}

// 生成tag的重要级
const getTagSeverity = () => {
  switch (authStore.getUserPermission()) {
    case "none":
      return "";
    case "user":
      return "success";
    case "admin":
      return "danger";
  }
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
  cursor: pointer;
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

div[AuthCardDialogUnauthed]>div:nth-of-type(1) {
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
}

div[AuthCardDialogUnauthed]>div:nth-of-type(1)>span>input {
  width: 100%;
}

div[AuthCardDialogUnauthed]>div:nth-of-type(2),
div[AuthCardDialogAuthed]>div:nth-of-type(2) {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>