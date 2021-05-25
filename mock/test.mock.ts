import { IncomingMessage, ServerResponse } from 'http'
import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from './_util'

export default [
  {
    url: '/api/test/get',
    method: 'get',
    response: ({ query }: any) => {
      return resultSuccess({ name: 'vben' })
    }
  },
  {
    url: '/test/get',
    method: 'get',
    response: ({ query }: any) => {
      return resultSuccess({ name: 'vben1' })
    }
  },
  {
    url: '/api/test/post',
    method: 'post',
    timeout: 2000,
    response: () => {
      return resultSuccess({ name: 'vben' })
    }
  },
  {
    url: '/api/test/text',
    method: 'post',
    rawResponse: async (req: IncomingMessage, res: ServerResponse) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })
      res.setHeader('Content-Type', 'text/plain')
      // eslint-disable-next-line no-param-reassign
      res.statusCode = 200
      res.end(`hello, ${reqbody}`)
    }
  }
] as MockMethod[]
