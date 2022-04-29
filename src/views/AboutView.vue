<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{$store.state.a.userInfo}}</p>
    <p>{{text}}</p>
    <p>{{$store.getters.getUserInfoLength}}</p>

    <hr>
    <p>{{userInfo[0].userName}}</p>
    <p>{{userInfo[0].userAge}}</p>
    <button @click="changeInfo">修改信息</button>
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
    changeInfo () {
      this.$store.commit('updateUserInfo')
      // console.log(12)
    }
  }
}
</script>
