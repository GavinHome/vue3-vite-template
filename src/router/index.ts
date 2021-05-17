import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  Router,
  RouteRecordRaw
} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Home from '@/views/Home.vue'
import RouterConst from './const'
import { useCheckToken } from '../hook/user'
import { MessageConst, TokenConst } from '../common/const'
import useMessage from '../hook/message'

NProgress.configure({ showSpinner: false })
const routes: Array<RouteRecordRaw> = [
  {
    path: `/`,
    name: RouterConst.ROUTER_DASHBOARD,
    component: Home,
    redirect: `${RouterConst.ROUTER_HOME}`,
    children: [
      {
        path: `/${RouterConst.ROUTER_HOME}`,
        name: RouterConst.ROUTER_HOME,
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: `/${RouterConst.ROUTER_ABOUT}`,
        name: RouterConst.ROUTER_ABOUT,
        component: () => import('@/views/About.vue')
      }
    ]
  },
  {
    path: `/${RouterConst.ROUTER_LOGIN}`,
    name: RouterConst.ROUTER_LOGIN,
    component: () => import('@/views/Login.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: `/${RouterConst.ROUTER_ERROR}`,
    name: RouterConst.ROUTER_ERROR,
    component: () => import('@/views/Error.vue'),
    meta: {
      auth: false
    }
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    NProgress.start()
    document.title = import.meta.env.VITE_APP_TITLE
    if (to.meta && to.meta.title) {
      document.title = `${import.meta.env.VITE_APP_TITLE}-${to.meta.title}`
    }

    if (to.meta && to.meta.auth) {
      useCheckToken()
        .then(() => {
          next()
        })
        .catch((error) => {
          if (error === TokenConst.NO_TOKEN) {
            useMessage().openWarnMsg(MessageConst.TOKEN_EXPIRE_MSG)
          }
          next({
            name: RouterConst.ROUTER_LOGIN,
            query: { redirect: to.fullPath }
          })
        })
    } else {
      next()
    }
  }
)

router.afterEach(() => {
  NProgress.done()
})

export default router
