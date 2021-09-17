<template>
  <div>
    <div class="gh-card">
      <div class="gh-card__inner">
        <div class="gh-card__image-wrapper">
          <img class="gh-card__image" src="../assets/placeholder-450x300.jpg" alt=""/>
        </div>
        <div class="gh-card__text-wrapper">
          <h4 class="gh-card__title">Titel</h4>
          <p class="gh-card__text">
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Card',
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>
  .gh-card {
    @apply
      flex
      justify-center
  }

  .gh-card__inner {
    @apply
      w-full
      max-w-xl
      overflow-hidden
      rounded-lg
      shadow-lg
      sm:flex
      object-center
  }

  .gh-card__image-wrapper {
    @apply
      w-full
      sm:w-1/3
  }

  .gh-card__image {
    @apply
      object-cover
      w-full
      h-full
  }

  .gh-card__text-wrapper {
    @apply
      flex-1
      px-6
      py-4
  }

  .gh-card__title {
    @apply
      mb-3
      text-xl
      font-semibold
      tracking-tight
  }

  .gh-card__text {
    @apply
      leading-normal
  }
</style>
