import { ApiConst } from '../common/const'
import { ApiResult, UserAuthModel } from '../common/model'
import { useAxios } from '../hook'

const apiRefreshToken = (): Promise<ApiResult<UserAuthModel>> =>
  useAxios().post<ApiResult<UserAuthModel>>(`${ApiConst.API_REFRESH_TOKEN}`)

const apiAxiosUser = (): Promise<any> => useAxios().get(ApiConst.API_AXIOS_USER, {}, false)

const apiLogError = (bodyContent: object): Promise<ApiResult<any>> =>
  useAxios().post<ApiResult<any>>(`${ApiConst.API_LOG_INDEX}`, bodyContent)

export { apiRefreshToken, apiAxiosUser, apiLogError }
