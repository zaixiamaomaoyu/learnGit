<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{$store.state.a.userInfo}}</p>
    <p>{{text}}</p>
    <p>{{$store.getters.getUserInfoLength}}</p>
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
  }
}
</script>
