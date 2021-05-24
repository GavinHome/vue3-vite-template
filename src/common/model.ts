export interface ApiResult<T> {
  isSuccess: boolean
  message: string
  code: string
  result: T
}

export interface UserAuthModel {
  id: string
  name: string
  token: string
  tokenExpiration: number
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
