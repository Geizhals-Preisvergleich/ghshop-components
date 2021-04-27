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
