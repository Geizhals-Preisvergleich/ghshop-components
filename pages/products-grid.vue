<template>
  <div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded">
          <a href="#">
            <img class="h-40 rounded w-full object-cover object-center mb-4" src="~/assets/placeholder-300x200.jpg" alt="Image">
          </a>
          <h2 class="text-lg text-gray-900 font-bold mb-2">
            <a href="#">Chichen Itza</a>
          </h2>
          <p class="leading-relaxed text-primary mb-4 font-bold">29,99 €</p>
          <p class="leading-relaxed text-xs">inkl. 20% MwSt</p>
          <p class="leading-relaxed text-xs">
            zzgl. <a href="#" target="_blank">Versandkosten</a>
          </p>
          <button type="button" class="gh-button w-full">In den Warenkorb</button>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded">
          <a href="#">
            <img class="h-40 rounded w-full object-cover object-center mb-4" src="~/assets/placeholder-300x200.jpg" alt="Image">
          </a>
          <h2 class="text-lg text-gray-900 font-bold mb-2">
            <a href="#">Chichen Itza</a>
          </h2>
          <p class="leading-relaxed text-primary mb-4 font-bold">29,99 €</p>
          <p class="leading-relaxed text-xs">inkl. 20% MwSt</p>
          <p class="leading-relaxed text-xs">
            zzgl. <a href="#" target="_blank">Versandkosten</a>
          </p>
          <button type="button" class="gh-button w-full">In den Warenkorb</button>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded">
          <a href="#">
            <img class="h-40 rounded w-full object-cover object-center mb-4" src="~/assets/placeholder-300x200.jpg" alt="Image">
          </a>
          <h2 class="text-lg text-gray-900 font-bold mb-2">
            <a href="#">Chichen Itza</a>
          </h2>
          <p class="leading-relaxed text-primary mb-4 font-bold">29,99 €</p>
          <p class="leading-relaxed text-xs">inkl. 20% MwSt</p>
          <p class="leading-relaxed text-xs">
            zzgl. <a href="#" target="_blank">Versandkosten</a>
          </p>
          <button type="button" class="gh-button w-full">In den Warenkorb</button>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded">
          <a href="#">
            <img class="h-40 rounded w-full object-cover object-center mb-4" src="~/assets/placeholder-300x200.jpg" alt="Image">
          </a>
          <h2 class="text-lg text-gray-900 font-bold mb-2">
            <a href="#">Chichen Itza</a>
          </h2>
          <p class="leading-relaxed text-primary mb-4 font-bold">29,99 €</p>
          <p class="leading-relaxed text-xs">inkl. 20% MwSt</p>
          <p class="leading-relaxed text-xs">
            zzgl. <a href="#" target="_blank">Versandkosten</a>
          </p>
          <button type="button" class="gh-button w-full">In den Warenkorb</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Products Grid'
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>
