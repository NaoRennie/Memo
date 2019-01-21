<template>
  <div>
    <div
      class="btn"
      :style="{
        top: `${toppo}px`,
        left: `${left}px`
      }"
      @click="$emit('plus')"
    >
      ➕
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
    }
  }
}
</script>

<style>

.btn{
  background-color: rgb(236, 155, 155);
  display: inline-block;
  position: fixed;
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
