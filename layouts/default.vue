<template>
  <div class="container gh-container">
    <Head />

    <div class="gh-component-container">
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
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  html.nuxt-html {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
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

  p {
    @apply
      mb-4
  }

  .gh-container {
    @apply
      mx-auto
      text-center
      my-4
  }
</style>
