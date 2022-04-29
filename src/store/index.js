import Vue from 'vue'
import Vuex from 'vuex'

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
export default new Vuex.Store({
  state: {
    userInfo: [
      { userId: 0, userName: 'zwn', userAge: 22 },
      { userId: 0, userName: 'zwn', userAge: 22 }
    ],
    text: '好饿啊，准备上去吃饭！'
  },
  getters,
  modules: {
    a: moduleA
  }
})
