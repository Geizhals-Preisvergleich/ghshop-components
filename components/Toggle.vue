<template>
  <div class="gh-toggle">
    <div class="gh-toggle__inner">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        class="gh-toggle-checkbox"
        :checked="active"
        @change="toggleOnChange"
      />
      <label for="toggle" class="gh-toggle-label"></label>
    </div>
    <label for="toggle" class="gh-toggle-label-text">{{text || 'Toggle me'}}</label>
  </div>
</template>

<script>
  export default {
    props: {
      text: String,
      active: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      toggleOnChange() {
        this.$emit('update:active', !this.active);
      }
    }
  }
</script>

<style>
  .gh-toggle {
    @apply
      inline-block
      border
      border-gray-300
      rounded-lg
      p-4
      mt-8
  }

  .gh-toggle__inner {
    @apply
      relative
      inline-block
      w-10
      mr-2
      align-middle
      select-none
      transition
      duration-200
      ease-in
  }

  .gh-toggle-checkbox {
    @apply
      absolute
      block
      w-6
      h-6
      rounded-full
      bg-white
      border-4
      border-gray-300
      appearance-none
      cursor-pointer
  }

  .gh-toggle-label {
    @apply
      block
      overflow-hidden
      h-6
      rounded-full
      bg-gray-300
      cursor-pointer
  }

  .gh-toggle-label-text {
    @apply
      text-xs
      text-gray-700
  }

  .gh-toggle-checkbox:checked {
    @apply
      right-0
      border-green-400
  }

  .gh-toggle-checkbox:checked + .gh-toggle-label {
    @apply
      bg-green-400
  }
</style>
