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
            <li>仓库：<Button GithubLink severity="secondary" @click="gotoGithubProject">Github链接</Button> </li>
          </ul>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const Card = defineAsyncComponent(() => import("primevue/card"));

const gotoGithubProject = () => window.open('https://github.com/ShenHaiSu/DL-Hysteria2-ConWEB');

</script>

<style>
button[GithubLink] {
  font-size: 0.8rem;
  padding: 2px 5px;
}
</style>
