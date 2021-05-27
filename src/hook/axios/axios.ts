import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { ContentType, HttpMethod, AxiosOption } from './model'
import { ApiResult } from '../../common/model'
import { useRouterError, useLogError } from './useError'
import { useToken } from './useToken'

const createInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    timeout: 60000000,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Cache-Control': 'no-cache'
    }
  })

  instance.interceptors.request.use(
    async (config) => {
      await useToken(config)
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error && error.toString().indexOf('500') > 0) {
        useRouterError(error)
      }
      return Promise.reject(error)
    }
  )

  return instance
}

class AxiosUtil {
  private static instance: AxiosUtil

  axios: AxiosInstance

  constructor() {
    const baseURL = import.meta.env.VITE_GLOB_API_URL as string
    this.axios = createInstance(baseURL)
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

  public async get<T = any>(url: string, data?: object, convert = true): Promise<T> {
    const res = await this.axios
      .get(url, { params: data })
      .catch((error) => this.handelResquestError(error))
    return this.handelResponse<T>(res, convert)
  }

  public async post<T = any>(url: string, data?: object, convert = true): Promise<T> {
    const res = await this.axios
      .post(url, JSON.stringify(data))
      .catch((error) => this.handelResquestError(error))
    return this.handelResponse<T>(res, convert)
  }

  public async put<T = any>(url: string, data?: object, convert = true): Promise<T> {
    const res = await this.axios
      .put(url, JSON.stringify(data))
      .catch((error) => this.handelResquestError(error))
    return this.handelResponse<T>(res, convert)
  }

  public async patch<T = any>(url: string, data?: object, convert = true): Promise<T> {
    const res = await this.axios
      .patch(url, JSON.stringify(data))
      .catch((error) => this.handelResquestError(error))
    return this.handelResponse<T>(res, convert)
  }

  public async delete<T = any>(url: string, data?: object, convert = true): Promise<T> {
    const res = await this.axios
      .delete(url, { data })
      .catch((error) => this.handelResquestError(error))
    return this.handelResponse<T>(res, convert)
  }

  private handelResponse<T = any>(res: AxiosResponse, convert = true): T {
    try {
      if (res.status === 200) {
        if (convert) {
          const apiReturn = res.data as ApiResult<T>
          if (apiReturn.isSuccess === false) {
            useRouterError(apiReturn.message)
          }
          return apiReturn.result as T
        }
        return res.data as T
      }

      useRouterError(res.statusText)
      const error = new Error(res.statusText)
      return this.handelResquestError(error, res)
    } catch (e) {
      return this.handelResquestError(e, res)
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private handelResquestError<T = any>(error: any, data: any = null): T {
    useLogError(error, null)
    throw error
  }
}

export default AxiosUtil.getInstance() as AxiosUtil
