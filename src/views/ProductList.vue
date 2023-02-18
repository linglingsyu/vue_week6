<template>
  <div class="home">
    <h1>this is product list page</h1>
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
          <td><img class="w-50" :src="product.image" alt="productImage" /></td>
          <td>{{ product.title }}</td>
          <td>
            <span class="text-decoration-line-through">{{
              product.origin_price
            }}</span
            ><br />現在只要{{ product.price }}元
          </td>
          <td>
            <a class="btn btn-sm btn-outline-primary" href="#">查到更多</a>
            <a class="btn btn-sm btn-outline-danger" href="#">加入購物車</a>
          </td>
        </tr>
      </tbody>
    </table>
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
