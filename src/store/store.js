import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import javascriptQuestions from "./modules/javascriptQuestions";
import register from "./modules/register"
import htmlQuestions from './modules/htmlQuestions'
import cssQuestions from './modules/cssQuestions'
import vueQuestions from './modules/vueQuestions'
import gitQuestions from './modules/gitQuestions'
import reactQuestions from './modules/reactQuestions'
import generalQuestions from "./modules/generalQuestions";
import firstColumn from "./modules/firstColumn"
import typescriptQuestions from './modules/typescriptQuestions'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    javascriptQuestions,
    register,
    htmlQuestions,
    cssQuestions,
    vueQuestions,
    gitQuestions,
    reactQuestions,
    generalQuestions,
    typescriptQuestions,
    firstColumn
  },

  state: {
    disable: true,
    favorite: [],
    isHeartActive: false,
    page: 0,
  },
  mutations: {
    disable: (state) => (state.disable = !state.disable),
    addToFavorite() {
      state.favorite.push(
        javascriptQuestions.question,
        javascriptQuestions.answer,
        htmlQuestions,
        vueQuestions,
        gitQuestions,
        generalQuestions,
        typescriptQuestions
      );
    },
  },
  actions: {
    disableAnswers(context) {
      context.commit('disable')
    },
    addToFavorite(context) {
      context.commit("addToFavorite");
    },
  },
});
