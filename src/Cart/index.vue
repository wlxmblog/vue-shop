<template>
  <div class="cart">
    <app-top
      :title="'购物车'">
      <i class="trash uk-icon-trash"></i>
    </app-top>
    <cart-list
      :list="cartList"></cart-list>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import AppTop from '../components/AppTop'
import CartList from './CartList'

export default {
  name: 'cart',
  components: {AppTop, CartList},
  computed: {
    ...mapState({
      cartList: state => state.cart.cartList
    })
  }
}
</script>

<style lang='less'>
  .cart {
    .app-top {
      .trash {
        float: right;
        // margin-right: .2rem;
      }
    }
  }
</style>
