import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import InProgressView from '@/views/InProgressView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: IndexView,
  },
  {
    path: '/in-progress',
    name: 'in-progress',
    component: InProgressView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const isInProgress = import.meta.env.VITE_APP_IN_PROGRESS === 'true'

router.beforeEach((to) => {
  if (isInProgress) {
    if (to.name === 'in-progress') {
      return true
    }
    return { name: 'in-progress' }
  }

  if (to.name === 'in-progress') {
    return { name: 'home' }
  }

  return true
})

export default router