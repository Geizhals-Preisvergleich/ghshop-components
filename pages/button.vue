<template>
  <div>
    <a href="#" class="gh-button">Button</a>
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
    @apply
      bg-primary
      hover:bg-secondary
      text-white
      px-4
      py-2
      mt-4
      rounded
      no-underline
  }
</style>
