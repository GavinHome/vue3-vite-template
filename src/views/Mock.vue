<template>
  <div class="mock">
    <div>Mock Page</div>
    <p>name is: {{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { ApiConst } from '../common/const'
import { useAxios } from '../hook'

const msg = ref('')

const data = {
  name: ''
}

useAxios()
  .get<typeof data>(ApiConst.API_MOCK_GET)
  .then(({ name }) => {
    msg.value = name
  })
</script>
