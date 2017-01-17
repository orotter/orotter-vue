import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import sessionPlugin from './plugins/session'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  plugins: [sessionPlugin]
})

if (module.hot) {
  module.hot.accept(['./modules'], () => {
    const newModules = require('./modules').default
    store.hotUpdate({
      modules: newModules
    })
  })
}

export default store
