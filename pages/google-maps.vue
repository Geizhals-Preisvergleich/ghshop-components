<template>
  <div>
    <section class="gh-maps">
      <div class="gh-maps__map-wrapper">
        <iframe width="100%" height="100%" class="gh-maps__map" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Wien&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
      </div>
      <div class="gh-maps__content-wrapper">
        <h2 class="gh-maps__title">Adresse</h2>
        <p class="gh-maps__text">
          Preisvergleich Internet Services AG (Medieninhaber)<br>
          Rothschildplatz 3 Top 3.01<br>
          1020 Wien
        </p>

        <h2 class="gh-maps__title">E-Mail</h2>
        <p class="gh-maps__text">example@email.com</p>

        <h2 class="gh-maps__title">Telefon</h2>
        <p class="gh-maps__text">123-456-7890</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Google Maps',
        toggleText: 'Map links/rechts',
        toggleActive: false,
      }
    },
    updated() {
      this.$nuxt.$emit('update:textarea');
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>
  .gh-maps {
    @apply
      flex
      md:flex-nowrap
      flex-wrap
      py-8
  }

  .gh-maps__map-wrapper {
    @apply
      lg:w-2/3
      md:w-1/2
      w-full
      rounded
      overflow-hidden
      mr-0
      md:mr-4
      relative
  }

  .gh-maps__map {
    @apply
      grayscale
      w-full
      h-60
      md:h-full
  }

  .gh-maps__content-wrapper {
    @apply
      lg:w-1/3
      md:w-1/2
      flex
      flex-col
      md:ml-auto
      w-full
      md:py-8
      mt-8
      md:mt-0
      text-left
  }

  .gh-maps__title {
    @apply
      text-lg
      mb-1
      font-medium
  }

  .gh-maps__text {
    @apply
      leading-relaxed
      mb-4
  }
</style>





