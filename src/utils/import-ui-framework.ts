import { App } from 'vue'

import { Row, Col } from 'ant-design-vue'

export default function importUiFramework(app: App) {
  app.use(Row).use(Col)
  return app
}
