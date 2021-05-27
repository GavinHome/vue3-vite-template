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
import Home from '@/views/Home.vue'
import RouterConst from './const'
import i18n from '../language'
import { useCheckToken } from '../hook'

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
      },
      {
        path: `/mock`,
        name: `mock`,
        component: () => import('@/views/Mock.vue'),
        meta: {
          title: `mock`,
          auth: true
        }
      },
      {
        path: `/vueuse`,
        name: `vueuse`,
        component: () => import('@/views/VueUse.vue'),
        meta: {
          title: `vueuse`
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
    },
    props: (route) => ({
      redirect: route.query.redirect
    })
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
    document.title = import.meta.env.VITE_APP_TITLE as string
    if (to.meta && to.meta.title) {
      document.title += `-${to.meta.title}`
    }

    if (to.meta && to.meta.auth) {
      const login = () => next({ name: RouterConst.ROUTER_LOGIN, query: { redirect: to.fullPath } })
      useCheckToken()
        .then(() => next())
        .catch(login)
    } else {
      next()
    }
  }
)

router.afterEach(() => {
  NProgress.done()
})

export default router
