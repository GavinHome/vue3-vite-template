import { App } from 'vue'

import {
  Col,
  Row,
  Layout,
  Modal,
  Icon,
  // List,
  Menu
} from 'ant-design-vue'

export default function importUiFramework(app: App) {
  // 按需载入 Element Plus 组件
  app.use(Col).use(Row).use(Layout).use(Modal).use(Icon).use(Menu)
  return app
}
