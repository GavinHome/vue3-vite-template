import { useGet, usePost } from '../axios/useAxios'
import { ApiConst } from '../../common/const'
import { ApiResult, UserAuthModel } from '../../common/model'

const apiLogin = <T>(username: string, password: string): Promise<ApiResult<T>> => {
  return usePost<ApiResult<T>>(ApiConst.API_LOGIN, { username, password }, false)
}

const apiRefreshToken = (): Promise<ApiResult<UserAuthModel>> => {
  return usePost<ApiResult<UserAuthModel>>(`${ApiConst.API_REFRESH_TOKEN}`, {}, false)
}

const apiAxiosUser = <T>(): Promise<T> => {
  return useGet<T>(ApiConst.API_AXIOS_USER, {}, false)
}

const apiLogError = <T>(data: object): Promise<T> => {
  return usePost<T>(`${ApiConst.API_LOG_INDEX}`, data)
}

const useApi = () => {
  return { apiRefreshToken, apiAxiosUser, apiLogError, apiLogin }
}

export default useApi
