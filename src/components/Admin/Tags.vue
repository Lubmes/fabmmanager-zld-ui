<template>
  <div class='reservations'>

    <table class="table">
      <thead>
        <tr>
          <th>naam</th>
          <th>aantal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='tag in tags' :key="tag.id">
          <th scope="row">{{ tag.name }}</th>
          <td>{{ tag.taggings_count }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'admin-tags',
  data () {
    return {
      tags: []
    }
  },
  created () {
    this.$http.get('/tags')
        .then(request => this.buildList(request.data))
        .catch(() => { alert('Couldn\'t retrieve tags!') })
  },
  methods: {
    buildList (data) {
      this.tags = data
    }
  },
  computed: {
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
