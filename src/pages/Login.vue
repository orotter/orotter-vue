<template lang="pug">
article.login
  h1.brand oRotter

  form.login-form(@submit.prevent="loginUser(login)")
    input.input.form-input(type="text" v-model="login.username" placeholder="ユーザー名")
    input.input.form-input(type="password" v-model="login.password" placeholder="パスワード")
    .login-form-controls
      button.btn(type="submit") ログイン

  form.signup-form(@submit.prevent="signupUser(signup)")
    .signup-form-inner
      .signup-form-group
        input.input.form-input(type="text" v-model="signup.username" placeholder="ユーザー名")
        input.input.form-input(type="text" v-model="signup.name" placeholder="名前")
        input.input.form-input(type="text" v-model="signup.image" placeholder="画像URL")
      .signup-form-group
        input.input.form-input(type="password" v-model="signup.password" placeholder="パスワード")
    .signup-form-controls
      button.btn(type="submit") 登録
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      login: {
        username: '',
        password: ''
      },
      signup: {
        username: '',
        name: '',
        image: '',
        password: ''
      }
    }
  },

  watch: {
    currentUser: {
      handler(newValue) {
        if (newValue !== null) {
          this.$router.push('/')
        }
      },
      immediate: true
    }
  },

  computed: mapGetters(['currentUser']),

  methods: {
    ...mapActions([
      'loginUser',
      'signupUser'
    ])
  }
}
</script>

<style lang="scss" scoped>
$margin: 12px;

.brand {
  margin-top: 30px;
  margin-bottom: 56px;
  text-align: center;
  font-size: 8rem;
  font-weight: 100;
  letter-spacing: 2.5px;
}

.login {
  margin: 0 auto;
  width: 420px;
}

.form-input,
.login-form-controls {
  margin-top: $margin;
}

.login-form-controls {
  text-align: right;
}

.signup-form {
  overflow: hidden;
  margin-top: 60px;
  border-radius: 3px;
}

.signup-form-inner {
  padding: 15px 30px 20px 30px;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(96, 96, 96, 0.2);

  .form-input {
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #e0e0e0;
  }
}

.signup-form-group:not(:first-child) {
  margin-top: 30px;
}

.signup-form-controls > button {
  display: block;
  padding: 10px;
  width: 100%;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  font-size: 1.8rem;
}
</style>
