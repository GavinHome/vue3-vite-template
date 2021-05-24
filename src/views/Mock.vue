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

useAxios()
  .get(ApiConst.API_MOCK_GET, {}, false)
  .then(({ data }) => {
    msg.value = data.name
  })
</script>
