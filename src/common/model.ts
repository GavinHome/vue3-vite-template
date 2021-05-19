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

// export interface PagedResult<T> {
//   took: number // 耗费时间
//   pageIndex: number // 查询页
//   pageSize: number // 每页数量
//   totalPage: number // 总共页数量
//   totalCount: number // 总共数据数量
//   pageResults: Array<T> // 数据内容
// }

// // 分页查询
// export interface PageQuery {
//   pageIndex: number // 查询页
//   pageSize: number // 每页数量
//   searchText: string // 搜索内容
//   // totalCount?: number; // 总共数量
// }
