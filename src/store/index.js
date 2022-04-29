import Vue from 'vue'
import Vuex from 'vuex'

import { UP_DATAED_USERNAME, UP_DATAED_NEWS } from './mutation_alias'

Vue.use(Vuex)

const moduleA = {
  state: {
    userInfo: [
      { userId: 0, userName: 'zwn', userAge: 22 },
      { userId: 0, userName: 'zwn', userAge: 22 }
    ],
    news: {
      id: 0,
      text: '就快要午餐了！'
    },
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
  },
  [UP_DATAED_NEWS] (state) {
    state.news.text = '快要饿死了！'
  }
}

const actions = {
  updatedUserInfo (content, payload) {
    setTimeout(() => {
      content.commit('UP_DATAED_USERNAME')
      alert(payload)
    }, 1000)
  }
}
export default new Vuex.Store({
  state: {
    userInfo: [
      { userId: 0, userName: 'zwn', userAge: 22 },
      { userId: 0, userName: 'zwn', userAge: 22 }
    ],
    news: {
      id: 0,
      text: '就快要午餐！'
    },
    text: '好饿啊，准备上去吃饭！'
  },
  getters,
  mutations,
  actions,
  modules: {
    a: moduleA
  }
})
