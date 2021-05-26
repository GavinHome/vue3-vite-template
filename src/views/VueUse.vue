<template>
  <div class="counter">
    <div class="page-title">VueUse Page</div>
    <p>default: {{ init }}</p>
    <p>count is: {{ count }}</p>
    <button @click="inc(1)">increment</button>
    <button @click="dec(1)">decrement</button>
    <button @click="set(11)">set to 11</button>
    <button @click="reset()">reset to {{ init }}</button>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '@vueuse/core'

const init = 8
const { count, inc, dec, set, reset } = useCounter(init)
</script>
