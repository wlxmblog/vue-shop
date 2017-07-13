<template>
  <section class="book-list">
    <header>
      <span>{{heading}}</span>
      <router-link
        :to="{name: 'explorer'}">更多 &gt;</router-link>
    </header>
    <ul>
      <router-link
        tag="li"
        v-for="book in bookList"
        :key="book.id"
        :to="{name: 'bookDetail', params: {id: book.id}}">
        <img :src="book.img_url">
        <b class="title">{{book.title}}</b>
        <span class="anthor">{{book.anthor | anthor}}</span>
      </router-link>
    </ul>
  </section>
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
    margin-left: -.1rem;
    header {
      height: .8rem;
      line-height: .8rem;
      text-indent: .2rem;
      border-bottom: 1px dashed #ddd;
      span {float: left}
      a {float: right; margin-right: .2rem}
    }
    li {
      display: inline-block;
      margin-left: .3rem;
      margin-bottom: .3rem;
      margin-top: .3rem;
      img {
        display: block;
        width: 1.8rem; // 3*1.8=5.4
      }
      .title {
        display: block;
        padding: .2rem 0;
      }
      .anthor {
        color: #999;
      }
    }
  }
</style>
