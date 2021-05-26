import { Recordable } from 'vite-plugin-mock'
import { ViteEnv } from '#/global'

// Read all environment variable configuration files to process.env
export default function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {}
  Object.keys(envConf).forEach((envName) => {
    let realName = envConf[envName].replace(/\\n/g, '\n')
    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }
    // if (envName === 'VITE_PROXY') {
    //   try {
    //     realName = JSON.parse(realName)
    //     // eslint-disable-next-line no-empty
    //   } catch (error) {
    //     realName = []
    //   }
    // }
    ret[envName] = realName
    process.env[envName] = realName
  })

  return ret as ViteEnv
}
