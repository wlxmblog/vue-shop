<template>
  <div class="home">
    <slider
      :sliders="sliders"></slider>
    <fast-message
      :message="message"></fast-message>
    <book-list
      :heading="'最近更新'"
      :bookList="latestUpdate"></book-list>
    <book-list
      :heading="'编辑推荐'"
      :bookList="recommended"></book-list>
  </div>
</template>

<script>
import Slider from './Slider'
import FastMessage from './FastMessage'
import BookList from '../components/BookList'

export default {
  name: 'home',
  components: {Slider, FastMessage, BookList},
  data () {
    return {
      message: '',
      sliders: [],
      latestUpdate: [],
      recommended: []
    }
  },
  created () {
    this.$http.get('../static/api/home.json').then(res => {
      this.message = res.body.message
      this.sliders = res.body.sliders
      this.latestUpdate = res.body.latestUpdate
      this.recommended = res.body.recommended
    })
  }
}
</script>

<style>
  
</style>
