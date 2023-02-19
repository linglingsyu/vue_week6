<template>
  <div class="home">
    <h1 class="mt-3 mb-5">this is product list page</h1>
    <div class="vl-parent">
      <isLoading :active="isLoading" />
      <table>
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td width="200">
              <img class="w-50" :src="product.image" alt="productImage" />
            </td>
            <td class="text-start">{{ product.title }}</td>
            <td>
              <span class="text-decoration-line-through">{{
                product.origin_price
              }}</span
              ><br />現在只要{{ product.price }}元
            </td>
            <td width="200">
              <router-link
                class="btn btn-sm btn-outline-primary mx-1"
                :to="'/product/' + product.id"
                >查到更多</router-link
              >
              <!-- <a
              class="btn btn-sm btn-outline-primary mx-1"
              :href="'/product/' + product.id"
              >查到更多</a
            > -->
              <a class="btn btn-sm btn-outline-danger" href="#">加入購物車</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import productStore from '@/store/ProductStore.js'

export default {
  mounted() {
    this.getProductList()
  },
  methods: {
    ...mapActions(productStore, ['getProductList'])
  },
  computed: {
    ...mapState(productStore, ['isLoading', 'products'])
  }
}
</script>
