<template>
  <div
    class="textarea-container"
    :class="{'mt-4': isCssVars, 'mt-8': !isCssVars}"
    v-show="textareaShow"
  >
    <button
      type="button"
      class="copy-button"
      @click="handleCopy"
    >
      {{copyText || 'Kopieren'}}
    </button>
    <textarea
      class="textarea"
      ref="textarea"
      :value="value"
      @click="handleClick"
      readonly
    ></textarea>
  </div>
</template>

<script>
  import { indentHtml } from '../indentHtml';

  export default {
    props: {
      hidden: Boolean,
      isCssVars: Boolean,
      html: String,
    },
    data() {
      return {
        copyText: '',
        value: '',
      }
    },
    computed: {
      textareaShow() {
        return !this.hidden;
      },
      textareaValue: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.value = newValue;
        }
      },
      colors() {
        return this.$store.state.colors
      },
    },
    watch: {
      colors() {
        if (this.isCssVars) {
          this.setCssVarsStyleTag();
        }
      },
      html(value) {
        this.textareaValue = indentHtml(value);
      },
    },
    methods: {
      handleClick(e) {
        e.currentTarget.select();
        e.currentTarget.focus();
      },
      handleCopy() {
        navigator.clipboard
          .writeText(this.$refs.textarea.value)
          .then(() => {
            this.copyText = 'Kopiert!';

            setTimeout(() => {
              this.copyText = null;
            }, 1000);
          });
      },
      setCssVarsStyleTag() {
        let values = [];

        for (const [key, value] of Object.entries(this.colors)) {
          values.push(`--${key}: ${value};`);
        }

        this.textareaValue =
          `<style> :root { ${values.join(' ')} } </style>`;
      }
    },
    mounted() {
      if (this.isCssVars) {
        this.setCssVarsStyleTag();
      } else {
        this.textareaValue = indentHtml(this.html);
      }
    }
  }
</script>

<style>
  .textarea-container {
    @apply
      text-right
  }

  .textarea {
    font-family: 'Courier New', Courier, monospace;
    min-height: 120px;

    @apply
      block
      w-full
      p-4
      bg-gray-100
      border
      border-gray-600
      rounded-lg
      text-left
	}

  .copy-button {
    @apply
      mb-2
      border
      border-red-500
      text-red-500
      rounded-xl
      text-xs
      cursor-pointer
      px-2
  }
</style>
