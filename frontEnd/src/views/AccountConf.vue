<template>
  <div class="baseContainer">
    <div>
      <DataTable :value="accountListData">
        <!-- 数据表头 -->
        <template #header>
          <div style="display: flex; align-items: center;">
            <span style="flex: 2;"> </span>
            <div style="flex: 30;"></div>
            <Button @click="refreshData" style="flex:2;"> 刷新 </Button>
          </div>
        </template>
        <!-- 数据表体 -->
        <Column header="用户名" field="userName"></Column>
        <Column header="权限">
          <template #body="slotProps">
            <Tag :value="slotProps.data.userPermission" :severity="genTagSerenity_1(slotProps.data.userPermission)" />
          </template>
        </Column>
        <Column header="代理连接秘钥">
          <template #body="slotProps">
            <Inplace>
              <template #display> 点击显示 </template>
              <template #content>
                <span :title="slotProps.data.userInfo.hy2Key">{{ formatHy2Key(slotProps.data.userInfo.hy2Key) }}</span>
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
            <Inplace>
              <template #display> 点击显示 </template>
              <template #content>
                <div style="display: flex; flex-wrap: wrap; gap: 5px; max-width: 200px; --p-tag-font-size: 12px;">
                  <template v-for="name in slotProps.data.userInfo.accessServer">
                    <Tag :value="name" severity="success"></Tag>
                  </template>
                  <template v-for="name in slotProps.data.userInfo.blockServer">
                    <Tag :value="name" severity="danger"></Tag>
                  </template>
                </div>
              </template>
            </Inplace>
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
            <div>
              <Button severity="danger" size="small">删除</Button>
            </div>
          </template>
        </Column>

      </DataTable>
    </div>
  </div>
</template>

<script setup>
// 静态引入
import { defineAsyncComponent } from 'vue';
import { ref } from 'vue';
import axios from "axios";
import { onActivated } from 'vue';
import { useToast } from 'primevue/usetoast';

// 动态引入
const DataTable = defineAsyncComponent(() => import("primevue/datatable"));
const Tag = defineAsyncComponent(() => import("primevue/tag"));
const Inplace = defineAsyncComponent(() => import("primevue/inplace"));
const ProgressBar = defineAsyncComponent(() => import("primevue/progressbar"))

// 初始化
const accountListData = ref([]);
const toast = useToast();


// 刷新数据表内容
const refreshData = () => getNewData();

const genTagSerenity_1 = (input) => input == 'admin' ? 'danger' : 'success';
const formatHy2Key = (input) => input.length >= 10 ? input.slice(0, 10) + "..." : input;
const genMaxLinkSpeed = (input) => input / 1024 / 1024;
const genDevicesCount = (input) => `${input.nowOnline} / ${input.maxOnline}`;
const genBandwidthUsed = (input) => `${input.used}/${input.total}`;
const genBandwidthUsedRate = (input) => Number((input.used / input.total * 100).toFixed(1));

// 获取新数据
const getNewData = () => {
  axios.get("/auth/allAccount")
    .then(axiosRes => {
      // const data = axiosRes.data;
      accountListData.value = axiosRes.data;
    })
    .catch(axiosErr => {
      toast.add({ severity: "error", summary: "错误", detail: axiosErr.response.data.msg, life: 3000 });
    })
}

onActivated(() => {
  getNewData();
})

</script>

<style scoped>
div.baseContainer {
  margin: -30px -10px 0 -10px;
  border-radius: 5px;
  overflow: hidden;
}
</style>