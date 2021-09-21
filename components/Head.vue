<template>
  <div>
    <h1 class="gh-title">
      GH Shop Components
    </h1>
    <h2 class="gh-subtitle">
      <NuxtLink to="/">Index</NuxtLink>
      <span v-show="title"> / {{ title }}</span>
    </h2>
  </div>
</template>

<script>
  export default {
    computed: {
      title () {
        return this.$store.state.title;
      },
    },
    head() {
      return {
        title: this.title || 'Index',
      }
    }
  }
</script>

<style scoped>
  .gh-title {
    @apply
      text-4xl
      text-center
      mt-8
      mb-4
      uppercase
      font-bold
  }

  .gh-subtitle {
    @apply
      text-gray-500
      text-xl
      text-center
      mb-8
      uppercase
      tracking-wider
  }

  .nuxt-link-active {
    @apply
      text-red-500
  }
</style>
