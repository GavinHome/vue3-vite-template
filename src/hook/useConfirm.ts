import { Modal } from 'ant-design-vue'
import i18n from '../language'

const { t } = i18n.global

const OkText = t('OK_TEXT')
const CancelText = t('CANCEL_TEXT')
const DeleteTitle = t('DELETE_TITLE')
const DeleteContent = t('DELETE_CONTENT')

const useDeleteModal = (
  onOk: () => void,
  title = DeleteTitle,
  content = DeleteContent,
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

const useCustomConfirmModal = (
  title: string,
  content: string,
  onOk: () => void,
  onCancel?: () => void,
  okText = OkText,
  cancelText = CancelText
) => {
  Modal.confirm({ title, content, onOk, onCancel, okText, cancelText })
}

const useSuccessModal = (title: string, content: string, onOk?: () => void, okText = OkText) => {
  Modal.success({ title, content, onOk, okText })
}

const useWarnModal = (title: string, content: string, onOk?: () => void, okText = OkText) => {
  Modal.warning({ title, content, onOk, okText })
}

const useInfoModal = (title: string, content: string, onOk?: () => void, okText = OkText) => {
  Modal.info({ title, content, onOk, okText })
}

const useErrorModal = (title: string, content: string, onOk?: () => void, okText = OkText) => {
  Modal.error({ title, content, onOk, okText })
}

export {
  useSuccessModal,
  useWarnModal,
  useInfoModal,
  useErrorModal,
  useCustomConfirmModal,
  useDeleteModal
}
