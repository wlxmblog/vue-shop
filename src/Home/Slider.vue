<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <router-link
          tag="div"
          class="swiper-slide"
          v-for="slider in sliders"
          :key="slider.id"
          :to="{name: 'bookDetail', params: {id: slider.id}}">
          <img :src="slider.img_url">
        </router-link>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

export default {
  name: 'slider',
  props: ['sliders'],
  data () {
    return {
      swiper: '.swiper-container'
    }
  },
  mounted () {
    setTimeout(() => {
      Swiper(this.swiper, {
        pagination: '.swiper-pagination',
        autoplay: 2500
      })
    }, 200)
  }
}
</script>

<style lang='less'>
  .swiper {
    img {
      width: 6.4rem
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      width: 16px;
      border-radius: 25%;
      background: #000;
      opacity: .2;
      transition: all .5s;
    }
  }
</style>
