<template>
  <div>
    <Colors />

    <ul class="ghshop-index">
      <li>
        <NuxtLink to="/brands" class="ghshop-index-link">Brands Grid</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/button" class="ghshop-index-link">Button</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/card" class="ghshop-index-link">Card</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/cards-image-bg" class="ghshop-index-link">Cards Image BG</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/cards-info" class="ghshop-index-link">Cards Info</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/centered-text" class="ghshop-index-link">Centered Text</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/checklist" class="ghshop-index-link">Checklist</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/content-grid" class="ghshop-index-link">Content Grid</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/footer" class="ghshop-index-link">Footer</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/gallery-grid" class="ghshop-index-link">Gallery Grid</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/google-maps" class="ghshop-index-link">Google Maps</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/hero" class="ghshop-index-link">Hero</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/opening-hours" class="ghshop-index-link">Opening Hours</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/paragraph-image" class="ghshop-index-link">Paragraph with Image</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products-grid" class="ghshop-index-link">Products Grid</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/slider" class="ghshop-index-link">Slider</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        title: null
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>
  .ghshop-index {
    @apply
      mx-auto
      text-center
      grid
      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-5
      gap-4
  }

  .ghshop-index-link {
    @apply
      rounded-xl
      no-underline
      border
      border-gray-500
      hover:border-red-500
      hover:text-red-500
      py-2
      block
  }

  /**
   * Custom styles for pre-configured Magento template
  */

  .page-wrapper .page-header.type1 .logo {
    margin: 15px 0;
  }

  .logo img {
    width: 200px;
  }

  .tocompare {
    display: none !important;
  }

  .block-category-list .block-title,
  .block-category-list .block-content,
  .filter .filter-options-title,
  .filter .filter-options-content {
    padding: .5rem !important;
  }

  .catalog-category-view .columns .column.main {
    margin-bottom: 1rem;
  }

  .page-header {
    box-shadow: 1px 0 20px -10px rgba(0, 0, 0, .38);
  }
</style>
