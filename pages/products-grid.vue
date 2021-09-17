<template>
  <div>
    <section class="gh-products-grid">
      <div class="gh-products-grid__item">
        <a href="#">
          <img class="gh-products-grid__image" src="~/assets/placeholder-300x200.jpg" alt="">
        </a>
        <h2 class="gh-products-grid__title">
          <a href="#">Chichen Itza</a>
        </h2>
        <p class="gh-products-grid__price">29,99 €</p>
        <p class="gh-products-grid__tax">inkl. 20% MwSt</p>
        <p class="gh-products-grid__shipping">
          zzgl. <a href="#" target="_blank">Versandkosten</a>
        </p>
        <button type="button" class="gh-button w-full">In den Warenkorb</button>
      </div>
      <div class="gh-products-grid__item">
        <a href="#">
          <img class="gh-products-grid__image" src="~/assets/placeholder-300x200.jpg" alt="">
        </a>
        <h2 class="gh-products-grid__title">
          <a href="#">Chichen Itza</a>
        </h2>
        <p class="gh-products-grid__price">29,99 €</p>
        <p class="gh-products-grid__tax">inkl. 20% MwSt</p>
        <p class="gh-products-grid__shipping">
          zzgl. <a href="#" target="_blank">Versandkosten</a>
        </p>
        <button type="button" class="gh-button w-full">In den Warenkorb</button>
      </div>
      <div class="gh-products-grid__item">
        <a href="#">
          <img class="gh-products-grid__image" src="~/assets/placeholder-300x200.jpg" alt="">
        </a>
        <h2 class="gh-products-grid__title">
          <a href="#">Chichen Itza</a>
        </h2>
        <p class="gh-products-grid__price">29,99 €</p>
        <p class="gh-products-grid__tax">inkl. 20% MwSt</p>
        <p class="gh-products-grid__shipping">
          zzgl. <a href="#" target="_blank">Versandkosten</a>
        </p>
        <button type="button" class="gh-button w-full">In den Warenkorb</button>
      </div>
      <div class="gh-products-grid__item">
        <a href="#">
          <img class="gh-products-grid__image" src="~/assets/placeholder-300x200.jpg" alt="">
        </a>
        <h2 class="gh-products-grid__title">
          <a href="#">Chichen Itza</a>
        </h2>
        <p class="gh-products-grid__price">29,99 €</p>
        <p class="gh-products-grid__tax">inkl. 20% MwSt</p>
        <p class="gh-products-grid__shipping">
          zzgl. <a href="#" target="_blank">Versandkosten</a>
        </p>
        <button type="button" class="gh-button w-full">In den Warenkorb</button>
      </div>
      <div class="gh-products-grid__item">
        <a href="#">
          <img class="gh-products-grid__image" src="~/assets/placeholder-300x200.jpg" alt="">
        </a>
        <h2 class="gh-products-grid__title">
          <a href="#">Chichen Itza</a>
        </h2>
        <p class="gh-products-grid__price">29,99 €</p>
        <p class="gh-products-grid__tax">inkl. 20% MwSt</p>
        <p class="gh-products-grid__shipping">
          zzgl. <a href="#" target="_blank">Versandkosten</a>
        </p>
        <button type="button" class="gh-button w-full">In den Warenkorb</button>
      </div>
      <div class="gh-products-grid__item">
        <a href="#">
          <img class="gh-products-grid__image" src="~/assets/placeholder-300x200.jpg" alt="">
        </a>
        <h2 class="gh-products-grid__title">
          <a href="#">Chichen Itza</a>
        </h2>
        <p class="gh-products-grid__price">29,99 €</p>
        <p class="gh-products-grid__tax">inkl. 20% MwSt</p>
        <p class="gh-products-grid__shipping">
          zzgl. <a href="#" target="_blank">Versandkosten</a>
        </p>
        <button type="button" class="gh-button w-full">In den Warenkorb</button>
      </div>
    </section>
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

<style>
  .gh-products-grid {
    @apply
      grid
      lg:grid-cols-6
      md:grid-cols-3
      grid-cols-2
      gap-4
  }

  .gh-products-grid__item {
    @apply
    bg-gray-100
      rounded
  }

  .gh-products-grid__image {
    @apply
      h-40
      rounded
      w-full
      object-cover
      object-center
      mb-4
  }

  .gh-products-grid__title {
    @apply
      text-lg
      font-bold
      mb-2
  }

  .gh-products-grid__price {
    @apply
      leading-relaxed
      text-primary
      mb-4
      font-bold
  }

  .gh-products-grid__tax {
    @apply
      leading-relaxed
      text-xs
      mb-0
  }

  .gh-products-grid__shipping {
    @apply
      leading-relaxed
      text-xs
  }
</style>
