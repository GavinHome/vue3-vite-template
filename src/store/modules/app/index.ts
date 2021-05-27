import { Module } from 'vuex'
import { RootState } from '../../state'
import { AppActionEnum } from './action'
import { AppState } from './state'

const defaultState: AppState = {
  count: 10,
  lang: 'zh-CN'
}

const userModule: Module<AppState, RootState> = {
  state() {
    return defaultState
  },
  mutations: {
    [AppActionEnum.onIncrement]: (state: typeof defaultState) => {
      state.count += 1
    },
    [AppActionEnum.onLang]: (state: typeof defaultState, lang: string) => {
      state.lang = lang
    }
  },
  actions: {
    [AppActionEnum.increment]: (context) => {
      context.commit(AppActionEnum.onIncrement)
    },
    [AppActionEnum.lang]: (context, lang: string) => {
      context.commit(AppActionEnum.onLang, lang)
    }
  },
  getters: {}
}

export default userModule
