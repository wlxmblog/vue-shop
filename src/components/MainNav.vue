<template>
  <div class="nav-bar">
      <ul>
        <router-link
          tag="li"
          v-for="nav in data"
          :key="nav.id"
          :to="{name: nav.url}">{{nav.title}}</router-link>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'main_nav',
  data () {
    return {
      data: [
        {title: '首页', url: 'home'},
        {title: '分类', url: 'explorer'},
        {title: '购物车', url: 'cart'},
        {title: '我', url: 'me'}
      ]
    }
  }
}
</script>

<style lang='less'>
  .nav-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 6.4rem;
    z-index: 1;
    li{
      display: inline-block;
      width: 1.6rem;
      height: .8rem;
      line-height: .8rem;
      background: #ddd;
      font-weight: bold;
      text-align: center;
      transition: all .3s;
      cursor: pointer;
      &.router-link-exact-active.router-link-active{
        background: orange;
        color: #eee;
      }
    }
  }
</style>
