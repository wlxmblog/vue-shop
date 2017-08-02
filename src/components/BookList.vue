<template>
  <div class="book-list">
    <slot></slot>
    <ul class="uk-grid uk-grid-width-1-3">
      <li
        v-for="book in bookList"
        :key="book.id"
        @click="$emit('onBookSelect', book)">
        <div class="img-box">
          <img :src="book.img_url">
        </div>
        <b class="title">{{book.title}}</b>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'book-list',
  props: ['heading', 'bookList'],
  filters: {
    anthor (param) {
      return param.join(',')
    }
  }
}
</script>

<style lang='less'>
  .book-list {
    margin-bottom: .8rem;
    padding: 0 .2rem;
    li {
      margin-top: .2rem;
      .img-box {
        position: relative;
        background: #fff;
        &::after,
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: .1rem;
          bottom: .05rem;
          left: .08rem;
          right: .08rem;
          box-shadow: #999 0 2px 10px;
          background: transparent;
        }
      }
      img {
        display: block;
        position: relative;
        margin: auto;
        z-index: 1;
      }
      .title {
        display: inline-block;
        padding-top: .15rem;
        font-weight: 500;
        line-height: .35rem;
      }
    }
  }
</style>
