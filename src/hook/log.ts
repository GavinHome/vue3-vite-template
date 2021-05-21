import useUser from './user'
import { apiLogError } from '../api'

const setLog = (error: any, data?: any): void => {
  const bodyContent = {
    entryName: `${import.meta.env.VITE_APP_TITLE}, ${import.meta.env.VITE_APP_VERSIONNAME}`,
    version: `${import.meta.env.VITE_APP_VERSION}, ${import.meta.env.VITE_APP_REVISION}`,
    message: error.message,
    metaData: {
      user: useUser().getUser()
    },
    name: error.name,
    releaseStage: import.meta.env.MODE,
    severity: error.name as string | 'error',
    stacktrace: error.stacktrace,
    time: Date.now(),
    title: 'handle response error',
    type: `HTTP Response`,
    // eslint-disable-next-line no-restricted-globals
    url: location.href,
    client: {
      userAgent: window.navigator.userAgent,
      height: window.screen.height,
      width: window.screen.width,
      referrer: window.document.referrer
    },
    data,
    error,
    lineNumber: null,
    columnNumber: null,
    // eslint-disable-next-line no-restricted-globals
    fileName: location.href,
    pageLevel: null
  }

  apiLogError(bodyContent)
}

const useLog = () => {
  return { setLog }
}

export default useLog
