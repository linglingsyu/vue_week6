<template>
  <div class="container">
    <form @submit.prevent="SignIn">
      <h1 class="text-center mb-3">後台登入</h1>
      <div class="row mb-3">
        <label for="inputEmail3" class="col col-form-label">Email</label>
        <div class="flex-grow-1">
          <input
            type="email"
            class="form-control"
            id="inputEmail3"
            v-model="username"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col col-form-label">Password</label>
        <div class="flex-grow-1">
          <input
            type="password"
            class="form-control"
            id="inputPassword3"
            v-model="password"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import AuthStore from '@/store/AuthStore.js'
export default {
  name: 'loginView',
  data() {
    return { username: '', password: '' }
  },
  methods: {
    ...mapActions(AuthStore, ['login']),
    SignIn() {
      const data = {
        username: this.username,
        password: this.password
      }
      this.login(data)
    }
  }
}
</script>

<style>
.main-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
