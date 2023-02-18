<template>
  <router-link :to="{ name: 'Home', params: {} }">首頁</router-link> |
  <router-link :to="{ name: 'Products', params: {} }">產品列表</router-link> |
  <router-link :to="{ name: 'Cart', params: {} }">購物車</router-link> |
  <router-link :to="{ name: 'Admin', params: {} }">後台</router-link>
  <router-view />
</template>

<script>
export default {}
</script>

<style lang="scss"></style>
