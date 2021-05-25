export declare interface ViteEnv {
  VITE_PORT: number
  VITE_APP_TITLE: string
  VITE_APP_VERSION: string
  VITE_APP_REVISION: string
  VITE_APP_VERSIONNAME: string
  VITE_USE_MOCK: string
  VITE_PUBLIC_PATH: string
  VITE_GLOB_API_URL: string
  VITE_USE_PWA: string
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  VITE_APP_SHORT_NAME: string
  VITE_PROXY: [string, string][]
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown
}
