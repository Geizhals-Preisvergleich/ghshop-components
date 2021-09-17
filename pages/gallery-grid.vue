<template>
  <div>
    <section class="gh-gallery-grid">
      <div class="gh-gallery-grid__column">
        <div class="gh-gallery-grid__image-small-wrapper">
          <img class="gh-gallery-grid__image-small" src="~/assets/placeholder-350x200.jpg" alt="">
        </div>
        <div class="gh-gallery-grid__image-small-wrapper">
          <img class="gh-gallery-grid__image-small" src="~/assets/placeholder-350x200.jpg" alt="">
        </div>
        <div class="gh-gallery-grid__image-big-wrapper">
          <img class="gh-gallery-grid__image-big" src="~/assets/placeholder-650x400.jpg" alt="">
        </div>
      </div>
      <div class="gh-gallery-grid__column">
        <div class="gh-gallery-grid__image-big-wrapper">
          <img class="gh-gallery-grid__image-big" src="~/assets/placeholder-650x400.jpg" alt="">
        </div>
        <div class="gh-gallery-grid__image-small-wrapper">
          <img class="gh-gallery-grid__image-small" src="~/assets/placeholder-350x200.jpg" alt="">
        </div>
        <div class="gh-gallery-grid__image-small-wrapper">
          <img class="gh-gallery-grid__image-small" src="~/assets/placeholder-350x200.jpg" alt="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Gallery Grid',
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>
  .gh-gallery-grid {
    @apply
      grid
      lg:grid-cols-2
      grid-cols-1
      py-8
  }

  .gh-gallery-grid__column {
    @apply
      flex
      flex-wrap
  }

  .gh-gallery-grid__image-small {
    @apply
      w-full
      object-cover
      h-full
      object-center
      block
      rounded
  }

  .gh-gallery-grid__image-small-wrapper {
    @apply
      md:p-2
      p-1
      w-1/2
  }

  .gh-gallery-grid__image-big {
    @apply
      w-full
      h-full
      object-cover
      object-center
      block
      rounded
  }

  .gh-gallery-grid__image-big-wrapper {
    @apply
      md:p-2
      p-1
      w-full
  }
</style>
