export interface ApiResult<T> {
  code: number
  result: T
  message: string
  isSuccess: boolean
  type: string
}

export interface UserAuthModel {
  id: string
  name: string
  token: string
  expiration: number
}

export interface PagedResult<T> {
  took: number
  pageIndex: number
  pageSize: number
  totalPage: number
  totalCount: number
  pageResults: Array<T>
}

export interface PageQuery {
  pageIndex: number
  pageSize: number
  searchText: string
}
