import { Module } from 'vuex'
import { RootState } from '../../state'
import { AppAction } from './action'
import { AppState } from './state'

const defaultState: AppState = {
  count: 10,
  lang: 'zh-CN'
}

// create a new store
const userModule: Module<AppState, RootState> = {
  // namespaced: true,
  state() {
    return defaultState
  },
  mutations: {
    [AppAction.onIncrement]: (state: typeof defaultState) => {
      state.count += 1
    },
    [AppAction.onLang]: (state: typeof defaultState, lang: string) => {
      state.lang = lang
    }
  },
  actions: {
    [AppAction.increment]: (context) => {
      context.commit(AppAction.onIncrement)
    },
    [AppAction.lang]: (context, lang: string) => {
      context.commit(AppAction.onLang, lang)
    }
  },
  getters: {
    // double(state: typeof defaultState) {
    //   return 2 * state.count
    // }
  }
}

export default userModule
