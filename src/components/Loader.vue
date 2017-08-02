<template>
  <div class="loader"
    :class="{'loaded': loaded}">
    <div>正在加载...</div>
  </div>
</template>

<script>
export default {
  name: 'loader',
  data () {
    return {
      loaded: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.loaded = true
    }, 1500)
  }
}
</script>

<style lang='less'>
  .loader {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: 5;
    div {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: load 1.5s ease-in-out;
    }
  }
  .loaded {
    display: none
  }
</style>
