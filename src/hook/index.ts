import useUser from './user'
import useLog from './log'
import useAxios from './axios'
import useMessage from './message'
import useConfirmModal from './confirm'
import useConfig from './config'
import useApi from './api'

const hook = { useAxios, useLog, useUser, useMessage, useConfirmModal, useConfig, useApi }

export default hook
export { useAxios, useLog, useUser, useMessage, useConfirmModal, useConfig, useApi }
