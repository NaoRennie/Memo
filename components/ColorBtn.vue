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
  // methods: {
  //   changeColor(tabindex, back) {
  //     console.log('FFF')
  //     this.$store.commit('changedColor', {
  //       index: this.index,
  //       back: this.back })
  //   }
  // }
}
</script>

<style>
.colorbtn {
  height: 20px;
}
</style>
