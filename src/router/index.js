import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/ProductList.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/ProductList.vue')
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/ProductView.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/CartView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/admin/LoginView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/IndexView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
