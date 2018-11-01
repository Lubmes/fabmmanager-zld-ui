<template>
  <div class='reservations'>

    <table class="table">
      <thead>
        <tr>
          <th>gebruikersnaam</th>
          <th>e-mail</th>
          <th>sinds</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='user in users' :key="user.id">
          <th scope="row">{{ user.username }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'admin-users',
  data () {
    return {
      users: []
    }
  },
  created () {
    this.$http.get('/users')
        .then(request => this.buildList(request.data))
        .catch(() => { alert('Couldn\'t retrieve users!') })
  },
  methods: {
    buildList (data) {
      this.users = data
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
