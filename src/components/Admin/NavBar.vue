<template>
  <nav class="nav flex-column col">
    <router-link class="nav-link" to="/admin/reservations">Reserveringen</router-link>
    <router-link class="nav-link" to="/admin/users">Gebruikers</router-link>
    <router-link class="nav-link" to="/admin/fabmoments">Fabmomenten</router-link>
    <router-link class="nav-link" to="/admin/tags">Tags</router-link>
    <router-link class="nav-link" to="/admin/machines">Machines</router-link>
    <router-link class="nav-link" to="/admin/materials">Materialen</router-link>
    <router-link class="nav-link" to="/admin/programs">Programma's</router-link>
    <router-link class="nav-link" to="/admin/week-schedules">Weekplanning</router-link>
    <router-link class="nav-link" to="/admin/control-panel">Controlepaneel</router-link>
    <!-- <router-link class="nav-link" :to="{ path: ''}" append></router-link> -->
  </nav>  
</template>

<script>
export default {
  name: 'navbar'
}
</script>