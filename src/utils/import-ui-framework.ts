import { App } from 'vue'

import { Layout, Select, Menu } from 'ant-design-vue'

export default function importUiFramework(app: App) {
  app.use(Layout).use(Select).use(Menu)
  return app
}
