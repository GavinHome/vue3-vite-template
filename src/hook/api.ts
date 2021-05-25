import { useAxios } from '.'
import { ApiConst } from '../common/const'
import { ApiResult, UserAuthModel } from '../common/model'

const apiRefreshToken = (): Promise<ApiResult<UserAuthModel>> => {
  return useAxios().post<ApiResult<UserAuthModel>>(`${ApiConst.API_REFRESH_TOKEN}`)
}

const axiosUser = {
  name: '',
  type: '',
  html_url: ''
}

const apiAxiosUser = (): Promise<typeof axiosUser> =>
  useAxios().get<typeof axiosUser>(ApiConst.API_AXIOS_USER, {}, false)

const apiLogError = (bodyContent: object): Promise<ApiResult<any>> =>
  useAxios().post<ApiResult<any>>(`${ApiConst.API_LOG_INDEX}`, bodyContent)

const useApi = () => {
  return { apiRefreshToken, apiAxiosUser, apiLogError }
}

export default useApi
