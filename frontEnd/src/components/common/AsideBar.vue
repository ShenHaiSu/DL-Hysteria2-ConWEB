<template>
  <Menu AsideBarMenuMain :model="menuShowContent" style="">
    <!-- 侧边栏抬头 -->
    <template #start>
      <div AsideBarMenuStart>
        <span>
          <IconWeb style="font-size: 35px;" />Hysteria2ConfWeb
        </span>
      </div>
      <div AsideBarMenuStartAuth>
        <AuthShow />
      </div>
    </template>

    <!-- 侧边栏主体 -->
    <template #item="{ item, props }">
      <div AsideBarMenuItem>
        <span>{{ item.label }}</span>
      </div>
    </template>
  </Menu>
  <!-- 伸缩侧边栏控制器 -->
  <!-- <div style="display: block; position: fixed; width: 50px; height: 50px; left: 1vh; bottom: 1vh; background-color: antiquewhite;">
  </div> -->
</template>


<script setup>
import { onMounted } from 'vue';
import { ref, reactive } from "vue";
import { useRouter } from 'vue-router';
import { defineAsyncComponent } from 'vue';

// 动态引入
const AuthShow = defineAsyncComponent(() => import("@/components/common/AuthShow.vue"));
const IconWeb = defineAsyncComponent(() => import("@/components/icons/IconWeb.vue"));
const Menu = defineAsyncComponent(() => import("primevue/menu"));

// 初始化
const router = useRouter();

// 侧边栏定义
const menuShowContent = reactive([]);
const menuContent = reactive([
  {
    label: "主面板",
    command: () => router.push("/"),
  },
  // {
  //   label: "文档",
  //   items: [
  //     { label: "文档-1", command: () => alert("文档1"), data: "Asdasd" },
  //     { label: "文档-2" },
  //     { label: "文档-3" },
  //   ]
  // },
  {
    label: "服务器控制面",
    command: () => router.push("/serverConf")
  },
  {
    label: "账户控制面",
    command: () => router.push("/accountConf")
  },
  {
    label:"面板控制面",
    command:() => router.push("/panelConf")
  },
  {
    label: "关于",
    command: () => router.push("/about"),
  },
]);




onMounted(() => {
  // 给侧边栏自动添加头尾部的分隔线
  menuShowContent.unshift({ separator: true });
  // menuContent.push({ separator: true });

  // 将侧边栏内容与分割线合并推进
  for (let i = 0; i < menuContent.length; i++) menuShowContent.push(menuContent[i], { separator: true });
})
</script>

<style>
div[AsideBarMenuMain] {
  min-height: 98.5vh;
  max-width: 10vw;
  margin-right: 10px;
  box-shadow: 0 0 3px 0.5px rgb(187, 187, 187);
}

div[AsideBarMenuStart],
div[AsideBarMenuStartAuth] {
  font-size: larger;
  padding: 0 5px;
}

div[AsideBarMenuStart] {
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 20px;
  line-height: 20px;
  height: 40px;
  justify-content: center;
  text-align: center;
  display: block;
}

div[AsideBarMenuItem]>span {
  display: block;
  margin: 0 3px;
  padding: 8px 0px 8px 20px;
}

div[AsideBarMenuItem]:hover {
  cursor: pointer;
}

.p-menu-end {
  display: block;
  position: relative;
  bottom: 0;
}
</style>