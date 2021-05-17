import { message } from 'ant-design-vue'

const openSuccessMsg = (content: any, duration?: number, onClose?: () => void) => {
  message.success(content, duration, onClose)
}

const openWarnMsg = (content: any, duration?: number, onClose?: () => void) => {
  message.warning(content, duration, onClose)
}

const openInfoMsg = (content: any, duration?: number, onClose?: () => void) => {
  message.info(content, duration, onClose)
}

const openErrorMsg = (content: any, duration?: number, onClose?: () => void) => {
  message.error(content, duration, onClose)
}

const useMessage = () => {
  return { openSuccessMsg, openWarnMsg, openInfoMsg, openErrorMsg }
}

export default useMessage
