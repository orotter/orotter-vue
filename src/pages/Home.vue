<template lang="pug">
article.home
  header.header
    .header-inner
      p.brand oRotter
      .header-controls
        icon.header-icon(:src="currentUser.image", size="48")
        button.btn.logout-btn(type="button" @click="logoutUser") ログアウト

  div.content-wrapper
    article.main-content
      header.main-content-header
        tweet-field(:user="currentUser")
      .tweet-list-wrapper
        tweet-list(:list="tweetList")
    aside.sidebar
      user-panel(:user="currentUser")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Icon from '../components/Icon'
import UserPanel from '../components/UserPanel'
import TweetField from '../components/TweetField'
import TweetList from '../components/TweetList'

export default {
  watch: {
    currentUser: {
      handler(newValue) {
        if (newValue === null) {
          this.$router.push('/login')
        }
      },
      immediate: true
    }
  },

  created() {
    this.fetchTweet()
  },

  computed: mapGetters(['currentUser', 'tweetList']),
  methods: mapActions(['logoutUser', 'fetchTweet']),

  components: {
    Icon,
    UserPanel,
    TweetField,
    TweetList
  }
}
</script>

<style lang="scss">
@import '../themes/variables';

$content-width: 980px;

/* Header
----------------------------------------*/
.header {
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(96, 96, 96, 0.2);
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 70px;
  width: $content-width;
}

.brand {
  font-size: 4rem;
  font-weight: 100;
  letter-spacing: 2.5px;
}

.header-icon {
  margin-right: 10px;
  vertical-align: middle;
}

.logout-btn {
  padding: 5px 14px;
  border: 1px solid $base-dark-color;
  background-color: #fff;
  color: $base-dark-color;
  font-size: 1.4rem;
  font-weight: bold;
  vertical-align: middle;

  &:hover,
  &:focus {
    background-color: $base-dark-color;
    color: #fff;
  }

  &:active {
    background-color: darken($base-dark-color, 10%);
  }
}

/* Conents
----------------------------------------*/
.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;;
  margin: 30px auto;
  width: $content-width;
}

.main-content {
  order: 2;
  flex: 0 0 680px;
  max-width: 680px;
}

.tweet-list-wrapper {
  margin-top: 20px;
}

.sidebar {
  order: 1;
  flex: 0 0 270px;
  max-width: 270px;
}
</style>
