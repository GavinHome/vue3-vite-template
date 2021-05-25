/**
 *  Introduces component library styles on demand.
 * https://github.com/anncwb/vite-plugin-style-import
 */

import styleImport from 'vite-plugin-style-import'
import createImportPlugin from 'vite-plugin-import'

export default function configStyleImportPlugin(isBuild: boolean) {
  const styleImportPlugin = [
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`
          },
          resolveComponent: (name) => {
            return `ant-design-vue/lib/${name}`
          }
        }
      ]
    }),
    createImportPlugin({
      onlyBuild: false, // if onlyBuild === true, this plugin takes effect only in vite build mode; onlyBuild's default value is true.
      babelImportPluginOptions: [
        {
          libraryName: 'ant-design-vue',
          libraryDirectory: 'es',
          style: 'css'
        }
      ]
    })
  ]
  return styleImportPlugin
}
