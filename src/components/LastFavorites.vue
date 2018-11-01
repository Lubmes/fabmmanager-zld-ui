<template>
    <div class='last-favorites col-sm-4 pl-5 pr-5'>
      <h5 class='text-center'>Uitgelicht</h5>

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        
        <div class="carousel-inner">
          <div class="carousel-item active">
            <SingleSummarizedFabmoment :fabmoment=0></SingleSummarizedFabmoment>
            <!-- <img class="d-block w-100" src="https://dummyimage.com/600x400/cccccc/fff" alt="First slide"> -->
          </div>
          <div class="carousel-item">
            <SingleSummarizedFabmoment :fabmoment=0></SingleSummarizedFabmoment>
            <!-- <img class="d-block w-100" src="https://dummyimage.com/600x400/cccccc/fff" alt="Second slide"> -->
          </div>
          <div class="carousel-item">
            <SingleSummarizedFabmoment :fabmoment=0></SingleSummarizedFabmoment>
            <!-- <img class="d-block w-100" src="https://dummyimage.com/600x400/cccccc/fff" alt="Third slide"> -->
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

    </div>
</template>

<script>
import SingleSummarizedFabmoment from '@/components/Fabmoments/SingleSummarized'
export default {
  name: 'last-favorites',
  data () {
    return {
      fabmoments: [
        { title: 'FM titel 1', description: 'bc1', img_url: 'https://dummyimage.com/600x400/cccccc/fff' }
      ],
      errors: []
    }
  },
  components: {
    SingleSummarizedFabmoment
  }
}
</script>

<style lang="scss" scoped>
  .carousel-inner {
    padding-bottom: 100px;
  }
</style>