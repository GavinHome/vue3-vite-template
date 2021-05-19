import moment from 'moment'
import { apiRefreshToken } from '../api'
import { TokenConst } from '../common/const'
import { UserAuthModel } from '../common/model'
import store from '../store'
import { SIGN, SIGNOUT } from '../store/types'

const getUser = (): UserAuthModel => {
  return store.state.user as UserAuthModel
}

const checkToken = (): Promise<any> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const user = store.state.user as UserAuthModel

    if (!user || !user.token) {
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

const useUser = () => {
  return { getUser, checkToken }
}

export default useUser
