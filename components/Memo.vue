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
      <colorBtn
      :index="index"
      :back="back"
      class="tab"
      v-for="(color, tabindex) in colorList"
      :key="tabindex"
      :tabindex="tabindex"
      :tabBack="colorList[tabindex]"
      @click="changeColor(index, { tabIndex, back })"/>
      <!-- :back="$store.getters.colorData(tabindex-1)"  -->
      <!-- <colorBtn
      //tabWidthを計算で出す
      class="green"
      :index="index"
      :back="$store.getters.colorData(index-1)" /> -->
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
      colorList: [ '#CC3366', '#66FF99' ]
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
    changeColor(index, { tabindex, back }) {
      console.log('YYYYYYYYYYYYYYYYYYYYY')
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
.tab {
  width:100px;
  height: 20px;
}
</style>
