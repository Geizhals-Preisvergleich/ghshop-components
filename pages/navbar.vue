<template>
  <div>
    <div>
      <nav class="gh-navbg shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" src="../assets/placeholder-300x200.jpg" alt="Workflow logo">
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline">
                  <a href="#" class="mt-1 block px-3 py-2 rounded-md text-sm lg:text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Home</a>
                  <a href="#" class="mt-1 block px-3 py-2 rounded-md text-sm lg:text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Video/Foto/TV</a>
                  <a href="#" class="mt-1 block px-3 py-2 rounded-md text-sm lg:text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Audio/HiFi</a>
                  <a href="#" class="mt-1  px-3 py-2 rounded-md text-sm lg:text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg hidden lg:block">Elektrogeräte</a>

                  <div class="ml-3 relative">
                  <div>
                    <button @click="togglelg" class="max-w-xs flex items-center text-base rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                      <p class="rounded-md text-sm lg:text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Mehr...</p>
                    </button>
                  </div>
                  <transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" 
                  enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" 
                  leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"
                  >
                    <div v-show="isOpenlg" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                      <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100 lg:hidden" role="menuitem">Elektrogeräte</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Kühlen & Gefrieren</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Geschirrspülen</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Kochen & Backen</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Festbrennstoffherde</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Kühchenkleingeräte</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Waschen & Trocknen</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Büglen & Nähen</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Kaminöfen</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Mund- & Zahnpflege</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Rasur & Haarpflege</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Griller</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Security</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Heim & Garten</a>
                        <a href="#" class="block px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100" role="menuitem">Aktionen</a>
                      </div>
                    </div>
                  </transition>
                </div>
                </div> 
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <div class="shadow-lg flex">
                <input class="w-full rounded-none p-1" type="text" placeholder="Search...">        
                <button class="bg-white w-auto flex justify-end items-center p-2">
                  <fa icon="search" class="text-lg gh-icon hover:text-gray-300 focus:outline-none focus:text-gray-300" />
                </button>
              </div>
                <div class="ml-3 relative">
                  <div>
                    <a href="#" class="no-underline">
                      <fa icon="shopping-cart" class="text-lg gh-textcolor hover:text-white focus:outline-none focus:text-white" />
                       <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">99</span>
                       </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <button @click="toggle" class="inline-flex items-center justify-center p-2 rounded-md gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:gh-hoverbg focus:text-white">
                <svg :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']" stroke="currentcolor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                 <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">1</span>
              </button>
            </div>
          </div>
        </div>
        <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
          <div class="px-2 pt-2 pb-3 sm:px-3">
            <div class="shadow-lg flex">
                <input class="w-full rounded-none p-1" type="text" placeholder="Search...">        
                <button class="bg-white w-auto flex justify-end items-center p-2">
                  <fa icon="search" class="text-lg gh-icon hover:text-gray-300 focus:outline-none focus:text-gray-300" />
                </button>
              </div>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Home</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Video/Foto/TV</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Audio/HiFi</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Elektrogeräte</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Kühlen & Gefrieren</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Geschirrspülen</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Kochen & Backen</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Festbrennstoffherde</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Kühchenkleingeräte</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Waschen & Trocknen</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Büglen & Nähen</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Kaminöfen</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Mund- & Zahnpflege</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Rasur & Haarpflege</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Griller</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Security</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Heim & Garten</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg">Aktionen</a>
            
          </div>
          <div class="pt-4 pb-3 border-t border-gray-700">
            <div class="mt-3 px-2">
              <a href="#" class="block px-3 py-2 rounded-md text-base font-medium no-underline gh-textcolor hover:text-white hover:gh-hoverbg focus:outline-none focus:text-white focus:gh-hoverbg"><fa icon="shopping-cart" class="gh-navbg" /> Warenkorb
               <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">1</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Navbar',
        isOpen: false,
        isOpenlg: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },

    togglelg () {
      this.isOpenlg = !this.isOpenlg
    }
  },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>
  .gh-navbg {
    background-color: var(--primary);
  }

  .gh-hoverbg {
    background-color: var(--secondary);
  }

  .gh-icon {
    color: var(--primary);
  }

  .gh-textcolor {
    color: var(--buttonText);
  }
</style>


