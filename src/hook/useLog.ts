import useApi from './api/useApi'
import { useUserInfo } from './useUser'

const useLog = (error: any, data?: any): void => {
  // eslint-disable-next-line no-restricted-globals
  const url = location.href
  const bodyContent = {
    entryName: `${import.meta.env.VITE_APP_TITLE}, ${import.meta.env.VITE_APP_VERSIONNAME}`,
    version: `${import.meta.env.VITE_APP_VERSION}, ${import.meta.env.VITE_APP_REVISION}`,
    message: error.message,
    metaData: {
      user: useUserInfo()
    },
    name: error.name,
    releaseStage: import.meta.env.MODE,
    severity: error.name as string | 'error',
    stacktrace: error.stacktrace,
    time: Date.now(),
    title: 'handle response error',
    type: `HTTP Response`,
    url,
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
    fileName: url,
    pageLevel: null
  }

  useApi()
    .apiLogError(bodyContent)
    .catch((e) => {})
}

export { useLog }
