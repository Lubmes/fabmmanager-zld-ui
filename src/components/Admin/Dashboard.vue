<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-2">
        <NavBar></NavBar>
      </div>
      <div class="col-10">
        <router-view/>
        <!-- <router-view name="helper"/> -->
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/Admin/NavBar'
export default {
  name: 'dashboard',
  components: {
    NavBar
  }
}
</script>

