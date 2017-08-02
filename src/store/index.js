import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import cart from './modules/cart'
import books from './modules/books'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    books,
    cart
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
