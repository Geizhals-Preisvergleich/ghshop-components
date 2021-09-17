<template>
  <div>
    <section class="gh-paragraph-image">
      <div class="gh-paragraph-image__inner">
        <div
          class="gh-paragraph-image__image-wrapper"
          :class="{'gh-paragraph-image__image-wrapper--right': toggleActive}"
        >
          <a href="#">
            <img class="gh-paragraph-image__image" src="~/assets/placeholder-750x300.jpg" alt="">
          </a>
        </div>
        <div
          class="gh-paragraph-image__content-wrapper"
          :class="{'gh-paragraph-image__content-wrapper--left': toggleActive}"
        >
          <h2 class="gh-paragraph-image__title">
            <a href="#">Lorem ipsum dolor sit amet</a>
          </h2>
          <p class="gh-paragraph-image__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>

          <div class="gh-paragraph-image__button-wrapper">
            <a href="#" class="gh-button">Button</a>
          </div>
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
        title: 'Paragraph with Image',
        toggleText: 'Text/Bild links / rechts',
        toggleActive: false,
      }
    },
    updated() {
      this.$nuxt.$emit('update:textarea');
    },
    mounted() {
      this.$store.commit('setTitle', this.title);
    },
  }
</script>

<style>
  .gh-paragraph-image {
    @apply
      lg:py-6
      lg:flex
      lg:justify-center
  }

  .gh-paragraph-image__inner {
    @apply
      lg:flex
  }

  .gh-paragraph-image__image-wrapper {
    @apply
      lg:w-1/2
  }

  .gh-paragraph-image__image-wrapper--right {
    @apply
      lg:order-2
  }

  .gh-paragraph-image__content-wrapper {
    @apply
      flex
      flex-col
      items-center
      justify-center
      px-6
      mt-4
      lg:mt-0
      lg:w-1/2
  }

  .gh-paragraph-image__content-wrapper--left {
    @apply
      lg:order-1
  }

  .gh-paragraph-image__image {
    @apply
      object-cover
      object-center
      rounded
      lg:h-full
  }

  .gh-paragraph-image__title {
    @apply
      font-bold
      text-2xl
      lg:text-3xl
  }

  .gh-paragraph-image__text {
    @apply
      mt-4
  }

  .gh-paragraph-image__button-wrapper {
    @apply
      mt-8
  }
</style>
