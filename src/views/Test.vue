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
import { useStore } from '../store'
import { AppAction } from '../store/modules/app/action'

const msg = ref('test')

const store = useStore()
// const count = ref<number>(store.state.app.count) //lost reactivity
const { count } = toRefs(store.state.app)

const increment = () => {
  store.dispatch(AppAction.increment)
  // count.value = store.state.app.count //lost reactivity, get count
}
</script>
