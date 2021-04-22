<template>
  <div class="container">
    <Head />

    <div class="component-container">
      <Colors />
      <Nuxt ref="component" />
      <Textarea :html="component" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        component: '',
      }
    },
    computed: {
      outerHtml: {
        get() {
          return this.component.outerHTML
        },
        set(newValue) {
          this.component = newValue
        }
      },
      title() {
        return this.$store.state.title;
      }
    },
    head() {
      return {
        title: this.title,
      }
    },
    mounted() {
      this.outerHtml = this.$refs.component.$el.firstChild.outerHTML;
    },
  }
</script>
