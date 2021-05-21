<template>
  <div class="axios">
    <Card title="Axios Test" class="card" :loading="state.loading" hoverable>
      <template #extra><a @click="fetch">点击获取信息</a></template>
      <p>name: {{ state.userInfo ? state.userInfo.name : '' }}</p>
      <p>type: {{ state.userInfo ? state.userInfo.type : '' }}</p>
      <p>url: {{ state.userInfo ? state.userInfo.html_url : '' }}</p>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Card } from 'ant-design-vue'
import { apiAxiosUser } from '../api'

const state = reactive({
  loading: false,
  userInfo: {
    name: '',
    type: '',
    html_url: ''
  }
})

const fetch = async (): Promise<void> => {
  state.loading = true
  const res = await apiAxiosUser()
  state.userInfo = res
  state.loading = false
}
</script>

<style lang="stylus" scoped>
.axios {
    justify-content: center;
    padding: 20px;
    display: flex;

    .card {
      width: 480px
    }
}
</style>
