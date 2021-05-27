<template>
  <div class="login">
    <div class="box">
      <div class="logo">
        <img :src="Logo" alt="logo" width="60" />
      </div>
      <a-form
        name="login-form"
        ref="formRef"
        v-bind="layout"
        :model="formState"
        :rules="rules"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item required has-feedback :label="t('LOGIN_USERNAME')" name="username">
          <a-input
            v-model:value="formState.username"
            :placeholder="t('LOGIN_USERNAME')"
            autocomplete="off"
          >
            <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item
          required
          has-feedback
          :label="t('LOGIN_PASSWORD')"
          name="password"
          autocomplete="off"
        >
          <a-input
            v-model:value="formState.password"
            type="password"
            :placeholder="t('LOGIN_PASSWORD')"
          >
            <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item required has-feedback :label="t('LOGIN_CONFIRM')" name="confirm">
          <a-input
            v-model:value="formState.confirm"
            type="password"
            :placeholder="t('LOGIN_CONFIRM')"
            autocomplete="off"
          >
            <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 24 }">
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formState.username === '' || formState.password === ''"
          >
            {{ t('LOGIN_LOGIN') }}
          </a-button>
          <a-button style="margin-left: 10px" @click="resetForm"> {{ t('LOGIN_RESET') }}</a-button>
          <a-select
            default-value="en-US"
            v-model:value="lang"
            @change="switchLangChange"
            class="lang"
          >
            <a-select-option value="en-US"> {{ t('LOCALE_EN') }} </a-select-option>
            <a-select-option value="zh-CN"> {{ t('LOCALE_ZH') }} </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref, toRefs } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
// @ts-ignore
// import { RuleObject, ValidateErrorEntity } from 'ant-design-vue/lib/form/interface'
import Logo from '@/assets/logo.png'
import { useI18n } from 'vue-i18n'
import { useAppState, useStore } from '@/store'
import { AppActionEnum } from '@/store/modules/app/action'
import { useApi, useSign, useSuccessMsg, useWarnMsg } from '@/hook'
import { useRouter } from 'vue-router'
import RouterConst from '@/router/const'
import { AForm, AFormItem, AInput, AButton, ASelect, ASelectOption } from '#/ant-design-vue'

interface FormState {
  username: string
  password: string
  confirm: string
}

const props = defineProps({
  redirect: {
    type: String
  }
})

const { t } = useI18n()
const appState = useAppState() || { lang: 'en-US' }
const store = useStore()
const { lang } = toRefs(appState)
const i18n = useI18n()
i18n.locale.value = lang.value
function switchLangChange(value: string) {
  i18n.locale.value = value
  store.dispatch(AppActionEnum.lang, value)
}

const formState = reactive({
  username: 'vben',
  password: '123456',
  confirm: '123456'
})

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
}

const formRef = ref()

// eslint-disable-next-line no-undef
const validatePassword = async (rule: any /* RuleObject */, value: string): Promise<void> => {
  if (value === '') {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(t('LOGIN_MESSAGE_INPUT_PASSWORD'))
  }
  if (formState.confirm !== '') {
    formRef.value.validateField('checkPass')
  }
  return Promise.resolve()
}

const validateConfirmPassword = async (
  rule: any /* RuleObject */,
  value: string
): Promise<void> => {
  if (value === '') {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(t('LOGIN_MESSAGE_INPUT_PASSWORD_AGAIN'))
  }
  if (value !== formState.password) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(t('LOGIN_MESSAGE_CONFIRM_PASSWORD'))
  }
  return Promise.resolve()
}

const rules = {
  password: [{ validator: validatePassword, trigger: 'change' }],
  confirm: [{ validator: validateConfirmPassword, trigger: 'change' }]
}

const user = {
  roles: '',
  id: '',
  name: '',
  token: '',
  realName: '',
  desc: '',
  expiration: 0
}

const router = useRouter()
const handleFinish = async (values: FormState) => {
  const { username, password } = values
  const result = await useApi().apiLogin<typeof user>(username, password)
  if (result.isSuccess) {
    useSuccessMsg(t('LOGIN_MESSAGE_SUCCESSED'))
    useSign({
      id: result.result.id,
      name: result.result.name,
      token: result.result.token,
      expiration: result.result.expiration
    })
    if (props.redirect) {
      router.replace({ path: props.redirect as string })
    } else {
      router.replace({ name: RouterConst.ROUTER_HOME })
    }
  } else {
    useWarnMsg(t('LOGIN_MESSAGE_FAILED'))
  }
}
const handleFinishFailed = (errors: any /* ValidateErrorEntity<FormState> */) => {
  useWarnMsg(t('LOGIN_MESSAGE_FAILED'))
}
const resetForm = () => {
  formRef.value.resetFields()
}
</script>

<style lang="stylus" scoped>
.login {
  background-color: #f0f2f5
  height: 100vh

  .box {
    width: 550px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px 20px 20px
    border-radius: 12px
    box-shadow: 5px 3px 10px 5px #e4e4e4;

    .logo {
      margin: 20px auto
    }

    .ant-select {
      margin-left: 10px
      width: auto
    }
  }
}
</style>
