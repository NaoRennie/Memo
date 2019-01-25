<template>
  <div
    class="memo"
    :style="{
      top: `${toppo}px`,
      left: `${left}px`
    }"
  >
    <div
      class="tab"
      @mousedown="$emit('onMousedown')"
    />
    <div
      class="btn1"
      @click="$emit('minus')"
    >
      ×
    </div>
    <textarea id="textarea" />
    <div class="colors_btn">
      <div class="pink" @click="$emit('clickPink')"/>
      <div class="green" @click="$emit('clickGreen')"/>
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

.memo{
  display: inline-block;
  position: fixed;
  height: 400px;
  width: 250px;
}
.tab{
  display: inline-block;
  position: fixed;
  height: 50px;
  width: 250px;
  background-color: rgb(167, 94, 201);
}
#textarea{
  width: 250px;
  height: 300px;
  /* position: absolute; */
  margin-top: 50px;
  background-color: rgb(223, 14, 111);
  font-size: 20px;
}
.btn1{
  background-color: rgb(219, 111, 233);
  display: inline-block;
  position: absolute;
  top: 3px;
  left: 200px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: 40px;
}
.colors_btn{
  display: flex;
}
.pink {
  width: 125px;
  height: 50px;
  background-color: pink;
}
.green {
  width: 125px;
  height: 50px;
  background-color: rgb(110, 238, 110);
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
