import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const requireModule = require.context("./modules", false, /\.js$/);
const modules = {};

requireModule.keys().forEach((fileName) => {
  const moduleName = fileName.replace(/(\.\/|\.js)/g, "");
  modules[moduleName] = requireModule(fileName).default || requireModule(fileName);
});

export default new Vuex.Store({
  modules,
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
