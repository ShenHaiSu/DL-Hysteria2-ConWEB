<!-- 账号编辑的Dialog内容 -->

<template>
  <Dialog v-model:visible="accountConfStore.editorShow" :header="genDialogTitle" :style="dialogStyle">
    <!-- 添加新账号编辑框 -->
    <div v-if="accountConfStore.editorMode == 'add'">
      <div CreateNewAccountInputDiv>
        <FloatLabel>
          <InputText size="small" v-model="newAccountInfo.userName" placeholder="必填" />
          <label>账户名</label>
        </FloatLabel>
        <FloatLabel>
          <InputText size="small" type="password" v-model="newAccountInfo.userPassword"
            placeholder="选填,不填写代表该用户不可登陆面板." />
          <label>密码</label>
        </FloatLabel>
        <FloatLabel>
          <InputText size="small" v-model="newAccountInfo.adminKey" placeholder="选填" />
          <label>管理员秘钥</label>
        </FloatLabel>
      </div>
      <br>
      <div style="display: flex; justify-content: center;">
        <Button @click="cancelCreate" severity="secondary">取消</Button>
        <Divider layout="vertical" />
        <Button @click="confirmCreate">注册</Button>
      </div>
    </div>


    <!-- 编辑账号信息框 -->
    <div v-if="accountConfStore.editorMode == 'edit'">
      <EditorMain :targetIndex="accountConfStore.targetIndex" />
    </div>


    <!-- 删除账号信息确认 -->
    <div v-if="accountConfStore.editorMode == 'delete'">
      <div>
        <p>操作目标：{{ accountConfStore.accountList.value[accountConfStore.targetIndex].userName }}</p>
        <p>删除后该账号的使用者无法在通过此hy2Key进行连接代理。</p>
      </div>

      <div style="display: flex; justify-content: center; margin-top: 20px;">
        <Button @click="cancelDelete" severity="secondary">取消</Button>
        <Divider layout="vertical" />
        <Button @click="confirmDelete" severity="danger">确定</Button>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
// 静态引入
import md5 from "md5";
import axios from 'axios';
import { ref, computed, defineAsyncComponent } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useAccountConfStore } from '@/stores/accountConf';
import { watch } from "vue";

// 动态引入
const Dialog = defineAsyncComponent(() => import("primevue/dialog"));
const FloatLabel = defineAsyncComponent(() => import("primevue/floatlabel"));
const EditorMain = defineAsyncComponent(() => import("@/components/accountConf/accountEdit.vue"));

// 初始化
const accountConfStore = useAccountConfStore();
const dialogStyle = ref({ maxWidth: '70vw', minWidth: `500px` });
const toast = useToast();
const newAccountInfo = ref({ userName: "", userPassword: "", adminKey: "" });
const targetAccount = ref({});

const md5Password = () => md5(md5(newAccountInfo.value.userPassword + "DAOLUOLTS").toString());

const genDialogTitle = computed(() => {
  switch (accountConfStore.editorMode) {
    case "add":
      return "添加新账号";
    case "edit":
      return "编辑账号信息";
    case "delete":
      return "确定删除该账号信息吗？";
    default:
      accountConfStore.editorShow = false;
      return "null";
  }
});

// 监控索引变化
watch(() => accountConfStore.targetIndex, (newValue) => {
  targetAccount.value = accountConfStore.accountList.value[newValue];
})

// 取消删除
const cancelDelete = () => {
  accountConfStore.editorShow = false;
  accountConfStore.targetIndex = -1;
}

// 确认删除
const confirmDelete = () => {
  axios.post("/auth/delete", {
    userName: accountConfStore.accountList.value[accountConfStore.targetIndex].userName
  })
    .then(axiosRes => {
      toast.add({ severity: "success", summary: "完成", detail: axiosRes.data.msg, life: 1000 });
    })
    .then(() => {
      accountConfStore.editorMode = "done";
    })
    .catch(axiosErr => {
      toast.add({ severity: "error", summary: "错误", detail: axiosErr.response.data.msg, life: 1000 });
    });
}

// 取消创建
const cancelCreate = () => {
  newAccountInfo.value = { userName: "", userPassword: "", adminKey: "" };
  accountConfStore.editorShow = false;
}

// 确认创建
const confirmCreate = () => {
  const password2BackEnd = newAccountInfo.value.userPassword.length ? md5Password() : "noLogin";
  axios.post("/auth/register", {
    userName: newAccountInfo.value.userName,
    userPassword: password2BackEnd,
    adminKey: newAccountInfo.value.adminKey,
    manual: true
  })
    .then(axiosRes => {
      toast.add({ severity: "success", summary: "成功", detail: "完成创建", life: 1000 });
      newAccountInfo.value = { userName: "", userPassword: "", adminKey: "" };
      accountConfStore.editorShow = false;
      accountConfStore.editorMode = "done";
    })
    .catch(axiosErr => {
      toast.add({ severity: "error", summary: "错误", detail: axiosErr.response.data.msg, life: 2000 });
    })
}
</script>

<style scoped>
div[CreateNewAccountInputDiv] {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px 0;
}

div[CreateNewAccountInputDiv] input {
  width: 100%;
}
</style>