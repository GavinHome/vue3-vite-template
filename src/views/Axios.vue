<template>
  <div class="axios">
    <Card title="Axios Test" style="width: 480px" :loading="loading" hoverable>
      <template #extra><a href="#" @click="fetch">点击获取信息</a> </template>
      <p>name: {{ userInfo?.name }}</p>
      <p>type: {{ userInfo?.type }}</p>
      <p>url: {{ userInfo?.html_url }}</p>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { Card } from 'ant-design-vue'
import axios from '../http/axios'
import { ApiConst } from '../common/api'

export default defineComponent({
  name: 'Axios',
  components: { Card },
  setup() {
    const state = reactive({
      loading: false,
      userInfo: null
    })
    const fetch = async () => {
      state.loading = true
      const res = await axios.get(ApiConst.API_AXIOS_USER, {}, false)
      state.userInfo = res
      state.loading = false
    }
    return { ...toRefs(state), fetch }
  }
})
</script>

<style lang="stylus" scoped>
.axios {
    justify-content: center;
    padding: 20px;
    display: flex;
}
</style>
