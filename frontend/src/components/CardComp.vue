<template>
  <div class="col-12 col-lg-3 col-sm-6 p-1">
    <div class="card">
      <img :src="car.Picture" :alt="car.Brands" class="image" />
      <div class="product-details">
        <h3 class="Car-Brand">{{ car.Brands }}</h3>
        <p class="Car-Model">{{ car.Model }}</p>
        <p class="Car-Price">R{{ car.Price }}</p>
        <button class="buy-button">Buy</button>
        <button class="add-to-wishlist-button" @click="addToWishlist">Add to Wishlist</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["car"],
  methods: {
    addToWishlist() {
      // Emit an event to notify the parent component to add the car to the wishlist
      this.$emit("add-to-wishlist", this.car);
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #c2dbf8;
  height: 25rem;
}
img {
  height: 15rem;
}
</style>
