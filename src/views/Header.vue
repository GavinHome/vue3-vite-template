<template>
  <Menu
    mode="horizontal"
    :selectedKeys="selectedKeys"
    :openKeys="openKeys"
    @click="click"
    @openChange="openChange"
  >
    <a-menu-item v-for="item in menus" :key="item.key">
      <span>{{ item.title }}</span>
    </a-menu-item>
  </Menu>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Menu } from 'ant-design-vue'
import RouterConst from '../router/const'

export default defineComponent({
  name: 'Header',
  components: { Menu },
  setup() {
    const menus: Array<any> = reactive([
      { key: RouterConst.ROUTER_DASHBOARD, title: 'Home' },
      { key: RouterConst.ROUTER_ABOUT, title: 'About' }
    ])

    const selectedKeys: Array<string> = reactive([])
    const openKeys: string[] = reactive([])

    const router = useRouter()
    const click = async (params: { key: string }) => {
      await router.push({ name: params.key })
    }

    const openChange = async () => {
      // this.openKeys = openKeys;
    }

    return {
      menus,
      selectedKeys,
      openKeys,
      click,
      openChange
    }
  }
})
</script>
