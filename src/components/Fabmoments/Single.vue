<template>
  <div class='single-fabmoment'>
    <div class="page-header mt-3">
      <div class="float-right">
      </div>
      <h2>{{ fabmoment.title }} 
        <router-link :to="{ name: 'Profile', params: { id: author.id } }" class="btn">
          <!-- <small> -->
            {{ author.username }}
          <!-- </small> -->
        </router-link>
      </h2>

      <hr class="my-3">

      <p>
        {{ fabmoment.description }}
      </p>

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-warning alert-warning" data-toggle="modal" data-target="#exampleModal">
        {{ license.title }}
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content border-warning">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{ license.title }}</h5>
            </div>
            <div class="modal-body">
              {{ license.description }}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Accepteer</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SingleSummarized from './SingleSummarized'
// import Comments from '@/components/Comments/Multiple'
export default {
  name: 'Single',
  data () {
    return {
      author: null,
      fabmoment: null,
      license: null
    }
  },
  created () {
    this.$http.get(`/users/${this.$route.params.author_id}`)
        .then(request => { this.author = request.data })
        .catch(() => { alert('Something went wrong when trying to retrieve this user!') })
    this.$http.get(`/users/${this.$route.params.author_id}/fabmoments/${this.$route.params.fabmoment_id}`)
        .then(request => { this.fabmoment = request.data })
        .catch(() => { alert('Something went wrong when trying to retrieve the fabmoment attribute data!') })
        .then(fabmoment => { return this.$http.get(`/licenses/${this.fabmoment.license_id}`) })
        .then(request => { this.license = request.data })
        // .catch(() => { alert('Something went wrong when trying to retrieve the license!') })
  },
  components: {
    SingleSummarized
    // Comments
  }
}
</script>

<style lang="scss" scoped>
.border-right {
  border-right: 1px #eee solid;
}
// .modal-body {
//   background-color: #888; 
// }
.btn-primary {
  background-color: #0f4e6c;
  border-color: #0f4e6c;
  color: #fff;
}

.btn-primary:hover {
  background-color: darken(#0f4e6c, 20%);
  border-color: darken(#0f4e6c, 20%);
  color: #fff;
}
</style>