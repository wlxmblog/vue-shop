// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import UIkit from './uikit'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(UIkit)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  http: {
    root: '/api',
    headers: {}
  },
  template: '<App/>',
  components: { App }
})
