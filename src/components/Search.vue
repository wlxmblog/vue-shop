<template>
  <header class="search uk-grid uk-form">
    <div class="uk-width-7-10 uk-form-icon">
      <i class="uk-icon-search"></i>
      <input type="text" class="uk-form-medium" placeholder="">
    </div>
    <i class="cart uk-icon-shopping-cart"></i>
  </header>
</template>

<script>
export default {
  name: 'search',
  props: ['title']
}
</script>

<style lang='less'>
  .search {
    background: rgba(200,200,200,.1);
    border-bottom: 1px solid #ddd;
    text-align: center;
    font-size: .25rem;
    .uk-width-7-10 {
      margin: .1rem auto;
    }
    .cart {
      margin-right: .2rem;
    }
  }
</style>
