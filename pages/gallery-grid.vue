<template>
  <div>
    <section>
      <div class="py-8 mx-auto flex flex-wrap">
        <div class="grid lg:grid-cols-2 grid-cols-1">
          <div class="flex flex-wrap">
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block rounded" src="~/assets/placeholder-350x200.jpg">
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block rounded" src="~/assets/placeholder-350x200.jpg">
            </div>
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full h-full object-cover object-center block rounded" src="~/assets/placeholder-650x400.jpg">
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full h-full object-cover object-center block rounded" src="~/assets/placeholder-650x400.jpg">
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block rounded" src="~/assets/placeholder-350x200.jpg">
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block rounded" src="~/assets/placeholder-350x200.jpg">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Gallery Grid',
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>
