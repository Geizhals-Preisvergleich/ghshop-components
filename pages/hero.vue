<template>
  <div>
    <section class="gh-hero">
      <div class="gh-hero__content-wrapper">
        <h2 class="gh-hero__title">
          Before they sold out readymade gluten
        </h2>
        <p class="gh-hero__text">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="gh-hero__button-wrapper">
          <a href="#" class="gh-button">Button</a>
        </div>
      </div>
      <div class="gh-hero__image-wrapper">
        <img class="gh-hero__image" src="~/assets/placeholder-720x400.jpg" alt="">
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Hero',
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>
  .gh-hero {
    @apply
      mx-auto
      flex
      py-8
      md:flex-row
      flex-col
      items-center
  }

  .gh-hero__content-wrapper {
    @apply
      lg:flex-grow
      md:w-1/2
      lg:pr-12
      md:pr-8
      flex
      flex-col
      md:items-start
      md:text-left
      mb-8
      md:mb-0
      items-center
      text-center
  }

  .gh-hero__title {
    @apply
      sm:text-4xl
      text-3xl
      mb-4
      font-medium
  }

  .gh-hero__text {
    @apply
      mb-2
      leading-relaxed
  }

  .gh-hero__button-wrapper {
    @apply
      flex
      justify-center
  }

  .gh-hero__image-wrapper {
    @apply
      lg:max-w-lg
      lg:w-full
      md:w-1/2
      w-full
  }

  .gh-hero__image {
    @apply
      object-cover
      object-center
      rounded
  }
</style>
