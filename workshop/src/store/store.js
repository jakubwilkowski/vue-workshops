import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import users from './modules/user.module'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  modules: {
    users
  },
  plugins: [vuexLocal.plugin]
})
