import * as api from 'api/tweets'

export default {
  state: {
    tweets: []
  },

  getters: {
    tweetList: state => state.tweets
  },

  actions: {
    fetchTweet({ commit }) {
      return api.tweets()
        .then(res => {
          commit('updateTweet', res.data)
        })
    },

    postTweet({ commit, state }, text) {
      return api.postTweet(text)
        .then(res => {
          commit('updateTweet', [res.data, ...state.tweets])
        })
    }
  },

  mutations: {
    updateTweet(state, tweets) {
      state.tweets = tweets
    }
  }
}
