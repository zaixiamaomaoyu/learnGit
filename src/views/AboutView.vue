<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{$store.state.a.userInfo}}</p>
    <p>{{text}}</p>
    <p>{{$store.getters.getUserInfoLength}}</p>
    <hr>
    用户姓名：<p>{{userInfo[1].userName}}</p>
    用户年龄：<p>{{userInfo[1].userAge}}</p>
    <button @click="updataUserInfo">点击修改用户信息</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['userInfo', 'text'])
  },
  methods: {
    updataUserInfo () {
      this.$store.commit('UP_DATAED_USERNAME')
    }
  }
}
</script>
