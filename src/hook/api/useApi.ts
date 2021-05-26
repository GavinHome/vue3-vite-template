import { useGet, usePost } from '../axios/useAxios'
import { ApiConst } from '../../common/const'
import { ApiResult, UserAuthModel } from '../../common/model'

const apiRefreshToken = (): Promise<ApiResult<UserAuthModel>> => {
  return usePost<ApiResult<UserAuthModel>>(`${ApiConst.API_REFRESH_TOKEN}`)
}

const apiAxiosUser = <T>(): Promise<T> => {
  return useGet<T>(ApiConst.API_AXIOS_USER, {}, false)
}

const apiLogError = <T>(data: object): Promise<T> => {
  return usePost<T>(`${ApiConst.API_LOG_INDEX}`, data)
}

const useApi = () => {
  return { apiRefreshToken, apiAxiosUser, apiLogError }
}

export default useApi
