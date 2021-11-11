import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import questions from "./modules/questions";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    questions,
  },

  state: {
    //data
    disable: true,
  },
  mutations: {
    disable: (state) => (state.disable = !state.disable),
  },
  actions: {
    // store methods
  },
  getters: {
    //computed
    isUserLogin() {
      if (state.username.length > 0 && state.password.length > 0) {
        state.loginStatus = true;
      }
    },
  },
});
