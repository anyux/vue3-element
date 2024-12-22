import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/login.vue'

const routes = [
  {
    path: '/',
    component: Login,
    name: 'Login',
  }
]

const router = createRouter({
  // 使用传统模式
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 导出变量,以便于main.js挂载
export default router
