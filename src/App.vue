<template>
  <div id="app">
    <main-nav></main-nav>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import './assets/css/reset.css'
import './assets/js/init.js'
import MainNav from './components/MainNav'

export default {
  name: 'app',
  components: {MainNav}
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
.slide-fade-leave-active {
  transform: translateX(-100px);
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
