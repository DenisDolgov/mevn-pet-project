import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import flash from './flash'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

console.log('auth', auth);

export default new Vuex.Store({
  modules: {
    auth,
    flash,
  },
  strict: debug
})
