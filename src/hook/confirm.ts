import { Modal } from 'ant-design-vue'
import { MessageConst } from '../common/const'

const OkText = MessageConst.OK_TEXT
const CancelText = MessageConst.CANCEL_TEXT

export const openDeleteModal = (
  onOk: () => void,
  title = MessageConst.DELETE_TITLE,
  content = MessageConst.DELETE_CONTENT,
  onCancel?: () => void,
  okText = OkText,
  cancelText = CancelText
) => {
  Modal.confirm({
    title,
    content,
    onOk,
    onCancel,
    okText,
    cancelText,
    okType: 'danger'
  })
}

export const customConfirmModal = (
  title: string,
  content: string,
  onOk: () => void,
  onCancel?: () => void,
  okText = OkText,
  cancelText = CancelText
) => {
  Modal.confirm({ title, content, onOk, onCancel, okText, cancelText })
}

export const openSuccessModal = (
  title: string,
  content: string,
  onOk?: () => void,
  okText = OkText
) => {
  Modal.success({ title, content, onOk, okText })
}

export const openWarnModal = (
  title: string,
  content: string,
  onOk?: () => void,
  okText = OkText
) => {
  Modal.warning({ title, content, onOk, okText })
}

export const openInfoModal = (
  title: string,
  content: string,
  onOk?: () => void,
  okText = OkText
) => {
  Modal.info({ title, content, onOk, okText })
}

export const openErrorModal = (
  title: string,
  content: string,
  onOk?: () => void,
  okText = OkText
) => {
  Modal.error({ title, content, onOk, okText })
}

const useConfirmModal = () => {
  return {
    openSuccessModal,
    openWarnModal,
    openInfoModal,
    openErrorModal,
    customConfirmModal,
    openDeleteModal
  }
}

export default useConfirmModal
