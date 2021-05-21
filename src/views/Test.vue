<template>
  <input v-model="msg" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('test')
</script>
