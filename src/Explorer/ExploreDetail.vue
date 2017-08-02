<template>
  <div class="explore-detail">
    <app-top
      :title="$route.params.title"></app-top>
    <book-list
      :bookList="latestUpdate">
      <blockquote>
        <i class="uk-icon-large uk-icon-quote-left"></i>
        {{$route.params.infos}}
        <i class="uk-icon-large uk-icon-quote-right"></i>
      </blockquote>
    </book-list>
  </div>
</template>

<script>
import HomePageData from './explorer.json'
import BookList from '../components/BookList'
import AppTop from '../components/AppTop'

export default {
  name: 'exploreDetail',
  components: {BookList, AppTop},
  created () {
    for (let props in HomePageData) {
      this[props] = HomePageData[props]
    }
  }
}
</script>

<style lang='less'>
  .explore-detail {
    .book-list {
      blockquote {
        i {
          color: #ccc;
        }
      }
    }
  }
</style>
