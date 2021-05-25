/**
 * Mock plugin for development and production.
 * https://github.com/anncwb/vite-plugin-mock
 */
import { viteMockServe } from 'vite-plugin-mock'

export default function configMockPlugin(isBuild: boolean, useMock: boolean) {
  if (!useMock) return []
  return viteMockServe({
    ignore: /^_/, /// ^\_/
    mockPath: 'mock',
    supportTs: true,
    localEnabled: !isBuild
    // prodEnabled: isBuild,
    // injectCode: `
    //   import setupProdMockServer from '../mock/_createProductionServer';

    //   setupProdMockServer();
    //   `
  })
}
