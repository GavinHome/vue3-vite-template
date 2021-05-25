import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import useLog from '../hook/log'
import useMessage from '../hook/message'
import useUser from '../hook/user'
import router from '../router'
import RouterConst from '../router/const'
import { getUrlWithOutParams } from '../utils'
import { ResponseResult, ContentType, HttpMethod } from './model'

import i18n from '../language'
import { ApiConst, VERIFY_NEED_TOKEN } from '../common/const'
import { ApiResult } from '../common/model'

const { t } = i18n.global

interface AxiosOption extends AxiosRequestConfig {
  contentType?: ContentType
}

const setToken = async (config: AxiosRequestConfig) => {
  config.headers = Object.assign(config.headers, {
    'Cache-Control': 'no-cache'
  })

  const outParamsUrl = getUrlWithOutParams(config.url)
  if (VERIFY_NEED_TOKEN(outParamsUrl)) {
    if (outParamsUrl === ApiConst.API_REFRESH_TOKEN) {
      if (!config.headers.Authorization) {
        const user = useUser().getUser()
        config.headers.Authorization = `Bearer ${user.token}`
      }
    } else {
      useUser()
        .checkToken()
        .then((token: string) => {
          config.headers.Authorization = `Bearer ${token}`
        })
        .catch(() => {
          useMessage().openWarnMsg(t('TOKEN_EXPIRE_MSG'))
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

/// Go to error page
const setError = (error: any) =>
  router.replace({ name: RouterConst.ROUTER_ERROR, params: { msg: error } })

/// report error
const logError = (error: any, data: any) => useLog().setLog(error, data)

const apiHost = import.meta.env.VITE_GLOB_API_URL as string
const axiosInstance = axios.create({
  baseURL: apiHost,
  timeout: 60000000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Cache-Control': 'no-cache'
  }
})

axiosInstance.interceptors.request.use(
  async (config) => {
    await setToken(config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error && error.toString().indexOf('500') > 0) {
      setError(error)
    }
    return Promise.reject(error)
  }
)

class AxiosUtil {
  private static instance: AxiosUtil

  axios: AxiosInstance

  constructor() {
    this.axios = axiosInstance
  }

  static getInstance(): AxiosUtil {
    if (this.instance instanceof this === false) {
      this.instance = new this()
    }
    return this.instance
  }

  public base(option: AxiosOption) {
    const contentType = option.contentType == null ? ContentType.JSON : option.contentType
    const { data } = option
    const headers = {
      'Content-Type': contentType,
      ...option.headers
    }
    const responseType = option.responseType != null ? option.responseType : 'json'
    const method = option.method || HttpMethod.POST

    return this.axios
      .request({
        method,
        url: option.url,
        data: JSON.stringify(data),
        headers,
        responseType
      })
      .catch((error) => this.handelResquestError(error))
  }

  public async get<T = any>(url: string, data?: object, convertResult = true): Promise<T> {
    const res = await this.axios
      .get(url, { params: data })
      .catch((error) => this.handelResquestError(error))
    return this.handelResponse<T>(res, convertResult)
  }

  public async post<T = any>(url: string, data?: object, convertResult = true): Promise<T> {
    const res = await this.axios
      .post(url, JSON.stringify(data))
      .catch((error) => this.handelResquestError(error))
    return this.handelResponse<T>(res, convertResult)
  }

  public async put<T = any>(url: string, data?: object, convertResult = true): Promise<T> {
    const res = await this.axios
      .put(url, JSON.stringify(data))
      .catch((error) => this.handelResquestError(error))
    return this.handelResponse<T>(res, convertResult)
  }

  public async patch<T = any>(url: string, data?: object, convertResult = true): Promise<T> {
    const res = await this.axios
      .patch(url, JSON.stringify(data))
      .catch((error) => this.handelResquestError(error))
    return this.handelResponse<T>(res, convertResult)
  }

  public async delete<T = any>(url: string, data?: object, convertResult = true): Promise<T> {
    const res = await this.axios
      .delete(url, { data })
      .catch((error) => this.handelResquestError(error))
    return this.handelResponse<T>(res, convertResult)
  }

  private handelResponse<T = any>(res: AxiosResponse, convertResult = true): T {
    try {
      if (res.status === 200) {
        if (convertResult) {
          // const apiReturn = res.data as ResponseResult
          const apiReturn = res.data as ApiResult<T>
          if (apiReturn.isSuccess === false) {
            setError(apiReturn.message)
          }
          return apiReturn.result as T
        }
        return res.data as T
      }

      setError(res.statusText)
      const error = new Error(res.statusText)
      return this.handelResponseError(error, res)
    } catch (e) {
      return this.handelResponseError(e, res)
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private handelResquestError<T = any>(error: any): T {
    logError(error, null)
    throw error
  }

  // eslint-disable-next-line class-methods-use-this
  private handelResponseError<T = any>(error: any, data: any): T {
    logError(error, data)
    throw error
  }
}

export default AxiosUtil.getInstance() as AxiosUtil
