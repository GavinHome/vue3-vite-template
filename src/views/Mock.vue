<template>
  <div class="mock">
    <div>Mock Page</div>
    <p>name is: {{ msg }}</p>
    <p>token is: {{ token }}</p>
    <button @click="refresh">token</button>
  </div>
</template>

<script setup lang="ts">
import { useUserState } from '@/store'
import { computed, ref } from 'vue'
import { ApiConst } from '../common/const'
import { useApi, useGet, useSuccessModal, useWarnModal } from '../hook'

const msg = ref('')

useGet<any>(ApiConst.API_MOCK_GET).then(({ name }) => {
  msg.value = name
})

const state = useUserState()
const token = computed(() => state?.token)

const refresh = async () => {
  const result = await useApi().apiRefreshToken()
  if (result.isSuccess) {
    useSuccessModal('refresh token', result?.result?.token)
  } else {
    useWarnModal('refresh token', result?.message)
  }
}
</script>
