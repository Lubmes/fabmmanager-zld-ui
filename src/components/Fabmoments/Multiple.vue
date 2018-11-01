<template>
  <div class='fabmoments'>
      <!-- <h2>Fabmoments</h2> -->

      <div class='row'>
        <div v-for='fabmoment in fabmoments' :key='fabmoment.id' class='col-sm-4 p-5'>

          <SingleSummarizedFabmoment :fabmoment="fabmoment"></SingleSummarizedFabmoment>

        </div>
      </div>

  </div>
</template>

<script>
import SingleSummarizedFabmoment from '@/components/Fabmoments/SingleSummarized'
export default {
  name: 'Multipe',
  props: [
    'author'
  ],
  data () {
    return {
      fabmoments: []
    }
  },
  created () {
    if (this.author.id >= 0) {
      this.$http.get(`/users/${this.$route.params.id}/fabmoments`)
        .then(request => this.buildFabmomentList(request.data))
        .catch(() => { alert('Couldn\'t fetch faboments!') })
    } else {
      this.$http.get('/fabmoments')
        .then(request => this.buildFabmomentList(request.data))
        .catch(() => { alert('Couldn\'t fetch faboments!') })
    }
  },
  methods: {
    buildFabmomentList (data) {
      this.fabmoments = data
    }
  },
  components: {
    SingleSummarizedFabmoment
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
