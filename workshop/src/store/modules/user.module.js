const initialState = () => ({
  userId: null,
  isAdmin: true
})

const state = initialState

const getters = {
  userId: store => store.userId,
  isAdmin: store => store.isAdmin
}

const mutations = {
  SET_USERID (store) {
    store.userId = (Math.floor(Math.random() * 1000)).toString()
  },
  SET_ADMIN (store, value) {
    store.isAdmin = value
  }
}

const actions = {
  setUserId (context) {
    context.commit('SET_USERID')
  },
  setIsAdmin (context, payload) {
    context.commit('SET_ADMIN', payload)
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
