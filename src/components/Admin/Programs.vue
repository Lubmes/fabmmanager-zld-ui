<template>
  <div class='programs'>

    <table class="table">
      <thead>
        <tr>
          <th>naam</th>
          <th>laatst gewijzigd</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='program in programs' :key="program.id">
          <th scope="row">{{ program.name }}</th>
          <td>{{ program.updated_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'admin-programs',
  data () {
    return {
      programs: []
    }
  },
  created () {
    this.$http.get('/programs')
        .then(request => this.buildList(request.data))
        .catch(() => { alert('Couldn\'t retrieve programs!') })
  },
  methods: {
    buildList (data) {
      this.programs = data
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
