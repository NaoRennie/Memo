<template>
  <section
    class="container"
    @mousemove="onMousemove($event)"
    @mouseup="onMouseup"
  >
    <memo
      v-for="(eachMemo, index) in $store.state.memoList"
      :key="index"
      :toppo="eachMemo.toppo"
      :left="eachMemo.left"
      :index="index"
      @dragStart="onDragStart($event, index)"
      @minusMemo="minusMemo(index)"
    />
    <plus-btn @plus="plusMemo" />
  </section>
</template>

<script>
import Memo from '~/components/Memo.vue'
import PlusBtn from '~/components/PlusBtn.vue'

export default {
  components: {
    Memo,
    PlusBtn
  },
  data() {
    return {
      draggingIndex: null,
      prevX: null,
      prevY: null
    }
  },
  methods: {
    plusMemo() {
      console.log('add')
      const widthCount = Math.floor(window.innerWidth / 250)
      this.$store.commit('addMemo', {
        toppo: Math.floor(this.$store.state.memoList.length / widthCount) * 350,
        left: (this.$store.state.memoList.length % widthCount) * 250,
        text: ''
      })
    },
    minusMemo(index) {
      console.log('minus')
      this.$store.commit('reduceMemo', index)
    },
    onDragStart({ x, y }, index) {
      this.$store.commit('startDrag', { x: x, y: y, index: index })
      console.log(x, y, index, 'vue')

      // this.draggingIndex = index
      // this.prevX = x
      // this.prevY = y
    },
    onMousemove(e) {
      this.$store.commit('moveDrag', e)
    },
    onMouseup() {
      // this.draggingIndex = null
      this.$store.commit('stopDrag')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('../assets/blackboard.png');
  user-select: none;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
