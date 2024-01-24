import Vue from "vue";
import Vuex from "vuex";
import javascriptQuestions from "./modules/javascriptQuestions";
import htmlQuestions from "./modules/htmlQuestions";
import cssQuestions from "./modules/cssQuestions";
import vueQuestions from "./modules/vueQuestions";
import gitQuestions from "./modules/gitQuestions";
import reactQuestions from "./modules/reactQuestions";
import generalQuestions from "./modules/generalQuestions";
import firstColumn from "./modules/firstColumn";
import typescriptQuestions from "./modules/typescriptQuestions";
import testQuestions from "./modules/testQuestions";
import cypressQuestions from "./modules/cypressQuestions";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    javascriptQuestions,
    htmlQuestions,
    cssQuestions,
    vueQuestions,
    gitQuestions,
    reactQuestions,
    generalQuestions,
    typescriptQuestions,
    firstColumn,
    testQuestions,

    cypressQuestions,
  },

  state: {
    disable: true,
    favorite: [],
  },
  mutations: {
    disable: (state) => (state.disable = !state.disable),
  },
  actions: {
    disableAnswers(context) {
      context.commit("disable");
    },
  },
});
