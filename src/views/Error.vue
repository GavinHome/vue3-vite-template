<template>
  <div class="error">
    <img :src="errorSvg" alt="error" />
    <div class="content">
      <h1>出错了</h1>
      <div class="desc">{{ desc }}</div>
      <div class="back" @click="goBack">返回首页</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import errorSvg from '@/assets/500.svg'
import RouterConst from '../router/const'

export default defineComponent({
  name: 'Error',
  props: {
    desc: {
      type: String
      // required: true
    }
  },
  // components: { errorSvg },
  setup: () => {
    const router = useRouter()
    const goBack = () => {
      router.replace(RouterConst.ROUTER_HOME)
    }

    return { errorSvg, goBack }
  }
})
</script>

<style lang="stylus" scoped>
// @import '@/assets/var.styl';
.error {
  align-items: center;
  height: 100%;
  min-height: 500px;

  .svg {
    margin-top: 100px;
  }

  h1 {
    margin: 30px;
    color: #434e59;
    font-weight: 600;
    line-height: 72px;
  }

  .desc {
    margin-bottom: 16px;
    // color: $text-color-secondary;
    font-size: 20px;
    line-height: 28px;
  }

  .back {
    // color: $primary-color;
    cursor: pointer;
  }
}
</style>
