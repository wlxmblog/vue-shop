<template>
  <ul class="swiper uk-slideshow" data-uk-slideshow="{kenburns:true, autoplay:true}">
    <router-link
      tag="li"
      v-for="slider in sliders"
      :key="slider.id"
      :to="{name: 'bookDetail', params: {id: slider.id}}">
      <img :src="slider.img_url" alt="">
    </router-link>
  </ul>
</template>

<script>

export default {
  name: 'slider',
  props: ['sliders'],
  mounted () {
    require('slideshow-js')
  }
}
</script>

<style lang='less'>
  .swiper {
    height: 4rem;
    img {
      height: 4rem;
    }
  }
</style>
