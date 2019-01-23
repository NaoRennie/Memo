<template>
  <div class="memo">
    <div
      class="memo1"
      :style="{
        top: `${toppo}px`,
        left: `${left}px`
      }"
      @mousedown="$emit('onMousedown')"
      @mouseup="$emit('onMouseup')"
      @mousemove="$emit('onMousemove')"
    >
      <div
        class="btn1"
        @click="$emit('minus')"
      >
        ✖︎
      </div>
      <textarea />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    toppo: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    data() {
      return {
        isDragging: false,
        prevX: 0,
        prevY: 0
      }
    }
  }
}
</script>

<style>

.memo1{
  display: inline-block;
  position: fixed;
  height: 350px;
  width: 250px;
  background-color: rgb(236, 155, 155);
}
textarea{
  width: 250px;
  height: 300px;
  /* position: absolute; */
  margin-top: 50px;
  background-color: rgb(196, 7, 7);
  font-size: 20px;
}
.btn1{
  background-color: rgb(240, 13, 164);
  display: inline-block;
  position: absolute;
  top: 3px;
  left: 200px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: 40px;
}

/* memo.{
  position: fixed;
  top: 10px;
  left: 10px;
  background: #f00;
  width: 200px;
  height: 300px;
} */

</style>
