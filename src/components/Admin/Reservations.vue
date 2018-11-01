<template>
  <div class='reservations'>

    <table class="table">
      <thead>
        <tr>
          <th>reservering</th>
          <th>begin</th>
          <th>eind</th>
          <th colspan='2'></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='reservation in reservations' :key="reservation.id">
          <th scope="row">{{ reservation.title }}</th>
          <td>{{ reservation.start_time }}</td>
          <td>{{ reservation.end_time }}</td>
          <td>goedkeuren</td>
          <td>afkeuren</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'admin-reservations',
  data () {
    return {
      reservations: []
    }
  },
  created () {
    this.$http.get('/reservations')
        .then(request => this.buildList(request.data))
        .catch(() => { alert('Couldn\'t retrieve reservations!') })
  },
  methods: {
    buildList (data) {
      this.reservations = data
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
