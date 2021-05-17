<template>
  <a-layout style="height: 100%">
    <Header />
    <a-layout-content class="content">
      <div class="contentBox">
        <!-- <transition name="fade">
          <router-view />
        </transition> -->
        <router-view />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/views/Header.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
})
</script>
