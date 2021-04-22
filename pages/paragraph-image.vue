<template>
  <div>
    <section class="lg:py-6 lg:flex lg:justify-center">
      <div class="lg:flex">
        <div class="lg:w-1/2">
          <a href="#">
            <img class="object-cover object-center rounded-lg lg:h-full" src="https://dummyimage.com/750x300" alt="image">
          </a>
        </div>
        <div class="flex flex-col items-center justify-center px-6 mt-4 lg:mt-0 lg:w-1/2">
          <h2 class="font-bold text-gray-800 text-2xl lg:text-3xl">
            <a href="#">Lorem ipsum dolor sit amet</a>
          </h2>
          <p class="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>

          <div class="mt-8">
            <a href="#" class="gh-button">Button</a>
          </div>
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
        title: 'Paragraph with Image'
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>
