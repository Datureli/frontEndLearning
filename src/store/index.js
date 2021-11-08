import { createStore } from 'vuex'

export default createStore({
  state: { //data
    count: 0,
    euro: 2,
    pln: 4.14
  },
  getters: { // computed

  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    euroToPln: state => state.euro * state.pln
  },
  actions: { //methods
      addName({state},newCount){
          state.count = newCount;
      }
  },
  modules: {
  }
})
