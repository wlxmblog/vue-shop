<template>
  <div class="modal-dialog"
    :class="{'open': isOpen}">
    <div class="content">
      <header>
        <i class="close-btn"
            @click="close">+</i>
        <slot name="header"></slot>
      </header>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import FullMask from '../components/FullMask'

export default {
  name: 'modal_dialog',
  components: {FullMask},
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    open () {
      if (!this.isOpen) {
        this.$emit('dialogOpen')
      }
      this.isOpen = true
    },
    close () {
      if (this.isOpen) {
        this.$emit('dialogClose')
      }
      this.isOpen = false
    }
  }
}
</script>

<style lang='less'>
  .modal-dialog {
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    transition: all .3s ease-out;
    transform: scale(1.2);
    opacity: 0;
    z-index: -1;
    &.open {
      box-shadow: #ccc 0 0 .1rem;
      transition: all .3s ease-in;
      transform: scale(1);
      opacity: 1;
      z-index: 20;
    }
    .content {
      position: absolute;
      top: .2rem;
      right: .2rem;
      bottom: .2rem;
      left: .2rem;
      padding: .2rem;
      background: #fff;
    }
    .close-btn {
      display: inline-block;
      position: absolute;
      top: .1rem;
      right: .1rem;
      width: .4rem;
      height: .4rem;
      text-align: center;
      line-height: .4rem;
      font-size: .6rem;
      transform: rotate(45deg);
    }
  }
</style>
