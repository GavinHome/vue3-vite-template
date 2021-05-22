import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import createImportPlugin from 'vite-plugin-import'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const target = loadEnv(mode, process.cwd()).VITE_APP_API_HOST
  // const baseUrl = loadEnv(mode, process.cwd()).VITE_APP_BASE_URL || ''
  return defineConfig({
    plugins: [
      vue(),
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
      }),
      VitePWA({
        manifest: {},
        workbox: { skipWaiting: true, clientsClaim: true }
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
      })
    ],
    // base: baseUrl,
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            // 更改主题在这里
            // 'primary-color': '#52c41a',
            // 'link-color': '#1DA57A',
            // 'border-radius-base': '2px'
          },
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    server: {
      host: '0.0.0.0',
      port: 3001,
      open: true,
      cors: true,
      proxy: {
        '/api': {
          target,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace('/api/', '/')
        }
      }
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      // rollupOptions: {
      //   output: {
      //     manualChunks: {}
      //   }
      // },
      chunkSizeWarningLimit: 800
    }
  })
}
