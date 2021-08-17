<template>
  <div>
    <div class="flex justify-center">
  <div class="w-full max-w-xl overflow-hidden rounded-lg shadow-lg sm:flex object-center">
  <div class="w-full sm:w-1/3">
    <img class="object-cover w-full h-full" src="../assets/placeholder-450x300.jpg" alt=""/>
  </div>
  <div class="flex-1 px-6 py-4">
    <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">Titel</h4>
    <p class="leading-normal text-gray-700">
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
