import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import IndexView from '../view/IndexView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: IndexView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router