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

// page result
export interface PagedResult<T> {
  took: number // take time
  pageIndex: number
  pageSize: number
  totalPage: number
  totalCount: number
  pageResults: Array<T>
}

// page query
export interface PageQuery {
  pageIndex: number
  pageSize: number
  searchText: string
}
