<template>
  <div
    class="memo"
    :style="{
      top: `${toppo}px`,
      left: `${left}px`,
      background: `${back}`}"
    :index="index"
    :back="colorList[2]"
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
      <colorBtn
      class="tab"
      v-for="(color, tabindex) in colorList"
      :key="tabindex"
      :tabindex="tabindex"
      :tabBack="colorList[tabindex]"
      @colorChange="changeColor(tabindex)"/>
      <!-- tabWidthを計算で出す -->
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
  data() {
    return {
      colorList: [ '#FFBEDA', '#CCFFFF', '#FFFFCC', '#AEFFBD', '#DCC2FF' ]
    }
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
    },
    tabindex: {
      type: Number,
      default: 0
    },
    tabBack: {
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
    changeColor(tabindex) {
      this.$store.commit('changedColor', {
        index: this.index,
        back: this.colorList[tabindex],
        tabBack: this.colorList[tabindex]
      })
    }
  }
}
</script>

<style>
.memo {
  position: fixed;
  background: #FFBEDA;
  width: 200px;
  height: 320px;
}
.handle {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: rgb(134, 88, 51);
  cursor: move;
}
.close {
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 30px;
  border-radius: 50%;
  background: rgb(109, 54, 3);
  border: rgb(90, 50, 3) 2px solid;
  width: 40px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
}
.color-tab {
  display: flex;
  margin-top: 280px;
  width: 200px;
}
.tab {
  width: 100px;
  height: 40px;
}
</style>
