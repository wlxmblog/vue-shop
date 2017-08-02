<template>
  <div class="cart">
    <app-top
      :title="'购物车'">
      <i class="trash uk-icon-trash"
        @click="removeBook"></i>
    </app-top>
    <cart-list
      :list="cartList"
      :selectBook="selectBook"></cart-list>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import AppTop from '../components/AppTop'
import CartList from './CartList'

export default {
  name: 'cart',
  components: {AppTop, CartList},
  computed: {
    ...mapState({
      cartList: state => state.cart.cartList
    })
  },
  methods: {
    ...mapMutations([
      'selectBook',
      'removeBook'
    ])
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
