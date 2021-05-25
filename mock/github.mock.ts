import { IncomingMessage, ServerResponse } from 'http'
import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from './_util'

export default [
  {
    url: '/users/GavinHome',
    method: 'get',
    response: ({ query }: any) => {
      return {
        name: 'vben',
        type: 'gavinhome',
        html_url: 'https://github.com/gavinhome'
      }
    }
  }
] as MockMethod[]
