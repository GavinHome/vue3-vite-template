import { message } from 'ant-design-vue'

const useSuccessMsg = (content: any, duration?: number, onClose?: () => void) => {
  message.success(content, duration, onClose)
}

const useWarnMsg = (content: any, duration?: number, onClose?: () => void) => {
  message.warning(content, duration, onClose)
}

const useInfoMsg = (content: any, duration?: number, onClose?: () => void) => {
  message.info(content, duration, onClose)
}

const useErrorMsg = (content: any, duration?: number, onClose?: () => void) => {
  message.error(content, duration, onClose)
}

export { useSuccessMsg, useWarnMsg, useInfoMsg, useErrorMsg }
