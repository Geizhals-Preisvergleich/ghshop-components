<template>
  <div>
    <section class="gh-checklist">
      <div class="gh-checklist__item">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="gh-checklist__item__icon" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        <span class="gh-checklist__item__text">Authentic Cliche Forage</span>
      </div>
      <div class="gh-checklist__item">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="gh-checklist__item__icon" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        <span class="gh-checklist__item__text">Kinfolk Chips Snackwave</span>
      </div>
      <div class="gh-checklist__item">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="gh-checklist__item__icon" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        <span class="gh-checklist__item__text">Coloring Book Ethical</span>
      </div>
      <div class="gh-checklist__item">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="gh-checklist__item__icon" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        <span class="gh-checklist__item__text">Typewriter Polaroid Cray</span>
      </div>
      <div class="gh-checklist__item">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="gh-checklist__item__icon" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        <span class="gh-checklist__item__text">Pack Truffaut Blue</span>
      </div>
      <div class="gh-checklist__item">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="gh-checklist__item__icon" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        <span class="gh-checklist__item__text">The Catcher In The Rye</span>
      </div>
    </section>
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
  .gh-checklist {
    @apply
      grid
      md:grid-cols-2
      grid-cols-1
      gap-2
  }

  .gh-checklist__item {
    @apply
      bg-gray-100
      rounded
      flex
      p-4
      h-full
      items-center
  }

  .gh-checklist__item__icon {
    @apply
      text-primary
      w-6
      h-6
      flex-shrink-0
      mr-4
  }

  .gh-checklist__item__text {
    @apply
      font-medium
  }
</style>
