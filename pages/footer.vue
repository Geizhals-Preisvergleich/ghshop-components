<template>
  <div>
    <footer class="gh-footer">
      <div class="gh-footer__inner">
        <div class="gh-footer__column-1">
          <div>
            <a href="#" class="gh-footer__logo">Brand</a>
          </div>

          <p class="gh-footer__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nisi! Id.</p>

          <div class="gh-footer__socialmedia-wrapper">
            <a href="#" target="_blank" class="gh-footer__socialmedia-item" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" class="gh-footer__socialmedia-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
              </svg>
            </a>

            <a href="#" target="_blank" class="gh-footer__socialmedia-item" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" class="gh-footer__socialmedia-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
              </svg>
            </a>

            <a href="#" target="_blank" class="gh-footer__socialmedia-item" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" class="gh-footer__socialmedia-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
              </svg>
            </a>

            <a href="#" target="_blank" class="gh-footer__socialmedia-item" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" class="gh-footer__socialmedia-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="3" y="5" width="18" height="14" rx="4"></rect>
                <path d="M10 9l5 3l-5 3z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="gh-footer__column-2">
          <div>
              <h3 class="uppercase">About</h3>
              <a href="#" class="gh-footer__link">Company</a>
              <a href="#" class="gh-footer__link">Community</a>
              <a href="#" class="gh-footer__link">Careers</a>
          </div>

          <div>
              <h3 class="uppercase">Blog</h3>
              <a href="#" class="gh-footer__link">Tec</a>
              <a href="#" class="gh-footer__link">Music</a>
              <a href="#" class="gh-footer__link">Videos</a>
          </div>

          <div>
              <h3 class="uppercase">Products</h3>
              <a href="#" class="gh-footer__link">Mega cloud</a>
              <a href="#" class="gh-footer__link">Aperion UI</a>
              <a href="#" class="gh-footer__link">Meraki UI</a>
          </div>

          <div>
              <h3 class="uppercase">Contact</h3>
              <span class="gh-footer__link">+1 526 654 8965</span>
              <a href="mailto:example@email.com" class="gh-footer__link">example@email.com</a>
          </div>
        </div>
      </div>

      <hr class="gh-footer__hr">

      <div>
        <p class="text-center text-sm">© Brand 2020 - All rights reserved</p>
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
  .gh-footer {
    @apply
      px-6
      py-4
      mx-auto
  }

  .gh-footer__inner {
    @apply
      lg:flex
  }

  .gh-footer__column-1 {
    @apply
      w-full
      lg:w-2/5
      text-center
      lg:text-left
  }

  .gh-footer__column-2 {
    @apply
      mt-6
      lg:mt-0
      lg:flex-1
      grid
      grid-cols-2
      gap-6
      sm:grid-cols-3
      md:grid-cols-4
  }

  .gh-footer__logo {
    @apply
      text-xl
      font-bold
  }

  .gh-footer__text {
    @apply
      max-w-md
      mt-2
      mx-auto
      lg:mx-0
  }

  .gh-footer__socialmedia-wrapper {
    @apply
      flex
      justify-center
      lg:justify-start
      mt-4
  }

  .gh-footer__socialmedia-item {
    @apply
      border
      border-gray-400
      rounded-full
      p-2
      mr-2
      last:mr-0
  }

  .gh-footer__socialmedia-icon {
    @apply
      md:w-6
      md:h-6
      w-7
      h-7
      text-current
  }

  .gh-footer__link {
    color: var(--primary) !important;

    @apply
      block
      mt-2
      text-lg
  }

  .gh-footer__hr {
    @apply
      h-px
      my-6
      bg-gray-300
      border-none
  }
</style>
