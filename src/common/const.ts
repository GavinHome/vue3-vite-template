export const ApiConst = {
  API_LOGIN: 'v1/user/login',
  API_REFRESH_TOKEN: 'v1/user/refresh',
  API_LOG_INDEX: 'v1/log/index',
  API_AXIOS_USER: 'users/GavinHome',
  API_MOCK_GET: 'test/get'
}

export const NO_TOKEN_APIS = [
  ApiConst.API_LOGIN,
  ApiConst.API_AXIOS_USER,
  ApiConst.API_LOG_INDEX,
  ApiConst.API_MOCK_GET
]

export const VERIFY_NEED_TOKEN = (url: string) => {
  return url && NO_TOKEN_APIS.every((x) => x !== url)
}
