<template>
  <nav class="nav-bar">
    <ul>
      <router-link
        tag="li"
        v-for="nav in navs"
        :key="nav.id"
        :to="{name: nav.url}">
        <i :class="nav.icon"></i><br>
        <span>{{nav.title}}</span>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'main_nav',
  props: ['navs']
}
</script>

<style lang='less'>
  .nav-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 6.4rem;
    z-index: 10;
    ul{
      margin: 0;
      padding: 0;
    }
    li{
      display: inline-block;
      width: 1.6rem;
      height: .8rem;
      background: rgb(250,250,250);
      border-top: 1px solid #ddd;
      text-align: center;
      transition: all .3s;
      cursor: pointer;
      &.router-link-exact-active.router-link-active {
        background: orange;
        color: #eee;
      }
      i {
        font-size: .4rem;
        margin-top: .1rem
      }
    }
  }
</style>
