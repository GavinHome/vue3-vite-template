import { UserAuthModel } from '../common/model'
import { useStore } from '../store'
import { UserActionEnum } from '../store/modules/user/action'

const getUser = (): UserAuthModel => {
  const store = useStore()
  return store?.state?.user as UserAuthModel
}

const checkToken = (): Promise<any> => {
  const store = useStore()
  return store.dispatch(UserActionEnum.CHECK)
}

const useUser = () => {
  return { getUser, checkToken }
}

export default useUser
