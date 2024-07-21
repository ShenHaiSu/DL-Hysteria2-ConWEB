<!-- 单个已认证服务器的信息显示 -->

<template>
  <div SingleRegisteredServerCard :server-index="Props.targetIndex">
    <div>
      <div>
        <h2>别名</h2>
      </div>
      <div>
        <span></span>
        <br>
        <span> {{ Props.targetServer.alias }} </span>
      </div>
    </div>

    <div>
      <div>
        <h2>域名与地址</h2>
      </div>
      <div>
        <span> {{ Props.targetServer.domain }} </span>
        <br>
        <span> {{ Props.targetServer.address }} </span>
      </div>
    </div>

    <div>
      <div>
        <h2>在线</h2>
      </div>
      <div v-tooltip.bottom="{ value: genNowOnlineText(), autoHide: false }">
        <span></span>
        <br>
        <span> {{ Props.targetServer.nowOnline }} / {{ Props.targetServer.maxOnline }} </span>
      </div>
    </div>

    <div>
      <div>
        <h2>成功认证次数</h2>
      </div>
      <div>
        <span></span>
        <br>
        <span>{{ Props.targetServer.authCount }}</span>
      </div>
    </div>

    <div>
      <div>
        <h2 style="color: red;">错误次数</h2>
      </div>
      <div v-tooltip.bottom="{ value: genErrorCountText(), autoHide: false }">
        <span></span>
        <br>
        <span>{{ genTotalErrorCount() }}</span>
      </div>
    </div>

    <div>
      <div>
        <h2>操作</h2>
      </div>
      <div style="display: flex; gap: 5px; justify-content: center;">
        <Button @click="editServer" size="small">编辑</Button>
        <Button @click="resetServer" size="small">重置</Button>
        <Button @click="unAuthServer" size="small">取消认证</Button>
      </div>
    </div>

    <!-- <div>
      {{ Props.targetIndex }}
      <br>
      {{ Props.targetServer }}
    </div> -->

    <div style="min-width: 100%;">
      <div>
        <h2>流量用量</h2>
      </div>
      <div style="display: flex;gap: 10px;">
        <ProgressBar style="min-width: 100%;" :value="genProgressBarRate()"> {{ genProgressBarText() }} </ProgressBar>
      </div>
    </div>



  </div>
</template>


<script setup>
import { defineAsyncComponent } from 'vue';
import { useHy2ServserStore } from '@/stores/hy2Server';

// 动态引入
const ProgressBar = defineAsyncComponent(() => import("primevue/progressbar"));

const hy2ServerStore = useHy2ServserStore();
const Props = defineProps(['targetIndex', 'targetServer']);

const genProgressBarText = () => `${Props.targetServer.bandwidth.used} GB / ${Props.targetServer.bandwidth.total} GB`;
const genProgressBarRate = () => Number((Props.targetServer.bandwidth.used * 100 / Props.targetServer.bandwidth.total).toFixed(2));
const genTotalErrorCount = () => Props.targetServer.error.method + Props.targetServer.error.body + Props.targetServer.error.reject + Props.targetServer.error.timeout;
const genNowOnlineText = () => Object.keys(Props.targetServer.onlineList).map(key => `${key}: ${Props.targetServer.onlineList[key]}`).join("\n");
const genErrorCountText = () => `方法错误：${Props.targetServer.error.method}\n请求体错误：${Props.targetServer.error.body}\n拒绝认证：${Props.targetServer.error.reject}\n超时错误：${Props.targetServer.error.timeout}\n`;

// 打开服务器信息编辑器
const editServer = () => {
  hy2ServerStore.editDialogMode = "resgiter-edit";
  hy2ServerStore.editIndex = Props.targetIndex;
  hy2ServerStore.editDialogShow = true;
}

// 重置服务器信息
const resetServer = () => {
  hy2ServerStore.editDialogMode = "resgiter-reset";
  hy2ServerStore.editIndex = Props.targetIndex;
  hy2ServerStore.editDialogShow = true;
}

// 取消认证服务器
const unAuthServer = () => {
  hy2ServerStore.editDialogMode = "resgiter-unauth";
  hy2ServerStore.editIndex = Props.targetIndex;
  hy2ServerStore.editDialogShow = true;
}

</script>

<style scoped>
div[SingleRegisteredServerCard] {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: max-content;
  padding: 10px;
  border-radius: 5px;
  transition: all ease-in-out 0.15s;
}

div[SingleRegisteredServerCard]:hover {
  box-shadow: 0 0 5px 2px rgb(225, 225, 225);
}

div[SingleRegisteredServerCard]>div {
  flex: 1;
  text-align: center;
}
</style>