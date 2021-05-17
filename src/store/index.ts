import { createStore } from 'vuex'
import { UserAuthModel } from '../common/model'
import { CLEAR_USER, SET_USER } from './types'

interface AppState {
  count: number
  user: UserAuthModel | null
}

const defaultState: AppState = {
  count: 0,
  user: null
}

// create a new store
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count += 1
    },
    SET_USER: (state: typeof defaultState, user: UserAuthModel) => {
      state.user = user
    },
    CLEAR_USER: (state: typeof defaultState) => {
      state.user = null
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    SIGN: async ({ commit }, user: UserAuthModel) => {
      commit(SET_USER, user)
    },
    SIGNOUT: async ({ commit }) => commit(CLEAR_USER)
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
