<template lang="pug">
form.tweet-field(@submit.prevent="postTweet")
  .form-main
    icon.form-icon(:src="user.image", size="48")
    .form-field-wrapper
      textarea.input.form-field(v-model="tweetText" placeholder="いま何してる？")
  .form-controls
    small.form-count {{ tweetText.length }}/140
    button.btn.form-submit(type="submit") 送信
</template>

<script>
import { mapActions } from 'vuex'
import Icon from './Icon'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      tweetText: ''
    }
  },

  methods: {
    ...mapActions({
      _postTweet: 'postTweet'
    }),

    postTweet () {
      this._postTweet(this.tweetText).then(() => {
        this.tweetText = ''
      })
    }
  },

  components: {
    Icon
  }
}
</script>

<style lang="scss">
@import '../themes/variables';

.tweet-field {
  background-color: #fff;
  padding: 20px 20px 10px 20px;
  border-radius: $border-radius;
}

.form-main {
  display: flex;
  align-items: flex-start;
}

.form-icon {
  margin-right: 20px;
}

.form-field-wrapper {
  flex: 1 1 1px;
}

.form-field {
  border: 1px solid #d8d8d8;
  height: 6em;
  resize: none;
}

.form-controls {
  margin-top: 10px;
  text-align: right;
}

.form-count {
  margin-right: 1em;
  color: #b7b7b7;
  font-size: 1.4rem;
}

.form-submit {
  padding: 5px 30px;
  letter-spacing: 2px;
}
</style>
