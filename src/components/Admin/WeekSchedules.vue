<template>
  <div class='week-schedules'>

    <table class="table">
      <thead>
        <tr>
          <th>titel</th>
          <th>subtitel</th>
          <th>actief</th>
        </tr>
      </thead>
      <tbody v-for='weekSchedule in weekSchedules' :key="weekSchedule.id">
        <tr>
          <th scope="row">{{ weekSchedule.title }}</th>
          <td>{{ weekSchedule.subtitle }}</td>
          <td>{{ weekSchedule.active ? "aan" : "uit" }}</td>
        </tr>
        <table class="sub-table">
          <thead>
            <tr>
              <th>dag</th>
              <th>activiteit</th>
              <th>start</th>
              <th>eind</th>
            </tr>
          </thead>
          <tr v-for='returningActivity in weekSchedule.returning_activities' :key="returningActivity.id">
            <td>{{ returningActivity.day }}</td>
            <td>{{ returningActivity.caption }}</td>
            <td>{{ returningActivity.start_time }}</td>
            <td>{{ returningActivity.end_time }}</td>
          </tr>
        </table>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'admin-week-schedules',
  data () {
    return {
      weekSchedules: []
    }
  },
  created () {
    this.$http.get('/weekly_time_tables')
        .then(request => this.buildList(request.data))
        .catch(() => { alert('Couldn\'t retrieve week schedules!') })
  },
  methods: {
    buildList (data) {
      this.weekSchedules = data
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
