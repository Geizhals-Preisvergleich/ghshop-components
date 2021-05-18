<template>
  <div>
    <section>
      <div class="mx-auto flex py-8 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Before they sold out readymade gluten
          </h1>
          <p class="mb-2 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div class="flex justify-center">
            <a href="#" class="gh-button">Button</a>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full">
          <img class="object-cover object-center rounded" alt="hero" src="~/assets/placeholder-720x400.png">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Hero',
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>
