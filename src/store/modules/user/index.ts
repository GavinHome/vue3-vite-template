import moment from 'moment'
import { Module } from 'vuex'
import { useApi, useConfig } from '../../../hook'
import { RootState } from '../../state'
import { UserActionEnum } from './action'
import { UserState } from './state'

const defaultState: UserState = {
  id: '',
  name: '',
  token: '',
  expiration: 0
}

const userModule: Module<UserState, RootState> = {
  state() {
    return defaultState
  },
  mutations: {
    [UserActionEnum.ON_SET_USER]: (state: typeof defaultState, user: UserState) => {
      state.id = user.id
      state.name = user.name
      state.token = user.token
      state.expiration = user.expiration
    },
    [UserActionEnum.ON_CLEAR_USER]: (state: typeof defaultState) => {
      state.id = ''
      state.name = ''
      state.token = ''
      state.expiration = 0
    }
  },
  actions: {
    [UserActionEnum.SIGN]: async ({ commit }, user: UserState) =>
      commit(UserActionEnum.ON_SET_USER, user),
    [UserActionEnum.SIGNOUT]: async ({ commit }) => commit(UserActionEnum.ON_CLEAR_USER),
    [UserActionEnum.CHECK]: ({ commit, dispatch, state }) =>
      // eslint-disable-next-line no-async-promise-executor
      new Promise(async (resolve, reject) => {
        const config = useConfig()
        const api = useApi()
        if (!state.token) {
          reject(config.token.NO_LOGIN)
        } else {
          const expireDate = moment(state.expiration).toDate()
          const curTime = moment().toDate()

          if (curTime > expireDate) {
            await dispatch(UserActionEnum.SIGN)
            reject(config.token.NO_TOKEN)
          } else {
            const refreshDate = moment(expireDate)
              .subtract(config.token.TOKEN_REFRESH, 'second')
              .toDate()

            if (refreshDate <= curTime) {
              const res = await api.apiRefreshToken()
              if (res.isSuccess && res.result) {
                await dispatch(UserActionEnum.SIGN, res.result)
              } else {
                reject(config.token.NO_TOKEN)
              }
              resolve(res.result.token)
            } else {
              resolve(state.token)
            }
          }
        }
      })
  },
  getters: {
    [UserActionEnum.GETTER_USER]: (state: UserState) => state
  }
}

export default userModule
