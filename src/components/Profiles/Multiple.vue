<template>
  <div class="profiles">
    <div class="page-header mt-3 mb-4">
      <div class="float-right">
        <input type="text" name="search" v-model="search" placeholder="Zoeken..." class="form-control"></input>
      </div>
      <h2>Gebruikers</h2>
      <hr class="my-3">
    </div>
    <!-- <div class="row"> -->
      <SingleSummarized v-for="author in authors" :key="author.id" :author="author"></SingleSummarized>
      <!-- <Box v-for="author in authors" :key="author.id" :author="author" v-show="searchMatch(author.name)"></Box> -->
    <!-- </div> -->
  </div>
</template>

<script>
import SingleSummarized from './SingleSummarized'

export default {
  name: 'Multiple',
  data () {
    return {
      search: '',
      authors: []
    }
  },
  created () {
    this.$http.get('/users')
        .then(request => this.buildAuthorList(request.data))
        .catch(() => { alert('Something went wrong!') })
  },
  methods: {
    buildAuthorList (data) {
      this.authors = data
    }
    // ,
    // searchMatch (authorName) {
    //   return authorName.toLowerCase().match(this.searchRegExp)
    // }
  },
  computed: {
    searchRegExp () {
      return new RegExp(`(.*)${this.search}(.*)`)
    }
  },
  components: {
    SingleSummarized
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
