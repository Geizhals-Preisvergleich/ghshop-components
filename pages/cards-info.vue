<template>
  <div>
    <section class="gh-cards-info">
      <div class="gh-cards-info__item">
        <div class="gh-cards-info__icon-wrapper">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="gh-cards-info__icon" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="gh-cards-info__text-wrapper">
          <h4 class="gh-cards-info__title">Shooting Stars</h4>
          <p class="gh-cards-info__text">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        </div>
      </div>
      <div class="gh-cards-info__item">
        <div class="gh-cards-info__icon-wrapper">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="gh-cards-info__icon" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="gh-cards-info__text-wrapper">
          <h4 class="gh-cards-info__title">Shooting Stars</h4>
          <p class="gh-cards-info__text">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        </div>
      </div>
      <div class="gh-cards-info__item">
        <div class="gh-cards-info__icon-wrapper">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="gh-cards-info__icon" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="gh-cards-info__text-wrapper">
          <h4 class="gh-cards-info__title">Shooting Stars</h4>
          <p class="gh-cards-info__text">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        </div>
      </div>
      <div class="gh-cards-info__item">
        <div class="gh-cards-info__icon-wrapper">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="gh-cards-info__icon" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="gh-cards-info__text-wrapper">
          <h4 class="gh-cards-info__title">Shooting Stars</h4>
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
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

    @apply
      grid
      gap-4
  }

  .gh-cards-info__item {
    @apply
      flex
      h-full
  }

  .gh-cards-info__title {
    @apply
      text-lg
      font-medium
      text-left
      mb-2
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
      mb-0
  }
</style>
