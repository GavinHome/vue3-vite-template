<template>
  <a-layout class="layout">
    <Header />
    <a-layout-content>
      <div class="content">
        <router-view v-slot="{ Component }">
          <!-- :include="['dashboard', 'counter', 'Axios']" -->
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import Header from '@/views/Header.vue'
import { ALayout, ALayoutContent } from '#/ant-design-vue'
</script>

<style>
.layout {
  height: 100%;
}
</style>
