<template>
  <div>

    <div>
      <Card>
        <template #title>
          Hysteria2ConfWeb
        </template>
        <template #content>
          <ul>
            <li>作者：DaoLuoLTS</li>
            <li>仓库：<Button size="small" @click="gotoGithubProject" >Github链接</Button> </li>
          </ul>
        </template>
      </Card>
    </div>

  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, reactive } from 'vue';


const Card = defineAsyncComponent(() => import("primevue/card"));

const gotoGithubProject = () => window.open('https://github.com/ShenHaiSu/DL-Hysteria2-ConWEB');
</script>

<style></style>
