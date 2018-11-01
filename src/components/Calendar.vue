<template>
    <div class='calendar pb-3'>
      <!-- <h6 class="card-subtitle mb-3 text-muted">Wanneer dacht u een machine nodig te hebben?</h6> -->
      <div id='calendar'></div>
    </div>
</template>

<script>
import $ from 'jquery'
import 'fullcalendar'
import 'fullcalendar-scheduler'

export default {
  name: 'calendar',
  data () {
    return {
      check: 'test',
      cal: null
    }
  },
  mounted () {
    $(document).ready(() => {
      // page is now ready, initialize the calendar...
      $('#calendar').fullCalendar({
        // put your options and callbacks here
        locale: 'nl',
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        // themeSystem: 'bootstrap4',
        // bootstrapFontAwesome: {
        //   close: 'fa-times',
        //   prev: 'fa-chevron-left',
        //   next: 'fa-chevron-right',
        //   prevYear: 'fa-angle-double-left',
        //   nextYear: 'fa-angle-double-right'
        // },
        header: {
          left: 'today prev,next',
          center: 'title',
          right: 'timelineDay,timelineWeek'
        },
        titleFormat: 'D MMMM',
        slotLabelFormat: [
          'ddd',
          'HH'
        ],
        nowIndicator: true,
        minTime: '10:00:00',
        maxTime: '20:00:00',
        slotDuration: '00:15:00',
        columnHeaderFormat: 'hh',
        buttonText: {
          today: 'vandaag',
          month: 'maand',
          week: 'week',
          day: 'dag',
          list: 'lijst'
        },
        defaultView: 'timelineDay',
        weekends: false,
        contentHeight: 309,
        resourceColumns: [
          {
            labelText: 'Machine',
            field: 'title'
          }
        ],
        resources: [
          { id: 'a', title: 'Ultimaker 3' },
          { id: 'b', title: 'Ultimaker 2+' },
          { id: 'c', title: 'Ultimaker 2 no. 1' },
          { id: 'd', title: 'Ultimaker 2 no. 2' },
          { id: 'e', title: 'Lasersnijder' },
          { id: 'f', title: 'Vinylsnijder' }
        ],
        events: [
          { id: '1',
            resourceId: 'a',
            start: '2018-03-09 11:00',
            end: '2018-03-09 13:00',
            title: 'event 1'
          },
          { id: '2',
            resourceId: 'b',
            start: '2018-03-09 14:00',
            end: '2018-03-09 17:00',
            title: 'event 2'
          },
          { id: '3',
            resourceId: 'b',
            start: '2018-03-09 17:00',
            end: '2018-03-09 19:00',
            title: 'event 2'
          },
          { id: '4',
            resourceId: 'c',
            start: '2018-03-09 10:00',
            end: '2018-03-09 13:00',
            title: 'event 2'
          }
        ]
      })
    })
  }
}
</script>

<style lang="scss" scoped>

</style>