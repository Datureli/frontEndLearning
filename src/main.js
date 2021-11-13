import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store/store'
import VueHtml2Canvas from 'vue-html2canvas';


new Vue({
  vuetify,
  router,
  store,
  VueHtml2Canvas,
  render: h => h(App)
}).$mount('#app')