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


[Simplified Chinese](./README.zh.md) | English

The starter developed base on [vue3](https://github.com/vuejs/vue-next) and [ant-design-vue](https://github.com/vueComponent/ant-design-vue). This template should help get you started developing with Vue 3 and Typescript in Vite.

* [Preview](https://gavinhome.github.io/vue3-vite-template)

## Feature

* plugin：build/vite/plugin
* proxy：build/vite/proxy
* UT：tests
* mock：mock
* entry：src/main
* router：src/router
* store：src/store
* views：src/views
* hook：src/hook
* components：src/components
* utils：src/common, src/utils
* globalization：src/language

## Quick Start
```shell
yarn
```
```shell
yarn serve
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

## Licenses

[LGPL-3.0](https://opensource.org/licenses/LGPL-3.0)

You can use the avigatorflow source code in the open source project of LGPL protocol, and retain the copyright information. (Powered by <a target="_blank" href="https://gitee.com/gavinhome/AvigatorFlow">AvigatorFlow</a>)
