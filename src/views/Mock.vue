<template>
  <div class="mock">
    <div>Mock Page</div>
    <p>name is: {{ msg }}</p>
    <p class="token">token is: {{ token }}</p>
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

const color = ref('red')
const refresh = async () => {
  color.value = 'blue'
  const result = await useApi().apiRefreshToken()
  if (result.isSuccess) {
    useSuccessModal('refresh token', result?.result?.token)
  } else {
    useWarnModal('refresh token', result?.message)
  }
}
</script>

<style lang="stylus" scoped>
.token {
  color: v-bind(color)
}
</style>
