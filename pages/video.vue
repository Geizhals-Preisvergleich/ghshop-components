<template>
  <div>
    <section :class="{'lg:justify-end': toggleActive}" class="lg:py-6 lg:flex mx-10 lg:justify-start justify-center">
        <div class="lg:flex">
            <div class="lg:w-1/3 lg:order-1">
                <video width="660" height="415" controls>
                  <source src="https://temp.media/video/?height=215&width=460&length=10&text=geizhalsurcrazy" type="video/mp4">
                  </video>
            </div>
        </div>
    </section>
        <div>
      <Toggle
        :text="toggleText"
        :active.sync="toggleActive"
      />
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Video',
        toggleText: 'Video links/rechts',
        toggleActive: false,
      }
    },
    updated() {
      this.$nuxt.$emit('update:textarea');
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>





