<template>
  <div class="baseContainer">
    <div style="--p-datatable-header-cell-padding: 10px;">
      <DataTable :value="accountListData">
        <!-- 数据表头 -->
        <template #header>
          <div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="flex: 8;display: flex;gap: 10px;">
                <InputGroup>
                  <InputText size="small" v-model="searchText" placeholder="搜索用户名" @keydown.enter="searchHandle" />
                  <Button size="small" @click="searchHandle">
                    <IconSearch style="font-size: 20px;" />
                  </Button>
                </InputGroup>
              </div>
              <div style="flex: 30;"></div>
              <Button size="small" severity="secondary" text :disabled="true" style="flex:2;">更多操作</Button>
              <Button @click="addNewAccount" style="flex:2;" size="small">添加</Button>
              <Button @click="getNewData" style="flex:2;" size="small"> 刷新 </Button>
            </div>
            <div>

            </div>
          </div>
        </template>
        <!-- 数据表体 -->
        <Column header="用户名">
          <template #body="slotProps">
            <div DataTableNameCol v-tooltip.top="slotProps.data.userName">
              <span>{{ slotProps.data.userName }}</span>
            </div>
          </template>
        </Column>
        <Column header="权限">
          <template #body="slotProps">
            <Tag :value="slotProps.data.userPermission" :severity="genTagSerenity(slotProps.data.userPermission)" />
          </template>
        </Column>
        <Column header="代理连接秘钥">
          <template #body="slotProps">
            <Inplace style="width: 140px; height: 43px;">
              <template #display> 点击显示 </template>
              <template #content>
                <div class="linkKeyDiv">
                  <Button severity="secondary" size="small" @click="linkKeyClick(slotProps.data.userInfo.hy2Key)"> {{
        formatHy2Key(slotProps.data.userInfo.hy2Key) }}
                    <IconCopy />
                  </Button>
                </div>
              </template>
            </Inplace>
          </template>
        </Column>
        <Column header="最大连接速率">
          <template #body="slotProps">{{ genMaxLinkSpeed(slotProps.data.userInfo.txSpeed) }} Mb/s</template>
        </Column>
        <Column header="设备数限制">
          <template #body="slotProps">{{ genDevicesCount(slotProps.data.userInfo) }}</template>
        </Column>
        <Column header="服务器权限">
          <template #body="slotProps">
            <div style="display: flex; flex-wrap: wrap; gap: 5px; max-width: 200px; --p-tag-font-size: 12px;">
              <Tag :value="genArrayLength(slotProps.data.userInfo.accessServer)" severity="success"></Tag>
              <Tag :value="genArrayLength(slotProps.data.userInfo.blockServer)" severity="danger"></Tag>
            </div>
          </template>
        </Column>
        <Column header="流量">
          <template #body="slotProps">
            <div style="display: flex; width: 450px; 	--p-progressbar-height:16px;">
              <div style="flex: 1;"> {{ genBandwidthUsed(slotProps.data.userInfo.bandwidth) }}</div>
              <ProgressBar style="flex: 3;" :value="genBandwidthUsedRate(slotProps.data.userInfo.bandwidth)" />
            </div>
          </template>
        </Column>
        <Column header="操作">
          <template #body="slotProps">
            <div style="display: flex; gap: 10px;">
              <Button @click="editHandle(slotProps.data)" security="success" size="small">编辑</Button>
              <Button @click="deleteHandle(slotProps.data)" severity="danger" size="small">删除</Button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
    <div>
      <Editor />
    </div>
  </div>
</template>

<script setup>
// 静态引入
import { defineAsyncComponent, nextTick } from 'vue';
import { ref } from 'vue';
import axios from "axios";
import { useToast } from 'primevue/usetoast';
import { onMounted } from 'vue';
import IconCopy from "@/components/icons/IconCopy.vue"
import IconSearch from "@/components/icons/IconSearch.vue"
import { useAccountConfStore } from "@/stores/accountConf.js";
import { watch } from 'vue';

