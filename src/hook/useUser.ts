import { UserAuthModel } from '../common/model'
import { useStore } from '../store'
import { UserActionEnum } from '../store/modules/user/action'

const useUserInfo = (): UserAuthModel => {
  const store = useStore()
  return store?.state?.user as UserAuthModel
}

const useCheckToken = (): Promise<any> => {
  const store = useStore()
  return store.dispatch(UserActionEnum.CHECK)
}

export { useUserInfo, useCheckToken }
