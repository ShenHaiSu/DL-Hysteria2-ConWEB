<template>
  <div>
    <div AccountEditMainBase>
      <div AccountMainEditDiv>
        <div>
          <FloatLabel>
            <label>账户名</label>
            <InputText size="small" placeholder="账户名" v-model="targetAccount.userName" disabled />
          </FloatLabel>
        </div>
        <div>
          <FloatLabel>
            <label>权限</label>
            <InputText size="small" placeholder="权限" v-model="targetAccount.userPermission" disabled />
          </FloatLabel>
        </div>
        <div>
          <FloatLabel>
            <label>代理连接秘钥</label>
            <InputText size="small" placeholder="代理连接秘钥" v-model="targetAccount.userInfo.hy2Key" disabled />
          </FloatLabel>
        </div>
        <div>
          <FloatLabel>
            <label>最大速率 ≈{{ genTxSpeedMb(targetAccount.userInfo.txSpeed) }}Mb/s</label>
            <InputText size="small" type="number" placeholder="最大速率" v-model="targetAccount.userInfo.txSpeed" />
          </FloatLabel>
        </div>
        <div>
          <FloatLabel>
            <label>最大在线数</label>
            <InputText size="small" type="number" placeholder="最大在线数" v-model="targetAccount.userInfo.maxOnline" />
          </FloatLabel>
        </div>
        <div>
          <FloatLabel>
            <label>最大流量 单位:GB</label>
            <InputText size="small" type="number" placeholder="最大流量 单位:GB"
              v-model="targetAccount.userInfo.bandwidth.total" />
          </FloatLabel>
          <br>
          <ProgressBar :value="genBandwidthUsedRate(targetAccount.userInfo.bandwidth)" />
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <Button @click="clearBandwidthUsed" size="small" severity="secondary">清空已用量</Button>
          <Button @click="reGenHy2Key" size="small" severity="secondary">重置代理连接密码</Button>
        </div>
      </div>
      <div PermissionEditDiv>
        <div>
          <InputGroup style="font-size: 80%;">
            <InputText v-model="searchText" @keydown.enter="searchConfirm" />
            <Button @click="searchConfirm">
              <IconSearch style="font-size: 350%;" />
            </Button>
          </InputGroup>
        </div>
        <div ServerPermissionEditContainer>
          <div ServerPermissionEdit :class="genServerLineClass(server)" v-for="server in serverPermissionTempList">
            <div style="flex: 1;padding: 0.7rem;">
              {{ server.alias }}
            </div>
            <div class="space" style="min-width: 10px;"></div>
            <div ServerPermissionContentDiv style="flex: 1;">
              <InputGroup style="height: 100%; width: 100%;">
                <Button size="small" @click="changeServerPermission(1, server)" :class="getClassName('access', server)"
                  severity="secondary">
                  <IconSuccess />
                </Button>
                <Button size="small" @click="changeServerPermission(0, server)" :class="getClassName('default', server)"
                  severity="secondary">
                  <IconDefault />
                </Button>
                <Button size="small" @click="changeServerPermission(-1, server)" :class="getClassName('block', server)"
                  severity="secondary">
                  <IconSlash />
                </Button>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: center; margin-top: 20px;">
      <Button @click="cancelEdit" severity="secondary">取消</Button>
      <Divider layout="vertical" />
      <Button @click="confirmEdit" severity="success">确定</Button>
    </div>
  </div>
</template>

<script setup>
// 静态引入
import axios from 'axios';
import { ref } from 'vue';
import { useAccountConfStore } from '@/stores/accountConf';
import { useHy2ServserStore } from "@/stores/hy2Server.js";
import { useAuthStore } from '@/stores/auth';
import { defineAsyncComponent } from 'vue';
import { useToast } from 'primevue/usetoast';
import { randomString } from "@/assets/tools.js";

// 动态引入
const FloatLabel = defineAsyncComponent(() => import("primevue/floatlabel"));
const Divider = defineAsyncComponent(() => import("primevue/divider"));
const ProgressBar = defineAsyncComponent(() => import("primevue/progressbar"));

// Icon引入
const IconSearch = defineAsyncComponent(() => import("@/components/icons/IconSearch.vue"));
const IconSuccess = defineAsyncComponent(() => import("@/components/icons/IconSuccess.vue"));
const IconDefault = defineAsyncComponent(() => import("@/components/icons/IconDefault.vue"));
const IconSlash = defineAsyncComponent(() => import("@/components/icons/IconSlash.vue"));

// 初始化
const toast = useToast();
const Props = defineProps(['targetIndex']);
const accountConfStore = useAccountConfStore();
const hy2ServerStore = useHy2ServserStore();
const authStore = useAuthStore();
const targetAccount = ref({});
const serverPermissionTempList = ref([]);
const searchText = ref("");

// 赋予账户权限信息
targetAccount.value = JSON.parse(JSON.stringify(accountConfStore.accountList.value[Props.targetIndex]));
// 赋予服务器权限信息
serverPermissionTempList.value = hy2ServerStore.registeredList.map(server => {
  if (targetAccount.value.userInfo.accessServer.some(access => access == server.alias)) return { ...server, permission: 1, show: true };
  if (targetAccount.value.userInfo.blockServer.some(block => block == server.alias)) return { ...server, permission: -1, show: true };
  return { ...server, permission: 0, show: true };
});
searchText.value = "";

