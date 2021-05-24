// API
export const ApiConst = {
  API_LOGIN: 'api/v1/user/login',
  API_REFRESH_TOKEN: 'api/v1/user/refresh',
  API_LOG_INDEX: 'api/v1/log/index',
  API_AXIOS_USER: '/users/GavinHome'
}

// no token apis
export const NO_TOKEN_APIS = [ApiConst.API_LOGIN, ApiConst.API_AXIOS_USER, ApiConst.API_LOG_INDEX]

// is need token
export const VERIFY_NEED_TOKEN = (url: string) => {
  return url && NO_TOKEN_APIS.every((x) => x !== url)
}
