<template>
   <div
    class="colorbtn"
    @click="changeColor">
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    back: {
      type: String,
      default: null
    }
  },
  methods: {
    changeColor(index, back) {
      console.log('FFF')
      this.$store.commit('changedColor', {
        index: this.index,
        back: '#CC3366' })
    }
  }
}
</script>

<style>
.colorbtn {
  height: 20px;
}
</style>
