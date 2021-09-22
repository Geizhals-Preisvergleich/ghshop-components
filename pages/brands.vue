<template>
  <div>
    <div class="gh-brands">
      <div class="gh-brands__item">
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div class="gh-brands__item">
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div class="gh-brands__item">
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div class="gh-brands__item">
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div class="gh-brands__item">
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div class="gh-brands__item">
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div class="gh-brands__item">
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div class="gh-brands__item">
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div class="gh-brands__item">
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div class="gh-brands__item">
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div class="gh-brands__item">
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div class="gh-brands__item">
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Brands',
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>
  .gh-brands {
    @apply
      grid
      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-6
      gap-4
  }
</style>
