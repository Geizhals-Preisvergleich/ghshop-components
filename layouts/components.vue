<template>
  <div class="container gh-container">
    <Head />

    <div class="gh-component-container">
      <Colors />
      <Nuxt ref="component" />
      <Textarea :html="component" v-if="showOuterHtmlTextarea" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        component: '',
        showOuterHtmlTextarea: this.$nuxt.$route.name !== 'slider',
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
