<template>
  <header class="app-top">
    <span>
      <i class="uk-icon-chevron-left"
        @click="$router.go(-1)"></i>{{title}}
      <slot></slot>
    </span>
  </header>
</template>

<script>
export default {
  name: 'appTop',
  props: ['title']
}
</script>

<style lang='less'>
  .app-top {
    padding: .2rem;
    background: rgb(250,250,250);
    border-bottom: 1px solid #ddd;
    text-align: center;
    font-size: .25rem;
    span {
      display: block;
      font-weight: 500;
    }
    i {
      float: left;
      vertical-align: middle;
    }
  }
</style>
