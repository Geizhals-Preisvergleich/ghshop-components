<template>
  <div>
    <section :class="{'lg:justify-end': toggleActive}" class="lg:py-6 lg:flex mx-10 lg:justify-start justify-center">
        <div class="lg:flex">
            <div class="lg:w-1/2 lg:order-1">
                <a href="#">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.1379452847987!2d16.391184215771464!3d48.22321827923044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07a45044f995%3A0xaf433369d8a9834f!2sGeizhals-Preisvergleich!5e0!3m2!1sde!2sat!4v1626264625220!5m2!1sde!2sat"
                    width="500" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </a>
            </div>
        </div>
    </section>
        <div>
      <Toggle
        :text="toggleText"
        :active.sync="toggleActive"
      />
    </div>
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





