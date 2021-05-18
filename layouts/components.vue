<template>
  <div class="container gh-container">
    <Head />

    <div class="gh-component-container">
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

      this.$nuxt.$on('update:textarea', () => {
        if (this.$refs.component) {
          this.outerHtml = this.$refs.component.$el.firstChild.outerHTML;
        }
      });
    },
  }
</script>
