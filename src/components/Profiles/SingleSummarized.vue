<template>
  <div class="author row text-center m-3">
    <div class="col-md-2 mb-3">
      <img :src="image" class='rounded-circle'></img>
      <router-link :to="{ name: 'Profile', params: { id: author.id } }" class="btn mt-3">
        <strong>{{ author.username }}</strong>
      </router-link>
    </div>
    <div class="col-md-10 text-left mt-3 pl-5">
      <h5>Bio</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleSummarized',
  props: ['author'],
  data () {
    return {
      image: `http://via.placeholder.com/200x200?text=avatar`
    }
  },
  created () {
    this.pullImage()
  },
  methods: {
    async pullImage () {
      const response = await fetch(`http://api.duckduckgo.com/?q=${encodeURIComponent(this.author.name)}&format=json&pretty=1`)
      const json = await response.json()
      if (json.Image) {
        this.image = json.Image
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.author {
  min-width: 260px;
  img {
    object-fit: cover;
    border: #1e9dd8 1px solid;
    // width: 100%;
    // height: 100%;
  }
}
</style>