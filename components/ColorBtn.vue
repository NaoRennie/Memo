<template>
  <div
    class="colorbtn"
    :style="{
      background: `${tabBack}`,
      width: `${tabWidth}`
    }"
    @click="$emit('colorChange')"
  >
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    tabBack: {
      type: String,
      default: null
    }
  }
}
</script>

<style>
.colorbtn {
  border: thick double rgba(245, 242, 247, 0.6)
}
</style>
