<template>
  <article class="fast-message">
    <label>快讯 : </label>      
    <span>{{message}}</span>
  </article>
</template>

<script>
export default {
  name: 'fast-message',
  props: ['message']
}
</script>

<style lang='less'>
  .fast-message {
    height: .4rem;
    padding: 0 .2rem;
    background: rgb(250,250,250);
    border-bottom: 1px solid #ddd;
    line-height: .4rem;
    label {
      display: inline-block;
      height: .3rem;
      padding: 0 .2rem;
      background: orange;
      border-radius: 10%;
      color: #eee;
      text-align: center;
      line-height: .3rem;
    }
  }
</style>
