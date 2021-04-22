<template>
  <div>
    <div>Slider</div>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Slider'
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>
