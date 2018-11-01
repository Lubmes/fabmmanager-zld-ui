<template>
  <nav class="navbar navbar-dark bg-bookstore">
    <a class="navbar-brand" href="/">FabLab <small>zld</small></a>

    <router-link to="/profiles" class="btn"><strong>gebruikers</strong></router-link>
    <!-- <router-link to="/admin" class="btn"><strong>ADMIN</strong></router-link> -->

    <span class="navbar-text">
      {{ currentUser.email }}
      <router-link to="/logout" class="btn btn-logout btn-sm">Logout</router-link>
    </span>

  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  }
}
</script>

<style lang="scss" scoped>
.bg-bookstore {
  background: #1e9dd8 !important;
}

a { color: white; }
a:hover { color: darken(#0f4e6c, 20%)}

.btn-logout {
  background-color: #0f4e6c;
  border-color: #0f4e6c;
  color: #fff;
}

.btn-logout:hover {
  background-color: darken(#0f4e6c, 20%);
  border-color: darken(#0f4e6c, 20%);
  color: #fff;
}
</style>