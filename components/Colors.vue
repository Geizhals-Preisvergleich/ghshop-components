<template>
  <div class="flex flex-col mb-12">
    <div class="color-grid">
      <label>
        Primary:
        <input
          type="color"
          class="color-picker"
          id="primary"
          :value="colors.primary"
          @change="setCssVar"
        >
      </label>
      <label>
        Secondary:
        <input
          type="color"
          class="color-picker"
          id="secondary"
          :value="colors.secondary"
          @change="setCssVar"
        >
      </label>
      <label>
        Primary Text:
        <input
          type="color"
          class="color-picker"
          id="primaryText"
          :value="colors.primaryText"
          @change="setCssVar"
        >
      </label>
      <button
        type="button"
        class="expand-button"
        :class="{'expanded': !isHidden}"
        @click="handleExpand"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="24px" class="fill-current" :class="{'transform rotate-180 text-black': !isHidden}"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
      </button>
    </div>
    <Textarea
      :hidden="isHidden"
      is-css-vars
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hidden: true,
      }
    },
    computed: {
      colors() {
        return this.$store.state.colors
      },
      isHidden: {
        get() {
          return this.hidden
        },
        set(newValue) {
          this.hidden = newValue;
        }
      },
    },
    methods: {
      setCssVar(e) {
        const key = e.target.id;
        const value = e.target.value;

        this.$store.commit('setColor', { key, value });
        this.writeCssVars();
      },
      writeCssVars() {
        let values = [];

        for (const [key, value] of Object.entries(this.$store.state.colors)) {
          values.push(`--${key}: ${value}`);
        }

        document.documentElement.style.cssText = values.join(';');
      },
      handleExpand() {
        this.isHidden = !this.isHidden;
      },
    },
    mounted() {
      this.writeCssVars();
    }
  }
</script>

<style>
  .color-grid {
    @apply
      flex
      text-sm
      uppercase
      tracking-wide
      bg-gray-100
      rounded-md
      p-2
  }

  .color-grid label {
    @apply
      flex
      flex-1
      items-center
      justify-center
      cursor-pointer
  }

  .color-picker {
    @apply
      ml-2
      cursor-pointer
  }

  .expand-button {
    @apply
      flex
      items-center
      justify-center
      w-8
      bg-black
      hover:bg-white
      text-white
      hover:text-black
      font-bold
      rounded-md
      border
      border-black
  }

  .expand-button.expanded {
    @apply
      bg-white
  }
</style>
