import { ConfigEnv, defineConfig, loadEnv, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import configMockPlugin from './mock'
import configStyleImportPlugin from './styleImport'
import configCompressPlugin from './compress'
import configPwaConfig from './pwa'
import { ViteEnv } from '/#/global'

export default function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_USE_MOCK, VITE_BUILD_COMPRESS } = viteEnv

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue()
    // have to
    // vueJsx()
  ]

  // vite-plugin-svg-icons
  // vitePlugins.push(configSvgIconsPlugin(isBuild))

  // vite-plugin-mock
  vitePlugins.push(configMockPlugin(isBuild, VITE_USE_MOCK))

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(isBuild))

  // vite-plugin-theme
  // vitePlugins.push(configThemePlugin(isBuild))

  // rollup-plugin-gzip
  vitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS, false))

  // vite-plugin-pwa
  vitePlugins.push(configPwaConfig(viteEnv))

  return vitePlugins
}
