<template>
  <div class='machines'>

    <table class="table">
      <thead>
        <tr>
          <th>naam</th>
          <th>aantal</th>
          <th>bezet</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='machine in machines' :key="machine.id">
          <th scope="row">{{ machine.name }}</th>
          <td>{{ machine.usage.capacity }}</td>
          <td>{{ machine.usage.in_use }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'admin-machines',
  data () {
    return {
      machines: []
    }
  },
  created () {
    this.$http.get('/machines')
        .then(request => this.buildList(request.data))
        .catch(() => { alert('Couldn\'t retrieve machines!') })
  },
  methods: {
    buildList (data) {
      this.machines = data
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
