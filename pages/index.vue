<template>
  <div>
    <Colors />

    <ul>
      <li>
        <NuxtLink to="/button">Button</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/footer">Footer</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/paragraph-image">Paragraph with Image</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products-grid">Products Grid</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/slider">Slider</NuxtLink>
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
  ul {
    @apply
      mx-auto
      max-w-lg
      text-center;
  }

  ul li a {
    @apply
      mb-4
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
