<template>
  <div class="explorer ">
    <!-- 搜索栏 -->
    <article>
      <header class="uk-grid uk-grid-width-1-2">
        <section>
          <span class="uk-panel uk-panel-box">在读榜<br>Top List</span>
        </section>
        <section>
          <span class="uk-panel uk-panel-box">新书榜<br>New Release</span>
        </section>
      </header>
      <hr class="uk-grid-divider">
      <ul class="uk-grid uk-grid-medium uk-grid-width-1-3">
        <router-link
          tag="li"
          v-for="clas in classes"
          :key="clas.id"
          :to="{name: 'exploreDetail', params: {id: clas.id, title: clas.title, infos: clas.infos}}">
          <div class="uk-block uk-block-primary">{{clas.title}}</div>
        </router-link>
      </ul>
    </article> 
  </div>
</template>

<script>
export default {
  name: 'explore',
  data () {
    return {
      classes: [
        {id: 1, title: '互联网', infos: '这里有最新的技术，最好的书籍等着你，快来阅读吧！'},
        {id: 2, title: '历史', infos: '这里有最新的技术，最好的书籍等着你，快来阅读吧！'},
        {id: 3, title: '心理', infos: '这里有最新的技术，最好的书籍等着你，快来阅读吧！'},
        {id: 4, title: '小说', infos: '这里有最新的技术，最好的书籍等着你，快来阅读吧！'},
        {id: 5, title: '经管', infos: '这里有最新的技术，最好的书籍等着你，快来阅读吧！'},
        {id: 6, title: '文艺', infos: '这里有最新的技术，最好的书籍等着你，快来阅读吧！'},
        {id: 7, title: '传记', infos: '这里有最新的技术，最好的书籍等着你，快来阅读吧！'},
        {id: 8, title: '修仙', infos: '这里有最新的技术，最好的书籍等着你，快来阅读吧！'}
      ]
    }
  },
  activated () {
    alert(1)
  }
}
</script>

<style lang='less'>
  .explorer {
    .uk-width-7-10 {
      margin-top: .15rem;
      input {
        width: 100%;
      }
    }
    article {
      margin-top: .8rem;
      padding: 0 .2rem;
    }
    ul {
      div {
        height: 1.5rem;
        padding-left: .2rem
      }
    }
  }
</style>
