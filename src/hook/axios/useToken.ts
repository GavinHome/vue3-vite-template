import { AxiosRequestConfig } from 'axios'
import { useWarnMsg } from '../useMessage'
import { useUserInfo, useCheckToken } from '../useUser'
import router from '../../router'
import RouterConst from '../../router/const'
import { getUrlWithOutParams } from '../../utils'

import i18n from '../../language'
import { ApiConst, VERIFY_NEED_TOKEN } from '../../common/const'
import { HttpMethod } from './model'

const { t } = i18n.global

const useToken = async (config: AxiosRequestConfig) => {
  config.headers = Object.assign(config.headers, {
    'Cache-Control': 'no-cache'
  })

  const outParamsUrl = getUrlWithOutParams(config.url)
  if (VERIFY_NEED_TOKEN(outParamsUrl)) {
    if (outParamsUrl === ApiConst.API_REFRESH_TOKEN) {
      if (!config.headers.Authorization) {
        const user = useUserInfo()
        config.headers.Authorization = `Bearer ${user.token}`
      }
    } else {
      useCheckToken()
        .then((token: string) => {
          config.headers.Authorization = `Bearer ${token}`
        })
        .catch(() => {
          useWarnMsg(t('TOKEN_EXPIRE_MSG'))
          router.replace({
            name: RouterConst.ROUTER_LOGIN,
            params: { redirect: router.currentRoute.value.fullPath }
          })
        })
    }
  }

  if (config.method === HttpMethod.GET.toLowerCase()) {
    config.params = config.params || {}
    Object.assign(config.params, { timestamp: new Date().getTime() })
  }
}

export { useToken }
