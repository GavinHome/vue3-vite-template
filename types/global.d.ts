declare interface ViteEnv {
  VITE_PORT: number
  VITE_APP_TITLE: string
  VITE_APP_VERSION: string
  VITE_APP_REVISION: string
  VITE_APP_VERSIONNAME: string
  VITE_USE_MOCK: boolean
  VITE_PUBLIC_PATH: string
  VITE_GLOB_API_URL: string
  VITE_USE_PWA: boolean
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  VITE_APP_SHORT_NAME: string
}

// interface ImportMetaEnv extends ViteEnv {
//   __: unknown
// }
