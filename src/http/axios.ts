import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ApiConst, NO_TOKEN_APIS } from '../common/api'
import { MessageConst } from '../common/const'
import useMessage from '../hook/message'
import { useUser } from '../hook/user'
import { useLog } from '../hook/log'
import router from '../router'
import RouterConst from '../router/const'
import { getUrlWithOutParams } from '../utils'
import { ResponseResult, ContentType, HttpMethod } from './model'

interface AxiosOption extends AxiosRequestConfig {
  contentType?: ContentType
}

const setToken = async (config: AxiosRequestConfig) => {
  config.headers = Object.assign(config.headers, {
    'Cache-Control': 'no-cache'
  })

  const outParamsUrl = getUrlWithOutParams(config.url)
  if (config.url && NO_TOKEN_APIS.every((x) => x !== outParamsUrl)) {
    const user = useUser()
    if (outParamsUrl === ApiConst.API_REFRESH_TOKEN) {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${user.token}`
      }
    } else {
      try {
        config.headers.Authorization = `Bearer ${user.token}`
      } catch (e) {
        useMessage().openWarnMsg(MessageConst.TOKEN_EXPIRE_MSG)
        await router.replace({
          name: RouterConst.ROUTER_LOGIN,
          params: { redirect: router.currentRoute.value.fullPath }
        })
      }
    }
  }

  if (config.method === 'get') {
    if (!config.params) {
      Object.assign(config, {
        params: {
          timestamp: new Date().getTime()
        }
      })
    } else {
      Object.assign(config.params, {
        timestamp: new Date().getTime()
      })
    }
  }
}

const apiHost = import.meta.env.PROD ? (import.meta.env.VITE_APP_API_HOST as string) : '/api'

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
      router.replace({ name: RouterConst.ROUTER_ERROR, params: { msg: error } })
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

  public handelResponse<T = any>(
    res: AxiosResponse,
    convertResult = true,
    showErrorMsg = false
  ): T {
    try {
      if (res.status === 200) {
        const apiReturn = res.data as ResponseResult

        if (convertResult) {
          if (apiReturn.data.isSuccess === false) {
            const errorMsg = apiReturn.data.message
            router.replace({ name: RouterConst.ROUTER_ERROR, params: { msg: errorMsg } })
          }
          return apiReturn.data as T
        }
        return res.data as T
      }
      router.replace({ name: RouterConst.ROUTER_ERROR, params: { msg: res.statusText } })
      const error = new Error(res.statusText)
      this.handelResponseError(error, res)
      throw new Error()
    } catch (e) {
      if (showErrorMsg) {
        useMessage().openErrorMsg(MessageConst.SERVER_DATA_ERROR)
      }
      this.handelResponseError(e, res)
      throw e
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private handelResquestError<T = any>(error: any): T {
    // eslint-disable-next-line no-unused-vars
    const bodyContent = {
      entryName: `${import.meta.env.VITE_APP_TITLE}, ${import.meta.env.VITE_APP_VERSIONNAME}`,
      version: `${import.meta.env.VITE_APP_VERSION}, ${import.meta.env.VITE_APP_REVISION}`,
      message: error.message,
      metaData: {},
      name: error.name,
      releaseStage: import.meta.env.MODE,
      severity: error.name as string | 'error',
      stacktrace: error.stacktrace,
      time: Date.now(),
      title: 'handle request error',
      type: `HTTP Request`,
      // eslint-disable-next-line no-restricted-globals
      url: location.href,
      client: {
        userAgent: window.navigator.userAgent,
        height: window.screen.height,
        width: window.screen.width,
        referrer: window.document.referrer
      },
      error,
      lineNumber: null,
      columnNumber: null,
      // eslint-disable-next-line no-restricted-globals
      fileName: location.href,
      pageLevel: null
    }

    /// 上报错误日志
    useLog().setLog(bodyContent)
    throw error
  }

  // eslint-disable-next-line class-methods-use-this
  private handelResponseError<T = any>(error: any, data: any): T {
    // eslint-disable-next-line no-unused-vars
    const bodyContent = {
      entryName: `${import.meta.env.VITE_APP_TITLE}, ${import.meta.env.VITE_APP_VERSIONNAME}`,
      version: `${import.meta.env.VITE_APP_VERSION}, ${import.meta.env.VITE_APP_REVISION}`,
      message: error.message,
      metaData: {},
      name: error.name,
      releaseStage: import.meta.env.MODE,
      severity: error.name as string | 'error',
      stacktrace: error.stacktrace,
      time: Date.now(),
      title: 'handle response error',
      type: `HTTP Response`,
      // eslint-disable-next-line no-restricted-globals
      url: location.href,
      client: {
        userAgent: window.navigator.userAgent,
        height: window.screen.height,
        width: window.screen.width,
        referrer: window.document.referrer
      },
      data,
      error,
      lineNumber: null,
      columnNumber: null,
      // eslint-disable-next-line no-restricted-globals
      fileName: location.href,
      pageLevel: null
    }

    /// 上报错误日志
    useLog().setLog(bodyContent)
    throw error
  }
}

export default AxiosUtil.getInstance() as AxiosUtil
