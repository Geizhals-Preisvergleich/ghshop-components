<template>
  <div class="container">
    <Head />

    <div class="component-container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  html {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  a {
    @apply
      underline
      hover:no-underline
  }

  .nuxt-link-active {
    @apply
      text-red-500
  }

  .container {
    @apply
      mx-auto
      text-center
      my-4
  }

  .title {
    @apply
      text-4xl
      text-center
      mt-8
      mb-4
      uppercase
      font-bold
  }

  .subtitle {
    @apply
      text-gray-500
      text-3xl
      text-center
      mb-8
  }
</style>
