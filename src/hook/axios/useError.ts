import { useLog } from '..'
import router from '../../router'
import RouterConst from '../../router/const'

const useRouterError = (error: string) =>
  router.replace({ name: RouterConst.ROUTER_ERROR, params: { msg: error } })

const useLogError = (error: any, data: any) => useLog(error, data)

export { useRouterError, useLogError }
