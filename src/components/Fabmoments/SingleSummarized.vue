<template>
  <div class='fabmoments'>

    <div class="card mb-3">
      <!-- <img class="card-img-top" :src=fabmoment.img_url alt="Card image cap"> -->
      <router-link :to="{ name: 'Fabmoment', params: { author_id: fabmoment.user_id, fabmoment_id: fabmoment.id } }" class="btn p-0 border-0">
        <img class="card-img-top border-bottom border-primary" src="https://dummyimage.com/600x400/cccccc/fff" alt="Card image cap">
      </router-link>
      <div class="card-body">
          <div class='text-center'>
            <router-link :to="{ name: 'Fabmoment', params: { author_id: fabmoment.user_id, fabmoment_id: fabmoment.id } }" class="btn">
              <h4 class="card-title">{{ fabmoment.title }}</h4>
            </router-link>
          </div>
          <p class="card-text">
          {{ fabmoment.description }}
          </p>
          <p class="card-text text-center"><small class="text-muted">2 dagen geleden</small></p>
          <p class='text-center'>
            <a href="#" class="card-link pl-5"><i class="far fa-heart"></i></i></a>
            <a href="#" class="card-link float-right"><i class="far fa-star"></i></a>
          </p>
          <!-- <a href="#" class="card-link"><i class="fas fa-heart"></i></i></a> -->
          
          <!-- <a href="#" class="card-link"><i class="fas fa-star"></i></i></a> -->
          <!-- </div> -->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: [
    'fabmoment'
  ]
}
</script>

<style scoped>
  
</style>
