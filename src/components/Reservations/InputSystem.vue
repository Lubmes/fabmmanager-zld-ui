<template>
  <div class="input-system mt-4">

    <!-- <h2>Reserveren</h2> -->
    <Calendar></Calendar>
    <ReservationInput class='ml-5 mr-5'></ReservationInput>
  </div>
</template>

<script>
import Calendar from '@/components/Calendar'
import ReservationInput from '@/components/Reservations/Input'
export default {
  components: {
    Calendar,
    ReservationInput
  }
}
</script>