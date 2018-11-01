<template>
  <nav class="navbar navbar-dark justify-content-center">
    <router-link to="/new-fabmoment" class="btn text-left ml-4 mr-4"><strong><i class="fas fa-plus"></i> fabmoment</strong></router-link>
    <router-link to="/reservations" class="btn text-left ml-4 mr-4"><strong><i class="fas fa-plus"></i> reservering</strong></router-link>
  </nav>
</template>

<style lang="scss" scoped>
  a {
    color: darken(#019a01, 8%);
  }
  a:hover {
    color: lighten(#019a01, 5%); 
  }
</style>