const genTxSpeedMb = (txSpeed) => txSpeed ? (txSpeed / 125000).toFixed(2) : 0;
const genBandwidthUsedRate = (input) => input ? Number((input.used / input.total * 100).toFixed(1)) : 100;

// 清空已用量
const clearBandwidthUsed = () => targetAccount.value.userInfo.bandwidth.used = 0;

// 重新生成代理连接密码
const reGenHy2Key = () => targetAccount.value.userInfo.hy2Key = randomString(30);

// 确认搜索
const searchConfirm = () => {
  for (let i = 0; i < serverPermissionTempList.value.length; i++) {
    const server = serverPermissionTempList.value[i];
    server.show = false;
    if (server.alias.includes(searchText.value) || searchText.value.includes(server.alias)) server.show = true;
  }
}

// 服务器行class生成
const genServerLineClass = (server) => server.show ? "serverLineShow" : "serverLineHide";

// 给按钮生成class
const getClassName = (type, server) => {
  let result = `defaultClass`

  if (type == "access" && server.permission == 1) {
    result += " target access";
  } else if (type == "default" && server.permission == 0) {
    result += " target default";
  } else if (type == "block" && server.permission == -1) {
    result += " target block";
  }

  return result;
}

// 服务器权限按钮被点击
const changeServerPermission = (type, server) => server.permission = type;

// 取消编辑
const cancelEdit = () => accountConfStore.editorShow = false;

// 确定编辑提交结果
const confirmEdit = () => {
  // 生成提交post的data
  const postData = {
    target: targetAccount.value.userName,
    hy2Key: targetAccount.value.userInfo.hy2Key,
    txSpeed: parseInt(targetAccount.value.userInfo.txSpeed),
    maxOnline: parseInt(targetAccount.value.userInfo.maxOnline),
    maxBandwidth: parseFloat(targetAccount.value.userInfo.bandwidth.total),
    usedBandwidth: targetAccount.value.userInfo.bandwidth.used,
    accessServer: serverPermissionTempList.value.filter(server => server.permission == 1).map(server => server.alias),
    blockServer: serverPermissionTempList.value.filter(server => server.permission == -1).map(server => server.alias),
  }

  axios.post("/auth/edit", postData)
    .then(axiosRes => {
      if (axiosRes.data.error) throw new Error("服务器拒绝");
      accountConfStore.accountList.value[Props.targetIndex] = axiosRes.data.targetAccount;
      toast.add({ severity: "success", summary: "完成", detail: axiosRes.data.msg, life: 3000 });

      // 取消显示
      accountConfStore.editorShow = false;
      accountConfStore.targetIndex = -1;
      accountConfStore.editorMode = "done";
      
      // 检查修改目标是否是当前登录的账号，并提交更改
      const backData = axiosRes.data.targetAccount;
      if (authStore.userName != backData.userName) return;
      authStore.coverUserInfo(backData.userInfo);
    })
    .catch(axiosErr => {
      toast.add({ severity: "error", summary: "失败", detail: "服务器拒绝" + axiosErr?.response?.data?.msg, life: 5000 });
    })
}


</script>

<style scoped>
div[AccountEditMainBase] {
  display: flex;
  margin-top: 20px;
}

div[AccountMainEditDiv] {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  padding-right: 25px;
}

div[AccountMainEditDiv]>* {
  flex: 1;
}

div[PermissionEditDiv] {
  flex: 1;
  padding-left: 25px;
  width: max-content;
}

.p-inputtext {
  width: 100%;
  font-size: 80%;
}

.p-button {
  font-size: smaller;
}

div[ServerPermissionEdit] {
  display: flex;
  margin-top: 5px;
  gap: 10px;
  transition: all ease-in-out 0.07s;
  border-radius: 5px;
  padding: 5px 5px;
}

div[ServerPermissionEdit].serverLineHide {
  display: none;
}

div[ServerPermissionEdit]:hover {
  background-color: rgb(240, 240, 240);
}

div[ServerPermissionEdit]>* {
  flex: 1;
}

div[ServerPermissionEdit]>.space {
  flex: 3;
}

div[ServerPermissionEdit]>*:nth-child(1){
  text-wrap: nowrap;
  line-height: 100%;
}

.defaultClass {
  color: rgb(70, 70, 70);
  background-color: rgb(255, 255, 255);
}

.defaultClass.target {
  color: rgb(255, 255, 255);
}

.defaultClass.target.access {
  background-color: rgb(16, 185, 129);
}

.defaultClass.target.default {
  background-color: rgb(179, 179, 179);
}

.defaultClass.target.block {
  background-color: rgb(222, 34, 34);
}


div[ServerPermissionEditContainer] {
  margin-top: 20px;
  overflow-x: hidden;
  width: 100%;
  max-height: 50vh;
  overflow-y: auto;
}
</style>