import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import createVitePlugins from './build/vite/plugin'
import configModifyVars from './build/vite/modifyVars'
import createProxy from './build/vite/proxy'

// https://vitejs.dev/config/
export default ({ mode, command }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())

  const target = env.VITE_GLOB_API_URL
  const isBuild = command === 'build'

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = env
  // const baseUrl = VITE_PUBLIC_PATH || ''
  return defineConfig({
    plugins: createVitePlugins(env, isBuild),
    // base: baseUrl,
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
        '~': resolve(__dirname, 'types'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    server: {
      host: '0.0.0.0',
      port: Number(VITE_PORT),
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
      // rollupOptions: {
      //   output: {
      //     manualChunks: {}
      //   }
      // },
      chunkSizeWarningLimit: 300
    }
    // optimizeDeps: {
    //   // @iconify/iconify: The dependency is dynamically and virtually loaded by @purge-icons/generated, so it needs to be specified explicitly
    //   include: [
    //     'ant-design-vue/es/locale/zh_CN',
    //     'moment/dist/locale/zh-cn',
    //     'ant-design-vue/es/locale/en_US',
    //     'moment/dist/locale/eu'
    //   ],
    //   exclude: []
    // }
  })
}
