<template>
  <div>
    <section class="gh-content-grid">
      <div class="gh-content-grid__inner">
        <div class="gh-content-grid__item">
          <div class="gh-content-grid__image-wrapper">
            <img class="gh-content-grid__image" src="~/assets/placeholder-450x300.jpg" alt="">
          </div>
          <h2 class="gh-content-grid__title">Shooting Stars</h2>
          <p class="gh-content-grid__text">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
          <a href="#" class="gh-content-grid__link">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="gh-content-grid__icon" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            Learn More
          </a>
        </div>
        <div class="gh-content-grid__item">
          <div class="gh-content-grid__image-wrapper">
            <img class="gh-content-grid__image" src="~/assets/placeholder-450x300.jpg" alt="">
          </div>
          <h2 class="gh-content-grid__title">The Catalyzer</h2>
          <p class="gh-content-grid__text">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
          <a href="#" class="gh-content-grid__link">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="gh-content-grid__icon" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            Learn More
          </a>
        </div>
        <div class="gh-content-grid__item">
          <div class="gh-content-grid__image-wrapper">
            <img class="gh-content-grid__image" src="~/assets/placeholder-450x300.jpg" alt="">
          </div>
          <h2 class="gh-content-grid__title">The 400 Blows</h2>
          <p class="gh-content-grid__text">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
          <a href="#" class="gh-content-grid__link">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="gh-content-grid__icon" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            Learn More
          </a>
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
        title: 'Content Grid',
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>
  .gh-content-grid {
    @apply
      px-5
      py-8
      mx-auto
  }

  .gh-content-grid__inner {
    @apply
      flex
      flex-wrap
  }

  .gh-content-grid__item {
    @apply
      p-4
      md:w-1/3
      sm:mb-0
      mb-6
  }

  .gh-content-grid__image-wrapper {
    @apply
      rounded-lg
      h-64
      overflow-hidden
  }

  .gh-content-grid__image {
    @apply
      object-cover
      object-center
      h-full
      w-full
  }

  .gh-content-grid__title {
    @apply
      text-xl
      font-medium
      mt-5
  }

  .gh-content-grid__text {
    @apply
      text-base
      leading-relaxed
      mt-2
  }

  .gh-content-grid__link {
    @apply
      inline-flex
      items-center
      mt-3
  }

  .gh-content-grid__icon {
    @apply
      w-4
      h-4
      mr-2
  }
</style>
