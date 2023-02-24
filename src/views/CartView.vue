<template>
  <h1>this is cart page</h1>
  <div class="vl-parent">
    <isLoading :active="isLoading" />
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
            <th>小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cart in carts" :key="cart.id">
            <th>{{ cart.product.title }}</th>
            <td>{{ cart.qty }}</td>
            <td>{{ cart.product.price }}</td>
            <td>{{ cart.final_total }}</td>
          </tr>
          <tr>
            <td colspan="3">總計</td>
            <td>{{ total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="my-5 row justify-content-center">
      <vForm
        :validation-schema="simpleSchema"
        @submit="onSubmit"
        v-slot="{ errors }"
      >
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            label="Email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
          />
          <ErrorMessage class="text-danger" name="email" />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="name"
            label="姓名"
            class="form-control"
            :class="{ 'is-invalid': errors['name'] }"
          />
          <ErrorMessage class="text-danger" name="name" />
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            name="tel"
            label="電話"
            class="form-control"
            :class="{ 'is-invalid': errors['tel'] }"
          />
          <ErrorMessage class="text-danger" name="tel" />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="address"
            label="地址"
            class="form-control"
            :class="{ 'is-invalid': errors['address'] }"
          />
          <ErrorMessage class="text-danger" name="address" />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="message"
          ></textarea>
        </div>
        <button :disabled="!carts.length" type="submit" class="btn btn-danger">
          送出訂單
        </button>
      </vForm>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import CartStore from '@/store/CartStore.js'
import { Form as vForm, Field, ErrorMessage } from 'vee-validate'
export default {
  data() {
    return {
      message: '',
      simpleSchema: {
        email: 'required|email',
        name: 'required',
        address: 'required',
        tel: 'required|min:8'
      }
    }
  },
  mounted() {
    this.getCartList()
  },
  components: {
    vForm,
    Field,
    ErrorMessage
  },
  methods: {
    ...mapActions(CartStore, ['getCartList', 'addOrder']),
    async onSubmit(value, { resetForm }) {
      if (this.carts.length === 0) return false
      const data = {
        user: value,
        message: this.message
      }
      await this.addOrder(data)
      resetForm()
      this.message = ''
    },
    validateTel(value) {
      // if the field is empty
      if (!value) {
        return '電話為必填'
      }
      const regex = /[0-9]/i
      if (!regex.test(value)) {
        return '必須為0-9'
      }
      if (value.length < 8) {
        return '電話長度至少需要8碼'
      }
      // All is good
      return true
    }
  },
  computed: {
    ...mapState(CartStore, ['isLoading', 'carts']),
    total() {
      return this.carts.reduce((prev, current) => {
        prev += current.final_total
        return prev
      }, 0)
    }
  },
  watch: {}
}
</script>
