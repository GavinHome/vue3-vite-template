<template>
  <a-menu mode="horizontal" :selectedKeys="selectedKeys" @click="click">
    <a-menu-item v-for="item in menus" :key="item.key">
      {{ item.title }}
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, watch, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import RouterConst from '../router/const'

export default defineComponent({
  name: 'Header',
  setup(): any {
    const router = useRouter()

    const menus: Array<any> = [
      { key: RouterConst.ROUTER_HOME, title: 'Home' },
      { key: RouterConst.ROUTER_ABOUT, title: 'About' }
    ]
    const selectedKeys: Array<string> = []
    const click = async (params: { key: string }) => {
      await router.push({ name: params.key })
    }
    const state = reactive({ selectedKeys, menus, click })

    const activeNav = (path: string) => {
      const name = path.replace('/', '')
      if (state.menus.find((x) => x.key === name)) {
        state.selectedKeys = [name]
      } else {
        state.selectedKeys = [RouterConst.ROUTER_HOME]
      }
    }

    watch(
      () => router.currentRoute.value,
      (_n) => {
        activeNav(_n.path)
      }
    )

    onMounted(() => {
      router.isReady().then(() => {
        activeNav(router.currentRoute.value.path)
      })
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>
