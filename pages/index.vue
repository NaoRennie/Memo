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
      :back="eachMemo.back"
      :zIndex="eachMemo.zIndex"
      @dragStart="onDragStart($event, index)"
      @minusMemo="minusMemo(index)"
      @changeColor="changedColor(index, back)"
      @goFront="changeZindex(index)"
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
  fetch({ store }) {
    return store.dispatch('getMemoList')
    // const { data1 } = await axios.get('localhost:3000/data')
    // store.commit('setMemoList', data1)
  },
  data() {
    return {
      draggingIndex: null,
      prevX: null,
      prevY: null,
      cancelerId: null
    }
  },
  // mounted() {
  //   this.cancelerId = setInterval(() => {
  //     this.$store.dispatch('getMemoList')
  //   }, 100)
  // },
  // destroyed() {
  //   clearInterval(this.cancelerId)
  // },
  methods: {
    plusMemo() {
      console.log('add')
      console.log('postMemoList自体がasyncなのでここでreturn するとasync awaitと同じ')
      const widthCount = Math.floor(window.innerWidth / 250)
      return this.$store.dispatch('postMemoList', [
        ...this.$store.state.memoList,
        {
          toppo: Math.floor(this.$store.state.memoList.length / widthCount) * 350,
          left: (this.$store.state.memoList.length % widthCount) * 250,
          text: '',
          zIndex: 1
        }
      ])
    },
    minusMemo(index) {
      console.log('minus')
      this.$store.commit('reduceMemo', index)
    },
    changedColor(index, { back, tabBack }) {
      this.$store.commit('changedColor', { index: index, back: back, tabBack: tabBack })
    },
    onDragStart({ x, y }, index) {
      this.$store.commit('startDrag', { x: x, y: y, index: index })
      console.log(x, y, index, 'vue')
    },
    onMousemove(e) {
      this.$store.commit('moveDrag', e)
    },
    onMouseup() {
      this.$store.commit('stopDrag')
    },
    changeZindex(index) {
      console.log('YYYY')
      this.$store.commit('updateZindex')
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
