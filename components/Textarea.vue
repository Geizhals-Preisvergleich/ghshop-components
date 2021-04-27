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
      :rows="rows"
      @click="handleClick"
      readonly
    ></textarea>
  </div>
</template>

<script>
  import { indentHtml } from '../helpers/indentHtml';

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
        rows: 4,
      }
    },
    computed: {
      textareaShow() {
        return !this.hidden;
      },
      textareaRows: {
        get() {
          return this.rows;
        },
        set(newValue) {
          this.rows = newValue;
        }
      },
      textareaValue: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.value = newValue;
          this.textareaRows = newValue.split(/\r\n|\r|\n/).length;
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

    @apply
      block
      w-full
      p-4
      bg-gray-100
      border
      border-gray-600
      rounded-lg
      text-left
      whitespace-pre
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
