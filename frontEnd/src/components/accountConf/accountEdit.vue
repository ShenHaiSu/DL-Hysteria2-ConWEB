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
            <InputText size="small" placeholder="最大速率" v-model="targetAccount.userInfo.txSpeed" />
          </FloatLabel>
        </div>
        <div>
          <FloatLabel>
            <label>最大在线数</label>
            <InputText size="small" placeholder="最大在线数" v-model="targetAccount.userInfo.maxOnline" />
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
        <!-- {{ targetAccount }} -->
      </div>
      <div PermissionEditDiv>
        <div>
          <InputGroup style="font-size: 80%;">
            <InputText />
            <Button>
              <IconSearch style="font-size: 350%;" />
            </Button>
          </InputGroup>
        </div>
        <div style="margin-top: 20px; overflow-x: auto; width: max-content; max-height: 50vh;">
          <div ServerPermissionEdit v-for="server in hy2ServerStore.registeredList">
            <div style="flex: 1;">
              <span>{{ server.alias }}</span>
            </div>
            <div class="space"></div>
            <div ServerPermissionContentDiv style="flex: 1;">
              <InputGroup style="height: 100%; width: 100%;">
                <Button size="small"  severity="secondary">
                  <IconSuccess />
                </Button>
                <Button size="small"  severity="secondary">
                  <IconDefault />
                </Button>
                <Button size="small"  severity="secondary">
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
import { ref, defineProps } from 'vue';
import { useAccountConfStore } from '@/stores/accountConf';
import { useHy2ServserStore } from "@/stores/hy2Server.js";
import { defineAsyncComponent } from 'vue';
import { useToast } from 'primevue/usetoast';
import { randomString } from "@/assets/tools.js";

// 动态引入
const FloatLabel = defineAsyncComponent(() => import("primevue/floatlabel"));
const Divider = defineAsyncComponent(() => import("primevue/divider"));
const ProgressBar = defineAsyncComponent(() => import("primevue/progressbar"));
// const RadioButton = defineAsyncComponent(() => import("primevue/radiobutton"));

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
const targetAccount = ref({});

targetAccount.value = JSON.parse(JSON.stringify(accountConfStore.accountList.value[Props.targetIndex]));

const genTxSpeedMb = (txSpeed) => txSpeed ? (txSpeed / 1048576).toFixed(2) : 0;
const genBandwidthUsedRate = (input) => input ? Number((input.used / input.total * 100).toFixed(1)) : 100;

// 取消编辑
const cancelEdit = () => accountConfStore.editorShow = false;

// 确定编辑提交结果
const confirmEdit = () => console.log(targetAccount.value);

// 清空已用量
const clearBandwidthUsed = () => targetAccount.value.userInfo.bandwidth.used = 0;

// 重新生成代理连接密码
const reGenHy2Key = () => targetAccount.value.userInfo.hy2Key = randomString(30);

</script>

<style scoped>
div[AccountEditMainBase] {
  display: flex;
  margin-top: 20px;
  font-size: 80% !important;
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
  transition: all ease-in-out 0.07s;
  border-radius: 5px;
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

div[ServerPermissionContentDiv] .p-button {
  color: rgb(70, 70, 70);
  background-color: rgb(255, 255, 255);
}
</style>