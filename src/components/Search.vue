<template>
  <header class="search uk-grid uk-form">
    <div class="uk-width-7-10 uk-form-icon">
      <i class="uk-icon-search"></i>
      <input type="text" class="uk-form-medium" placeholder="">
    </div>
    <i class="cart uk-icon-shopping-cart uk-icon-medium">
    <div class="uk-badge uk-badge-notification uk-badge-success"
      v-if="count">{{count}}</div>
      
    </i>
  </header>
</template>

<script>
export default {
  name: 'search',
  props: ['title'],
  computed: {
    count () {
      return this.$store.state.cart.cartCount
    }
  }
}
</script>

<style lang='less'>
  .search {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: .8rem;
    background: rgba(250,250,250, .8);
    border-bottom: 1px solid #ddd;
    text-align: center;
    font-size: .25rem;
    z-index: 10;
    .uk-width-7-10 {
      margin: .1rem auto;
    }
    .cart {
      margin-right: .2rem;
    }
  }
</style>
