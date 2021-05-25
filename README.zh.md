# Vue3 + Vite2 + Typescript

<p>
  <a href="https://github.com/vuejs/vue-next">
    <img src="https://img.shields.io/badge/vue-3.0.11-brightgreen.svg" alt="vue3"></a>
  <a href="https://github.com/vueComponent/ant-design-vue">
    <img src="https://img.shields.io/badge/antdv--ui-2.1.6-brightgreen.svg" alt="ant-desigin-vue"></a>
  <a href="https://github.com/vuejs/vuex.git">
    <img src="https://img.shields.io/badge/vuex-4.0.0-brightgreen.svg" alt="vuex"></a> 
  <a href="https://github.com/GavinHome/vue3-vite-template/blob/dev/LICENSE">
    <img src="https://img.shields.io/github/license/gavinhome/vue3-vite-template" alt="MIT license"></a>
</p>


简体中文 | [English](./README.md)

基于 [vue3](https://github.com/vuejs/vue-next) 和 [ant-design-vue](https://github.com/vueComponent/ant-design-vue) 实现的快速开发模板，该模板将帮助您开始在Vite中使用Vue3和Typescript进行开发。

* [在线预览](https://gavinhome.github.io/vue3-vite-template)

## 特性

* 配置插件：build/vite/plugin
* 配置代理：build/vite/proxy
* 单测：tests
* 数据模拟：mock
* 入口：src/main
* 路由：src/router
* 状态：src/store
* 页面：src/views
* 逻辑：src/hook
* 组件：src/components
* 通用：src/common, src/utils
* 国际化：src/language

## 快速开始
```shell
yarn
```
```shell
yarn dev
```

## 推荐的IDE设置

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). 确保 `vetur.experimental.templateInterpolationService` 在设置中启用！

### 如果使用 `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) 是当前处于RFC阶段的功能。要获得语法的正确IDE支持，请使用 [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) 而不是Vetur（并禁用Vetur）。

## 在`.vue`中导入类型支持

由于 TypeScript 无法处理 `.vue` 导入的类型信息, 因此默认情况下将其填充为通用 Vue 组件类型. 在大多数情况下，如果您真的不在乎模板之外的组件prop类型，那么这很好。但是，如果您希望在 `.vue` 导入中获取实际的道具类型（例如，在使用手动 `h(...)` 调用时获得道具验证），则可以使用以下代码：

### 如果使用 Volar

从VSCode命令面板运行 `Volar: Switch TS Plugin on/off`.

### 如果使用 Vetur

1. 安装并添加 `@vuedx/typescript-plugin-vue` 到 [plugins section](https://www.typescriptlang.org/tsconfig#plugins) 的 `tsconfig.json`
2. 删除 `src/shims-vue.d.ts`，因为不再需要向Typescript提供模块信息
3. 在VSCode中打开 `src/main.ts`
4. 打开VSCode命令面板
5. 搜索并运行“选择 TypeScript 版本”->“使用工作空间版本”

## 开源协议

[LGPL-3.0](https://opensource.org/licenses/LGPL-3.0)

您可以将 AvigatorFlow 源码用于 LGPL 协议的开源项目中，并保留版权信息（Powered by <a target="_blank" href="https://gitee.com/gavinhome/AvigatorFlow">AvigatorFlow</a>）
