<template>
  <h1>this is product page</h1>
  <div class="vl-parent">
    <isLoading :active="isLoading" />

    <div class="card border-0 text-start">
      <div class="d-flex">
        <img
          style="width: 300px"
          :src="product.image"
          class="card-img-top"
          alt="product_image"
        />
        <div class="card-body ps-5">
          <div class="card-title mb-3">
            <span class="rounded bg-success p-1 text-white">{{
              product.category
            }}</span>
            {{ product.title }}
          </div>
          <p class="card-text">
            {{ product.content }}
          </p>
          <div>
            <div class="mb-3">
              <span class="text-decoration-line-through me-2"
                >{{ product.origin_price }}元 </span
              >特價：{{ product.price }} 元
            </div>
            <div class="mb-3 row">
              <div class="col">
                <label for="productNum" class="form-label d-inline-block"
                  >購買數量</label
                >
                <input
                  type="number"
                  class="form-control d-inline-block w-auto form-control-sm mx-3"
                  min="1"
                  id="productNum"
                  v-model="qty"
                />
                <button
                  class="btn btn-primary"
                  type="button"
                  @click="updateCart({ product_id: product.id, qty: qty })"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import productStore from '@/store/ProductStore.js'
import CartStore from '@/store/CartStore.js'

export default {
  data() {
    return {
      id: null,
      qty: 1
    }
  },
  mounted() {
    const id = this.$route.params.id
    this.getProductById(id)
    this.id = id
  },
  methods: {
    ...mapActions(productStore, ['getProductById']),
    ...mapActions(CartStore, ['updateCart'])
  },
  computed: {
    ...mapState(productStore, ['isLoading', 'product']),
    ...mapState(CartStore, ['isLoading'])
  }
}
</script>
