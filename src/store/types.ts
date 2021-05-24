import { AppState } from './modules/app/state'
import { UserState } from './modules/user/state'
import { RootState } from './state'

export interface AllStateTypes extends RootState {
  user: UserState
  app: AppState
}
