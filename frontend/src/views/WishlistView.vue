<template>
  <div>
    <div class="row">
      <!-- Loop through cars and display them -->
      <CarItem
        v-for="(car, index) in cars"
        :key="index"
        :car="car"
        @add-to-wishlist="addToWishlist"
      />
    </div>
    <h2>Wishlist</h2>
    <div>
      <!-- Display cars in the wishlist -->
      <div v-for="(car, index) in wishlist" :key="index">
        {{ car.Brands }} - {{ car.Model }}
      </div>
    </div>
  </div>
</template>

<script>
import CarItem from './CarItem.vue'; // Import your child component

export default {
  components: {
    CarItem,
  },
  data() {
    return {
      cars: [
        // Your car data goes here
      ],
      wishlist: [], // Initialize an empty wishlist array
    };
  },
  methods: {
    addToWishlist(car) {
      // Add the car to the wishlist
      this.wishlist.push(car);
    },
  },
};
</script>