// 动态引入
const DataTable = defineAsyncComponent(() => import("primevue/datatable"));
const Tag = defineAsyncComponent(() => import("primevue/tag"));
const Inplace = defineAsyncComponent(() => import("primevue/inplace"));
const ProgressBar = defineAsyncComponent(() => import("primevue/progressbar"));
const Editor = defineAsyncComponent(() => import("@/components/accountConf/editor.vue"));
const InputGroup = defineAsyncComponent(() => import("primevue/inputgroup"));

// 初始化
const accountListData = ref([]);
const toast = useToast();
const searchText = ref("");
const accountConfStore = useAccountConfStore();

// 生成权限tag的显示级别
const genTagSerenity = (input) => input == 'admin' ? 'danger' : 'success';
// 生成代理连接秘钥的显示文本
const formatHy2Key = (input) => input ? input.length >= 10 ? input.slice(0, 10) + "..." : input : "Null";
// 生成最大链接速率
const genMaxLinkSpeed = (input) => input ? (input / 1048576).toFixed(2) : 0;
// 生成连接设备限制数
const genDevicesCount = (input) => (input.nowOnline != undefined) ? `${input.nowOnline} / ${input.maxOnline}` : "缺失";
// 生成流量用量文本
const genBandwidthUsed = (input) => input ? `${input.used}/${input.total}` : `0/0`;
// 生成流量用量进度条
const genBandwidthUsedRate = (input) => input ? Number((input.used / input.total * 100).toFixed(1)) : 100;
// 生成数组长度
const genArrayLength = (input) => input ? input.length : 0;

// 代理连接秘钥复制
const linkKeyClick = (input) => {
  // navigator.clipboard.writeText(event.target.closest("div").firstElementChild.title);
  navigator.clipboard.writeText(input);
  toast.add({ severity: "success", summary: "复制", detail: "已复制", life: 1000 });
}

// 搜索函数
const searchHandle = () => {
  accountListData.value = [];
  setTimeout(() => {
    accountListData.value = accountConfStore.accountList.value.filter(account => account.userName.includes(searchText.value) || searchText.value.includes(account.userName));
  }, 1);
}

// 获取新数据
const getNewData = (resetSearch = true) => {
  if (resetSearch) searchText.value = "";
  accountConfStore.accountList.value = [];
  axios.get("/auth/allAccount")
    .then(axiosRes => accountConfStore.accountList.value = axiosRes.data)
    .catch(axiosErr => toast.add({ severity: "error", summary: "错误", detail: axiosErr.response.data.msg, life: 3000 }))
    .then(() => searchHandle());
}

// 添加账户
const addNewAccount = () => {
  accountConfStore.editorMode = "add";
  accountConfStore.editorShow = true;
}

// 编辑数据
const editHandle = (input) => {
  const targetIndex = accountConfStore.accountList.value.findIndex(account => account.userName == input.userName);
  accountConfStore.targetIndex = targetIndex;
  accountConfStore.editorMode = "edit";
  accountConfStore.editorShow = true;
}

// 删除数据
const deleteHandle = (input) => {
  const targetIndex = accountConfStore.accountList.value.findIndex(account => account.userName == input.userName);
  accountConfStore.targetIndex = targetIndex;
  accountConfStore.editorMode = "delete";
  accountConfStore.editorShow = true;
}

// 监听数据
watch(() => accountConfStore.editorMode, (newValue, oldValue) => {
  if (newValue != "done") return;
  getNewData(false);
})


onMounted(() => {
  getNewData();
})

</script>

<style scoped>
div.baseContainer {
  margin: -30px -10px 0 -10px;
  border-radius: 5px;
  overflow: hidden;
}

div.linkKeyDiv>* {
  width: 100%;
}

div.linkKeyDiv {
  width: 100%;
}

div.linkKeyDiv:hover {
  cursor: pointer;
}

div[DataTableNameCol] {
  width: 50px;
  overflow: hidden;
}
</style>