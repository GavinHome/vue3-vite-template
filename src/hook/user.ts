import moment from 'moment'
import { ApiConst } from '../common/api'
import { TokenConst } from '../common/const'
import { ApiResult, UserAuthModel } from '../common/model'
import axios from '../http/axios'
import store from '../store'
import { SIGN, SIGNOUT } from '../store/types'

const apiRefreshToken = (): Promise<ApiResult<UserAuthModel>> => {
  return axios.post<ApiResult<UserAuthModel>>(`${ApiConst.API_REFRESH_TOKEN}`)
}

const useUser = (): UserAuthModel => {
  return store.state.user as UserAuthModel
}

const useCheckToken = (): Promise<any> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const user = store.state.user as UserAuthModel

    if (user && !user.token) {
      reject(TokenConst.NO_LOGIN)
    } else {
      const expireDate = moment(user.tokenExpiration).toDate()
      const curTime = moment().toDate()

      if (curTime > expireDate) {
        await store.dispatch(SIGNOUT)
        reject(TokenConst.NO_TOKEN)
      } else {
        const refreshDate = moment(expireDate).subtract(TokenConst.TOKEN_REFRESH, 'second').toDate()

        if (refreshDate <= curTime) {
          const result = await apiRefreshToken()
          if (result.isSuccess && result.result) {
            await store.dispatch(SIGN, result.result)
          } else {
            reject(TokenConst.NO_TOKEN)
          }

          resolve(result.result.token)
        } else {
          resolve(user.token)
        }
      }
    }
  })
}

export { useUser, useCheckToken }
