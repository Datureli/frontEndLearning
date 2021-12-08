import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import questions from "./modules/questions";
import register from "./modules/register"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    questions,
    register
  },

  state: {
    //data
    disable: true,
    favorite: [],
  },
  mutations: {
    disable: (state) => (state.disable = !state.disable),
    addToFavorite() {
      state.favorite.push(
        javascriptQuestions.question,
        javascriptQuestions.answer,
        htmlQuestions,
        vueQuestions
      );
    },
  },
  actions: {
    addToFavorite(context) {
      context.commit("addToFavorite");
    },
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
