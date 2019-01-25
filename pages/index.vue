<template>
  <section
    class="container"
    @mouseup="onMouseup"
    @mousemove="onMousemove"
  >
    <Plus
      :toppo="600"
      :left="0"
      @plus="plusMemo"
    />
    <memo
      v-for="(position, index) in memoPositions"
      :key="index"
      :toppo="position.toppo"
      :left="position.left"
      @minus="minusMemo(index)"
      @onMousedown="onMousedown(index)"
    />
  </section>
</template>
<script>
import Plus from '~/components/Plus.vue'
import Memo from '~/components/Memo.vue'

export default {
  components: {
    Plus,
    Memo
  },
  data() {
    return {
      memoPositions: [
        // {
        //   toppo: 0,
        //   left: 50
        // },
      ]
    }
  },
  // data2() {
  //   this.index1 = null
  // },
  methods: {
    plusMemo() {
      const widthCount = Math.floor(window.innerWidth / 250)
      this.memoPositions = [
        ...this.memoPositions,
        { toppo: Math.floor(this.memoPositions.length / widthCount) * 350,
          left: 250 * (this.memoPositions.length % widthCount) }
      ]
    },
    minusMemo(index) {
      this.memoPositions = [...this.memoPositions]
      this.memoPositions.splice(index, 1)
    },
    onMousedown(index) {
      console.log('HHHHH')
      console.log(index, 'index')
      this.isDragging = true
      this.index1 = index
      console.log(this.index1, 'ininini')
      console.log(this.isDragging)
    },
    onMouseup(e) {
      console.log('TTTTTT')
      this.isDragging = false
      // this.memoPositions = [...this.memoPositions]
      // this.memoPositions[this.index1].toppo = e.pageX
      // this.memoPositions[this.index1].left = e.pageY
      // this.index1 = null
      console.log(this.isDragging)
      // this.memoPositions.splice(index, 1, { toppo: event.x, left: event.y })
    },
    onMousemove(e) {
      console.log('hhh')
      console.log(this.index1, 'in')
      console.log(e, 'event')
      console.log(e.pageX)
      console.log(this.isDragging)
      if (this.isDragging === true) {
        this.memoPositions = [...this.memoPositions]
        this.memoPositions[this.index1].toppo = e.pageY
        this.memoPositions[this.index1].left = e.pageX
      }
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
  background: url('../assets/blackboard.png')
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
