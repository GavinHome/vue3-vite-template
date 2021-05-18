import { createApp } from 'vue'
import importUiFramework from './utils/import-ui-framework'
// import moment from 'moment'
// import 'moment/locale/zh-cn'
// moment.locale('zh-cn')

import App from './App.vue'
import router from './router/index'
import store from './store'

const app = createApp(App)

importUiFramework(app).use(router).use(store).mount('#app')
