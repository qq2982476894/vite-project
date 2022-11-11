<script setup>
const size = ref(0)
</script>





<template>
    <a-layout>
        <a-slider v-model:value="size" max="60" />

    <a-layout-header class="header">
        <a-space :size="size">
            <img src="@/assets/images/音乐.svg" class="logo" alt="">
            <img src="@/assets/images/学习.svg" class="logo" alt="">
            <img src="@/assets/images/度假.svg" class="logo" alt="">
            <img src="@/assets/images/浪漫.svg" class="logo" alt="">
            <img src="@/assets/images/工作.svg" class="logo" alt="">
            <img src="@/assets/images/下午茶.svg" class="logo" alt="">
            <img src="@/assets/images/圣诞.svg" class="logo" alt="">
            <img src="@/assets/images/户外.svg" class="logo" alt="">
            <img src="@/assets/images/新年.svg" class="logo" alt="">
            <img src="@/assets/images/沙滩.svg" class="logo" alt="">
            <img src="@/assets/images/生日.svg" class="logo" alt="">
            <img src="@/assets/images/露营.svg" class="logo" alt="">
        </a-space>
    </a-layout-header>
    <a-layout-content>Content</a-layout-content>
  </a-layout>
</template>
<style scoped>
.header{
    background: rgba(77,172,119.3);
    color: #fff;
    height: 80px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
  height: 100px;
  width: 100px;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(2px 10px 15px #646cffaa);
  transition: 1s;
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
