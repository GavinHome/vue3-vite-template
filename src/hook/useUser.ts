import i18n from '@/language'
import { UserAuthModel } from '../common/model'
import { useStore } from '../store'
import { UserActionEnum } from '../store/modules/user/action'
import { useWarnMsg } from '../hook'
import useConfig from './useConfig'

const { t } = i18n.global

const useUserInfo = (): UserAuthModel | null => {
  const state = useStore()
  return state.getters[UserActionEnum.GETTER_USER]
}

const useCheckToken = (): Promise<any> => {
  const store = useStore()
  const config = useConfig()
  return new Promise((resolve, reject) => {
    store
      .dispatch(UserActionEnum.CHECK)
      .then((token) => {
        resolve(token)
      })
      .catch((error) => {
        if (error === config.token.NO_TOKEN) {
          useWarnMsg(t('TOKEN_EXPIRE_MSG'))
        }
        reject(error)
      })
  })
}

const useSign = (user: UserAuthModel): Promise<UserAuthModel> => {
  const store = useStore()
  return new Promise((resolve, reject) => {
    store
      .dispatch(UserActionEnum.SIGN, user)
      .then(() => {
        resolve(user)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export { useUserInfo, useCheckToken, useSign }
