<template>
  <input v-model="msg" />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Test',
  setup: () => {
    const msg = ref('test')
    return { msg }
  }
})
</script>
