<template>
  <div class="home">
    <slider
      :sliders="sliders"></slider>
    <fast-message
      :message="message"></fast-message>
    <book-list
      :bookList="latestUpdate"
      @onBookSelect="preview">
      <header>
        <span>最近更新</span>
        <router-link
          :to="{name: 'explorer'}">更多 &gt;</router-link>
      </header>
    </book-list>
    <book-list
      :bookList="recommended"
      @onBookSelect="preview">
      <header>
        <span>编辑推荐</span>
        <router-link
          :to="{name: 'explorer'}">更多 &gt;</router-link>
      </header>
    </book-list>
    <modal-dialog
      :ref="'dialog'"
      @dialogClose="selected = {}">
      <section slot="header">
        <img :src="selected.img_url">
        <table>
          <tr>
            <td>作者</td>
            <td>{{anthor(selected.anthor)}}</td>
          </tr>
          <tr>
            <td>页数</td>
            <td>{{selected.pageCount}}</td>
          </tr>
          <tr>
            <td>书号</td>
            <td>{{selected.id}}</td>
          </tr>
          <tr>
            <td>出版日期</td>
            <td>{{selected.publish}}</td>
          </tr>
        </table>
      </section>
      <div class="details">
        <!-- 这里是内容插槽 -->
        <h1>{{selected.title}}</h1>
        <p>{{selected.description}}</p>
        <div class="price">
          <span>{{'￥' + selected.price * bookCount}}</span>
          <button
            @click="sub">-</button>
          <input type="text" v-model="bookCount">本
          <button
            @click="add">+</button>
        </div>
        <div class="buy">
          <button class="uk-button uk-button-danger">立即购买</button><br>
          <button class="uk-button"
            @click="add2cart(selected)">加入购物车</button>
        </div>
      </div>
    </modal-dialog>
  </div>
</template>

<script>
import {mapGetters, mapState, mapMutations} from 'vuex'
import HomePageData from './home.json'
import Slider from './Slider'
import FastMessage from './FastMessage'
import BookList from '../components/BookList'
import ModalDialog from '../components/ModalDialog'

export default {
  name: 'home',
  components: {Slider, FastMessage, BookList, ModalDialog},
  data () {
    return {
      message: '',
      bookCount: 1,
      sliders: []
    }
  },
  computed: {
    ...mapState({
      latestUpdate: state => state.books.latestUpdate,
      recommended: state => state.books.recommended,
      selected: state => state.books.selected
    }),
    ...mapGetters([
      'latestUpdateCount',
      'recommendedCount'
    ])
  },
  created () {
    for (let props in HomePageData) {
      this[props] = HomePageData[props]
    }
    // this.$http.get('../static/api/home.json').then(res => {
    //   for (let props in res.body) {
    //     this[props] = res.body[props]
    //   }
    // }, (error) => {
    //   console.log(`获取数据失败：${error}`)
    // })
  },
  methods: {
    preview (book) {
      this.onSelected(book)
      this.$refs.dialog.open()
    },
    ...mapMutations([
      'onSelected',
      'add2cart'
    ]),
    add () {
      this.bookCount++
    },
    sub () {
      this.bookCount--
      this.bookCount <= 1 ? this.bookCount = 1 : 1
    },
    anthor (an) {
      if (an) {
        return an.join('，')
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang='less'>
  .home {
    .swiper {
      margin-top: .8rem
    }
    .book-list {
      header {
        height: .8rem;
        line-height: .8rem;
        text-indent: .2rem;
        span {
          float: left
        }
        a {
          float: right;
          margin-right: .2rem
        }
      }
    }
    .modal-dialog {
      section {
        overflow: hidden;
        margin: .4rem 0 .2rem 0;
        padding: .2rem 0;
        img {
          float: left;
          height: 2.5rem;
        }
        table {
          tr {
            height: .4rem;
            td:first-child {
              color: #999;
            }
          }
          td {
            padding: 0 .1rem;
          }
        }
      }
    }
    .details {
      clear: both;
      h1 {
        padding: .1rem 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .25rem;
        text-align: center;
      }
      p {
        height: 1.8rem;
        padding: .1rem 0;
        overflow: auto;
        font-size: .22rem;
        line-height: .3rem;
        color: #999;
      }
      .price {
        padding: .2rem 0;
        border-top: 1px dashed #ddd;
        border-bottom: 1px dashed #ddd;
        text-align: right;
        span {
          float: left;
          color: #f00;
          font-size: 16px;
        }
        input {
          width: .4rem;
          height: .3rem;
          text-align: center;
          border: none;
        }
        button {
          width: .3rem;
          height: .3rem;
          background: transparent;
        }
      }
      .buy {
        text-align: center;
        button {
          width: 5rem;
          height: .6rem;
          margin: .2rem;
          font-size: .25rem;
        }
      }
    }
    
  }
</style>
