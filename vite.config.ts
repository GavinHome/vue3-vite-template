import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import createImportPlugin from 'vite-plugin-import'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
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
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3001,
    open: true,
    cors: true
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:x000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // },
  }
})
