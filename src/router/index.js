import { createRouter, createWebHashHistory } from 'vue-router'
import AuthStore from '@/store/AuthStore.js'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/ProductList.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('@/views/ProductView.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/CartView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/admin/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/IndexView.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

router.beforeEach(async (to, from) => {
  const store = AuthStore()
  console.log(!store.checkLogin())
  try {
    if (
      to.meta.requiresAuth &&
      // 检查用户是否已登录
      !store.checkLogin() &&
      // ❗️ 避免无限重定向
      to.name !== 'login'
    ) {
      // 将用户重定向到登录页面
      return { name: 'login' }
    }
  } catch {
    console.log('aasdasdasd')
  }
})

export default router
