export default {
  state: {
    cartList: []
  },
  mutations: {
    add2cart (state, param) {
      state.cartList.push(param)
    }
  }
}
