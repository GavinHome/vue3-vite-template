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
