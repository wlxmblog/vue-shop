<template>
  <ul class="cart-list uk-form">
    <li class="uk-form-controls uk-grid"
      v-for="(book, id) in list"
      :key="book.id">
      <div class="uk-width-1-10">
        <input type="checkbox"
          @change="selectBook(id)"
          :checked="book.selected">
      </div>
      <div class="uk-width-3-10">
        <img :src="book.img_url" height="100" alt="">
      </div>
      <div class="uk-width-6-10">
        <p class="title">{{ book.title }}</p>
        <span class="price">￥{{ book.price }}</span>
        <span class="count">{{ book.count }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'cartList',
  props: ['list', 'selectBook']
}
</script>

<style lang='less'>
  .cart-list {
    padding-left: 0;
    li {
      background: rgba(200,200,200,.1)
    }
  }
</style>
