import { OptionFC } from 'ant-design-vue/lib/vc-select/Option'
import { Menu, Select, Layout } from 'ant-design-vue'

// const AMenu = Menu
// const AMenuItem = Menu.Item
// const ASelect = Select
// const ASelectOption = Select.Option
// const ALayout = Layout
// const ALayoutContent = Layout.Content

declare const AMenu: typeof Menu
declare const AMenuItem: typeof Menu.Item
declare const ASelect: typeof Select
declare const ASelectOption: typeof Select.Option
declare const ALayout: typeof Layout
declare const ALayoutContent: typeof Layout.Content

declare module 'ant-design-vue/types' {
  export { AMenu, AMenuItem, ASelect, ASelectOption }
}
