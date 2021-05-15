// API
export const ApiConst = {
  API_LOGIN: 'api/v1/user/login',
  API_REFRESH_TOKEN: 'api/v1/user/refresh'
}

// 无需token的api
export const NO_TOKEN_APIS = [ApiConst.API_LOGIN]

// base url, TODO
export const BASE_URL =
  process.env.NODE_ENV !== 'development' ? process.env.VUE_APP_API_HOST : '/api'
