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

  if (to.meta.requiresAuth && to.name !== 'login') {
    // 检查用户是否已登录
    store.checkLogin()
    // return { name: 'login' }
  }
})

export default router
