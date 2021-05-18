import { createApp } from 'vue'
import {
  Col,
  Row,
  Layout,
  Modal,
  Icon,
  // List,
  Menu
} from 'ant-design-vue'
// import moment from 'moment'
// import 'moment/locale/zh-cn'
import App from './App.vue'
import router from './router/index'
import store from './store'

// moment.locale('zh-cn')

const app = createApp(App)

app.use(Col)
app.use(Row)
app.use(Layout)
app.use(Modal)
app.use(Icon)
// app.use(List)
app.use(Menu)

app.use(router).use(store).mount('#app')
