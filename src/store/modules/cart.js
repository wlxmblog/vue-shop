const state = localStorage.state ? JSON.parse(localStorage.state) : {
  cartList: [],
  cartCount: 0
}

const filters = {
  f_book (book) {
    return !book.selected
  }
}

const mutations = {
  add2cart (state, param) {
    !param.count ? Object.assign(param, {count: 0, selected: false}) : true
    if (state.cartList.indexOf(param) === -1) {
      param.count++
      state.cartList.push(param)
      state.cartCount++
    } else {
      param.count++
      state.cartCount++
    }
    localStorage.setItem('state', JSON.stringify(state))
  },
  selectBook (state, id) {
    state.cartList[id].selected = !state.cartList[id].selected
  },
  removeBook (state) {
    let count = 0
    state.cartList = state.cartList.filter(filters.f_book)
    localStorage.setItem('state', JSON.stringify(state))
    for (let book of state.cartList) {
      count += book.count
    }
    state.cartCount = count
  }
}

export default {
  state,
  mutations
}
