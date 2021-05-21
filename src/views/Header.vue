<template>
  <a-menu mode="horizontal" :selectedKeys="state.selectedKeys" @click="click">
    <a-menu-item v-for="item in state.menus" :key="item.key">
      {{ item.title }}
    </a-menu-item>
    <div class="select-lang">
      <a-select default-value="en-US" @change="handleLangChange">
        <a-select-option value="en-US"> {{ t('LOCALE_EN') }} </a-select-option>
        <a-select-option value="zh-CN"> {{ t('LOCALE_ZH') }} </a-select-option>
      </a-select>
    </div>
  </a-menu>
</template>

<script setup lang="ts">
import { onMounted, reactive, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import RouterConst from '../router/const'

const router = useRouter()
const { t } = useI18n()
const i18n = useI18n()
const menus = computed(() => [
  { key: RouterConst.ROUTER_HOME, title: t('ROUTER_HOME') },
  { key: RouterConst.ROUTER_ABOUT, title: t('ROUTER_ABOUT') },
  { key: RouterConst.ROUTER_COUNTER, title: t('ROUTER_COUNTER') },
  { key: RouterConst.ROUTER_AXIOS, title: t('ROUTER_AXIOS') }
])

const selectedKeys: Array<string> = []
const click = async (params: { key: string }) => {
  await router.push({ name: params.key })
}
const state = reactive({ selectedKeys, menus })

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

const handleLangChange = (value: string) => {
  i18n.locale.value = value
}
</script>

<style lang="stylus" scoped>
.select-lang {
  float: right;
  margin-right: 20px;
}
</style>
