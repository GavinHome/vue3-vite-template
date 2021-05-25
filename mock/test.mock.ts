import { IncomingMessage, ServerResponse } from 'http'
import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from './_util'

export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }: any) => {
      // return {
      //   code: 0,
      //   data: {
      //     name: 'vben'
      //   }
      // }
      return resultSuccess({ name: 'vben' })
    }
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: () => {
      return resultSuccess({ name: 'vben' })
    }
    // response: {
    //   code: 0,
    //   data: {
    //     name: 'vben'
    //   }
    // }
  },
  {
    url: '/api/text',
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
