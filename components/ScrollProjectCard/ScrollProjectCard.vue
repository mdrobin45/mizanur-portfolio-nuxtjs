<template>
  <div class="screen">
    <slot></slot>
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
  bottom: -100%;
  width: 100%;
  height: auto;
  position: absolute;
  z-index: 0;
  margin: 0;
  padding: 0;
  -webkit-transition: top 5s;
  -moz-transition: top 5s;
  -ms-transition: top 5s;
  -o-transition: top 5s;
  transition: bottom 5s;
}
.screen:hover img {
  bottom: 0;
  -webkit-transition: all 5s;
  -moz-transition: all 5s;
  -ms-transition: all 5s;
  -o-transition: all 5s;
  transition: all 5s;
}
</style>
