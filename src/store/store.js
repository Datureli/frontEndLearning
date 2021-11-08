import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //data
    disable: true,
    count: 2
  },
  mutations: {
    disable: state => state.disable = !state.disable
  },
  actions: { // store methods
    disable({state,newCount}) {
        state.disable = newCount
    }
  },
  getters: { //computed
    doubleCount (state) {
      return state.disable = !state.disable
    }
  }
})
