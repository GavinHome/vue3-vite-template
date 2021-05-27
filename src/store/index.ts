import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'
import app from './modules/app'
import { RootState } from './state'
import { UserState } from './modules/user/state'
import { AppState } from './modules/app/state'
// import { AllStateTypes } from './types'

const defaultState: RootState = {
  count: 0
}

export const key: InjectionKey<Store<RootState>> = Symbol('vue-store')

// create a new store
export const store = createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count += 1
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  },
  modules: {
    user,
    app
  },
  plugins: [
    createPersistedState({
      key: 'vue3+vite+ts',
      storage: window.sessionStorage,
      paths: ['app', 'user']
    })
    // secure-ls: https://juejin.cn/post/6869312828587638798
    // createPersistedState({
    //   storage: {
    //     getItem: (key) => ls.get(key),
    //     setItem: (key, value) => ls.set(key, value),
    //     removeItem: (key) => ls.remove(key)
    //   }
    // })
  ]
})

interface States extends RootState {
  user: UserState
  app: AppState
}

export function useStore() {
  return store
}

export function useUserState<T extends States>() {
  return baseStore<T>(key)?.state?.user
}

export function useAppState<T extends States>() {
  return baseStore<T>(key)?.state?.app
}
