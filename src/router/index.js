import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Explorer from '@/Explorer'
import Cart from '@/Cart'
import Me from '@/Me'
import BookDetail from '@/BookDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/explorer',
      name: 'explorer',
      component: Explorer
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/book/:id',
      name: 'bookDetail',
      component: BookDetail
    }
  ]
})
