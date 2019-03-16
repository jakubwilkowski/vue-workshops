const initialState = () => ({
  userId: null
})

const state = initialState;

const getters = {
  userId: store => store.userId
}

const mutations = {
  SET_USERID(store) {
    store.userId = (Math.floor(Math.random() * 1000)).toString()
  }
}

const actions = {
  async setUserId (context) {
    context.commit('SET_USERID')
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
