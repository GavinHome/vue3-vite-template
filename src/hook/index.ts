import { useUserInfo, useCheckToken, useSign } from './useUser'
import { useLog } from './useLog'
import { useGet, usePost, usePut, usePatch, useDelete } from './axios/useAxios'
import { useSuccessMsg, useWarnMsg, useInfoMsg, useErrorMsg } from './useMessage'
import {
  useSuccessModal,
  useWarnModal,
  useInfoModal,
  useErrorModal,
  useCustomConfirmModal,
  useDeleteModal
} from './useConfirm'
import useConfig from './useConfig'
import useApi from './api/useApi'

export default {
  useGet,
  usePost,
  usePut,
  usePatch,
  useDelete,
  useLog,
  useUserInfo,
  useCheckToken,
  useSign,
  useSuccessMsg,
  useWarnMsg,
  useInfoMsg,
  useErrorMsg,
  useSuccessModal,
  useWarnModal,
  useInfoModal,
  useErrorModal,
  useCustomConfirmModal,
  useDeleteModal,
  useConfig,
  useApi
}

export {
  useGet,
  usePost,
  usePut,
  usePatch,
  useDelete,
  useLog,
  useUserInfo,
  useCheckToken,
  useSign,
  useSuccessMsg,
  useWarnMsg,
  useInfoMsg,
  useErrorMsg,
  useSuccessModal,
  useWarnModal,
  useInfoModal,
  useErrorModal,
  useCustomConfirmModal,
  useDeleteModal,
  useConfig,
  useApi
}
