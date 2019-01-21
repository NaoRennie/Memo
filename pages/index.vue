<template>
  <section class="container">
    <div>
      <Plus
        :toppo="400"
        :left="750"
        @plus="plusMemo" />
      <!-- <logo /> -->
      <!-- <memo :top="50" :left="0" />
      <memo :top="50" :left="250" />
      <memo :top="50" :left="300" /> -->
      <memo
        v-for="(position, index) in memoPositions"
        :key="index"
        :toppo="position.toppo"
        :left="position.left"
        @minus="minusMemo(index)"/>
      <h1 class="title">
        mymemo
      </h1>
      <h2 class="subtitle">
        mymemo
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
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
        // {
        //   toppo: 0,
        //   left: 350
        // },
        // {
        //   toppo: 0,
        //   left: 700
        // }
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
      console.log(index)
      this.memoPositions = [...this.memoPositions]
      this.memoPositions.splice(index, 1)
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
  background: url('../assets/wall.jpg')
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
