<template>
  <textarea
    :value="$store.getters.memoData(index).text"
    class="editor"
    @input="onInput"
  />
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onInput(e) {
      this.$store.commit('updateText', {
        index: this.index,
        text: e.target.value
      })
    }
  }
}
</script>

<style>
 .editor{
   position: absolute;
   top: 50px;
   left: 0;
   width: 200px;
   bottom: 40px;
   border: none;
   background: transparent;
   color: white;
   padding: 15px;
   font-size: 20px;
 }
</style>
