<template>
  <div id="app">
    <search
      v-if="needSearch"></search>
    <transition name="slide-fade">
      <keep-alive include="home">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <main-nav
      v-if="isMainNav"
      :navs="navs"></main-nav>
  </div>
</template>

<script>
import './assets/css/reset.css'
import './assets/js/init.js'
import MainNav from './components/MainNav'
import Search from './components/Search'

export default {
  name: 'app',
  components: {MainNav, Search},
  data () {
    return {
      navs: [
        {title: '首页', url: 'home', icon: 'uk-icon-home'},
        {title: '分类', url: 'explorer', icon: 'uk-icon-th-large'},
        {title: '购物车', url: 'cart', icon: 'uk-icon-shopping-cart'},
        {title: '我', url: 'me', icon: 'uk-icon-user'}
      ]
    }
  },
  computed: {
    isMainNav () {
      // this.needView(this.navs.map(x => x.url))
      let names = this.navs.map(x => x.url)
      if (names.indexOf(this.$route.name) !== -1) {
        return true
      } else {
        return false
      }
    },
    needSearch () {
      // this.needView(['home', 'explorer'])
      let names = ['home', 'explorer']
      if (names.indexOf(this.$route.name) !== -1) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease-in;
}
.slide-fade-leave {
  transition: all .3s ease-out;
}
.slide-fade-enter,
.slide-fade-leave {
  transform: translateX(-10px);
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
