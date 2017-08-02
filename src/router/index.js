import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/Home'], resolve)
    },
    {
      path: '/explorer',
      name: 'explorer',
      component: resolve => require(['@/Explorer'], resolve)
    },
    {
      path: '/cart',
      name: 'cart',
      component: resolve => require(['@/Cart'], resolve)
    },
    {
      path: '/me',
      name: 'me',
      component: resolve => require(['@/Me'], resolve)
    },
    {
      path: '/book/:id',
      name: 'bookDetail',
      component: resolve => require(['@/BookDetail'], resolve)
    },
    {
      path: '/explorer/exploreDetail/:id',
      name: 'exploreDetail',
      component: resolve => require(['@/Explorer/ExploreDetail'], resolve)
    }
  ]
})
