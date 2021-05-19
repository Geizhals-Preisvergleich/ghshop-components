<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div>
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div>
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div>
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div>
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div>
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div>
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div>
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div>
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div>
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div>
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div>
        <a href="#" rel="noopener noreferrer nofollow">
          <img src="~/assets/placeholder-350x100.jpg" alt="">
        </a>
      </div>
      <div>
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
