<template>
  <div registerServerResetBase>
    <div>
      <p>重置服务器已用流量</p>
      <Button size="small">重置</Button>
    </div>
    <div>
      <p>重置服务器所有累计记录</p>
      <Button size="small">重置</Button>
    </div>
    <div style="justify-content: center;">
      <Button>取消重置</Button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
div[registerServerResetBase] {
  display: flex;
  flex-direction: column;
}

div[registerServerResetBase]>* {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 10px;
  align-items: center;
}

div[registerServerResetBase]>*:nth-child(1) .p-button,
div[registerServerResetBase]>*:nth-child(2) .p-button {
  width: 4rem;
  height: 2rem;
}
</style>