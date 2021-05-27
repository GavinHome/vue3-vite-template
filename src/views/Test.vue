<template>
  <div class="counter">
    <div class="page-title">Test Page</div>
    <input v-model="msg" />
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { useAppState, useStore } from '../store'
import { AppActionEnum } from '../store/modules/app/action'

const msg = ref('test')
const appState = useAppState() || { count: 10 }
const store = useStore()
// const count = ref<number>(appState.count) //lost reactivity
const { count } = toRefs(appState)

const increment = () => {
  store.dispatch(AppActionEnum.increment)
  // count.value = appState.count //lost reactivity, get count
}
</script>
