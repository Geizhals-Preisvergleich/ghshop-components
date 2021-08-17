<template>
  <div>
    <div class="w-2/3 mx-auto">
      <div class="bg-white shadow-md my-6">
        <table class=" text-left w-full border-collapse">
          <thead>
            <tr>
              <th class="gh-headbg py-4 px-6 font-bold uppercase text-sm text-gray-50 border-b border-gray-200 shadow-sm">Tag</th> <!-- bg-farbe-helligkeit -->
              <th class="gh-headbg py-4 px-6  font-bold uppercase text-sm text-gray-50 border-b border-gray-200 shadow-sm">Öffnungszeiten</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-50">
              <td class="py-4 px-6 border-b border-grey-light">Montag</td>
                <td class="py-4 px-6 border-b border-grey-light">9:00-17:00</td>
            </tr>

            <tr class="hover:bg-gray-50">
              <td class="py-4 px-6 border-b border-grey-light">Dienstag</td>
                <td class="py-4 px-6 border-b border-grey-light">9:00-17:00</td>
            </tr>

            <tr class="hover:bg-gray-50">
              <td class="py-4 px-6 border-b border-grey-light">Mittwoch</td>
                <td class="py-4 px-6 border-b border-grey-light">9:00-17:00</td>
            </tr>

            <tr class="hover:bg-gray-50">
              <td class="py-4 px-6 border-b border-grey-light">Donnerstag</td>
                <td class="py-4 px-6 border-b border-grey-light">9:00-17:00</td>
            </tr>

            <tr class="hover:bg-gray-50">
              <td class="py-4 px-6 border-b border-grey-light">Freitag</td>
                <td class="py-4 px-6 border-b border-grey-light">9:00-14:00 / 15:00-18:00</td>
            </tr>
            
            <tr class="hover:bg-gray-50">
              <td class="py-4 px-6 border-b border-grey-light">Samstag</td>
                <td class="py-4 px-6 border-b border-grey-light">9:00-11:30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'components',
    data() {
      return {
        title: 'Opening Hours',
      }
    },
    mounted() {
      this.$store.commit('setTitle', this.title)
    },
  }
</script>

<style>
  .gh-headbg {
    background-color: var(--primary);
  }
</style>

