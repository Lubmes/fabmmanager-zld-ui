<template>
  <div class='materials'>

    <table class="table">
      <thead>
        <tr>
          <th>naam</th>
          <th>dikte</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='material in materials' :key="material.id">
          <th scope="row">{{ material.name }}</th>
          <td>{{ material.thickness }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'admin-materials',
  data () {
    return {
      materials: []
    }
  },
  created () {
    this.$http.get('/materials')
        .then(request => this.buildList(request.data))
        .catch(() => { alert('Couldn\'t retrieve materials!') })
  },
  methods: {
    buildList (data) {
      this.materials = data
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
