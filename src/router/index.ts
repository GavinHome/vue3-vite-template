import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
  Router,
  RouteRecordRaw
} from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
