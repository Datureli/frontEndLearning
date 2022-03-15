import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store/store";
import i18n from './i18n'
Vue.use(require('vue-shortkey'))

new Vue({
  
  vuetify,
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
