/**
 * When some components of ant-desigin-vue are imported locally, Vue cannot correctly resolve
 * the component name, including Menu, MenuItem, Select, SelectOption, Layout, LayoutContent.
 *
 * Instructions look like <a-menu />, <a-menu-item />, <a-select />, <a-select-option />,
 * <a-layout />, <a-layout-content />, <a-button />, <a-card />.
 *
 * If not, use <Menu />, <Select />, <Layout />, <Button />, <Card /> instead,
 * but <MenuItem />, <SelectOption />, <LayoutContent /> cannot be used.
 *
 * So this file generates a new type of ant-design-vue types to solve this problem.
 */
import { Menu, Select, Layout, Button, Card, Form, Input } from 'ant-design-vue'

const AMenu = Menu
const AMenuItem = Menu.Item
const ASelect = Select
const ASelectOption = Select.Option
const ALayout = Layout
const ALayoutContent = Layout.Content
const AButton = Button
const ACard = Card
const AForm = Form
const AFormItem = Form.Item
const AInput = Input

export {
  AMenu,
  AMenuItem,
  ASelect,
  ASelectOption,
  ALayout,
  ALayoutContent,
  AButton,
  ACard,
  AForm,
  AFormItem,
  AInput
}
