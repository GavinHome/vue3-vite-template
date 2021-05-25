/**
 * Used to package and output gzip. Note that this does not work properly in Vite, the specific reason is still being investigated
 * https://github.com/anncwb/vite-plugin-compression
 */
import compressPlugin from 'vite-plugin-compression'
import type { Plugin } from 'vite'

export default function configCompressPlugin(
  compress: 'gzip' | 'brotli' | 'none',
  deleteOriginFile: boolean = false
): Plugin | Plugin[] {
  const compressList = compress.split(',')

  const plugins: Plugin[] = []
  if (compressList.includes('gzip')) {
    plugins.push(
      compressPlugin({
        ext: '.gz',
        algorithm: 'gzip',
        deleteOriginFile,
        verbose: true,
        disable: false,
        threshold: 1024 * 10
      })
    )
  }
  if (compressList.includes('brotli')) {
    plugins.push(
      compressPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile,
        verbose: true,
        disable: false,
        threshold: 1024 * 10
      })
    )
  }
  return plugins
}
