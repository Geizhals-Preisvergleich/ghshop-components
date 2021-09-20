<template>
  <div>
    <Colors />

    <ul class="mx-auto text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <li>
        <NuxtLink to="/brands" class="index-link">Brands Grid</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/button" class="index-link">Button</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/card" class="index-link">Card</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/cards-image-bg" class="index-link">Cards Image BG</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/cards-info" class="index-link">Cards Info</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/centered-text" class="index-link">Centered Text</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/checklist" class="index-link">Checklist</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/content-grid" class="index-link">Content Grid</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/footer" class="index-link">Footer</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/gallery-grid" class="index-link">Gallery Grid</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/google-maps" class="index-link">Google Maps</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/hero" class="index-link">Hero</NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink to="/navbar" class="index-link">Navbar</NuxtLink>
      </li> -->
      <li>
        <NuxtLink to="/opening-hours" class="index-link">Opening Hours</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/paragraph-image" class="index-link">Paragraph with Image</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products-grid" class="index-link">Products Grid</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/slider" class="index-link">Slider</NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink to="/video" class="index-link">Video</NuxtLink>
      </li> -->
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
  .index-link {
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
</style>
