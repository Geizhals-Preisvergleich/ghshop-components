<template>
  <div>
    <div>
      <p class="text-center text-xs">
        I am a centered text in xs
      </p>
      <p class="text-center text-sm">
        I am a centered text in sm
      </p>
      <p class="text-center text-md">
        I am a centered text in md
      </p>
      <p class="text-center text-lg">
        I am a centered text in lg
      </p>
      <p class="text-center text-xl">
        I am a centered text in xl
      </p>
      <p class="text-center text-2xl">
        I am a centered text in 2xl
      </p>
      <p class="text-center text-3xl">
        I am a centered text in 3xl
      </p>
      <p class="text-center text-4xl">
        I am a centered text in 4xl
      </p>
      <p class="text-center text-5xl">
        I am a centered text in 5xl
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Centered Text',
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>
