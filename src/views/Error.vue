<template>
  <div class="error">
    <img src="@/assets/500.svg" alt="error" />
    <div class="content">
      <h1>出错了</h1>
      <div class="msg">{{ msg }}</div>
      <div class="back" @click="goBack">返回首页</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
import RouterConst from '../router/const'

defineProps({
  msg: {
    type: String,
    default: '中华人名'
  }
})

const router = useRouter()
const goBack = () => router.replace(RouterConst.ROUTER_HOME)
</script>

<style lang="stylus" scoped>
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

  .msg {
    margin-bottom: 16px;
    color: $text-color-secondary;
    font-size: 20px;
    line-height: 28px;
    opacity: 0.45;
  }

  .back {
    color: $primary-color;
    cursor: pointer;
  }
}
</style>
