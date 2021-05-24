import moment from 'moment'
import { Module } from 'vuex'
import { useApi, useConfig } from '../../../hook'
import { RootState } from '../../state'
import { UserAction } from './action'
import { UserState } from './state'

const defaultState: UserState = {
  id: '',
  name: '',
  token: '',
  tokenExpiration: 0
}

// create a new store
const userModule: Module<UserState, RootState> = {
  state() {
    return defaultState
  },
  mutations: {
    [UserAction.ON_SET_USER]: (state: typeof defaultState, user: UserState) => {
      state.id = user.id
      state.name = user.name
      state.token = user.token
      state.tokenExpiration = user.tokenExpiration
    },
    [UserAction.ON_CLEAR_USER]: (state: typeof defaultState) => {
      state.id = ''
      state.name = ''
      state.token = ''
      state.tokenExpiration = 0
    }
  },
  actions: {
    [UserAction.SIGN]: async ({ commit }, user: UserState) => commit(UserAction.ON_SET_USER, user),
    [UserAction.SIGNOUT]: async ({ commit }) => commit(UserAction.ON_CLEAR_USER),
    [UserAction.CHECK]: ({ commit, dispatch, state }) =>
      // eslint-disable-next-line no-async-promise-executor
      new Promise(async (resolve, reject) => {
        const config = useConfig()
        const api = useApi()
        if (!state.token) {
          reject(config.token.NO_LOGIN)
        } else {
          const expireDate = moment(state.tokenExpiration).toDate()
          const curTime = moment().toDate()

          if (curTime > expireDate) {
            await dispatch(UserAction.SIGN)
            reject(config.token.NO_TOKEN)
          } else {
            const refreshDate = moment(expireDate)
              .subtract(config.token.TOKEN_REFRESH, 'second')
              .toDate()

            if (refreshDate <= curTime) {
              const result = await api.apiRefreshToken()
              if (result.isSuccess && result.result) {
                await dispatch(UserAction.SIGN, result.result)
              } else {
                reject(config.token.NO_TOKEN)
              }
              resolve(result.result.token)
            } else {
              resolve(state.token)
            }
          }
        }
      })
  },
  getters: {
    // double(state: typeof defaultState) {
    //   return 2 * state.count
    // }
  }
}

export default userModule