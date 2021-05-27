<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>This text font color from `$primary-color` of var.styl</h2>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="stylus" scoped>
.about h2 {
  color: $primary-color;
}
</style>
