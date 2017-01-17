import * as api from 'api/users'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'

export default {
  state: {
    current: null
  },

  getters: {
    currentUser: state => state.current
  },

  actions: {
    loginUser({ commit, dispatch }, { username, password }) {
      return api.login(username, password)
        .then(res => {
          const user = res.data.user
          dispatch(ADD_TOAST_MESSAGE, { text: user.name + 'としてログインしました' })
          commit('loginUser', user)
        })
        .catch(error => {
          dispatch(ADD_TOAST_MESSAGE, { text: error.message, type: 'danger' })
        })
    },

    logoutUser({ commit, dispatch }) {
      return api.logout()
        .then(() => {
          dispatch(ADD_TOAST_MESSAGE, { text: 'ログアウトしました' })
          commit('logoutUser')
        })
        .catch(error => {
          dispatch(ADD_TOAST_MESSAGE, { text: error.message, type: 'danger' })
        })
    },

    signupUser({ commit, dispatch }, { username, name, image, password }) {
      return api.signup(username, name, image, password)
        .then(res => {
          const user = res.data
          dispatch(ADD_TOAST_MESSAGE, { text: + user.name + 'として登録しました' })
          commit('loginUser', user)
        })
        .catch(error => {
          dispatch(ADD_TOAST_MESSAGE, { text: error.message, type: 'danger' })
        })
    }
  },

  mutations: {
    loginUser(state, user) {
      state.current = user
    },

    logoutUser(state) {
      state.current = null
    }
  }
}
