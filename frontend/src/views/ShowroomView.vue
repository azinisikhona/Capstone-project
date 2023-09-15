<template>
  <div>
    <div>
      <label for="carFilter">Filter Showroom:</label>
      <select v-model="carFilter" id="carFilter">
        <option value="">All Cars</option>
        <option value="Ferrari">Ferrari</option>
        <option value="Lamborghini">Lamborghini</option>
        <option value="Koenigsegg">Koenigsegg</option>
        <option value="Aston Martin">Aston Martin</option>
        <option value="Bugatti">Bugatti</option>
        <option value="McLaren">McLaren</option>
        <option value="Pagani">Pagani</option>
        <option value="Porsche">Porsche</option>
      </select>
    </div>
    <label for="sortCriteria">Sort By:</label>
      <select v-model="sortCriteria" id="sortCriteria">
        <option value="Model">Car Name</option>
        <option value="Price">Price</option>
        <option value="MakeYear">Year</option>
        <!-- Add more sorting options as needed -->
      </select>
    <div v-if="filteredShowroom" class="row p-4">
      <CardComp v-for="car in filteredShowroom" :key="car.CarID" :car="car" />
    </div>
    <div v-else>
      <SpinnerComp />
    </div>
  </div>
</template>

<script>
import SpinnerComp from '../components/SpinnerComp.vue';
import CardComp from '../components/CardComp.vue';

export default {
  components: {
    SpinnerComp, CardComp
  },
  data() {
    return {
      carFilter: '',
      sortCriteria: 'name'
    };
  },
  computed: {
    showroom() {
      return this.$store.state.showroom;
    },

    filteredShowroom() {
      if (!this.carFilter) {
        return this.showroom;
      }
      return this.showroom.filter(car => car.Brand === this.carFilter);
    },

    sortedShowroom() {
      const criteria = this.sortCriteria;

      // Create a copy of the filtered showroom to avoid mutating the original data
      let sortedCars = [...this.filteredShowroom];

      // Sort the cars based on the selected sorting criteria
      sortedCars.sort((a, b) => {
        if (criteria === 'Model') {
          return a.Model.localeCompare(b.Model);
        } else if (criteria === 'Price') {
          return a.Price - b.Price;
        } else if (criteria === 'MakeYear') {
          return a.MakeYear - b.MakeYear;
        }
        // Add more sorting criteria as needed
      });

      return sortedCars;
    },

  },
  mounted() {
    this.$store.dispatch("fetchShowroom");
  },
};
</script>

<style scoped>
</style>
