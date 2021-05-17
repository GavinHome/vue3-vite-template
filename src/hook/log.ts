import { useUser } from './user'
import { ApiConst } from '../common/api'
import { ApiResult } from '../common/model'
import axios from '../http/axios'

const setLog = (error: any): void => {
  // eslint-disable-next-line
  error.metaData = {
    user: useUser()
  }

  axios.post<ApiResult<any>>(`${ApiConst.API_LOG_INDEX}`, error)
}

const useLog = () => {
  return { setLog }
}

export { useLog }

export default useLog
