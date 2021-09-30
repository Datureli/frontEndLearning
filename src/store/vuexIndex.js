import Vuex from 'vuex';
import Vue from 'vue'
import module from './modules/todos'

//load vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules: {
        module
    }
});
