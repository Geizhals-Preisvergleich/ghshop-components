<template>
  <div>
    <section class="gh-cards-image-bg">
      <div class="gh-cards-image-bg__item">
        <div class="gh-cards-image-bg__shadow"></div>
        <img class="gh-cards-image-bg__image" src="~/assets/placeholder-650x400.jpg" alt="">
        <div class="gh-cards-image-bg__content-wrapper">
          <h2 class="gh-cards-image-bg__title">Shooting Stars</h2>
          <p class="gh-cards-image-bg__text">Skateboard +1 mustache fixie paleo lumbersexual.</p>
          <a href="#" class="gh-button">Mehr erfahren</a>
        </div>
      </div>
      <div class="gh-cards-image-bg__item">
        <div class="gh-cards-image-bg__shadow"></div>
        <img class="gh-cards-image-bg__image" src="~/assets/placeholder-650x400.jpg" alt="">
        <div class="gh-cards-image-bg__content-wrapper">
          <h2 class="gh-cards-image-bg__title">Shooting Stars</h2>
          <p class="gh-cards-image-bg__text">Skateboard +1 mustache fixie paleo lumbersexual.</p>
          <a href="#" class="gh-button">Mehr erfahren</a>
        </div>
      </div>
      <div class="gh-cards-image-bg__item">
        <div class="gh-cards-image-bg__shadow"></div>
        <img class="gh-cards-image-bg__image" src="~/assets/placeholder-650x400.jpg" alt="">
        <div class="gh-cards-image-bg__content-wrapper">
          <h2 class="gh-cards-image-bg__title">Shooting Stars</h2>
          <p class="gh-cards-image-bg__text">Skateboard +1 mustache fixie paleo lumbersexual.</p>
          <a href="#" class="gh-button">Mehr erfahren</a>
        </div>
      </div>
      <div class="gh-cards-image-bg__item">
        <div class="gh-cards-image-bg__shadow"></div>
        <img class="gh-cards-image-bg__image" src="~/assets/placeholder-650x400.jpg" alt="">
        <div class="gh-cards-image-bg__content-wrapper">
          <h2 class="gh-cards-image-bg__title">Shooting Stars</h2>
          <p class="gh-cards-image-bg__text">Skateboard +1 mustache fixie paleo lumbersexual.</p>
          <a href="#" class="gh-button">Mehr erfahren</a>
        </div>
      </div>
      <div class="gh-cards-image-bg__item">
        <div class="gh-cards-image-bg__shadow"></div>
        <img class="gh-cards-image-bg__image" src="~/assets/placeholder-650x400.jpg" alt="">
        <div class="gh-cards-image-bg__content-wrapper">
          <h2 class="gh-cards-image-bg__title">Shooting Stars</h2>
          <p class="gh-cards-image-bg__text">Skateboard +1 mustache fixie paleo lumbersexual.</p>
          <a href="#" class="gh-button">Mehr erfahren</a>
        </div>
      </div>
      <div class="gh-cards-image-bg__item">
        <div class="gh-cards-image-bg__shadow"></div>
        <img class="gh-cards-image-bg__image" src="~/assets/placeholder-650x400.jpg" alt="">
        <div class="gh-cards-image-bg__content-wrapper">
          <h2 class="gh-cards-image-bg__title">Shooting Stars</h2>
          <p class="gh-cards-image-bg__text">Skateboard +1 mustache fixie paleo lumbersexual.</p>
          <a href="#" class="gh-button">Mehr erfahren</a>
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
        title: 'Cards Image BG',
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>
  .gh-cards-image-bg {
    @apply
      grid
      lg:grid-cols-3
      md:grid-cols-2
      grid-cols-1
      gap-4
      py-8
  }

  .gh-cards-image-bg__item {
    @apply
      flex
      flex-wrap
      w-full
      relative
      rounded
      overflow-hidden
  }

  .gh-cards-image-bg__shadow {
    @apply
      bg-gradient-to-b
      from-black
      to-transparent
      h-28
      w-full
      absolute
      z-10
      opacity-50
  }

  .gh-cards-image-bg__image {
    @apply
      block
      w-full
      h-full
  }

  .gh-cards-image-bg__content-wrapper {
    @apply
      absolute
      text-left
      z-10
      w-full
      p-4
  }

  .gh-cards-image-bg__title {
    @apply
      text-xl
      font-medium
      mb-2
      text-white
      drop-shadow
  }

  .gh-cards-image-bg__text {
    @apply
      leading-relaxed
      mb-6
      text-white
      drop-shadow
  }

  /**
   * Custom styles for pre-configured Magento template
  */

  .page-header {
    z-index: 12 !important;
  }
</style>
