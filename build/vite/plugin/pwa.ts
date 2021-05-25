/**
 * Zero-config PWA for Vite
 * https://github.com/antfu/vite-plugin-pwa
 */

import { VitePWA } from 'vite-plugin-pwa'
import { ViteEnv } from '/#/global'

export default function configPwaConfig(env: ViteEnv) {
  const { VITE_USE_PWA, VITE_APP_TITLE, VITE_APP_SHORT_NAME } = env

  if (VITE_USE_PWA && VITE_USE_PWA === 'true') {
    // vite-plugin-pwa
    const pwaPlugin = VitePWA({
      manifest: {
        name: VITE_APP_TITLE,
        short_name: VITE_APP_SHORT_NAME,
        icons: [
          {
            src: './resource/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './resource/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: { skipWaiting: true, clientsClaim: true }
    })
    return pwaPlugin
  }
  return []
}
