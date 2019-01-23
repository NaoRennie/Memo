<template>
  <section class="container">
    <Plus
      :toppo="600"
      :left="1200"
      @plus="plusMemo"
    />
    <memo
      v-for="(position, index) in memoPositions"
      :key="index"
      :toppo="position.toppo"
      :left="position.left"
      @minus="minusMemo(index)"
      @onMousedown="onMousedown()"
      @onMouseup="onMouseup()"
      @onMousemove="onMousemove()"

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
    onMousedown(e) {
      console.log('HHHHH')
      this.dragging = true
      this.x = this.y = 0
      console.log(event.y)
      console.log(event.x)
    },
    onMouseup(e) {
      console.log('TTTTTT')
      this.dragging = false
      this.x = this.y = 'no'
      console.log(event.y)
      console.log(event.x)
    },
    onMousemove() {
      console.log('hhh')
      if (this.dragging) {
        this.memoPositions = {
          toppo: event.x - this.x
        }
        console.log(this.x, 'this')
        console.log(event.x)
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
