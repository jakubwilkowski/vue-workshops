import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/user.module';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users
  }
})
