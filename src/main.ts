import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'
import store from './store'
import importUtilityFramework from './utils/import-utility-framewok'
import importUiFramework from './utils/import-ui-framework'
import i18n from './language'

importUtilityFramework.useMoment('zh-cn')
const app = createApp(App)

importUiFramework(app).use(i18n).use(router).use(store).mount('#app')
