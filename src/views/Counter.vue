<template>
  <div class="counter">
    <div class="page-title">Counter Page</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)

const increment = () => {
  count.value += 1
}
</script>
