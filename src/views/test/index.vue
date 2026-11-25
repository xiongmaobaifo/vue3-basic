<!-- <script lang="ts" setup></script> -->

<script lang="ts" src="./js/index.ts"></script>

<template>
  <div class="login-wrap">
    <p>登录页面</p>
    pinia数据test:{{ test.test }}
  </div>
  <button @click="count++">count++</button>
  count:{{ count }}
</template>

<style scoped lang="scss">
@use "./css/index.scss";
</style>