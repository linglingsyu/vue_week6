<template>
  <router-link :to="{ name: 'Home' }">首頁</router-link> |
  <router-link :to="{ name: 'Products' }">產品列表</router-link> |
  <router-link :to="{ name: 'Cart' }">購物車</router-link> |
  <router-link :to="{ name: 'Admin' }">後台</router-link>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
export default {}
</script>

<style lang="scss"></style>
