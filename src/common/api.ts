// API
export const ApiConst = {
  API_LOGIN: 'api/v1/user/login',
  API_REFRESH_TOKEN: 'api/v1/user/refresh',
  API_LOG_INDEX: 'qjtp/v1/log/index',
  API_AXIOS_USER: '/users/GavinHome'
}

// 无需token的api
export const NO_TOKEN_APIS = [ApiConst.API_LOGIN, ApiConst.API_AXIOS_USER, ApiConst.API_LOG_INDEX]
