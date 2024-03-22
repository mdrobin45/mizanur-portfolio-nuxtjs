<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});
const { src } = props;
console.log(src);
</script>

<template>
  <div class="screen">
    <img :src="src">
  </div>
</template>

<style>
.screen {
  display: block;
  width: 350px;
  height: 350px;
  overflow: hidden;
  position: relative;
  border: 2px solid #2b39e545;
  margin: 0 auto;
  border-radius: 10px;
}
.screen img {
  bottom: -1210px;
  width: 100%;
  height: auto;
  position: absolute;
  z-index: 0;
  margin: 0;
  padding: 0;
  -webkit-transition: top 11s;
  -moz-transition: top 11s;
  -ms-transition: top 11s;
  -o-transition: top 11s;
  transition: bottom 11s;
}
.screen:hover img {
  bottom: 0;
  -webkit-transition: all 11s;
  -moz-transition: all 11s;
  -ms-transition: all 11s;
  -o-transition: all 11s;
  transition: all 11s;
}
</style>
