<template>
  <div
    class="memo"
    :style="{
      top: `${toppo}px`,
      left: `${left}px`,
      background: `${back}`}"
  >
    <div
      class="handle"
      @mousedown="onMousedown"
    />
    <editor :index="index" />
    <span class="close" @click="$emit('minusMemo', index)">
      X
    </span>
    <div class="color-tab">
      <!-- <colorBtn class="red" @click="$emit('colorChange', index, back)" /> -->
      <colorBtn class="red" :index="index" :back="back"/>
      <colorBtn class="green" />
    </div>
  </div>
</template>
<script>
import Editor from '~/components/Editor'
import colorBtn from '~/components/colorBtn'
export default {
  components: {
    Editor,
    colorBtn
  },
  props: {
    toppo: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
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
    onMousedown(e) {
      this.$emit('dragStart', {
        x: e.pageX,
        y: e.pageY
      })
    },
    changeColor(index, { back }) {
      this.$store.commit('changedColor', {
        index: this.index,
        back: this.back })
    }
  }
}
</script>

<style>
.memo {
  position: fixed;
  background: #f00;
  width: 200px;
  height: 300px;
}
.handle {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #900;
  cursor: move;
}
.close {
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 30px;
}
.color-tab {
  display: flex;
  margin-top: 280px;
  width: 200px;
  height: 20px;
}
.red {
  width:100px;
  height: 20px;
  background-color:#CC3366;
}
.green {
  width:100px;
  height: 20px;
  background-color: rgb(5, 110, 66)
}
</style>
