import moment from 'moment'
import { MockMethod } from 'vite-plugin-mock'
import { resultError, resultSuccess } from './_util'

function createFakeUserList() {
  return [
    {
      id: '1',
      name: 'vben',
      realName: 'Vben Admin',
      avatar: 'http://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      desc: 'manager',
      password: '123456',
      token: 'fakeToken1',
      roles: [
        {
          roleName: 'Super Admin',
          value: 'super'
        }
      ]
    },
    {
      id: '2',
      name: 'test',
      realName: 'test user',
      avatar: 'http://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
      desc: 'tester',
      password: '123456',
      token: 'fakeToken2',
      roles: [
        {
          roleName: 'Tester',
          value: 'test'
        }
      ]
    }
  ]
}

const fakeCodeList: any = {
  '1': ['1000', '3000', '5000'],

  '2': ['2000', '4000', '6000']
}
export default [
  // mock user login
  {
    url: '/api/v1/user/login',
    timeout: 200,
    method: 'post',
    response: ({ body }: any) => {
      const { username, password } = body
      const checkUser = createFakeUserList().find(
        (item) => item.name === username && password === item.password
      )
      if (!checkUser) {
        return resultError('Incorrect account or password！')
      }
      const { id, name, token, realName, desc, roles } = checkUser
      const expiration = moment().add(7200, 'second').format('YYYY-MM-DDTHH:mm:ss.SSS')
      return resultSuccess({
        id,
        name,
        realName,
        desc,
        token,
        roles,
        expiration
      })
    }
  },
  {
    url: '/api/v1/user/refresh',
    timeout: 200,
    method: 'post',
    response: ({ headers }: any) => {
      if (!headers) {
        return resultError('Incorrect token!')
      }

      const { authorization } = headers
      if (!authorization) {
        return resultError('Incorrect token!')
      }

      const checkUser = createFakeUserList().find(
        (item) => item.token === authorization.replace('Bearer ', '')
      )
      if (!checkUser) {
        return resultError('Incorrect account！')
      }

      const { id, name, token, realName, desc, roles } = checkUser
      const expiration = moment().add(7200, 'second').format('YYYY-MM-DDTHH:mm:ss.SSS')
      return resultSuccess({
        id,
        name,
        realName,
        desc,
        token,
        roles,
        expiration
      })
    }
  },
  // mock get user info
  {
    url: '/api/v1/user/getUserInfoById',
    method: 'get',
    response: ({ query }: any) => {
      const { userId } = query
      const checkUser = createFakeUserList().find((item) => item.id === userId)
      if (!checkUser) {
        return resultError('The corresponding user information was not obtained!')
      }
      return resultSuccess(checkUser)
    }
  },
  // mock get perm code by user id
  {
    url: '/api/v1/user/getPermCodeByUserId',
    timeout: 200,
    method: 'get',
    response: ({ query }: any) => {
      const { userId } = query
      if (!userId) {
        return resultError('userId is not null!')
      }
      const codeList = fakeCodeList[userId]

      return resultSuccess(codeList)
    }
  }
] as MockMethod[]
