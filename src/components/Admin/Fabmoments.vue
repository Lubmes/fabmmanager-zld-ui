<template>
  <div class='reservations'>

    <table class="table">
      <thead>
        <tr>
          <th>titel</th>
          <th>gebruiker id</th>
          <th>geplaatst op</th>
          <th>laatst gewijzigd</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='fabmoment in fabmoments' :key="fabmoment.id">
          <th scope="row">{{ fabmoment.title }}</th>
          <td>{{ fabmoment.user_id }}</td>
          <td>{{ fabmoment.created_at }}</td>
          <td>{{ fabmoment.updated_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'fabmoments',
  data () {
    return {
      fabmoments: []
    }
  },
  created () {
    this.$http.get('/fabmoments')
        .then(request => this.buildList(request.data))
        .catch(() => { alert('Couldn\'t retrieve users!') })
  },
  methods: {
    buildList (data) {
      this.fabmoments = data
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
