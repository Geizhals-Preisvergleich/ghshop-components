<template>
  <div>
    <div class="gh-opening-hours">
      <table class="gh-opening-hours__table">
        <thead>
          <tr>
            <th class="gh-opening-hours__table__head">Tag</th>
            <th class="gh-opening-hours__table__head">Öffnungszeiten</th>
          </tr>
        </thead>
        <tbody>
          <tr class="gh-opening-hours__table__row">
            <td class="gh-opening-hours__table__cell">Montag</td>
            <td class="gh-opening-hours__table__cell">9:00-17:00</td>
          </tr>
          <tr class="gh-opening-hours__table__row">
            <td class="gh-opening-hours__table__cell">Dienstag</td>
            <td class="gh-opening-hours__table__cell">9:00-17:00</td>
          </tr>
          <tr class="gh-opening-hours__table__row">
            <td class="gh-opening-hours__table__cell">Mittwoch</td>
            <td class="gh-opening-hours__table__cell">9:00-17:00</td>
          </tr>
          <tr class="gh-opening-hours__table__row">
            <td class="gh-opening-hours__table__cell">Donnerstag</td>
            <td class="gh-opening-hours__table__cell">9:00-17:00</td>
          </tr>
          <tr class="gh-opening-hours__table__row">
            <td class="gh-opening-hours__table__cell">Freitag</td>
            <td class="gh-opening-hours__table__cell">9:00-14:00 / 15:00-18:00</td>
          </tr>
          <tr class="gh-opening-hours__table__row">
            <td class="gh-opening-hours__table__cell">Samstag</td>
            <td class="gh-opening-hours__table__cell">9:00-11:30</td>
          </tr>
        </tbody>
      </table>
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
  .gh-opening-hours {
    @apply
      bg-white
      my-6
  }

  .gh-opening-hours__table {
    @apply
      text-left
      w-full
      border-collapse
  }

  .gh-opening-hours__table__head {
    background-color: var(--primary);

    @apply
      py-4
      px-6
      font-bold
      uppercase
      text-lg
      text-white
  }

  .gh-opening-hours__table__row {
    @apply
      hover:bg-gray-50
  }

  .gh-opening-hours__table__cell {
    @apply
      py-4
      px-6
      border
      border-gray-400
      border-solid
  }
</style>

