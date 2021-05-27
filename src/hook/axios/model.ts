import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Ref } from 'vue'

/* eslint-disable no-shadow */
export enum ContentType {
  JSON = 'application/json;charset=UTF-8',
  FORM = 'application/x-www-form-urlencoded; charset=UTF-8',
  TEXT = 'text/xml',
  BLOB = 'blob',
  FORMDATA = 'multipart/form-data',
  Other = 'application/octet-stream',
  Arraybuffer = 'arraybuffer'
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export interface ResponseResult {
  time: string
  data: Record<any, any>
}

export interface UseAxiosReturn<T> {
  /**
   * Axios Response
   */
  response: Ref<AxiosResponse<T> | undefined>
  /**
   * Axios response data
   */
  data: Ref<T | undefined>
  /**
   * Indicates if the request has finished
   */
  isFinished: Ref<boolean>
  /**
   * Indicates if the request is currently loading
   */
  isLoading: Ref<boolean>
  /**
   * Indicates if the request was canceled
   */
  aborted: Ref<boolean>
  /**
   * Any erros that may have occurred
   */
  error: Ref<AxiosError<T> | undefined>
  /**
   * Aborts the current request
   */
  abort: (message?: string | undefined) => void
}

export interface AxiosOption extends AxiosRequestConfig {
  contentType: ContentType
}
