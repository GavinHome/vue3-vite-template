import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import configMockPlugin from './mock'
import configStyleImportPlugin from './styleImport'
import configCompressPlugin from './compress'
import configPwaConfig from './pwa'
import { ViteEnv } from '#/global'

export default function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_USE_MOCK, VITE_BUILD_COMPRESS } = viteEnv

  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx()]

  // vite-plugin-mock
  vitePlugins.push(configMockPlugin(isBuild, VITE_USE_MOCK))

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(isBuild))

  // rollup-plugin-gzip
  vitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS, false))

  // vite-plugin-pwa
  vitePlugins.push(configPwaConfig(viteEnv))

  return vitePlugins
}
