/**
 * Used to parse the .env.development proxy configuration
 */
import type { ProxyOptions } from 'vite'

type ProxyItem = [string, string]

type ProxyList = ProxyItem[]

type ProxyTargetList = Record<string, ProxyOptions & { rewrite: (path: string) => string }>

const httpsRE = /^https:\/\//

/**
 * Generate proxy
 * @param list
 */
export default function createProxy(VITE_PROXY: string) {
  let proxy: ProxyList = []
  try {
    proxy = JSON.parse(VITE_PROXY.replace(/\\n/g, '\n'))
    // eslint-disable-next-line no-empty
  } catch (error) {}

  const ret: ProxyTargetList = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const [prefix, target] of proxy) {
    const isHttps = httpsRE.test(target)
    // https://github.com/http-party/node-http-proxy#options
    ret[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {})
    }
  }

  return ret
}

// proxy: {
//   '/api': {
//     target,
//     changeOrigin: true,
//     secure: false,
//     rewrite: (path) => path.replace('/api/', '/')
//   }
// }
