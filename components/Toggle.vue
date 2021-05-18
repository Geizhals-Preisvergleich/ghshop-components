<template>
  <div class="inline-block border border-gray-300 rounded-lg p-4 mt-8">
    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
        :checked="active"
        @change="toggleOnChange"
      />
      <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
    </div>
    <label for="toggle" class="text-xs text-gray-700">{{text || 'Toggle me'}}</label>
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
  .toggle-checkbox:checked {
    @apply
      right-0
      border-green-400
  }

  .toggle-checkbox:checked + .toggle-label {
    @apply
      bg-green-400
  }
</style>
