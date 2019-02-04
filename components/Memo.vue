<template>
  <div
    class="memo"
    :style="{
      top: `${toppo}px`,
      left: `${left}px`,
      background: `${back}`,
      zIndex: `${zIndex}`}"
    :index="index"
    :back="back"
    :zIndex="zIndex"
    @click="goFront(index)"
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
        v-for="(color, tabIndex) in colorList"
        :key="tabIndex"
        class="tab"
        :tabIndex="tabIndex"
        :tabBack="colorList[tabIndex]"
        @colorChange="changeColor(tabIndex)"
      />
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
    tabIndex: {
      type: Number,
      default: 0
    },
    tabBack: {
      type: String,
      default: '#FFBEDA'
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      colorList: [ '#FFBEDA', '#CCFFFF', '#FFFFCC', '#AEFFBD', '#DCC2FF' ]
    }
  },
  methods: {
    onMousedown(e) {
      this.$emit('dragStart', {
        x: e.pageX,
        y: e.pageY
      })
    },
    changeColor(tabIndex) {
      this.$store.commit('changedColor', {
        index: this.index,
        back: this.colorList[tabIndex],
        tabBack: this.colorList[tabIndex]
      })
    },
    goFront(index) {
      this.$store.commit('updateZindex', index)
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
