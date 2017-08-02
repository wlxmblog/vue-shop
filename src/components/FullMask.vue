<template>
  <div class="modal-mask"></div>
</template>

<script>
export default {
  name: 'fullMask'
}
</script>

<style lang='less'>
.full-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    z-index: 10;
  }
</style>
