<template>
  <a-menu mode="horizontal" v-model:selectedKeys="selectedKeys" @click="click">
    <a-menu-item v-for="item in navigators" :key="item.key">
      {{ item.title }}
    </a-menu-item>
    <div class="lang">
      <a-select default-value="en-US" v-model:value="lang" @change="switchLangChange">
        <a-select-option value="en-US"> {{ t('LOCALE_EN') }} </a-select-option>
        <a-select-option value="zh-CN"> {{ t('LOCALE_ZH') }} </a-select-option>
      </a-select>
    </div>
  </a-menu>
</template>

<script setup lang="ts">
import { onMounted, watch, computed, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Menu, Select } from 'ant-design-vue'
import RouterConst from '../router/const'
import { useStore } from '../store'
import { AppAction } from '../store/modules/app/action'

const AMenu = Menu
const AMenuItem = Menu.Item
const ASelect = Select
const ASelectOption = Select.Option

const router = useRouter()
const { t } = useI18n()
const i18n = useI18n()
const navigators = computed(() => [
  { key: RouterConst.ROUTER_HOME, title: t('ROUTER_HOME') },
  { key: RouterConst.ROUTER_ABOUT, title: t('ROUTER_ABOUT') },
  { key: RouterConst.ROUTER_COUNTER, title: t('ROUTER_COUNTER') },
  { key: RouterConst.ROUTER_AXIOS, title: t('ROUTER_AXIOS') },
  { key: RouterConst.ROUTER_TEST, title: t('ROUTER_TEST') }
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

const store = useStore()
const { lang } = toRefs(store.state.app)
i18n.locale.value = lang.value
function switchLangChange(value: string) {
  i18n.locale.value = value
  store.dispatch(AppAction.lang, value)
}
</script>

<style lang="stylus" scoped>
.lang {
  float: right;
  margin-right: 20px;
}
</style>
