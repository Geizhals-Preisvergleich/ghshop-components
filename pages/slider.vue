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
    <Textarea :html="sliderMarkup" />
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
          autoplay: false,
          heightRatio: 0.325,
			  },
        sliderMarkup: `
          <div class="splide">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide">
                  <a href="#">
                    <img src="#" alt="">
                  </a>
                </li>
                <li class="splide__slide">
                  <a href="#">
                    <img src="#" alt="">
                  </a>
                </li>
                <li class="splide__slide">
                  <a href="#">
                    <img src="#" alt="">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        `,
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>
  @import '~/node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css';

  .splide__slide {
    display: flex;
  }

  .splide__slide a {
    width: 100%;
  }

  .splide__slide img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>
