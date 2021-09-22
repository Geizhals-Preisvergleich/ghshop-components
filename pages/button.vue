<template>
  <div>
    <a href="#" class="gh-button">
      <svg xmlns="http://www.w3.org/2000/svg" class="gh-button__icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="6" cy="19" r="2"></circle>
        <circle cx="17" cy="19" r="2"></circle>
        <path d="M17 17h-11v-14h-2"></path>
        <path d="M6 5l14 1l-1 7h-13"></path>
      </svg>
      Button
    </a>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Button',
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>
  .gh-button {
    color: var(--buttonText);

    @apply
      inline-flex
      items-center
      justify-center
      bg-primary
      hover:bg-secondary
      px-4
      py-2
      m-0
      mt-4
      rounded
      no-underline
  }

  .gh-button__icon {
    @apply
      mr-2
      h-5
      w-5
  }
</style>
