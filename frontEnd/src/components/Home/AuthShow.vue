<template>
  <div AuthCardContainer @click="mainClick">
    <IconUser />
    <span>未登录</span>
  </div>
</template>

<script setup>
import IconUser from '@/components/icons/IconUser.vue';


const mainClick = () => {
  alert("登录信息被点击")
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
</style>