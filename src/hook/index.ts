import { UserAuthModel } from '../common/model'
import store from '../store'
import Log from './log'

export const useUser = (): UserAuthModel => {
  return store.state.user as UserAuthModel
}

export const useLog = (): typeof Log => {
  return Log
}
