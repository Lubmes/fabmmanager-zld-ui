<template>
  <div class='single-profile'>
    <div class="row mt-5 m-3">
      <div class='col-md-2'>
        <img :src="image" class='rounded-circle'>
      </div>
      <div class='col-md-10 pl-5'>
        <h2>{{ author.username }} <small v-if="author.admin">ADMIN</small></h2>
        <hr class="my-3">
        <div class='mt-4'>
          <h5>Bio</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          </p>
        </div>
      </div>

      <!-- <div class="float-right"> -->
        <!-- <input type="text" name="search" v-model="search" placeholder="Zoeken binnen dit profiel..." class="form-control"></input> -->
      <!-- </div> -->
    </div>


    <fabmoments :author="author"></fabmoments>
  </div>
</template>

<script>
import SingleSummarized from './SingleSummarized'
import Fabmoments from '@/components/Fabmoments/Multiple'
export default {
  name: 'Single',
  data () {
    return {
      author: null,
      fabmoments: [],
      image: `http://via.placeholder.com/200x200?text=avatar`
    }
  },
  created () {
    this.$http.get(`/users/${this.$route.params.id}`)
        .then(request => { this.author = request.data })
        .catch(() => { alert('Something went wrong when trying to retrieve this user!') })
    this.$http.get(`/users/${this.$route.params.id}/fabmoments`)
        .then(request => { this.fabmoments = request.data })
        .catch(() => { alert('Something went wrong!') })
  },
  components: {
    SingleSummarized,
    Fabmoments
  }
}
</script>

<style lang="scss" scoped>
.border-right {
  border-right: 1px #eee solid;
}
img {
  border: #1e9dd8 1px solid;
}
</style>