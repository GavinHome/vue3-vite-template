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
export default function createProxy(proxy: string) {
  let list: ProxyList = []
  try {
    list = JSON.parse(proxy)
    // eslint-disable-next-line no-empty
  } catch (error) {}

  const ret: ProxyTargetList = {}
  try {
    list.forEach(([prefix, target]) => {
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
    })
    // eslint-disable-next-line no-empty
  } catch (error) {}
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
