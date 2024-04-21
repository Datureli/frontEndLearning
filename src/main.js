import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store/store";
import VueCodeHighlight from 'vue-code-highlight';
Vue.use(VueCodeHighlight)
Vue.use(require('vue-shortkey'))

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
