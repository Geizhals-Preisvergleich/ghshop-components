<template>
  <div>
    <footer>
      <div class="px-6 py-4 mx-auto">
        <div class="lg:flex">
          <div class="w-full lg:w-2/5">
            <div class="text-center lg:text-left">
              <div>
                <a href="#" class="text-xl font-bold text-gray-800 hover:text-gray-700">Brand</a>
              </div>

              <p class="max-w-md mt-2 text-gray-500 mx-auto lg:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nisi! Id.</p>

              <div class="flex justify-center lg:justify-start mt-4 mx-0 lg:-mx-2">
                <a href="#" target="_blank" class="mx-4 lg:mx-2 text-gray-700 hover:text-gray-600" aria-label="Facebook">
                  <svg class="w-8 h-8 lg:w-4 lg:h-4 fill-current" viewBox="0 0 512 512">
                    <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"/>
                  </svg>
                </a>

                <a href="#" target="_blank" class="mx-4 lg:mx-2 text-gray-700 hover:text-gray-600" aria-label="Twitter">
                  <svg class="w-8 h-8 lg:w-4 lg:h-4 fill-current" viewBox="0 0 512 512">
                    <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="mt-6 lg:mt-0 lg:flex-1">
            <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                <div>
                    <h3 class="uppercase">About</h3>
                    <a href="#" class="block mt-2 text-sm">Company</a>
                    <a href="#" class="block mt-2 text-sm">Community</a>
                    <a href="#" class="block mt-2 text-sm">Careers</a>
                </div>

                <div>
                    <h3 class="uppercase">Blog</h3>
                    <a href="#" class="block mt-2 text-sm">Tec</a>
                    <a href="#" class="block mt-2 text-sm">Music</a>
                    <a href="#" class="block mt-2 text-sm">Videos</a>
                </div>

                <div>
                    <h3 class="uppercase">Products</h3>
                    <a href="#" class="block mt-2 text-sm">Mega cloud</a>
                    <a href="#" class="block mt-2 text-sm">Aperion UI</a>
                    <a href="#" class="block mt-2 text-sm">Meraki UI</a>
                </div>

                <div>
                    <h3 class="uppercase">Contact</h3>
                    <span class="block mt-2 text-sm">+1 526 654 8965</span>
                    <span class="block mt-2 text-sm">
                      <a href="mailto:example@email.com">example@email.com</a>
                    </span>
                </div>
            </div>
          </div>
        </div>

        <hr class="h-px my-6 bg-gray-300 border-none">

        <div>
          <p class="text-center text-sm">© Brand 2020 - All rights reserved</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Footer',
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>

</style>
