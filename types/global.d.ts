declare interface ViteEnv {
  VITE_PORT: number
  VITE_APP_TITLE: string
  VITE_APP_VERSION: string
  VITE_APP_REVISION: string
  VITE_APP_VERSIONNAME: string
  VITE_USE_MOCK: boolean
  VITE_PUBLIC_PATH: string
  VITE_DROP_CONSOLE: boolean
  VITE_DROP_DEBUGGER: boolean
  VITE_APP_API_HOST: string
  VITE_USE_PWA: boolean
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown
}
