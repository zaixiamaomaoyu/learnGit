import Vue from 'vue'
import Vuex from 'vuex'

import { UP_DATAED_USERNAME } from './mutation_alias'

Vue.use(Vuex)

const moduleA = {
  state: {
    userInfo: [
      { userId: 0, userName: 'zwn', userAge: 22 },
      { userId: 0, userName: 'zwn', userAge: 22 }
    ],
    text: '好饿啊，准备上去吃饭！'
  }
}

const getters = {
  getUserInfoLength (state) {
    return state.userInfo.length
  }
}
const mutations = {
  [UP_DATAED_USERNAME] (state) {
    state.userInfo[1].userName = 'zjp'
    state.userInfo[1].userAge = 23
  }
}
export default new Vuex.Store({
  state: {
    userInfo: [
      { userId: 0, userName: 'zwn', userAge: 22 },
      { userId: 0, userName: 'zwn', userAge: 22 }
    ],
    text: '好饿啊，准备上去吃饭！'
  },
  getters,
  mutations,
  modules: {
    a: moduleA
  }
})
