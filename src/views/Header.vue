<template>
  <a-menu mode="horizontal" :selectedKeys="selectedKeys" @click="click">
    <a-menu-item v-for="item in navigators" :key="item.key">
      {{ item.title }}
    </a-menu-item>
    <div class="lang">
      <a-select default-value="en-US" @change="switchLangChange">
        <a-select-option value="en-US"> {{ t('LOCALE_EN') }} </a-select-option>
        <a-select-option value="zh-CN"> {{ t('LOCALE_ZH') }} </a-select-option>
      </a-select>
    </div>
  </a-menu>
</template>

<script setup lang="ts">
import { onMounted, reactive, watch, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import RouterConst from '../router/const'

const router = useRouter()
const { t } = useI18n()
const i18n = useI18n()
const navigators = computed(() => [
  { key: RouterConst.ROUTER_HOME, title: t('ROUTER_HOME') },
  { key: RouterConst.ROUTER_ABOUT, title: t('ROUTER_ABOUT') },
  { key: RouterConst.ROUTER_COUNTER, title: t('ROUTER_COUNTER') },
  { key: RouterConst.ROUTER_AXIOS, title: t('ROUTER_AXIOS') }
])

const selectedKeys = ref<Array<string>>([])
const click = async (params: { key: string }) => {
  await router.push({ name: params.key })
}

const activeNav = (path: string) => {
  const name = path.replace('/', '')
  if (navigators.value.find((x) => x.key === name)) {
    selectedKeys.value = [name]
  } else {
    selectedKeys.value = [RouterConst.ROUTER_HOME]
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

function switchLangChange(value: string) {
  i18n.locale.value = value
}
</script>

<style lang="stylus" scoped>
.lang {
  float: right;
  margin-right: 20px;
}
</style>
