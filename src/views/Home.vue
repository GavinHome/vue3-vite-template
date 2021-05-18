<template>
  <a-layout style="height: 100%">
    <Header />
    <a-layout-content>
      <div class="content">
        <router-view v-slot="{ Component }">
          <keep-alive :include="['Dashboard', 'Test']">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/views/Header.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Header
  }
})
</script>
