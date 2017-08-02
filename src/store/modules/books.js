import home from '../api/home.json'

export default {
  state: {
    latestUpdate: home.latestUpdate,
    recommended: home.recommended,
    selected: {anthor: []}
  },
  getters: {
    latestUpdateCount: state => state.latestUpdate.length,
    recommendedCount: state => state.recommended.length
  },
  mutations: {
    onSelected (state, params) {
      state.selected = params
    }
  }
}
