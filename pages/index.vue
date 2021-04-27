<template>
  <div>
    <Colors />

    <ul class="mx-auto text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <li>
        <NuxtLink to="/button" class="index-link">Button</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/footer" class="index-link">Footer</NuxtLink>
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
