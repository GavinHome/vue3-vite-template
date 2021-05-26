<template>
  <div class="mock">
    <div>Mock Page</div>
    <p>name is: {{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ApiConst } from '../common/const'
import { useGet } from '../hook'

const msg = ref('')

const data = {
  name: ''
}

useGet<typeof data>(ApiConst.API_MOCK_GET).then(({ name }) => {
  msg.value = name
})
</script>
