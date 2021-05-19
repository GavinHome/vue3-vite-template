import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'
import store from './store'
import importUtilityFramework from './utils/import-utility-framewok'
import importUiFramework from './utils/import-ui-framework'

importUtilityFramework.useMoment('zh-cn')
const app = createApp(App)

importUiFramework(app).use(router).use(store).mount('#app')
