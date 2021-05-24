import {
  createRouter,
  createWebHashHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  Router,
  RouteRecordRaw
} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import Home from '@/views/Home.vue'
import RouterConst from './const'
import i18n from '../language'
import { useConfig, useMessage, useUser } from '../hook'

const { t } = i18n.global

NProgress.configure({ showSpinner: false })
const routes: Array<RouteRecordRaw> = [
  {
    path: `/`,
    name: RouterConst.ROUTER_DASHBOARD,
    component: () => import('@/views/Home.vue'),
    redirect: `${RouterConst.ROUTER_HOME}`,
    children: [
      {
        path: `/${RouterConst.ROUTER_HOME}`,
        // path: ``,
        name: RouterConst.ROUTER_HOME,
        component: () => import('@/views/Dashboard.vue'),
        meta: {
          title: `home`
        }
      },
      {
        path: `/${RouterConst.ROUTER_ABOUT}`,
        name: RouterConst.ROUTER_ABOUT,
        component: () => import('@/views/About.vue'),
        meta: {
          title: `about`
        }
      },
      {
        path: `/counter`,
        name: `counter`,
        component: () => import('@/views/Counter.vue'),
        meta: {
          title: `counter`
        }
      },
      {
        path: `/axios`,
        name: `axios`,
        component: () => import('@/views/Axios.vue'),
        meta: {
          title: `axios`
        }
      },
      {
        path: `/test`,
        name: `test`,
        component: () => import('@/views/Test.vue'),
        meta: {
          title: `test`
        }
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
  history: createWebHashHistory(),
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
      const config = useConfig()
      useUser()
        .checkToken()
        .then(() => {
          next()
        })
        .catch((error) => {
          if (error === config.token.NO_TOKEN) {
            useMessage().openWarnMsg(t('TOKEN_EXPIRE_MSG'))
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
