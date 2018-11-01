<template>
  <div class="home">
    <SubNavBar></SubNavBar>

    <div class='row mt-2 mb-3 ml-1 mr-2'>
      <LastFavorites></LastFavorites>
      <FrontPageAnnouncements></FrontPageAnnouncements>
    </div>

    <!-- <Calendar class='mt-5 mb-5'></Calendar> -->

    <Fabmoments class='ml-3 mr-3' :author='false'></Fabmoments>
  </div>
</template>

<script>
// import Fabmoments from '@/components/Fabmoments'
import SubNavBar from '@/components/SubNavBar'
import Fabmoments from '@/components/Fabmoments/Multiple'
import LastFavorites from '@/components/LastFavorites'
import FrontPageAnnouncements from '@/components/FrontPageAnnouncements'
export default {
  name: 'home',
  components: {
    SubNavBar,
    LastFavorites,
    FrontPageAnnouncements,
    Fabmoments
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
