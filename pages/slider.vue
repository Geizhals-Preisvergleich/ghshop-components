<template>
  <div>
    <splide :options="options">
      <splide-slide>
        <a href="#">
          <img src="~/assets/placeholder-1280x400.jpg" alt="">
        </a>
      </splide-slide>
      <splide-slide>
        <a href="#">
          <img src="~/assets/placeholder-1280x400-2.jpg" alt="">
        </a>
      </splide-slide>
      <splide-slide>
        <a href="#">
          <img src="~/assets/placeholder-1280x400-3.jpg" alt="">
        </a>
      </splide-slide>
      <splide-slide>
        <a href="#">
          <img src="~/assets/placeholder-1280x400-4.jpg" alt="">
        </a>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Slider',
        options: {
			  	rewind : true,
				  perPage: 1,
				  gap: '1rem',
          autoplay: true,
			  },
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>
