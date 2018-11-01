<template>
  <div id="app">
    <template v-if="currentUser">
      <NavBar></NavBar>
    </template>
    <div class="container-fluid">
      <router-view></router-view>
      <template v-if="currentUser">
        <!-- <Foot></Foot> -->
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from '@/components/NavBar'
// import Foot from '@/components/Foot'
export default {
  name: 'app',
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
  created () {
    this.checkCurrentLogin()
  },
  updated () {
    this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin () {
      if (!this.currentUser && this.$route.path !== '/') {
        this.$router.push('/?redirect=' + this.$route.path)
      }
    }
  },
  components: {
    NavBar
    // Foot
  }
}
</script>

<style>
  body {
    /* height: 200px; */
    /* background-color: #cccccc; */
    /* background-image: linear-gradient(#1e9dd8,#019a01); */
  }
  a {
    color: #1e9dd8;
  }
  .card {
    border-color: #1e9dd8;
  }
  .btn-primary {
    background-color: #1e9dd8;
    border-color: #1e9dd8;
  }
</style>