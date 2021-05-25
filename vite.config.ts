import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import createVitePlugins from './build/vite/plugin'
import configModifyVars from './build/vite/modifyVars'
import createProxy from './build/vite/proxy'
import wrapperEnv from './build/utils'

// https://vitejs.dev/config/
export default ({ mode, command }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv
  const baseUrl = VITE_PUBLIC_PATH || ''
  const isBuild = command === 'build'
  return defineConfig({
    plugins: createVitePlugins(env, isBuild),
    base: baseUrl,
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: configModifyVars(),
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '#': resolve(__dirname, 'types')
        // 'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    server: {
      host: '0.0.0.0',
      port: VITE_PORT,
      open: true,
      cors: true,
      proxy: createProxy(VITE_PROXY)
    },
    build: {
      terserOptions: {
        compress: {
          // keep_infinity: true,
          drop_console: isBuild,
          drop_debugger: isBuild
        }
      },
      sourcemap: command === 'serve',
      rollupOptions: {
        output: {
          // manualChunks: {
          //   // moment: ['moment'],
          //   // loash: ['lodash']
          // }
        }
      },
      chunkSizeWarningLimit: 550
    }
  })
}
