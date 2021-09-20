<template>
  <div>
    <section class="gh-cards-info">
      <div class="gh-cards-info__item">
        <div class="gh-cards-info__title-wrapper">
          <div class="gh-cards-info__icon-wrapper">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="gh-cards-info__icon" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h4 class="gh-cards-info__title">Shooting Stars</h4>
        </div>
        <div class="gh-cards-info__text-wrapper">
          <p class="gh-cards-info__text">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        </div>
      </div>
      <div class="gh-cards-info__item">
        <div class="gh-cards-info__title-wrapper">
          <div class="gh-cards-info__icon-wrapper">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="gh-cards-info__icon" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h4 class="gh-cards-info__title">The Catalyzer</h4>
        </div>
        <div class="gh-cards-info__text-wrapper">
          <p class="gh-cards-info__text">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        </div>
      </div>
      <div class="gh-cards-info__item">
        <div class="gh-cards-info__title-wrapper">
          <div class="gh-cards-info__icon-wrapper">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="gh-cards-info__icon" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <h4 class="gh-cards-info__title">Neptune</h4>
        </div>
        <div class="gh-cards-info__text-wrapper">
          <p class="gh-cards-info__text">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        </div>
      </div>
      <div class="gh-cards-info__item">
        <div class="gh-cards-info__title-wrapper">
          <div class="gh-cards-info__icon-wrapper">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="gh-cards-info__icon" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <h4 class="gh-cards-info__title">Neptune</h4>
        </div>
        <div class="gh-cards-info__text-wrapper">
          <p class="gh-cards-info__text">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
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
        title: 'Cards Info',
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>
  .gh-cards-info {
    @apply
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-4
      gap-4
  }

  .gh-cards-info__item {
    @apply
      flex
      rounded-lg
      h-full
      bg-gray-100
      p-8
      flex-col
  }

  .gh-cards-info__title-wrapper {
    @apply
      flex
      items-center
      mb-3
  }

  .gh-cards-info__title {
    @apply
      text-lg
      font-medium
  }

  .gh-cards-info__icon-wrapper {
    @apply
      w-8
      h-8
      mr-3
      inline-flex
      items-center
      justify-center
      rounded-full
      bg-primary
      text-white
      flex-shrink-0
  }

  .gh-cards-info__icon {
    @apply
      w-5
      h-5
  }

  .gh-cards-info__text-wrapper {
    @apply
      flex-grow
  }

  .gh-cards-info__text {
    @apply
      leading-relaxed
      text-base
      text-left
  }
</style>
