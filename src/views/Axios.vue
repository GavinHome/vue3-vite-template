<template>
  <div class="axios">
    <Card title="Axios Test" class="card" :loading="loading" hoverable>
      <template #extra><a @click="fetch">点击获取信息</a></template>
      <p>name: {{ userInfo?.name }}</p>
      <p>type: {{ userInfo?.type }}</p>
      <p>url: {{ userInfo?.html_url }}</p>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from 'vue'
import { Card } from 'ant-design-vue'
import { apiAxiosUser } from '../api'

const loading = ref(false)
const userInfo = reactive({
  name: '',
  type: '',
  html_url: ''
})

const fetch = async (): Promise<void> => {
  loading.value = true
  const res = await apiAxiosUser()
  userInfo.name = res.name
  userInfo.type = res.type
  userInfo.html_url = res.html_url
  loading.value = false
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
