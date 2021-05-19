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
  app.use(Col).use(Row).use(Layout).use(Modal).use(Icon).use(Menu)
  return app
}
